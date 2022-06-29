<?php
// connect to the database
include 'connect.php';
// get form information
$name = $_POST['name'];
$surname = $_POST['surname'];
$email = $_POST['email'];
$gender = $_POST['gender'];
$phone = $_POST['phone'];
$country = $_POST['country'];
$level = $_POST['level'];
$domain = $_POST['domain'];
$campus = $_POST['campus'];
// SQL query to the database
$sql = "INSERT INTO `application` (`name`, `surname`, `email`, `gender`, `phone`, `country`, `level`, `domain`, `campus`, `reg_date`) VALUES ('$name', '$surname', '$email', '$gender', '$phone', '$country', '$level', '$domain', '$campus', CURRENT_TIMESTAMP);";
// insert information to the database
$conn->exec($sql);
// 4 seconds standby before continue
sleep(4);
// return to previous page after code exited
header('Location:business-energy.html#form');
// run out of the connectline
exit();
?>
