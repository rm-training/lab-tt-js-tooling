import { getRandomColor, defaultColor, setDefaultColor } from './randomColor.js';

const anchors = document.querySelectorAll('a')

anchors.forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    const color = getRandomColor();
    setDefaultColor(color);
    console.log('Color App: Default is now', defaultColor);
    e.currentTarget.style.backgroundColor = color;
  })
})