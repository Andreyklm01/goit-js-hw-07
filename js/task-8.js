// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
//после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
//Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.
// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes

{
  /* <div id="controls">
      <input type="number" min="0" max="100" step="1" />
      <button type="button" data-action="render">Создать</button>
      <button type="button" data-action="destroy">Очистить</button>
    </div>

    <div id="boxes"></div> */
}
const inputRef = document.querySelector('#controls-input');
const renderBtnRef = document.querySelector('[data-action="render"]');
const destroyBtnRef = document.querySelector('[data-action="destroy"]');

const boxesRef = document.querySelector('#boxes');

renderBtnRef.addEventListener('click', () => createBoxes(inputRef.value));
destroyBtnRef.addEventListener('click', () => destroyBoxes());

const createBoxes = amount => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const boxSize = 30 + i * 10;
    const createElem = document.createElement('div');
    createElem.style.cssText = `display:inline-block; border: 1px solid black; width: ${boxSize}px; height: ${boxSize}px; background-color: rgb(${randomColor()},${randomColor()},${randomColor()})`;
    fragment.appendChild(createElem);
  }
  boxesRef.appendChild(fragment);
};

const destroyBoxes = () => (boxesRef.innerHTML = '');

function randomColor() {
  return Math.floor(Math.random() * 256);
}
