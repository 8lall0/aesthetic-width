document.addEventListener('DOMContentLoaded', function() {
	var btnArray = ['~', '©', '®'];

	var field = document.getElementById('intext');
	var message = document.getElementById('copytext');
	var btns = document.getElementById('specButtons');

    var sub = document.getElementById('fullwsub');
    var til = document.getElementById('til');
    var cop = document.getElementById('cop');
    var roy = document.getElementById('roy');
    
    sub.addEventListener('click', function() {
        convertAndCopy(field);
        fadeOutIn(message, 1000);
    });
	addBtns(btns, btnArray, field);
});

function addBtns(elem, array, intext) {
	for (var i = 0; i < array.length; i++) { (
		function (i) {
			var btn = document.createElement("button");
			var t = document.createTextNode(array[i]);
			btn.appendChild(t);
			elem.appendChild(btn);
			btn.addEventListener('click', function() {
				intext.value += array[i];
			});
		}) (i);
	}
}

function convertAndCopy(elem) {
	const fwidth = 0xFEE0;
	elem.value = elem.value.replace(/[\u0000-\u007F]/g, function(ch) {
		if (ch != " ") {
			return String.fromCharCode(ch.charCodeAt(0) + fwidth);	
		} else {
			return " ";
		}
		
	});

	elem.focus();
	elem.select();
	document.execCommand("Copy", true);
	elem.blur();
}

function fadeOutIn(elem, speed ) {
	if (!elem.style.opacity) {
		elem.style.opacity = 1;
	}
	var outInterval = setInterval(function() {
		elem.style.opacity -= 0.02;
		if (elem.style.opacity <= 0) {
			clearInterval(outInterval);
		}
	}, speed/50 );
}