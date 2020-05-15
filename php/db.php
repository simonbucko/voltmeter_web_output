<?php
$server="internet";

if($server=="doma"){
	define('DB_HOST','127.0.0.1');
	define('DB_USERNAME','root');
	define('DB_PASSWORD','');
	define('DB_NAME','meranie');
}
else {
	define('DB_HOST','localhost');
	define('DB_USERNAME','id13667206_meranie_bucko');
	define('DB_PASSWORD','BuUckOo0-3915');
	define('DB_NAME','id13667206_meranie');
}

define('DEBUG',0);


mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD,DB_NAME);

if(!$mysqli){
	die("Connection failed: ".$mysqli -> error);
}
?>
