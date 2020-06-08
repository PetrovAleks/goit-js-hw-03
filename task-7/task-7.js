const controlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
controlRef.setAttribute('min', '1px');
controlRef.setAttribute('max', '100px');
controlRef.setAttribute('step', '1px');
controlRef.addEventListener('input', e => {
  textRef.style.fontSize = controlRef.value + 'px';
});
console.log(controlRef);
