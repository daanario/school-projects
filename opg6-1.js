
function nteRod(x,n){
	
	return Math.pow(x,1/n);
	
}

function findRod(){
	
	var x = parseFloat(document.rodfind.ex.value);
	var n = parseFloat(document.rodfind.enn.value);
	
	document.getElementById("rod").innerHTML = nteRod(x,n);
	
}

