<?php
require "connect.php";

$sql = "INSERT INTO staff (sid, name, password) VALUES (1, 'admin', 'sjog')";

if($conn->query($sql) === TRUE)
{
    echo "Staff added";
}
else
{
    echo "Staff couldn't be added";
}

$conn->close();
?>