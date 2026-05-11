<?php

// Start session
session_start();


// Global visitor counter
$count = 0;

function increaseVisitor() {
    $GLOBALS['count']++;
}

increaseVisitor();


// Check if form submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    // Get form data
    $username = $_POST['username'];

    // Save into session
    $_SESSION['user'] = $username;

    // Save cookie for 1 hour
    setcookie("username", $username, time() + 3600);

    // Go to welcome page
    header("Location: welcome.php");

    exit();
}

?>

<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
</head>
<body>

<h2>Simple Student Login</h2>

<form method="post">

    <input type="text" name="username" placeholder="Enter your name">

    <button type="submit">Login</button>

</form>

</body>
</html>