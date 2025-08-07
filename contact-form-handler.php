<?php
// if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["Name"]));
    $customer_contact = strip_tags(trim($_POST["Tel"]));
    $customer_email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject = strip_tags(trim($_POST["subject"]));
    $details = strip_tags(trim($_POST["details"]));

    // Email address that will appear as the sender
    $email_from = "new@morgatechauto.com"; // Use a string here

    $email_subject = "New Form Submission";

    $email_body = "Greetings, You have a new form submission from your website: morgatechauto.com the following is the customer information:\n"."Customer Name: $name.\n".
                  "Customer Contact: $customer_contact.\n".
                  "Customer Email: $customer_email.\n".
                  "Subject: $subject.\n".
                  "Details: $details.\n";

    // Email where the message is to be sent to
    $to = "mgtsales@gmail.com";

    // Correctly build the headers
    $headers = "From: Morgatech Auto <" . $email_from . ">\r\n"; // Use your website name
    $headers .= "Reply-To: " . $customer_email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion(); // Optional

    // Send the email
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "Your Message has been received";
        header("Location: contact.html");
        exit(); // It's good practice to exit after a header redirect
    } else {
        echo "Oops! Something went wrong, and we couldn't send your message.";
    }
// } else {
//     echo "There was a problem with your submission.";
// }
?>