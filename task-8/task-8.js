const buttonRenderRef = document.querySelector('button[data-action="render"]');
const boxRef = document.querySelector('#boxes');
const buttonDestroyRef = document.querySelector(
  'button[data-action="destroy"]',
);
const inputRef = document.querySelector('input');

function colorGen() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}+${g}+${b})`;
}
const maxInputNumbers = Number(inputRef.getAttribute('max'));

function createBoxes() {
  const valueInput = document.querySelector('input').value;
  for (let i = 0; i < valueInput && i < maxInputNumbers; i += 1) {
    const newDiv = document.createElement('div');
    const sizeValue = 30 + 10 * i;

    newDiv.style.width = `${sizeValue}px`;
    newDiv.style.height = `${sizeValue}px`;

    newDiv.style.backgroundColor = colorGen();
    boxRef.appendChild(newDiv);
  }
}

const destroyBoxes = function() {
  const destroyBoxElement = document.querySelectorAll('#boxes > div');
  destroyBoxElement.forEach(el => {
    el.remove();
  });
};

buttonDestroyRef.addEventListener('click', destroyBoxes);
buttonRenderRef.addEventListener('click', createBoxes);
console.log(document);
