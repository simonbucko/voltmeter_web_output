$(document).ready(function(){
	
    console.log(data);
    var hodnotaX = [[]];
    var hodnotaY = [[]];
    var nazvy = [];
    var nazvyGrafov = [];
    nazvy[0] = 'The first channel and the second channel in the XY function';
    nazvy[1] = 'The first channel and the third channel in the XY function';
    nazvy[2] = 'The first channel and the fourth channel in the XY function';
    nazvy[3] = 'The second channel and the third channel in the XY function';
    nazvy[4] = 'The second channel and the fourth channel in the XY function';
    nazvy[5] = 'The third channel and the fourth channel in the XY function';

    // if(data[0]=='' && data[1]=='' && data[2]=='' && data[3]==''
    // || data[0]!='' && data[1]=='' && data[2]=='' && data[3]==''
    // || data[0]=='' && data[1]!='' && data[2]=='' && data[3]==''
    // || data[0]=='' && data[1]=='' && data[2]!='' && data[3]==''
    // || data[0]=='' && data[1]=='' && data[2]=='' && data[3]!=''){
    //     $("#footerOfGraphs").css("position", "absolute");
    //     $("#footerOfGraphs").css("bottom", "0");
    // }
    
    if (data[0]!='' && data[1]!='' && data[2]!='' && data[3]!=''){
        hodnotaX[0]=data[0];
        hodnotaX[1]=data[2];
        hodnotaY[0]=data[1];
        hodnotaY[1]=data[3];
        nazvyGrafov[0] = nazvy[0];
        nazvyGrafov[1] = nazvy[5];
    }

    else if (data[0]!='' && data[1]!='' && data[2]!='' && data[3]==''){
        hodnotaX[0]=data[0];
        hodnotaY[0]=data[1];
        $("#mySecondChart").css("display", "none");
        nazvyGrafov[0] = nazvy[0];
        $("#footerOfGraphs").css("position", "absolute");
        $("#footerOfGraphs").css("bottom", "0");
    }

    else if (data[0]!='' && data[1]!='' && data[2]=='' && data[3]!=''){
        hodnotaX[0]=data[0];
        hodnotaY[0]=data[1];
        $("#mySecondChart").css("display", "none");
        nazvyGrafov[0] = nazvy[0];
        $("#footerOfGraphs").css("position", "absolute");
        $("#footerOfGraphs").css("bottom", "0");
    }

    else if (data[0]!='' && data[1]=='' && data[2]!='' && data[3]!=''){
        hodnotaX[0]=data[0];
        hodnotaY[0]=data[2];
        $("#mySecondChart").css("display", "none");
        nazvyGrafov[0] = nazvy[1];
        $("#footerOfGraphs").css("position", "absolute");
        $("#footerOfGraphs").css("bottom", "0");
    }

    else if (data[0]=='' && data[1]!='' && data[2]!='' && data[3]!=''){
        hodnotaX[0]=data[1];
        hodnotaY[0]=data[2];
        $("#mySecondChart").css("display", "none");
        nazvyGrafov[0] = nazvy[3];
        $("#footerOfGraphs").css("position", "absolute");
        $("#footerOfGraphs").css("bottom", "0");
    }

    else if (data[0]!='' && data[1]!='' && data[2]=='' && data[3]==''){
        hodnotaX[0]=data[0];
        hodnotaY[0]=data[1];
        $("#mySecondChart").css("display", "none");
        nazvyGrafov[0] = nazvy[0];
        $("#footerOfGraphs").css("position", "absolute");
        $("#footerOfGraphs").css("bottom", "0");
    }

    else if (data[0]!='' && data[1]=='' && data[2]!='' && data[3]==''){
        hodnotaX[0]=data[0];
        hodnotaY[0]=data[2];
        $("#mySecondChart").css("display", "none");
        nazvyGrafov[0] = nazvy[1];
        $("#footerOfGraphs").css("position", "absolute");
        $("#footerOfGraphs").css("bottom", "0");
    }

    else if (data[0]!='' && data[1]=='' && data[2]=='' && data[3]!=''){
        hodnotaX[0]=data[0];
        hodnotaY[0]=data[3];
        $("#mySecondChart").css("display", "none");
        nazvyGrafov[0] = nazvy[2];
        $("#footerOfGraphs").css("position", "absolute");
        $("#footerOfGraphs").css("bottom", "0");
    }
    
    else if (data[0]=='' && data[1]!='' && data[2]!='' && data[3]==''){
        hodnotaX[0]=data[1];
        hodnotaY[0]=data[2];
        $("#mySecondChart").css("display", "none");
        nazvyGrafov[0] = nazvy[3];
        $("#footerOfGraphs").css("position", "absolute");
        $("#footerOfGraphs").css("bottom", "0");
    }

    else if (data[0]=='' && data[1]!='' && data[2]=='' && data[3]!=''){
        hodnotaX[0]=data[1];
        hodnotaY[0]=data[3];
        $("#mySecondChart").css("display", "none");
        nazvyGrafov[0] = nazvy[4];
        $("#footerOfGraphs").css("position", "absolute");
        $("#footerOfGraphs").css("bottom", "0");
    }

    else if (data[0]=='' && data[1]=='' && data[2]!='' && data[3]!=''){
        hodnotaX[0]=data[2];
        hodnotaY[0]=data[3];
        $("#mySecondChart").css("display", "none");
        nazvyGrafov[0] = nazvy[5];
        $("#footerOfGraphs").css("position", "absolute");
        $("#footerOfGraphs").css("bottom", "0");
    }

    else{
        $("#footerOfGraphs").css("position", "absolute");
        $("#footerOfGraphs").css("bottom", "0");
        $("#myFirstChart").css("display", "none");
        $("#mySecondChart").css("display", "none");
        alert("The selected measurement does not have at least 2 channels of values to generate a graph. Please go back all measurements.");
    }


    var graf1 = [];
    for(i=0;i<hodnotaX[0].length;i++){
        graf1[i] = {x: hodnotaX[0][i],y: hodnotaY[0][i]};
    }
    if(data[0]!='' && data[1]!='' && data[2]!='' && data[3]!=''){
      var graf2 = [];
        for(i=0;i<hodnotaX[0].length;i++){
            graf2[i] = {x: hodnotaX[1][i],y: hodnotaY[1][i]};
        }  
    }
    
    console.log(graf1);
    console.log(graf2);


    

var ctx = $("#myFirstChart");
    var myChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets:[{
                label: "Prosim chod",
                borderColor:'rgba(255,0,0,1)',
                fill:false,
                showLine: true,
                data: graf1,
            }]
        },
        options:
         {
             showLines:true,
             legend: {
                display: false,
            },

             title: {
                display: true,
                text: nazvyGrafov[0]
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
              scales: {
                  yAxes: [{
                      ticks: {
                        beginAtZero:true
                      }
                   }]
              }
           }
    });

    var ctx = $("#mySecondChart");
    var myChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets:[{
                label: "Prosim chod",
                showLine: true,
                borderColor:'rgba(255,0,0,1)',
                fill:false,
                data: graf2,
            }]
        },
        options:
         {
             legend: {
                display: false,
            },
             title: {
                display: true,
                text: nazvyGrafov[1]
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
              scales: {
                  yAxes: [{
                      ticks: {
                        beginAtZero:true
                      }
                   }]
              }
           }
    });

    

});