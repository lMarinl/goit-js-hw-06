
const inputElem = document.getElementById('validation-input');
inputElem.addEventListener('blur', checkingFocus)

function checkingFocus () {
if (inputElem.value.length === Number(inputElem.dataset.length)){
  inputElem.classList.add('valid')
  inputElem.classList.remove('invalid')
 
}
else{
  inputElem.classList.add('invalid')
  inputElem.classList.remove('valid')
}
}

