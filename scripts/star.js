function createStars() {
  let count = 80;
  let scene = document.querySelector('.banner');
  let i = 0;
  
  while (i < count) {
    let star = document.createElement('i');
    let x = Math.floor(Math.random() * screen.width);

    // first time everything comes down the same, need to fix
    let duration = Math.random() * (1.3 - 0.6) + 0.6;
    let h = Math.random() * 100;

    star.style.left = x + 'px';
    star.style.width = 2 + 'px';
    star.style.height = 100 + h + 'px';
    star.style.animationDuration = duration + 's';
    star.style.animationDelay = duration + 's';

    scene.appendChild(star)
    i++;
  }
}

function stopStars() {
  let stop = document.querySelector('.clickable');
  stop.style.visibility = 'hidden';
  
  let intro = document.querySelector('.intro');
  intro.addEventListener('animationend', () => {
    let stars = document.querySelectorAll('i');
    for (i = stars.length - 1; i >= 0; i--) {
      stars[i].remove();
    }
  });

  // also stop rocket
  $('#person').css('animation-play-state', 'paused');

  intro.classList.add('moveInIntro');
  intro.style.visibility = 'visible';
}