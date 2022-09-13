<?php
include("connection.php");

$fullname = $_POST["fullname"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$message = $_POST["message"];

$query = $mysqli->prepare("INSERT INTO users(fullname, email, phone, message) VALUE (?, ?, ?, ?)");
$query->bind_param("ssss",$fullname, $email, $phone, $message );
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);

?>