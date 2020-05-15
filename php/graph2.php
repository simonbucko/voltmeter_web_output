

    <button id="buttonResistance" onclick="document.getElementById('id04').style.display='flex'">INSERT RESISTANCE INTO CIRCUIT</button>
	<div id="id04" class="modal">
  		<div class="modal-content animate" action="list_measurement.php" method="get">
          <input id="res" type="number" placeholder="Enter resistance in &ohm;">
          <button id="buttonSet">INSERT</button>
        </div>
	</div>


    <div class="wrapperGraph">
        <div>
            <button class="showVoltage">VOLTAGE</button>
            <button class="showAmpers">AMPERS</button>
            
        </div>
        
        <canvas id="myFirstChart"></canvas>
    </div>
    <div class="wrapperGraph">
        <div>
            <button class="showVoltage">VOLTAGE</button>
            <button class="showAmpers">AMPERS</button>
            
        </div>
        
        <canvas id="mySecondChart"></canvas>
    </div>
    <div class="wrapperGraph">
        <div>
            <button class="showVoltage">VOLTAGE</button>
            <button class="showAmpers">AMPERS</button>
            
        </div>
        
        <canvas id="myThirdChart"></canvas>
    </div>
    <div class="wrapperGraph">
        <div>
            <button class="showVoltage">VOLTAGE</button>
            <button class="showAmpers">AMPERS</button>
            
        </div>
        
        <canvas id="myFourthChart"></canvas>
    </div>
    <?php
        include('../html/footer.html');
    ?>
	
<script src="../javaScript/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>
<script src="../javaScript/app.js"></script>
<script>
    var modalResistance = document.getElementById('id04');
    window.onclick = function(event){
        if (event.target == modalResistance){
            modalResistance.style.display = "none";
        }
    }
</script>



</body>

</html>