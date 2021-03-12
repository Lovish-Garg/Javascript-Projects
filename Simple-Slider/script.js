const carImages = 
[
	'car1.jpg',	
	'steer1.jpg',
	'car2.jpg',
	'car3.jpg',
];

const path = 'Images\\';

const btnLeft = document.querySelector('.icon-left');
const btnRight = document.querySelector('.icon-right');
const img = document.querySelector('.img-container > img');

let count = 0;
let max = carImages.length - 1;

function changeImage()
{
	img.src = path + carImages[count];
}

function prevImage()
{
	if ((count - 1) === -1)
		count = max;

	else
		--count;

	changeImage();
}

function nextImage()
{
	if ((count + 1) === (max + 1))
		count = 0;

	else
		++count;

	changeImage();
}

btnLeft.onclick = prevImage;
btnRight.onclick = nextImage;
