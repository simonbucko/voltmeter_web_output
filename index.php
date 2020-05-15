<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Voltage Meter Project</title>
    <link rel="icon" href="favicon.ico" />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <link rel="stylesheet" href="/css/master.css">
    
  </head>
  <body onresize="checkWidth()">
    <header>
      <div class="navSchools">
        <a href="http://www.spseke.sk"><img src="images/spse-kosice.png" alt="Logo SPŠE Košice" class="school-logo"></a>
        <a href="http://www.sselek-havirov.cz"><img src="images/spse-havirov.png" alt="Logo SPŠE Havířov" class="school-logo"></a>
        <img src="images/logo-plel.png" alt="Project Logo" class="school-logo">
      </div>
      <div class="mobilmenu">
        <div class="wrapper">
          
          <div class="container" onclick="myFunction(this)">
              <div class="bar1"></div>
              <div class="bar2"></div>
              <div class="bar3"></div>
          </div>  
        </div>    
      </div>  

      <div class="navLinks">
        <nav>
        <ul>
          <li><a href="./php/list_measurement.php?search=&zoradenie=opacne">All measurements</a></li>
          <li><a href="?menu=about">About</a></li>
        </ul>
      </nav>
      </div>
      
    </header>
    <main>
      <div id="parallax1"></div>
      <div id="parallaxText1">
        <div>
          VOLTMETER WITH WEB OUTPUT
        </div>
      </div>
      <div id="parallax2"></div>
      <div id="parallaxText2">
        <div>
          This project was created by students from Erasmus+ project. The task was to create the four
            channels voltmeter using Arduino. Measurements are sent to a server in order
            to display them in web application displaying graphs, tables...
        </div>
      </div>
      <div id="parallax3"></div>
      <?php
       include('./html/footer.html');
      ?>
    </main>
  
  </body>
  <script src="javaScript/jquery.min.js"></script>
  <script src="javaScript/menu.js"></script>
  <script>
    
  function myFunction(x) {
      x.classList.toggle("change");
  }
  function checkWidth(){
    if(window.innerWidth>480){
      document.getElementsByClassName("navLinks")[0].style.display = 'block';
      }
  }
  </script>
</html>
