
	
	//Part 1
	var bound1;
	
	window.onload = topLeftBound;
	function topLeftBound(){
		bound1 = document.getElementById("boundary1");
		bound1.onmouseover = turnRed;
	}
	
	
	function turnRed(){
		bound1.classList.add("youlose");
	}

