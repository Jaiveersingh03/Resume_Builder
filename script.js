let x = -20;
let y = 20;
const cube = document.getElementById('cube');

document.addEventListener('keydown', (e) => {
  switch(e.key) {
    case 'ArrowUp': x -= 10; break;
    case 'ArrowDown': x += 10; break;
    case 'ArrowLeft': y -= 10; break;
    case 'ArrowRight': y += 10; break;
  }
  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
});
