<?php
  require 'components/functions.php';

  if (isset($_POST["signup"])) {
    if (signUp($_POST) > 0) {
      echo "<script>
        alert(`You've been registered!!!`)
        document.location.href = 'login.php'
      </script>";
    } else {
      echo mysqli_error($conn);
    }
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
        <h1 class="title">Sign-up</h1>
        <div class="form-center">
          <div class="input-box">
            <label for="username">
              <i data-feather="user"></i>
            </label>
            <input type="text" name="username" id="username" placeholder="Enter your username here..." autocomplete="off" required>
          </div>
          <div class="input-box">
            <label for="email">
              <i data-feather="at-sign"></i>
            </label>
            <input type="email" name="email" id="email" placeholder="Enter your e-mail here..." autocomplete="off" required>
          </div>
          <div class="input-box">
            <label for="password">
              <i data-feather="key"></i>
            </label>
            <input type="password" name="password" id="password" placeholder="Enter your password here..." autocomplete="off" required>
          </div>
          <div class="input-box">
            <label for="password">
              <i data-feather="lock"></i>
            </label>
            <input type="password" name="confirmPass" id="confirmPass" placeholder="Confirm your password here..." autocomplete="off" required>
          </div>
          <button type="submit" name="signup" class="submit-btn">Submit</button>
        </div>
        <a href="login.php" class="sign-up">Already have an account.?</a>
      </form>
    </div>
    <script>
      feather.replace()
    </script>
  </body>
</html>