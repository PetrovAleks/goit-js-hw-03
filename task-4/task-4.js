const buttonsDecrementRef = document.querySelector(
  'button[data-action="decrement"]',
);
const buttonsIncrementRef = document.querySelector(
  'button[data-action="increment"]',
);
const inputRef = document.querySelector('#value');

let counterValue = 0;

buttonsDecrementRef.addEventListener('click', function() {
  counterValue -= 1;
  inputRef.textContent = counterValue;
});
buttonsIncrementRef.addEventListener('click', () => {
  counterValue += 1;
  inputRef.textContent = counterValue;
});
