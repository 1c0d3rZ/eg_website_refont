<?php
// connect to the database
include 'connect.php';
// getting information form the form
$name = $_POST['name'];
$mail = $_POST['mail'];
$lang = $_POST['lang'];
// SQL query to send to server
$sql2 = "INSERT into news (name, mail, lang) values('$name', '$mail', '$lang')";
// execute query $sql2 on the server
$conn->exec($sql2);
// go to the request sent page
header('Location:newletter.html');
?>
