
		add_cont = function () {
			bodystyle.cursor = "crosshair";
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
				render(pos);
				bodystyle.cursor = "auto";
			}
		});

		render = function (pos) {
			const ctx = canvas.getContext('2d');
			ctx.clearRect(0,0,canvas.width,canvas.height);
			let w = parseInt(document.getElementById('wid').value);
			let h = parseInt(document.getElementById('hei').value);
			let p = parseInt(document.getElementById('perc').value)/100;
			const reserv = canvas.getContext('2d');
			xc = pos[0]-(w/2);
			yc = pos[1]-(h/2);

			reserv.strokeStyle = 'red';
			reserv.strokeRect(xc,yc,w,h);
			const water = canvas.getContext('2d');
			water.fillStyle = 'blue';
			let lh = h*p
			water.fillRect(xc,yc+(h-lh),w,lh);
		}
