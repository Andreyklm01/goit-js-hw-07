// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');
// console.log(ingredientsRef);

const ingredientsItems = ingredients.map(item => {
  const createList = document.createElement('li');
  createList.textContent = item;
  return createList;
});

ingredientsRef.append(...ingredientsItems);
