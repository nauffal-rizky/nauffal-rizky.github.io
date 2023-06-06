<?php
  require 'components/functions.php';
  session_start();

  if (isset($_SESSION["login"])) {
    header("Location: index.php");
    exit;
  }

  if (isset($_POST["login"])) {
    $username = $_POST["username"];
    $password = $_POST["password"];
    
    $result = mysqli_query($conn, "SELECT * FROM users WHERE username = '$username'");
    // Username check
    if (mysqli_num_rows($result) === 1) {
      $row = mysqli_fetch_assoc($result);
      // Password check
      if (password_verify($password, $row["password"])) {
        $_SESSION["login"] = true;
        header("Location: index.php");
        exit;
      }
    }
    $error = true;
  }
?>
<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://unpkg.com/feather-icons"></script>
    <!-- FontAwesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" />
    
    <!-- MyCSS -->
    <link rel="stylesheet" href="../src/styles/login.css">
  </head>
  <body>
    <div class="form-container">
      <form action="" method="post" class="form">
        <?php if (isset($error)): ?>
          <span class="alert show-alert">Your username is invalid!</span>
        <?php else: ?>
          <span class="alert">Your username is invalid!</span>
        <?php endif; ?>
        <h1 class="title">Log-in</h1>
        <div class="form-center">
          <div class="input-box">
            <label for="username">
              <i data-feather="user"></i>
            </label>
            <input type="text" name="username" id="username" placeholder="Enter your username here..." autocomplete="off" required>
          </div>
          <div class="input-box">
            <label for="password">
              <i data-feather="lock"></i>
            </label>
            <input type="password" name="password" id="password" placeholder="Enter your password here..." autocomplete="off" required>
          </div>
          <button type="submit" name="login" class="submit-btn">Submit</button>
        </div>
        <a href="signup.php" class="log-in">Don't have an account.?</a>
      </form>
    </div>
    <script>
      feather.replace()
    </script>
  </body>
</html>