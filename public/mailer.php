<?php 
  require '../vendor/autoload.php';
  
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json");

  $rest_json = file_get_contents('php://input');
  $_POST = json_decode($rest_json, true);

  if(empty($_POST['name']) && empty($_POST['email'])) die();

  $msg_content = '<h2>Contact Request Submitted</h2>
  <h4>Name</h4><p>'.$name.'</p>
  <h4>Email</h4><p>'.$email.'</p>
  <h4>Subject</h4><p>'.$subject.'</p>
  <h4>Message</h4><p>'.$message.'</p>';

  $request_body = json_decode('{
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
        "value": "<h2>Contact Request Submitted<\/h2><h4>Name<\/h4><p>'.$name.'<\/p><h4>Email<\/h4><p>'.$email.'<\/p><h4>Subject<\/h4><p>'.$subject.'<\/p><h4>Message<\/h4><p>'.$message.'<\/p>"
      }  
    ]
  }');

  $apiKey = trim(getenv('SENDGRID_API_KEY'));
  $sg = new \SendGrid($apiKey);

  $response = $sg->client->mail()->send()->post($request_body);
  echo $response->statusCode();
  echo $response->body();
  echo $response->headers();
?>