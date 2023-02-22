import './template.html';
import './assets/styles/index.scss';

const cursor = document.querySelector('.cursor-animation__cursor');
let timeout;

const cursorMove = (e) => {
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.top = y + 'px';
  cursor.style.left = x + 'px';
  cursor.style.display = 'flex';

  const mouseStopped = () => {
    cursor.style.display = 'none';
    clearTimeout(timeout);
  };

  timeout = setTimeout(mouseStopped, 4000);
};

const cursorOut = () => {
  cursor.style.display = 'none';
};

document.addEventListener('mousemove', cursorMove);
document.addEventListener('mouseout', cursorOut);
