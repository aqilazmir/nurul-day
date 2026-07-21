const restaurants = [
  'Sushi Zanmai 🍣',
  'Dolly Dim Sum 🥟',
  'ParaThai 🍜',
  'SHABU-YO 🥩',
  'Mr. Dakgalbi 🍗',
  'Thong Bowl 🍜',
  'Oriental Kopi 🍞',
  'Nando\\'s 🍗',
  'Johnny\\'s Restaurant 🍲',
  'Texas Chicken 🍗',
];

const drinks = [
  'ZUS Coffee ☕',
  'The Coffee Bean ☕',
  'ChaTraMue 🧋',
  'Kenangan Coffee ☕',
  'Baskin Robbins 🍦',
  'Beutea 🧋',
  'Cafe Amazon ☕'
];

const startBtn = document.getElementById('startBtn');
const pickerSection = document.getElementById('pickerSection');
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');

startBtn.addEventListener('click', () => {
  pickerSection.classList.remove('hidden');
  startBtn.parentElement.style.display = 'none';
});

musicBtn.addEventListener('click', async () => {
  try {
    await bgMusic.play();
    musicBtn.textContent = '🎵 Music Playing';
  } catch (e) {
    alert('Add a file named music.mp3 into the same folder as this website.');
  }
});

function animateSpin(elementId, items, callback) {
  const el = document.getElementById(elementId);
  let count = 0;

  const interval = setInterval(() => {
    el.textContent = items[Math.floor(Math.random() * items.length)];
    count++;

    if (count > 28) {
      clearInterval(interval);
      const finalItem = items[Math.floor(Math.random() * items.length)];
      el.textContent = '❤️ ' + finalItem + ' ❤️';
      el.style.transform = 'scale(1.08)';
      setTimeout(() => el.style.transform = 'scale(1)', 250);

      if (callback) callback();
    }
  }, 90);
}

function spinRestaurant() {
  animateSpin('restaurantResult', restaurants);
}

function spinDrink() {
  animateSpin('drinkResult', drinks, () => {
    document.getElementById('finalMessage').classList.remove('hidden');
  });
}