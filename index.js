const history = [];

const updateHistory = (event = '') => {
  const historyContainer = document.querySelector('.history-container');
  if (history.length > 5) history.shift();
  if (historyContainer) historyContainer.innerHTML = '';

  history.forEach(element => {
    const p = document.createElement('p');
    p.classList.add('history-event');
    p.innerHTML = element;
    historyContainer.appendChild(p);
  });

  history.push(event);
};

const updateEventContainer = (event = '') => {
  const eventsContainer = document.querySelector('.events-container');
  if (eventsContainer) eventsContainer.innerHTML = '';
  eventsContainer.innerHTML = event;
};

window.addEventListener('keydown', event => {
  const keySound = document.querySelector('#key-sound');
  const targetKey = document.querySelector(`div[data-key="${event.keyCode}"]`);

  targetKey.classList.add('pushed');
  keySound.currentTime = 0;
  keySound.volume = 0.1;
  keySound.play();

  updateEventContainer(`
    <div class="key-box">
      <h2>event.key</h2>
      <div>${event.key === ' ' ? 'Space' : event.key}</div>
      <p>The value of the key pressed.</p>
    </div>
    <div class="key-code-box">
      <h2>event.keyCode</h2>
      <div>${event.keyCode}</div>
      <p>the code associated with the key pressed.</p>
    </div>
  `)

  updateHistory(`
    <div class="history-event">
      <span>key: <b>${event.key === ' ' ? 'Space' : event.key}</b></span>
      <span class="separator">|</span>
      <span>keyCode: <b>${event.keyCode}</b></span>
    </div>
  `);
});

window.addEventListener('keyup', event => {
  const targetKey = document.querySelector(`div[data-key="${event.keyCode}"]`);

  if (targetKey.classList.contains('pushed')) {
    targetKey.classList.remove('pushed');
  }
});
