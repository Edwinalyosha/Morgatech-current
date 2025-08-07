const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const mysql = require('mysql2/promise');
const cors = require('cors');
const path = require('path');
const helmet = require('helmet'); // Add security headers
const rateLimit = require('express-rate-limit'); // Add rate limiting
const { body, validationResult } = require('express-validator'); // Add input validation
require('dotenv').config(); // Environment variables management

const app = express();

// Security middlewares
app.use(helmet());
const allowedOrigins = process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : ['https://morgatechauto.com'];

console.log(allowedOrigins);

app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
  exposedHeaders: ['X-User-Email']
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/customerinfo/request-link', limiter);

// Secure body parsing with size limits
app.use(bodyParser.json({ limit: '10kb' }));
app.use(express.static(path.join(__dirname), {
  dotfiles: 'deny',
  etag: false,
  index: false,
}));

// Database connection with environment variables
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  ssl: {
    rejectUnauthorized: false
  }
});

// More secure token generation
function generateToken() {
  return crypto.randomBytes(32).toString('hex'); // Increased from 16 to 32 bytes
}

// Input validation middleware
const validateEmail = [
  body('email').isEmail().normalizeEmail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

app.post('/customerinfo/request-link', validateEmail, async (req, res) => {
  const { email } = req.body;
  
  try {
    const token = generateToken();
    const expirationTime = new Date(Date.now() + 15 * 60 * 1000);
    
    // Parameterized query to prevent SQL injection
    const query = `
      INSERT INTO expiring_links (email, token, expiration_time)
      VALUES (?, ?, ?)
    `;
    
    await pool.execute(query, [email, token, expirationTime]);
    
    // Use environment variable for domain
    const link = `${process.env.APP_DOMAIN}/verify?token=${token}`;
    
    res.json({ link });
  } catch (error) {
    console.error('Error generating link:', error);
    // Don't expose error details to client
    res.status(500).json({ message: 'An error occurred while processing your request' });
  }
});

app.get('/verify', async (req, res) => {
  const token = req.query.token;
  
  if (!token || typeof token !== 'string' || token.length !== 64) { // Validate token format
    return res.status(400).json({ message: 'Invalid token format' });
  }
  
  try {
    // Delete expired tokens first
    await pool.execute(
      'DELETE FROM expiring_links WHERE expiration_time < NOW()'
    );
    
    // Query with timeout
    const [rows] = await Promise.race([
      pool.execute(
        'SELECT email, expiration_time FROM expiring_links WHERE token = ?',
        [token]
      ),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Database timeout')), 5000)
      )
    ]);
    
    if (!rows || rows.length === 0) {
      return res.status(404).json({ message: 'Invalid or expired token' });
    }
    
    // Delete used token to prevent replay attacks
    await pool.execute('DELETE FROM expiring_links WHERE token = ?', [token]);
    
    res.set({
      'X-User-Email': rows[0].email,
      'Cache-Control': 'no-store',
      'Pragma': 'no-cache'
    });
    
    res.sendFile(path.join(__dirname, 'new-customer.html'));
    
  } catch (error) {
    console.error('Error verifying token:', error);
    res.status(500).json({ message: 'An error occurred while processing your request' });
  }
});

// Validate customer data
const validateCustomerData = [
  body('firstName').trim().isLength({ min: 2, max: 100 }).escape(),
  body('lastName').trim().isLength({ min: 2, max: 100 }).escape(),
  body('email').isEmail().normalizeEmail(),
  body('phone').trim().isLength({ min: 10, max: 15 }),
  body('address').trim().isLength({ min: 5, max: 200 }).escape(),
  body('city').trim().isLength({ min: 2, max: 100 }).escape(),
  body('state').trim().isLength({ min: 2, max: 100 }).escape(),
  body('zip').trim().isLength({ min: 3, max: 10 }),
  body('referral').trim().isLength({ min: 1, max: 100 }).escape(),
  // Optional fields for business customers
  body('companyName').optional().trim().isLength({ max: 200 }).escape(),
  body('officePhone').optional().trim().isLength({ max: 15 })
];

app.post('/submitCustomer', validateCustomerData, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    console.log(req.body);
    
    // Process validated data
    // ... your logic here ...
    
    res.status(200).json({ message: 'Form data received successfully' });
  } catch (error) {
    console.error('Error processing form data:', error);
    res.status(500).json({ message: 'An error occurred while processing your request' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'An error occurred while processing your request' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});