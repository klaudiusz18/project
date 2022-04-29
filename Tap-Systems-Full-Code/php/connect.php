<?php
$server_name = "127.0.0.1";
$db_user = "root";
$db_pass = "";
$db_name = "actionPlan";
$port = "3306";

$conn = @new mysqli($server_name, $db_user, $db_pass, $db_name, $port);

if($conn->connect_errno)
{
    die("Connection Failed! - " . $conn->connect_errno);
}
?>
