<?php
require "connect.php";

$sql = "INSERT INTO users (uid, name, password) VALUES (1, 'mary', 'sjog')";

if($conn->query($sql) === TRUE)
{
    echo "User added";
}
else
{
    echo "User couldn't be added";
}

$conn->close();
?>
