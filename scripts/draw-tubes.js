function make_tube () {
	document.body.style.cursor = "crosshair";
	drawingTubes = true;	
}
function drawTube () {
	ctx.beginPath();
	let np = newTubePath;
	ctx.moveTo(np[0][0],np[0][1]);
	for (let i=1; i < np.length; i++) {
		ctx.lineTo(np[i][0],np[i][1]);
	}
	ctx.stroke();
	drawingTubes = false;
	newTubePath.length = 0;
	document.body.style.cursor = 'auto';
}


	
