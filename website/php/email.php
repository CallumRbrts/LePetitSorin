<?php
if($_POST){
    echo "yeet";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

//send email
    mail("callum.roberts.pro@gmail.com", "This is an email from:" .$email, $message);
}
?>
