let defaultColor = '#000000';

const colors = {
  red: '#FF0000',
  yellow: '#FF9900'
}

const getRandomColor = () => {
  const color = Math.floor(Math.random()*16777215).toString(16);
  console.log("New Color", color);
  return `#${color}`;
}

const setDefaultColor = (color) => {
  defaultColor = color;
}

export { getRandomColor, defaultColor, setDefaultColor, colors };
export default getRandomColor;