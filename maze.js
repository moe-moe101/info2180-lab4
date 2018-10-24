//Lab4 Done by Moesha Amos

	
	//Ex 1
	var bound1;
	
	window.onload = allBounds;/*topLeftBound;*/
	function topLeftBound(){
		bound1 = document.getElementById("boundary1");
		bound1.onmouseover = turnRed;
	}
	
	
	

//Ex 2

//var size;
//var bounds;
//var i;

function allBounds(){
	var bounds = document.querySelectorAll(".boundary");
	//size = bounds.length;
	for(let i=0; i<bounds.length;i++){
		bounds[i].addEventListener("mouseover",turnRed);
	}
}

function turnRed(){
		touch = true;
		var bounds= document.querySelectorAll(".boundary");
		for(let i=0; i<bounds.length; i++){
			bounds[i].classList.add("youlose");
		}
}
