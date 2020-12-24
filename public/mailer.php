<?php 
  require '../vendor/autoload.php';
  
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json");

  $rest_json = file_get_contents('php://input');
  $_POST = json_decode($rest_json, true);

  if(empty($_POST['name']) && empty($_POST['email'])) die();

  $request_body = json_decode('{
    "personalizations": [
      {
        "to": [
          {
            "email": "jchaiet@hotmail.com"
          }
        ],
        "subject": "test subject"
      }
    ],
    "from": {
      "email": "test@test.com"
    },
    "content": [
      {
        "type": "text/plain",
        "value": "test"
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