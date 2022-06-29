<?php
// database informations
$servername = "sql101.epizy.com";
$username = "epiz_31996348";
$password = "NfJJd938McWh5gN";
$db = "epiz_31996348_energy_db";
// Try to connet to the database with PDO system
try {
  $conn = new PDO("mysql:host=$servername;dbname=$db", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); 
  // echo "Connected successfully";
} catch (PDOException $e) {
// get error if not connected
  echo "Connection failed: " . $e->getMessage();
}
?>