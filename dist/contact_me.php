<?php
if($_POST)
{
    $to_email       = "af@cloudmill.ru"; //Recipient email, Replace with own email here

    //check if its an ajax request, exit if not
    if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {

        $output = json_encode(array( //create JSON data
            'type'=>'error',
            'text' => 'Sorry Request must be Ajax POST'
        ));
        die($output); //exit script outputting json data
    }

    //Sanitize input data using PHP filter_var().
    $user_name      = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
    $user_text      = filter_var($_POST["text"], FILTER_SANITIZE_STRING);
    $user_email     = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $user_phone   = filter_var($_POST["phone"], FILTER_SANITIZE_NUMBER_INT);

    //additional php validation
//    if(strlen($user_name)<4){ // If length is less than 4 it will output JSON error.
//        $output = json_encode(array('type'=>'error', 'text' => 'Name is too short or empty!'));
//        die($output);
//    }
//    if(!filter_var($user_email, FILTER_VALIDATE_EMAIL)){ //email validation
//        $output = json_encode(array('type'=>'error', 'text' => 'Please enter a valid email!'));
//        die($output);
//    }
//    if(!filter_var($country_code, FILTER_VALIDATE_INT)){ //check for valid numbers in country code field
//        $output = json_encode(array('type'=>'error', 'text' => 'Enter only digits in country code'));
//        die($output);
//    }
//    if(!filter_var($phone_number, FILTER_SANITIZE_NUMBER_FLOAT)){ //check for valid numbers in phone number field
//        $output = json_encode(array('type'=>'error', 'text' => 'Enter only digits in phone number'));
//        die($output);
//    }
//    if(strlen($subject)<3){ //check emtpy subject
//        $output = json_encode(array('type'=>'error', 'text' => 'Subject is required'));
//        die($output);
//    }
//    if(strlen($message)<3){ //check emtpy message
//        $output = json_encode(array('type'=>'error', 'text' => 'Too short message! Please enter something.'));
//        die($output);
//    }

    //email body
    $message_body = "Имя:".$user_name."\r\nEmail : ".$user_email."\r\nТелефон : ".$user_phone."\r\nТекст : ".$text;

    //proceed with PHP email.
    $headers = 'From: '.$user_name.'' . "\r\n" .
    'Reply-To: '.$user_email.'' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

    $send_mail = mail($to_email, 'Новая заявка', $message_body, $headers);

    if(!$send_mail)
    {
        //If mail couldn't be sent output error. Check your PHP email configuration (if it ever happens)
        $output = json_encode(array('type'=>'error', 'text' => 'Could not send mail! Please check your PHP mail configuration.'));
        die($output);
    }else{
        $output = json_encode(array('type'=>'message', 'text' => 'Hi '.$user_name .' Thank you for your email'));
        die($output);
    }
}
?>
