<?php
  $statusMsg = '';
  $msgClass = '';
  if(isset($_POST['submit'])){
    // Get the submitted form data
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    
    // Check whether submitted data is not empty
    if(!empty($email) && !empty($name) && !empty($subject) && !empty($message)){
      // Check if the "Sender's Email" input field is filled out
      $email = $_POST['email'];
      // Sanitize E-mail Address
      $email = filter_var($email, FILTER_SANITIZE_EMAIL);
      // Validate E-mail Address
      $email = filter_var($email, FILTER_VALIDATE_EMAIL);

      if (!$email){
        echo "Please enter your valid email.";
      }else{
        //Recipient email
        $toEmail = 'jchaiet@hotmail.com';
        $emailSubject = 'Contact Request Submitted by '.$name;
        $htmlContent = '<h2>Contact Request Submitted</h2>
          <h4>Name</h4><p>'.$name.'</p>
          <h4>Email</h4><p>'.$email.'</p>
          <h4>Subject</h4><p>'.$subject.'</p>
          <h4>Message</h4><p>'.$message.'</p>';
          
        //Set content-type header for sending HTML email
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        
        //Additional headers
        $headers .= 'From: '.$name.'<'.$email.'>'. "\r\n";
        
        //Send email
        if(mail($toEmail, $emailSubject, $htmlContent, $headers)){
          $statusMsg = 'Your contact request has been submitted successfully !';
          $msgClass = 'succdiv';
        }else{
          $statusMsg = 'Your contact request submission failed, please try again.';
          $msgClass = 'errordiv';
        }
      }
    }else{
      $statusMsg = 'Please fill all the fields.';
      $msgClass = 'errordiv';
    }
  }
?>