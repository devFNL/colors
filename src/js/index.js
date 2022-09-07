const boton = document.getElementById('boton');

function randomNum(max) {
	return Math.floor(Math.random() * max);
}

function generateRGBColorString() {
	return `RGB(${randomNum(255)}, ${randomNum(255)}, ${randomNum(255)})`;
}

function clickColorChangeHandler() {
	const colorString = generateRGBColorString();
	const $rgbColor = document.querySelector('p');
	$rgbColor.innerText = colorString;
	document.querySelector('body').style.backgroundColor = colorString;
	boton.style.color = colorString;
}

boton.onclick = clickColorChangeHandler;
