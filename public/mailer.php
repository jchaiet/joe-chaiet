<?php 
  require '../vendor/autoload.php';
  
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json");

  $rest_json = file_get_contents('php://input');
  $_POST = json_decode($rest_json, true);

  if(empty($_POST['name']) && empty($_POST['email'])) die();

  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  $msg_content = "Contact Request Submitted\n\nName: ".$name."\nEmail: ".$email."\nSubject: ".$subject."\nMessage: ".$message;

  /*$request_body = json_decode('{
    "personalizations": [
      {
        "to": [
          {
            "email": "jchaiet@hotmail.com"
          }
        ],
        "subject": "New message from joechaiet.com"
      }
    ],
    "from": {
      "email": "joe@liquidpixelco.com"
    },
    "content": [
      {
        "type": "text/plain",
        "value": '.$msg_content.'
      }  
    ]
  }');*/

  $email = new \SendGrid\Mail\Mail();
  $email->setFrom("joe@liquidpixelco.com", "Joe Chaiet");
  $email->setSubject("New message from joechaiet.com");
  $email->addTo("jchaiet@hotmail.com", "Joe Chaiet");
  $email->addContent("text/plain", $msg_content);

  $apiKey = trim(getenv('SENDGRID_API_KEY'));
  $sg = new \SendGrid($apiKey);

  try {
    $response = $sg->client->mail()->send()->post($email);
    echo $response->statusCode();
    echo $response->body();
    echo $response->headers();
  }catch(Exception $e){
    echo 'Caught exception: ' $e->getMessage() ."\n";
  }
  
?>