<?php
session_start();

// Configuration option.
// Enter the $site_owners_email that you want to emails to be sent to.
// Example $site_owners_email = "joe.doe@yourdomain.com";

$site_owners_email = "info@domidrinks.com";  // Replace this with your own email address
$subject = "Nuevo pedido en Domi Drinks";                       // subject to email             


// Alert info
$alert_success = "Form submitted successfully.";
$alert_error_name = "Please leave a name.";
$alert_error_email = "Please enter a valid email address.";
$alert_error_message = "Please leave a message.";
$alert_error_limit_send = "Please leave a message.";


$limit_send_message = 5; // limit to send message 



$name = filter_input(INPUT_POST, 'name');
$email = filter_input(INPUT_POST, 'cel');
$contact_number = filter_input(INPUT_POST, 'address');
$message = filter_input(INPUT_POST, 'message');

if( empty($_SESSION['send_email']) ) {
    
    $_SESSION['send_email'] = 1;
}
elseif( $_SESSION['send_email'] > $limit_send_message ) {
      
    $result = array(
        'status' => 0,
        'text' => $alert_error_limit_send
    );
    die(json_encode($result));
    
}


if ($name == "") {
    
    $result = array(
        'status' => 0,
        'text' => $alert_error_name
    );
    
}
elseif ($message == "") {
    
    $result = array(
        'status' => 0,
        'text' => $alert_error_message
    );
    
}
else {
   
    // OK - send email
    $_SESSION['send_email']++;   
    $message .= "\r\n\r\nDirección: ".$contact_number."\nCelular: ".$email."\nNombre: ".$name;
    $mail = mail($site_owners_email, $subject, $message, "From: " . $name . " <" . $email . ">\r\n"
            . "Reply-To: " . $email . "\r\n"
            . "X-Mailer: PHP/" . phpversion());
        	
    $result = array(
        'status' => 1,
        'text' => $alert_success
    );
} 

die(header("Location: confirmacion.html"));
 /* Redirect browser */
exit();

       