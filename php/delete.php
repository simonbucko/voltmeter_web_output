<?php
    require('db.php');
    $query = sprintf("DELETE FROM merania WHERE id_merania = %d",$_GET['id']);
    $mysqli -> query($query);
    header('Location: list_measurement.php?search=&zoradenie=opacne');
?>