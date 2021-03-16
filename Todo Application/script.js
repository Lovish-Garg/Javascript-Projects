const ul = document.querySelector('.listTodo');

function addTodo()
{
	const input = document.getElementById('input1');
	const item = input.value;

	if (item === '')
	{
		return false;
	}

    const todo = document.createTextNode(item);

	// create list
	const li = document.createElement('li');
	li.setAttribute('class', 'cardTodo');

	// create checkbox
	const checkbox = document.createElement('input');
	checkbox.setAttribute('type', 'checkbox');

	// create a label
	const label = document.createElement('label');

	// ul > li
	ul.appendChild(li);

	// li > label
	li.appendChild(label);

	setTimeout(()=>
	{
		label.style.opacity = 0;
		// <label>item</label>
		label.appendChild(todo);
			// label > labelCheck
		label.appendChild(checkbox);

	}, 100);

	input.value = '';
}

function removeTodo()
{
	li = ul.children;
	const liLength = li.length;

	for (let index = 0; index <  liLength; ++index)
	{
		while (li[index] && li[index].children[0].children[0].checked)
		{
			ul.removeChild(li[index]);
		}
	}
}

function clearTodo()
{

	const choice = confirm('Are you sure.This can\'t be undone');

	if (choice === true)
	{
		const li = ul.children;
		const liLength = li.length;

		for (let index = 0; index <  liLength; ++index)
		{
			while (li[index])
			{
				ul.removeChild(li[index]);
			}
		}
	}
}