window.addEventListener('scroll', ()=>
{
	const content = document.querySelectorAll('.scroll-effect');

	content.forEach((ele)=>
	{
		const contentPosition = ele.getBoundingClientRect().top;
		const screenPositon = window.innerHeight;
		if (contentPosition < screenPositon)
		{
			ele.classList.add('active');
		}
		else
		{
			ele.classList.remove('active');
		}
	})
});