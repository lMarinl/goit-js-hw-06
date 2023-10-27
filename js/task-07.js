
const inputName = document.getElementById('font-size-control');
const spanName = document.getElementById('text');

inputName.addEventListener('input', fontSizeControl)

spanName.style.fontSize = `${inputName.value}px`;

function fontSizeControl() {
  
  spanName.style.fontSize = `${inputName.value}px`
}

