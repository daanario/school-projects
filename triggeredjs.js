
function init() {
	//Get a reference for our touch sensitive element
	var touchzone = document.getElementById("touchzone");
	//Add an event handler for the touchstart event
	touchzone.addEventListener("touchstart", touchHandler, false);
}

function touchHandler(event) {
	//Write the coordinates of the touch to the div (id = koordinater)
	
	document.getElementById("koordinater").innerHTML = 'x: ' + event.touches[0].pageX + ', y: ' + event.touches[0].pageY;
}