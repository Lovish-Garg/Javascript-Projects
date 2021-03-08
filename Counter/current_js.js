let count = 0;
let counter = document.getElementById('count');

function addCount()
{
	++count;
	counter.innerHTML = count;
}

function decrementCount()
{
	--count;
	counter.innerHTML = count;
}

function resetCount()
{
	count = 0;
	counter.innerHTML = 0;
}
