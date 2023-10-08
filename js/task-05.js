
const inputElem = document.getElementById('name-input');
let spanElem = document.getElementById('name-output');



inputElem.addEventListener('input', handleTextInput) 

function handleTextInput ()  {

  if (inputElem.value.trim() === ''){
    spanElem.textContent = "Anonymous";;
  }
else{
  spanElem.textContent = event.currentTarget.value
  console.log(spanElem);
}
  }