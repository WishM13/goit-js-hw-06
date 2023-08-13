function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const valueColor = document.querySelector('.color')
const btnChangeColor = document.querySelector('.change-color');

btnChangeColor.addEventListener('click', changeBodyColor);

function changeBodyColor(){
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;

  valueColor.textContent = randomColor;
}