<?php

$name = $_POST['name'];
$phone = $_POST['tel'];
// $additional = $_POST['additional-info'];
$token = "1452227432:AAG2Ec903wmlAMESvJfpe9RvXvgkiR_V0G0";
$chat_id = "-1001457259646";
$arr = array(
  'Имя: ' => $name,
  'Телефон: ' => $phone,
  '-'=> $additional
);
require 'phpmailer/class.phpmailer.php';
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$mail->Subject = 'Заявка с сайта';
$mail->Body    = 'Имя: ' .$name. '<br>Телефон: ' .$phone. '<br>Дополнительная информация: ' .$additional;
$mail->AltBody = '';

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if(!$mail->send()) {
  $message = 'Успешно';
} else {
  $message = 'Ошибка';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>