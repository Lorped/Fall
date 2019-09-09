<?php

//http://stackoverflow.com/questions/18382740/cors-not-working-php
if (isset($_SERVER['HTTP_ORIGIN'])) {
  header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
  header('Access-Control-Allow-Credentials: true');
  header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

  if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

  if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
    header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

  exit(0);
}

include ('./db.inc.php');

$postdata = file_get_contents("php://input");
//$request = json_decode($postdata);

$username = mysql_real_escape_string ( $postdata );



//$userid = "me@home";
//$passwd = "1234";


if (isset($postdata)  ) {


  $MySql = "SELECT * FROM FALLutente
    WHERE
    username = '$username' " ;

  $Result = mysql_query($MySql);
  if (mysql_errno())  die ( mysql_errno().": ".mysql_error()."+". $MySql );

  if ( $res = mysql_fetch_array($Result,MYSQL_ASSOC)   ) {

    $newout = [
      "status" => 'duplicato'
    ];
  } else {
    $newout = [
      "status" => 'success'
    ];
  }

  $output = json_encode($newout);
  echo $output;

} else {
    header("HTTP/1.1 401 Unauthorized");
}
?>
