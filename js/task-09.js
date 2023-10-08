function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonGenerationColor = document.querySelector('.change-color');
const NameGeneratedColor = document.querySelector('.color')

buttonGenerationColor.addEventListener('click', backgroundReplacement)

function backgroundReplacement () {

const backgroundBody = getRandomHexColor();
document.body.style.background = backgroundBody;
NameGeneratedColor.textContent = backgroundBody;

}

