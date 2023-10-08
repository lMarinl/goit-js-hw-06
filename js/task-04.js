
let counterValue = 0;

const  buttonSubtraction = document.querySelector('button[data-action="decrement"]');
const  buttonAdd = document.querySelector('button[data-action="increment"]');
const counterSpan = document.getElementById('value');

const clickOnButtonAdd = () => {
  counterValue +=1;
  counterSpan.textContent = counterValue

}

const clickOnButtonSubtraction = () =>{
  counterValue -= 1;
  counterSpan.textContent = counterValue;
}
buttonSubtraction.addEventListener('click', clickOnButtonSubtraction );
buttonAdd.addEventListener('click', clickOnButtonAdd)


console.log(counterSpan);




