<?php
include("./php/db.php");
$json=file_get_contents("php://input");
date_default_timezone_set("Europe/Berlin");
if($json!=""){
    $query="INSERT INTO merania VALUES(0,'".date("d.m.Y H:i:s")."',".time()."
    ,'".$_SERVER["REMOTE_ADDR"]."','".htmlspecialchars($json)."');";
    $mysqli->query($query);
}
?>
