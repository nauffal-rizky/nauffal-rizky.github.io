<?php
  $conn = mysqli_connect("localhost", "root", "", "portfolio");

  function signUp($acc) {
    global $conn;
    
    $username = strtolower(stripslashes($acc["username"]));
    $email = $acc["email"];
    $password = mysqli_real_escape_string($conn, $acc["password"]);
    $confirmPass = mysqli_real_escape_string($conn, $acc["confirmPass"]);

    // check for duplicate username
    $duplicateCheck = mysqli_query($conn, "SELECT username FROM users WHERE username = '$username'");

    if (mysqli_fetch_assoc($duplicateCheck)) {
      echo "<script>
        alert(`This username is already existed!`)
      </script>";
      return false;
    }

    // confirm password
    if ($confirmPass !== $password) {
      echo "<script>
        alert(`Your confirmation password don't match!!`)
      </script>";
      return false;
    }

    // password encryption
    $password = password_hash($password, PASSWORD_DEFAULT);

    mysqli_query($conn, "INSERT INTO users VALUES (
      '', '$username', '$email', '$password'
    )");

    return mysqli_affected_rows($conn);
  }
?>