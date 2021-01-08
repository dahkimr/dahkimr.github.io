function stars() {
  let count = 50;
  let scene = document.querySelector('.banner');
  let i = 0;
  
  while (i < count) {
    let star = document.createElement('i');
    let x = Math.floor(Math.random() * window.innerWidth);

    let duration = Math.random() * (0.8 - 0.15) + 0.15;
    let h = Math.random() * 100;

    star.style.left = x + 'px';
    star.style.width = 2 + 'px';
    star.style.height = 80 + h + 'px';
    star.style.animationDuration = duration + 's';

    scene.appendChild(star)
    i++;
  }
}

stars();