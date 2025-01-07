<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get POST data and sanitize it
    $first_name = isset($_POST['first_name']) ? htmlspecialchars(trim($_POST['first_name'])) : null;
    $last_name = isset($_POST['last_name']) ? htmlspecialchars(trim($_POST['last_name'])) : null;
    $contact_number = isset($_POST['contact_number']) ? htmlspecialchars(trim($_POST['contact_number'])) : null;
    $email = isset($_POST['email']) ? htmlspecialchars(trim($_POST['email'])) : null;
    $address = isset($_POST['address']) ? htmlspecialchars(trim($_POST['address'])) : null;
    $city = isset($_POST['city']) ? htmlspecialchars(trim($_POST['city'])) : null;
    $country = isset($_POST['country']) ? htmlspecialchars(trim($_POST['country'])) : null;
    $zip_code = isset($_POST['zip_code']) ? htmlspecialchars(trim($_POST['zip_code'])) : null;
    $how_did_you_find_us = isset($_POST['how_did_you_find_us']) ? htmlspecialchars(trim($_POST['how_did_you_find_us'])) : null;
    $adults = isset($_POST['adults']) ? htmlspecialchars(trim($_POST['adults'])) : null;
    $children = isset($_POST['children']) ? htmlspecialchars(trim($_POST['children'])) : null;
    $departing = isset($_POST['departing']) ? htmlspecialchars(trim($_POST['departing'])) : null;
    $budget = isset($_POST['budget']) ? htmlspecialchars(trim($_POST['budget'])) : null;
    $message = isset($_POST['message']) ? htmlspecialchars(trim($_POST['message'])) : null;
    $newsletter = isset($_POST['newsletter']) && $_POST['newsletter'] == 1 ? 'Yes' : 'No';
    $privacy = isset($_POST['privacy']) && $_POST['privacy'] == 1 ? 'Yes' : 'No';

    // Validate required fields
    if (!empty($first_name) && !empty($last_name) && !empty($email)) {
        // Email details
        $subject = "Contact Form Submission";
        $to = "shakilcoding@gmail.com";

        // Construct the email message
        $email_message = "<h2>Contact Form Submission</h2>";
        $email_message .= "<p><strong>First Name:</strong> $first_name</p>";
        $email_message .= "<p><strong>Last Name:</strong> $last_name</p>";
        $email_message .= "<p><strong>Contact Number:</strong> $contact_number</p>";
        $email_message .= "<p><strong>Email:</strong> $email</p>";
        $email_message .= "<p><strong>Address:</strong> $address</p>";
        $email_message .= "<p><strong>City:</strong> $city</p>";
        $email_message .= "<p><strong>Country:</strong> $country</p>";
        $email_message .= "<p><strong>Zip Code:</strong> $zip_code</p>";
        $email_message .= "<p><strong>How Did You Find Us:</strong> $how_did_you_find_us</p>";
        $email_message .= "<p><strong>Adults:</strong> $adults</p>";
        $email_message .= "<p><strong>Children:</strong> $children</p>";
        $email_message .= "<p><strong>Departing From:</strong> $departing</p>";
        $email_message .= "<p><strong>Budget:</strong> $budget</p>";
        $email_message .= "<p><strong>Message:</strong> $message</p>";
        $email_message .= "<p><strong>Newsletter:</strong> $newsletter</p>";
        $email_message .= "<p><strong>Privacy Accepted:</strong> $privacy</p>";

        // Email headers
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= "From: info@coderjuwel.com" . "\r\n";

        // Send the email
        if (mail($to, $subject, $email_message, $headers)) {
            echo 'Thank you! Your form has been submitted successfully.';
        } else {
            echo 'Failed to send email. Please try again.';
        }
    } else {
        echo 'Please fill in all required fields (First Name, Last Name, and Email).';
    }
} else {
    echo 'Invalid request method.';
}
