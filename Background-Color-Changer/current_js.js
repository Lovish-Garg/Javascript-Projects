let color = document.getElementById('btn');
let index = 4;// because 4th Index color is our default color

function changeColor()
{
	let colorOptions = ['red', 'yellow', 'orange', 'purple', '#17312e', 'aqua'];

	let randNum;
	do
	{
		randNum = Math.floor(Math.random() * 6);// this will generate a random number from 0 to 5
	}
	while(index == randNum);

	index = randNum;// This logic willnot let any color to repeat after one other

	color.style.backgroundColor = colorOptions[randNum];
}
