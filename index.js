const history = [];

const updateHistory = (event = '') => {
  const historyContainer = document.querySelector('.history-container');
  if (history.length > 5) {
    history.shift();
  }
  if (historyContainer) {
    historyContainer.innerHTML = '';
  }

  history.forEach(element => {
    const p = document.createElement('p');
    p.classList.add('history-event');
    p.innerHTML = element;
    historyContainer.appendChild(p);
  });

  history.push(event);
};

window.addEventListener('keydown', event => {
  const keySound = document.querySelector('#key-sound');
  const targetKey = document.querySelector(`div[data-key="${event.keyCode}"]`);

  targetKey.classList.add('active');
  keySound.currentTime = 0;
  keySound.play();

  updateHistory(`
    <div class="history-event">
      <span>key: ${event.key}</span>
      <span>keyCode: ${event.keyCode}</span>
    </div>
`);
});

window.addEventListener('keyup', event => {
  const targetKey = document.querySelector(`div[data-key="${event.keyCode}"]`);

  if (targetKey.classList.contains('active')) {
    targetKey.classList.remove('active');
  }
});
