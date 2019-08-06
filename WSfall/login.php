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



$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$userid = $request->userid;
$passwd = $request->passwd;

//$userid = "me@home";
//$passwd = "1234";


if (isset($postdata) && $userid != "" && $passwd !="" ) {

  include ('./db.inc.php');


  $MySql = "SELECT id FROM FALLutente WHERE userid = '".addslashes($userid)."' AND passwd = '".addslashes($passwd)."'";
    $Result = mysql_query($MySql);
  if ( $res = mysql_fetch_array($Result)   ) {

    $id = $res['id'];

    $MySql = "SELECT * FROM FALLutente
      WHERE id = '$id' ";

    $Result = mysql_query($MySql);
    if ( $res = mysql_fetch_array($Result,MYSQL_ASSOC)   ) {

      $newout = [
        "status" => 'success' ,
        "user" => $res
      ];

      $output = json_encode($newout);
      echo $output;
    } else {
        header("HTTP/1.1 404 Not Found");
    }
  } else {
    header("HTTP/1.1 401 Unauthorized");
  }
} else {
    header("HTTP/1.1 401 Unauthorized");
}
?>
