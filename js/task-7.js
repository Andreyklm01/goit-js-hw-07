// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const fontControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const changeFontSize = () => {
  textRef.style.fontSize = fontControlRef.value + 'px';
};

fontControlRef.addEventListener('input', changeFontSize);
