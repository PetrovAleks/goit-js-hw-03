const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', e => {
  e.target.value.length == inputRef.dataset.length
    ? inputRef.setAttribute('class', 'valid')
    : inputRef.setAttribute('class', 'invalid');
});
console.log(inputRef);
