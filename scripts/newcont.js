const ctx = canvas.getContext('2d');
var drawingTubes = false;
var newTubePath = [];
function now_w () {
	return parseInt(document.getElementById('wid').value);
}
function now_h () {
	return parseInt(document.getElementById('hei').value);
}
function now_p () {
	return parseInt(document.getElementById('perc').value);
}
add_cont = function () {
	bodystyle.cursor = "cell";
	isAdding = true;
}

function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    return [x, y]
}

canvas.addEventListener ('mousedown', function(e) {
	if (isAdding==true) {
		let pos = getCursorPosition(canvas, e);
		isAdding=false;
		register(pos);
		bodystyle.cursor = "auto";
	} else if (drawingTubes==true) {
		let pos =  getCursorPosition(canvas, e);
		newTubePath.push(pos);
		if (newTubePath.length >= 4) {
			drawTube()
		}
	}
	ctx.clearRect(0,0,canvas.width,canvas.height);
	project_render();
});

clear_canvas = function () {			
	ctx.clearRect(0,0,canvas.width,canvas.height);
	clear_log();
}

register = function (pos) {
	let x = pos[0];
	let y = pos[1];
	cont = {
		size: [now_w(),now_h()],
		pos: [x,y],
		perc: now_p()
	}
	loglist.push(cont);
	project_render();
}

project_render = function () {
	loglist.forEach(item => {
		let w = item.size[0];
		let h = item.size[1];
		let p = item.perc;
		let xc = item.pos[0]-(w/2);
		let yc = item.pos[1]-(h/2);
		render(xc, yc, w, h, p); 
	})
	update_log();
}

function render(xc,yc,w,h,p) {
	let water = canvas.getContext('2d');
	let reserv = canvas.getContext('2d');
	let lh = h*p/100;
	reserv.strokeStyle = 'red';
	reserv.strokeRect(xc,yc,w,h);
	water.fillStyle = 'blue';
	water.fillRect(xc,yc+(h-lh),w,lh);
}

document.addEventListener('mousemove', logKey);
var prev = canvas.getContext('2d');
function logKey (e) {
	if (isAdding) {
		let x = e.offsetX;
		let y = e.offsetY;
		let w = now_w();
		let h = now_p();
		let p = now_p();
		prev.clearRect(0, 0, canvas.width, canvas.height);;	
		render(x-(w/2),y-(h/2),w,h,p);
	}
}
