$(document).ready(function(){
	var stav = 1;
	$(".container").on("click",function(){
		if (stav) {
			$(".navLinks").css("display","block");
			stav--;
		}
		else{
			$(".navLinks").css("display","none");
			stav++;
		}
		
		$(".navLinks nav ul").toggleClass("open");
	});

});