const inputREf = document.querySelector('#name-input');

const outputRef = document.querySelector('#name-output');

inputREf.addEventListener('input', e => {
  if (e.target.value === '') {
    outputRef.textContent = 'незнакомец';
    return outputRef.textContent;
  }
  outputRef.textContent = e.target.value;
});
