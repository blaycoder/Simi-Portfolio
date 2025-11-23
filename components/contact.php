<?php
// Load Composer autoloader
// Path is relative to where contact.php will be (in dist/ folder)
// Vendor folder is at the root level
require_once __DIR__ . '/../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

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
    $to_email = "onatola4real@gmail.com";
    $subject = "Portfolio Contact: Message from $name";

    // Create PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // Server settings
        // Check if SendGrid API key is available (from Heroku addon)
        $sendgrid_api_key = getenv('SENDGRID_API_KEY');

        // If SendGrid addon is installed, use SendGrid SMTP
        if (!empty($sendgrid_api_key)) {
            $mail->isSMTP();
            $mail->Host = 'smtp.sendgrid.net';
            $mail->SMTPAuth = true;
            $mail->Username = 'apikey'; // SendGrid SMTP always uses 'apikey' as username
            $mail->Password = $sendgrid_api_key; // Your SendGrid API key
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = 587;
            $from_email = getenv('SENDGRID_FROM_EMAIL') ?: 'noreply@yourdomain.com';
        }
        // Otherwise, try to use custom SMTP settings from environment variables
        elseif (!empty(getenv('SMTP_HOST'))) {
            $mail->isSMTP();
            $mail->Host = getenv('SMTP_HOST');
            $mail->SMTPAuth = true;
            $mail->Username = getenv('SMTP_USER');
            $mail->Password = getenv('SMTP_PASS');
            $mail->SMTPSecure = getenv('SMTP_SECURE') ?: PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = (int) getenv('SMTP_PORT') ?: 587;
            $from_email = getenv('SMTP_FROM') ?: 'noreply@yourdomain.com';
        }
        // Fallback: try mail() function (won't work on Heroku, but useful for local testing)
        else {
            $mail->isMail();
            $from_email = $email;
        }

        // Recipients
        $mail->setFrom($from_email, 'Portfolio Contact Form');
        $mail->addAddress($to_email);
        $mail->addReplyTo($email, $name);

        // Content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = "
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> " . htmlspecialchars($name) . "</p>
            <p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>
            <p><strong>Message:</strong></p>
            <p>" . nl2br(htmlspecialchars($message)) . "</p>
        ";
        $mail->AltBody = "You have received a new message from your portfolio website.\n\nName: $name\nEmail: $email\n\nMessage:\n$message";

        $mail->send();

        http_response_code(200);
        echo json_encode(["success" => true, "message" => "Thank you! Your message has been sent."]);

    } catch (Exception $e) {
        error_log("PHPMailer Error: " . $mail->ErrorInfo);
        http_response_code(500);
        echo json_encode([
            "success" => false,
            "message" => "Failed to send email. Server error."
        ]);
    }

} else {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method Not Allowed."]);
}
?>