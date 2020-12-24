<?php 
  header("Access-Control-Allow-Origin: *");

  $rest_json = file_get_contents('php://input');
  $_POST = json_decode($rest_json, true);

  if(empty($_POST['name']) && empty($_POST['email'])) die();

  if($_POST){
    //Set response code 200 Ok
    http_response_code(200);
    $subject = "New contact form sumission: ". $_POST['subject'];
    $to = "jchaiet@hotmail.com";
    $from = $_POST['email'];

    //Data
    $msg = $_POST['message'];

    //Headers
    $headers = "MIME-Version 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From <". $from .">";
    mail($to, $subject, $msg, $headers);

    echo json_encode(array(
      "sent" => true
    ));
  }else{
    //Return error
    echo json_encode(["sent" => false, "message" => "Oop! There was an issue sending the email"]);
  }
?>