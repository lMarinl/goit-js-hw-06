
const inputName = document.getElementById('font-size-control');
const spanName = document.getElementById('text');

inputName.addEventListener('input', fontSizeControl)

function fontSizeControl () {
  spanName.style.fontSize = `${inputName.value}px`
}