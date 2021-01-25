// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const fontControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

// добавить слушатель на инпут
// записать функцию: если range увеличивается то увеличить шрифт редюсом от текущего до 20
// если ренж уменшается, то уменшить от текущего до начального значения
// добавить сет атрибут для изменения стилей

const textSize = () => {
  if (true) {
  }
};

fontControlRef.addEventListener('input', textSize);
