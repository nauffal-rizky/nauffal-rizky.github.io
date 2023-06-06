<?php
  session_start();
  session_unset();
  session_destroy();
  echo "<script>
    alert('You just log-out!!!');
    document.location.href = '../index.php';
  </script>";
?>