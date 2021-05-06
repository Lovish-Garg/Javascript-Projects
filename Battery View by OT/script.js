let percentage = document.querySelector('.percentage');

let percent = document.querySelector('.percent');

// This is Battery API and it isnot supported in Firefox
navigator.getBattery().then(function(battery)
{
	percentage.style.width = battery.level * 100 + '%';

	percent.innerHTML = battery.level * 100 + '%';
})

let sec = document.querySelector('.sec');

let toggle = document.querySelector('.toggle');

let icon = document.querySelector('.icon');

toggle.onclick = function ()
{
	sec.classList.toggle('dark');
	let arr = icon.classList;
	
	let found = false;
	let len = arr.length;
	
	for (let i = 0; i < len; ++i)
	{
		if ('fa-moon' === arr[i])
			found = true;
	}

	if (found)
	{
		icon.classList.replace('fa-moon', 'fa-sun');
	}
	else
	{
		icon.classList.replace('fa-sun', 'fa-moon');
	}
}