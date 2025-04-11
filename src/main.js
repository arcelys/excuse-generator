import './style.css'
import { excuses } from './data/excuses.js'

const output = document.getElementById('excuse');
const generateBtn = document.getElementById('generateBtn');
const copyMsg = document.getElementById('copyMsg');
const categorySelect = document.getElementById('category-select');

Object.keys(excuses).forEach(cat => {
  const option = document.createElement('option');
  option.value = cat;
  option.textContent = cat;
  categorySelect.appendChild(option);
});

generateBtn.addEventListener('click', () => {
  let category = categorySelect.value;
  if (!category) return;

  const list = excuses[category];
  const excuse = list[Math.floor(Math.random() * list.length)]
  
  output.textContent = excuse;
  output.classList.remove('hidden');
  copyMsg.textContent = '';
});

output.addEventListener('click', () => {
  if (!output.textContent) return;
  
  navigator.clipboard.writeText(output.textContent)
    .then(() => {copyMsg.textContent = `Скопированно: "${output.textContent}"`;
    setTimeout(() => {
      copyMsg.textContent = '';
    }, 2000);
  });
});