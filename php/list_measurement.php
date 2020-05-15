<?php
  include('../html/header.html');
?>

<div id="stickyWrapper">
	<button onclick="document.getElementById('id01').style.display='flex'">SEARCH FOR THE MEASUREMENT</button>
	<div id="id01" class="modal">
  		<form class="modal-content animate" action="list_measurement.php" method="get">
			  	<div>
					<label for="searchField">Name of the measurement</label>
					<input type="text" name="search" id="searchField" >
				</div>
				<div>
					<label for="zoradenie">Order by:</label>
					<select name="zoradenie" id="zoradenie">
						<option value="opacne">From the newest to the oldest one</option>
						<option value="dobre">From the oldest to the newest one</option>
						<option value="fromAZ">From A-Z</option>
						<option value="fromZA">From Z-A</option>
					</select>
				</div>
				
				<input type="submit" value="SEARCH"><br>
		</form>
	</div>

	<button onclick="document.getElementById('id02').style.display='flex'">CHANGE THE NAME OF THE MEASUREMENT</button>
	<div id="id02" class="modal">
		<form class="modal-content animate" action="list_measurement.php?search=&zoradenie=opacne" method="post">
			<div>
				<label for="idField">ID:</label>
				<input type="number" name="ID" id="idField"  required>
			</div>
			<div>
				<label for="nameField">New name of the measurement:</label>
				<input type="text" name="newName" id="nameField"  required>
			</div>
			
			<input type="submit" value="SET">
		</form>
	</div>

	<button onclick="document.getElementById('id03').style.display='flex'">DELETE THE MEASUREMENT</button>
	<div id="id03" class="modal">
		<form class="modal-content animate" action="list_measurement.php?search=&zoradenie=opacne" method="post">
			<div>
				<label for="idField">ID:</label>
				<input type="number" name="IDelete" id="idField"  required>
			</div>
			<div>
				<label for="nameField">Name of the measurement:</label>
				<input type="text" name="nameToDelete" id="nameField"  required>
			</div>
			<input type="submit" value="DELETE">
		</form>
	</div>
</div>

		
	




	<?php
	include("db.php");
	date_default_timezone_set("Europe/Berlin");

	if(isset($_POST['ID'])){
		$query_update = sprintf("UPDATE merania SET nazov_merania = '%s' WHERE id_merania = %d",$_POST['newName'],$_POST['ID']);
		$mysqli -> query($query_update);
	}

	if(isset($_POST['IDelete'])){
		$query_delete = sprintf("DELETE FROM merania WHERE id_merania = %d && nazov_merania = '%s'",$_POST['IDelete'],$_POST['nameToDelete']);
		$mysqli -> query($query_delete);
	}

	$query = sprintf("SELECT id_merania,nazov_merania,datum_merania FROM merania;");

	if(isset($_GET['search'])){
		$query = sprintf("SELECT * FROM merania WHERE nazov_merania LIKE '%%%s%%'",$_GET['search']);
	}

	if($_GET['zoradenie']=='opacne'){
		$query = sprintf("%s ORDER BY id_merania DESC;",$query);
	}

	if($_GET['zoradenie']=='dobre'){
		$query = sprintf("%s ORDER BY id_merania ASC;",$query);
	}

	if($_GET['zoradenie']=='fromAZ'){
		$query = sprintf("%s ORDER BY nazov_merania ASC;",$query);
	}

	if($_GET['zoradenie']=='fromZA'){
		$query = sprintf("%s ORDER BY nazov_merania DESC;",$query);
	}





	$result = $mysqli -> query($query);
	if(!($result->fetch_array())){
		echo "<table class='zoznam_merani'>";
		echo "<tr id='tableHeader'>";
		echo "<td class='rowTable'>ID of measurement</td>";
		echo "<td class='rowTable'>Name of measurement</td>";
		echo "<td class='rowTable'>Date of measurement</td>";
		echo "<td class='rowTable'>IP address of measurement</td>";
		echo "<td class='rowTable'>Link to measurement</td>";
		echo "</tr>";
		echo "<tr>";
		echo "<td colspan='4'>no matches found</td>";
		echo "</tr>";
	} 

	else{
		$result = $mysqli -> query($query);
		if(DEBUG) var_dump($result);
		echo "<table class='zoznam_merani'>";
		echo "<tr id='tableHeader'>";
		echo "<td class='rowTable'>ID of measurement</td>";
		echo "<td class='rowTable'>Name of measurement</td>";
		echo "<td class='rowTable'>Date of measurement</td>";
		echo "<td class='rowTable'>IP address of measurement</td>";
		echo "<td class='rowTable'>Link to measurement</td>";
		echo "</tr>";
		
		while ($row=$result->fetch_array()){
			if(DEBUG) var_dump($row);
			
			

			echo "<tr>";
				echo "<td class='rowTable'>$row[id_merania]</td>";
				echo "<td class='rowTable'>$row[nazov_merania]</td>";
				$date = date("Y-m-d H:i:s", substr($row['datum_merania'], 0, 10));
				echo "<td class='rowTable'>$date</td>";
				echo "<td class='rowTable'>$row[ip_address]</td>";
				echo "<td class='rowTable'>
						<div class='rowFlex'>
							<a href='show_graph.php?id=$row[id_merania]' title='Time based function'>
								<i class='far fa-clock'></i>
							</a>
							<a href='show_XY_graph.php?id=$row[id_merania]' title='XY based function'>
								<i class='fas fa-chart-line'></i>
							</a>	
						</div>
					</td>";
				echo "<td class='rowTable'>
						<a href='delete.php?id=$row[id_merania]'title='Delete the measurement'>
							<i class='fas fa-trash'></i>
						</a>
					</td>";
					
			echo "</tr>";
				
		}
		echo "</table>";
	}

	
	?>


<script>
// Get the modal
var modalSearch = document.getElementById('id01');
var modalUpgrade = document.getElementById('id02');
var modalDelete = document.getElementById('id03');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalSearch || event.target == modalUpgrade || event.target == modalDelete) {
    	modalSearch.style.display = "none";
		modalUpgrade.style.display = "none";
		modalDelete.style.display = "none";
  }
}
</script>
</body>
</html>
