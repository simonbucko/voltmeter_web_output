$(document).ready(function(){
			console.log(range);
			console.log(data);
			var merania = [[]];
			var hodnota = [[]];
			var poc = 0;
			var ampers = [[]];
			var chardata = [4];
			var resistance;
			var stavA = 1;
			var stavV = 1;
			var chartsName = [];
			var title = [];
			var graphs = [];

			title[0] = 'The first channel';
			title[1] = 'The second channel';
			title[2] = 'The third channel';
			title[3] = 'The fourth channel';

			switch(range[0]){
				case '30V': chartsName[0] = title[0]+' in the range of 30V';
							break;
				case '3V': chartsName[0] = title[0]+' in the range of 3V';
							break;
				case '300mV': chartsName[0] = title[0]+' in the range of 300mV';
							break;
				case '300mA': chartsName[0] = title[0]+' in the range of 300mA';
							break;
				case 'MANUAL': chartsName[0] = title[0]+' was measured manually';
							break;
				case '':    chartsName[0] = title[0]+' in the undefined range';
							break;		
			}

			switch(range[1]){
				case '30V': chartsName[1] = title[1]+' in the range of 30V';
							break;
				case '3V': chartsName[1] = title[1]+' in the range of 3V';
							break;
				case '300mV': chartsName[1] = title[1]+' in the range of 300mV';
							break;
				case '300mA': chartsName[1] = title[1]+' in the range of 300mA';
							break;	
				case 'MANUAL': chartsName[1] = title[1]+' was measured manually';
							break;
				case '':    chartsName[1] = title[1]+' measured manually in the undefined range';
							break;
			}

			switch(range[2]){
				case '30V': chartsName[2] = title[2]+' in the range of 30V';
							break;
				case '3V': chartsName[2] = title[2]+' in the range of 3V';
							break;
				case '300mV': chartsName[2] = title[2]+' in the range of 300mV';
							break;
				case '300mA': chartsName[2] = title[2]+' in the range of 300mA';
							break;	
				case 'MANUAL': chartsName[2] = title[2]+' was measured manually';
							break;
				case '':    chartsName[2] = title[2]+' measured manually in the undefined range';
							break;
			}

			switch(range[3]){
				case '30V': chartsName[3] = title[3]+' in the range of 30V';
							break;
				case '3V': chartsName[3] = title[3]+' in the range of 3V';
							break;
				case '300mV': chartsName[3] = title[3]+' in the range of 300mV';
							break;
				case '300mA': chartsName[3] = title[3]+' in the range of 300mA';
							break;	
				case 'MANUAL': chartsName[3] = title[3]+' was measured manually';
							break;
				case '':    chartsName[3] = title[3]+' measured manually in the undefined range';
							break;	
			}

			if (data[0]==''){
				$("#myFirstChart").css("display", "none");
			}

			if (data[1]==''){
				$("#mySecondChart").css("display", "none");
			}

			if (data[2]==''){
				$("#myThirdChart").css("display", "none");
			}

			if (data[3]==''){
				$("#myFourthChart").css("display", "none");
			}

			for(j=0;j<4;j++){
				poc=0;
				merania[j] = [];
				hodnota[j] = [];
				ampers[j] = [];
				for(i=0;i<data[j].length;i++){
					poc++;
					merania[j][i]="Measurement "+poc;
					if(range[j] == '300mA'){
						ampers[j][i] = data[j][i];
						hodnota[j][i] = null;
					}
					else{
						hodnota[j][i]=data[j][i];
						ampers[j][i] = null;
					}
					
				}
			}

			for (i=0;i<4;i++) {
				chardata[i] = {
				labels: merania[i],
				datasets: [
					{
						label: "Voltage",
						backgroundColor: 'rgba(255,0,0,1)',
						borderColor: 'rgba(255,0,0,1)',
						data: hodnota[i],
						fill:false
					},{
						label: "Ampers",
						backgroundColor: 'rgba(0,0,255,1)',
						borderColor: 'rgba(0,0,255,1)',
						data: ampers[i],
						fill: false
					}
				]
				};
			}


			var ctx = $("#myFirstChart");
			var myChart0 = new Chart(ctx, {
    			type: 'line',
    			data: chardata[0],
    			options:
     			{
     				legend: {
			            display: true,
			        },

     				title: {
						display: true,
						text: chartsName[0]
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
			var myChart1 = new Chart(ctx, {
    			type: 'line',
    			data: chardata[1],
    			options:
     			{
     				legend: {
			            display: true,
			        },
     				title: {
						display: true,
						text: chartsName[1]
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

			var ctx = $("#myThirdChart");
			var myChart2 = new Chart(ctx, {
    			type: 'line',
    			data: chardata[2],
    			options:
     			{
     				legend: {
			            display: true,
			        },
     				title: {
						display: true,
						text: chartsName[2]
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

			var ctx = $("#myFourthChart");
			var myChart3 = new Chart(ctx, {
    			type: 'line',
    			data: chardata[3],
    			options:
     			{
     				legend: {
			            display: true,
			        },
     				title: {
						display: true,
						text: chartsName[3]
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
			
			graphs[0] = myChart0;
			graphs[1] = myChart1;
			graphs[2] = myChart2;
			graphs[3] = myChart3;
			

			$("#buttonSet").click(function(){
				resistance = document.getElementById("res").value;
				document.getElementById("id04").style.display = "none";		
				console.log(resistance);
				
				if((resistance!="" || resistance!=0)){
					if(range[0]=='300mA'){
						myChart0.data.datasets[0].data = '';	
						hodnota[0]=[0];
					}

					if(range[0]!='300mA'){
						myChart0.data.datasets[1].data = '';	
						ampers[0]=[0];
					}

					if(range[1]=='300mA'){
						myChart1.data.datasets[0].data = '';	
						hodnota[1]=[0];
					}

					if(range[1]!='300mA'){
						myChart1.data.datasets[1].data = '';	
						ampers[1]=[0];
					}
					
					if(range[2]=='300mA'){
						myChart2.data.datasets[0].data = '';	
						hodnota[2]=[0];
					}

					if(range[2]!='300mA'){
						myChart2.data.datasets[1].data = '';	
						ampers[2]=[0];
					}

					if(range[3]=='300mA'){
						myChart3.data.datasets[0].data = '';	
						hodnota[3]=[0];
					}

					if(range[3]!='300mA'){
						myChart3.data.datasets[1].data = '';	
						ampers[3]=[0];
					}
				}

				if(resistance!=0 && resistance!=''){
					for(i=0;i<4;i++){
						for(j=0;j<data[i].length;j++){
							if(range[i]=='300mA'){
								hodnota[i][j] = ampers[i][j]*resistance;
							}
							else{
								ampers[i][j] = hodnota[i][j]/resistance;
							}
						}
					console.log(ampers[i]);
					console.log(hodnota[i]);
				}
				}
				
				if((resistance=="" || resistance==0)){
					if(range[0]=='300mA'){
						myChart0.data.datasets[0].data = '';	
						hodnota[0]='';
					}

					if(range[0]!='300mA'){
						myChart0.data.datasets[1].data = '';	
						ampers[0]='';
					}

					if(range[1]=='300mA'){
						myChart1.data.datasets[0].data = '';	
						hodnota[1]='';
					}

					if(range[1]!='300mA'){
						myChart1.data.datasets[1].data = '';	
						ampers[1]='';
					}
					
					if(range[2]=='300mA'){
						myChart2.data.datasets[0].data = '';	
						hodnota[2]='';
					}

					if(range[2]!='300mA'){
						myChart2.data.datasets[1].data = '';	
						ampers[2]='';
					}

					if(range[3]=='300mA'){
						myChart3.data.datasets[0].data = '';	
						hodnota[3]='';
					}

					if(range[3]!='300mA'){
						myChart3.data.datasets[1].data = '';	
						ampers[3]='';
					}
				}	
				
				myChart0.data.datasets[0].data = hodnota[0];							
				myChart1.data.datasets[0].data = hodnota[1];							
				myChart2.data.datasets[0].data = hodnota[2];							
				myChart3.data.datasets[0].data = hodnota[3];	
				myChart0.data.datasets[1].data = ampers[0];							
				myChart1.data.datasets[1].data = ampers[1];							
				myChart2.data.datasets[1].data = ampers[2];							
				myChart3.data.datasets[1].data = ampers[3];		
								
				myChart0.update();
				myChart1.update();
				myChart2.update();
				myChart3.update();
			});

			$(".showAmpers").click(function(){
				
				if(stavA){
					stavA=0;
					myChart0.data.datasets[1].data = '';							
					myChart1.data.datasets[1].data = '';							
					myChart2.data.datasets[1].data = '';							
					myChart3.data.datasets[1].data = '';
					myChart0.update();
					myChart1.update();
					myChart2.update();
					myChart3.update();
				}
				else{
					stavA=1;
					myChart0.data.datasets[1].data = ampers[0];							
					myChart1.data.datasets[1].data = ampers[1];							
					myChart2.data.datasets[1].data = ampers[2];							
					myChart3.data.datasets[1].data = ampers[3];
					myChart0.update();
					myChart1.update();
					myChart2.update();
					myChart3.update();
				}
			});

			$(".showVoltage").click(function(){
				
				if(stavV){
					stavV=0;
					myChart0.data.datasets[0].data = '';							
					myChart1.data.datasets[0].data = '';							
					myChart2.data.datasets[0].data = '';							
					myChart3.data.datasets[0].data = '';
					myChart0.update();
					myChart1.update();
					myChart2.update();
					myChart3.update();
				}
				else{
					stavV=1;
					myChart0.data.datasets[0].data = hodnota[0];							
					myChart1.data.datasets[0].data = hodnota[1];							
					myChart2.data.datasets[0].data = hodnota[2];							
					myChart3.data.datasets[0].data = hodnota[3];
					myChart0.update();
					myChart1.update();
					myChart2.update();
					myChart3.update();
				}
			});
			
		
});
