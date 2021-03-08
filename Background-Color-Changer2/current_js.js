const color = document.getElementById('btn');
const body = document.getElementById('main');
const addHexvalue = document.getElementById('addHex');
(function changeColor()
{
	color.addEventListener('click', changeColor);
	let colorOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];// all hex-values 

	let hex = '#';

	for (let i = 0; i < 6; ++i)
	{
		let randNum = Math.floor(Math.random() * colorOptions.length);
		hex += colorOptions[randNum];
	}
	addHexvalue.innerHTML = hex;
	body.style.backgroundColor = hex;
})();
