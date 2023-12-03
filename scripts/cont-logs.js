const log_area= document.getElementById('reser-prop');
var loglist = [];

function clear_log () {
	loglist.length = 0;
	update_log();
}
function update_log () {
	if (!loglist.length) {
		log_area.value = 'Click on ( 增加 ) to add a new container';
	}
	else {
		let message = '';
		loglist.forEach(item => {
			message += `  Container\n`+ 
				`position:${item.pos}\n`+
				`size:${item.size} \n`+
				`fill:${item.perc*100} \n\n`;
		})
		log_area.value = message;
	}
}
clear_log();
