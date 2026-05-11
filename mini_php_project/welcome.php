<?php

session_start();

?>

<!DOCTYPE html>
<html>
<head>
    <title>Welcome</title>
</head>
<body>

<h1>Welcome</h1>

<?php

// Check session
if (isset($_SESSION['user'])) {

    echo "Hello " . $_SESSION['user'];

} else {

    echo "No session found";
}


// Check cookie
if (isset($_COOKIE['username'])) {

    echo "<br><br>";
    echo "Cookie saved user: " . $_COOKIE['username'];
}

?>

<br><br>

<a href="logout.php">Logout</a>

</body>
</html>