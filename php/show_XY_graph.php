<?php
include("db.php");

$query = sprintf("SELECT * FROM merania WHERE id_merania=%d",$_GET["id"]);


$result = $mysqli -> query($query);

$row=$result->fetch_array();

if($row["hodnoty"]==""){
    //$jsonText = file_get_contents("sample.json");
    header('Location:errorJson.php');
    exit;
} 
else $jsonText=htmlspecialchars_decode($row["hodnoty"]);
$json = json_decode($jsonText);

if(DEBUG==1){
echo "<pre>";
var_dump($json);
echo "</pre>"; 
}


for($i=0;$i<4;$i++){
	$data[]=$json->channels[$i];
}
$channelsString = json_encode($data);
$channelsString = str_replace(array("\r\n","\r"),"",$channelsString);
?>

<?php
    include('../html/header.html');
?>
<script>
    var data = <?php echo "$channelsString";?>;
</script>
<?php

if(DEBUG==1){
echo "<pre>";
var_dump($data);
echo "</pre>"; 
}

include 'graph_XY.php';
?>