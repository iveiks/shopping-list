const ul = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  let currentInput = input.value;
  input.value = '';
  const li = document.createElement('li');
  const span = document.createElement('span');
  const deleteButton = document.createElement('button');
  li.appendChild(span);
  li.appendChild(deleteButton);
  deleteButton.textContent = 'Delete';
  span.textContent = currentInput;
  ul.appendChild(li);

  deleteButton.addEventListener('click', () => {
    ul.removeChild(li);
  });

  input.focus();
});
