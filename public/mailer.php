<?php 
  require '../vendor/autoload.php';
  
  header("Access-Control-Allow-Origin: *");

  $rest_json = file_get_contents('php://input');
  $_POST = json_decode($rest_json, true);

  if(empty($_POST['name']) && empty($_POST['email'])) die();

  $request_body = json_decode('{
    "personalizations": [
      {
        "to": [
          "email": "jchaiet@hotmail.com"
        ],
        "subject": '. $_POST['subject'] .'
      }
    ],
    "from": {
      "email": '. $_POST['email'] .'
    },
    "content": [
      {
        "type": "text/plain",
        "value": '. $_POST['message'] .'
      }  
    ]
  }');

  $apiKey = getenv('SENDGRID_API_KEY');

  echo $apiKey;
  echo gettype($apiKey);
  
  $sg = new \SendGrid($apiKey);

  $response = $sg->client->mail()->send()->post($request_body);
  echo $response->statusCode();
  echo $response->body();
  echo $response->headers();
?>