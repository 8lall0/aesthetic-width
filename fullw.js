const fwidth = 0xFEE0;

document.addEventListener('DOMContentLoaded', function() {
	var infield = document.getElementById('intext');
	var outfield = document.getElementById('outtext');

    var sub = document.getElementById('fullwsub');
    var cpy = document.getElementById('fullwcpy');
    var til = document.getElementById('til');
    var cop = document.getElementById('cop');
    var roy = document.getElementById('roy');
    
    sub.addEventListener('click', function() {
        convert();
    });
    cpy.addEventListener('click', function() {
    	selectField(outfield);
    })
    til.addEventListener('click', function() {
		addToText("~", infield);
	});
	cop.addEventListener('click', function() {
		addToText("©", infield);
	});
	roy.addEventListener('click', function() {
		addToText("®", infield);
	});
});

function convert() {
	var input = document.getElementById('intext').value;
	var output = input.replace(/[\u0000-\u007F]/g, function(ch) {
		if (ch != " ") {
			return String.fromCharCode(ch.charCodeAt(0) + fwidth);	
		} else {
			return " ";
		}
		
	});

	document.getElementById('outtext').value = output;
}

function addToText(text, field) {
	field.value += text;
}

function selectField(field) {
	field.focus();
	field.select();
	document.execCommand("Copy", true);
}