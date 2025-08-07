document.addEventListener('DOMContentLoaded', function() {
    // Debug log to confirm our script is loading
    console.log('DOM fully loaded');

    // Your referral select listener
    document.getElementById('referral').addEventListener('change', function () {
        const otherInput = document.getElementById('other-referral');
        if (this.value === 'Other') {
            otherInput.style.display = 'block';
            otherInput.required = true;
        } else {
            otherInput.style.display = 'none';
            otherInput.required = false;
        }
    });

    // Your email fetch
    fetch(window.location.href)
    .then(response => {
        const email = response.headers.get('X-User-Email');
        if (email) {
            document.getElementById('email').value = email;
        }
    })
    .catch(error => console.error('Error fetching email from headers:', error));

    // Your customer type radio listeners
    document.querySelectorAll('input[name="customer-type"]').forEach((radio) => {
        radio.addEventListener('change', function () {
            const isBusiness = this.value === 'business';
            document.getElementById('company-name').disabled = !isBusiness;
            document.getElementById('office-phone').disabled = !isBusiness;
            document.querySelector('label[for="company-name"]').classList.toggle('gray', !isBusiness);
            document.querySelector('label[for="office-phone"]').classList.toggle('gray', !isBusiness);
        });
    });

    // Get the form element
    const form = document.getElementById('customerForm');
    
    // Debug log to confirm we found the form
    console.log('Found form:', !!form);

    if (form) {
        form.addEventListener('submit', async function (event) {
            // Debug log to confirm event listener is triggered
            
            event.preventDefault();
            event.stopPropagation(); // Add this line to ensure the event doesn't bubble up
            
            function sanitizeInput(input) {
                return input ? input.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;") : '';
            }

            const formData = new FormData(this);
            // console.log('FormData collected:', Object.fromEntries(formData));

            let data = {
                firstName: sanitizeInput(formData.get('first-name')),
                lastName: sanitizeInput(formData.get('last-name')),
                email: sanitizeInput(formData.get('email')),
                phone: sanitizeInput(formData.get('phone')),
                address: sanitizeInput(formData.get('address')),
                city: sanitizeInput(formData.get('city')),
                state: sanitizeInput(formData.get('state')),
                zip: sanitizeInput(formData.get('zip')),
                referral: sanitizeInput(formData.get('referral'))
            };

            const customerType = formData.get('customer-type');
            if (customerType === 'business') {
                data.companyName = sanitizeInput(formData.get('company-name'));
                data.officePhone = sanitizeInput(formData.get('office-phone'));
            }

            if (data.referral === 'Other') {
                data.referral = sanitizeInput(formData.get('other-referral'));
            }

            try {
                console.log('Attempting to submit data:', data);
                const response = await fetch('https://morgatechauto.com/customer%20info/submitCustomer', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                console.log('Response status:', response.status);

                if (response.ok) {
                    alert('Form submitted successfully!');
                    this.reset();
                } else {
                    const errorText = await response.text();
                    console.log('Error response:', errorText);
                    alert('There was an issue with your submission. Please try again.');
                }
            } catch (error) {
                console.error('Detailed fetch error:', error);
                alert('Failed to submit the form. Please check your connection and try again.');
            }

            return false; // Add this line as an extra precaution
        });
    }
});