<?php
// Prevent CORS issues for development/production
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");

// Only accept POST requests
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get the raw POST data
    $input = file_get_contents("php://input");
    $data = json_decode($input, true);

    // Check if decoding was successful
    if (json_last_error() !== JSON_ERROR_NONE) {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "Invalid JSON data."]);
        exit;
    }

    // Sanitize and Validate Input
    $name = strip_tags(trim($data["name"] ?? ""));
    $email = filter_var(trim($data["email"] ?? ""), FILTER_SANITIZE_EMAIL);
    $message = strip_tags(trim($data["message"] ?? ""));

    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "All fields are required."]);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "Invalid email address."]);
        exit;
    }

    // Email Configuration
    $to = "onatola4real@gmail.com"; 
    
    $subject = "Portfolio Contact: Message from $name";
    
    $email_body = "You have received a new message from your portfolio website.\n\n";
    $email_body .= "Name: $name\n";
    $email_body .= "Email: $email\n\n";
    $email_body .= "Message:\n$message\n";

    // Headers
    // Ideally, use a 'From' address belonging to your domain to avoid spam filters
    // e.g., $headers = "From: no-reply@yourdomain.com\r\n";
    // For simplicity/testing, we use the sender's email, but this may be blocked by some hosts.
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Send Email
    if (mail($to, $subject, $email_body, $headers)) {
        http_response_code(200);
        echo json_encode(["success" => true, "message" => "Thank you! Your message has been sent."]);
    } else {
        http_response_code(500);
        echo json_encode(["success" => false, "message" => "Failed to send email. Server error."]);
    }

} else {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method Not Allowed."]);
}
?>