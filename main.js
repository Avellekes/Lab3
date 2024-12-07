function setDynamicBackground() {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 12) {
      document.body.style.backgroundColor = '#87CEEB';
  } else if (hour >= 12 && hour < 18) {
      document.body.style.backgroundColor = '#FFD700';
  } else if (hour >= 18 && hour < 21) {
      document.body.style.backgroundColor = '#FF8C00';
  } else {
      document.body.style.backgroundColor = '#2F4F4F'; 
  }
}

function startImageSlideshow(interval) {
  let images = [
    "images/tea.jfif",
    "images/ulun.jpg",
    "images/puer.jpg",
    "images/greentea.png",
    "images/blacktea.jpg"
  ];
  let currentIndex = 0;
  setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      document.getElementById('current-image').src = images[currentIndex];
  }, interval);
}

function generateTable() {
  const min = parseInt(document.getElementById('min-value').value, 10);
  const max = parseInt(document.getElementById('max-value').value, 10);
  const table = document.getElementById('number-table');
  table.innerHTML = ''; 

  for (let i = 0; i < 10; i++) {
      const row = document.createElement('tr');
      for (let j = 0; j < 10; j++) {
          const cell = document.createElement('td');
          cell.textContent = Math.floor(Math.random() * (max - min + 1)) + min;
          cell.className = (i + j) % 2 === 0 ? 'light' : 'dark';
          row.appendChild(cell);
      }
      table.appendChild(row);
  }
}

window.onload = function () {
  const interval = prompt('Введіть інтервал зміни зображень у мілісекундах:', '3000');
  if (interval && !isNaN(interval)) {
      startImageSlideshow(parseInt(interval, 10));
  }
  setDynamicBackground();
};
