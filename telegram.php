<?php

$phone = $_POST['tel'];
$additional = $_POST['additional-info'];
$token = "1334650047:AAHFw60aAkj6ZaG5kFrbf1oqBkM2cGVGnak";
$chat_id = "-404787029";
$arr = array(
  'Телефон: ' => $phone,
  ': '=> $additional
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thanks.html');
} else {
  echo "Error";
}
?>

