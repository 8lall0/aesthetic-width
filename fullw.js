document.addEventListener('DOMContentLoaded', function() {
	const field = document.getElementById('intext'),
		txtBtn = document.querySelectorAll('.textBtn');
	for (var i = 0; i < txtBtn.length; i++) {
		txtBtn[i].addEventListener('click', function() {
			field.value += this.firstChild.data;
		});
	}
	document.getElementById('fullwsub').addEventListener('click', convertAndCopy, false);
});

function convertAndCopy() {
	const fwidth = 0xFEE0;
	const fld = document.getElementById('intext'),
		message = document.getElementById('copytext');
	fld.value = fld.value.replace(/[\u0000-\u007F]/g, function(ch) {
		if (ch != " ") {
			return String.fromCharCode(ch.charCodeAt(0) + fwidth);
		} else {
			return " ";
		}

	});
	fld.select();
	document.execCommand("Copy");
	fadeOutIn(message, 1000);
}

function fadeOutIn(elem, speed) {
	if (!elem.style.opacity) {
		elem.style.opacity = 1;
	}
	var outInterval = setInterval(function() {
		elem.style.opacity -= 0.02;
		if (elem.style.opacity <= 0) {
			clearInterval(outInterval);
		}
	}, speed / 50);
}