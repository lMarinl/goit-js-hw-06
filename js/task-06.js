
const inputElem = document.getElementById('validation-input');
inputElem.addEventListener('blur', checkingFocus)

function checkingFocus () {
if (inputElem.value.length === 6){
  inputElem.classList.add('valid')
  inputElem.classList.remove('invalid')
}
else{
  inputElem.classList.add('invalid')
  inputElem.classList.remove('valid')
}
}
