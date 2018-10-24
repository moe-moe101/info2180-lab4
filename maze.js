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
	var ending = document.getElementById("end");
	ending.onmouseover = endMaze;
	
	var restart =document.getElementById("start");
	restart.onclick = refresh;
	
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

//Ex3
function endMaze(){
	if(touch){
		alert("You Loose. Try again");
	}
	if(!touch){
		alert("Congrats you win");
	}
}

//Ex 4
function refresh(){
	var bounds = document.querySelectorAll(".boundary");
	for(let i=0; i<bounds.length;i++){
		bounds[i].classList.remove("youlose");
	}
}
