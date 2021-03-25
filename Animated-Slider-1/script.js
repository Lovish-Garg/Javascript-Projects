const mainPath = '/C:/Users/lovis/Pictures/Images/';
const imageType = '.jpg';
const images = [
	'car1',
 	'car2',
 	'car3',
 	'steer1'
	];

const imageTag = document.querySelector('img');

const totalImages = images.length;
let currentIndex = 0;

function stopAnimation()
{
	imageTag.style.opacity = 1;
	imageTag.setAttribute('class', 'animation');
	imageTag.addEventListener('animationend', ()=>{
	imageTag.removeAttribute('class');
	});
}

stopAnimation();

function prevImage()
{
	imageTag.style.opacity = 0;
	--currentIndex;

	if (currentIndex < 0)
		currentIndex = totalImages - 1;

	imageTag.src = mainPath + images[currentIndex] + imageType;

	stopAnimation();
}

function nextImage()
{
	imageTag.style.opacity = 0;
	++currentIndex;

	if (currentIndex >= totalImages )
		currentIndex = 0;

	imageTag.src = mainPath + images[currentIndex] + imageType;
	stopAnimation();
}

