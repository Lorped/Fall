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
$request = json_decode($postdata);

$userid = mysql_real_escape_string ( $request->userid );
$username = mysql_real_escape_string ( $request->username );
$passwd = mysql_real_escape_string ( $request->passwd );
$Nome = mysql_real_escape_string ( $request->Nome ) ;
$Gruppo = mysql_real_escape_string ( $request->Gruppo );
$Costituzione = $request->Costituzione;
$Medicina = $request->Medicina;
$Scasso = $request->Scasso;
$Esplosivi = $request->Esplosivi;
$Tempra = $request->Tempra;
$Chimica = $request->Chimica;
$Riparazione = $request->Riparazione;
$Scienza = $request->Scienza;
$px = $request->px;


//$userid = "me@home";
//$passwd = "1234";


if (isset($postdata)  ) {


  $MySql = "UPDATE FALLutente SET
    Costituzione = $Costituzione , Medicina = $Medicina , Scasso = $Scasso ,
    Esplosivi = $Esplosivi , Tempra = $Tempra , Chimica = $Chimica ,
    Riparazione = $Riparazione , Scienza = $Scienza , 
    px = $px
    WHERE
    userid = $userid" ;

  $Result = mysql_query($MySql);
  if (mysql_errno())  die ( mysql_errno().": ".mysql_error()."+". $MySql );

  $MySql = "SELECT * FROM FALLutente WHERE userid = $userid";
  $Result = mysql_query($MySql);
  if ( $res = mysql_fetch_array($Result,MYSQL_ASSOC)   ) {

    $newout = [
      "status" => 'success' ,
      "user" => $res
    ];

    $output = json_encode($newout);
    echo $output;

  } else {
    header("HTTP/1.1 401 Unauthorized");
  }
} else {
    header("HTTP/1.1 401 Unauthorized");
}
?>
