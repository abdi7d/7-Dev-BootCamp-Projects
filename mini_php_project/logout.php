<?php

session_start();

// Destroy session
session_destroy();

?>

<!DOCTYPE html>
<html>
<head>
    <title>Logout</title>
</head>
<body>

<h2>You are logged out</h2>

<a href="index.php">Login Again</a>

</body>
</html>