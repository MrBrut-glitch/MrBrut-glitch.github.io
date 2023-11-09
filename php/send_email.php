<?php
    error_reporting(E_ALL);

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    
    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/PHPMailer.php';
    require 'PHPMailer/src/SMTP.php';

    if(isset($_POST["submit"])){
        $mail = new PHPMailer();
        $mail->isSMTP();
        $mail->Host = "smtp.gmail.com";
        $mail->Port = 587;
        $mail->SMTPAuth = true;
        $mail->Username = "adrian.bakalarz2019@gmail.com";
        $mail->Password = "ztrjjrravprbzcdv";

        $mail->setFrom($_POST["email"], "");
        $mail->addAddress("adrian.bakalarz2019@gmail.com", "");

        $mail->isHTML(true);
        $mail->Subject = $_POST["name"];
        $mail->Body = $_POST["request"];

        if($mail->send()){
            echo "Deine Email wurde erfolgreich verschickt.";
        } else {
            echo "Es gab einen Fehler: ".$mail->ErrorInfo;
        }
    }
?>