const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const ulEl = document.querySelector('#ingredients');

// for (const ingredient of ingredients){
//   const liEl = document.createElement('li');
//   liEl.classList.add('item');
//   liEl.textContent = ingredient;
//   ulEl.appendChild(liEl);
// }



const listEl = document.querySelector('#ingredients');

const createdList = ingredients.map((ingredient) => {
  const liEl = document.createElement('li');
    liEl.classList.add('item');
    liEl.textContent = ingredient;  
    listEl.appendChild(liEl);
})
