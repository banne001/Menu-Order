<?php

//var_dump($_GET);

$firstName = $_GET['fname'];
$order = $_GET['sendorder'];

echo "<body>
      <h1>Thank you for ordering $firstName! </h1>
      <h3>You order of... $order</h3>
      <h3>... will be coming in 10min to Never</h3>
      </body>";
?>