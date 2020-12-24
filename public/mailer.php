<?php 
  ini_set('display_errors', 1);
  ini_set('display_startup_errors', 1);
  error_reporting(E_ALL);

  header("Access-Control-Allow-Origin: *");

  $rest_json = file_get_contents('php://input');
  $_POST = json_decode($rest_json, true);

  if(empty($_POST['name']) && empty($_POST['email'])) die();

  if($_POST){
    //Set response code 200 Ok
    http_response_code(200);

    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r","\n"),array(" "," "), $name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject = trim($_POST["subject"]);
    $message = trim($_POST["message"]);

    // Check that data was sent to the mailer.
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      // Set a 400 (bad request) response code and exit.
      http_response_code(400);
      echo "Oops! There was a problem with your submission. Please complete the form and try again.";
      exit;
  }

  // Set the recipient email address.
  // FIXME: Update this to your desired email address.
  $recipient = "jchaiet@hotmail.com";

  // Set the email subject.
  $subject_content = "New contact from $name";

  // Build the email content.
  $email_content = "Name: $name\n";
  $email_content .= "Email: $email\n\n";
  $email_content .= "Subject:\n$subject\n\n";
  $email_content .= "Message:\n$message\n";

  // Build the email headers.
  $email_headers = "From: $name <$email>";

  // Send the email.
  if (mail($recipient, $subject_content, $email_content, $email_headers)) {
    // Set a 200 (okay) response code.
    http_response_code(200);
    echo "Thank You! Your message has been sent.";
  } else {
      // Set a 500 (internal server error) response code.
      http_response_code(500);
      echo "Oops! Something went wrong and we couldn't send your message.";
  }

  echo json_encode(array(
    "sent" => true
  ));
  }else{
    //Return error
    echo json_encode(["sent" => false, "message" => "Uh oh! There was an issue sending the email"]);
  }
?>