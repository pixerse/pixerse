var wrapper = document.getElementById('wrapper');
var form = document.getElementById('form');
var text = document.getElementById('text');

var textArray = {
	'Pixerse': 'Pixerse - Pixels of Metaverse.',
	'Fancene': 'Fancene - QR Code Scanner and Generator.',
	'QrCodeScan': 'QCS - Create and Scan Colored QR codes for Free.'
};

form.onchange = function change() {

	var newVal = getNewValue();
	wrapper.style.flexWrap = newVal;
	text.innerHTML = textArray[newVal];

}

function getNewValue() {

	var result = '';

	for (var i = 0; i < form.options.length; i++) {
		if (form.options[i].selected == true) {
			result = form.options[i].value;
		}
	}

	return result;

}
