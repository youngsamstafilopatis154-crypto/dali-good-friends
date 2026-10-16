const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
}));

const form = document.querySelector('#inquiry-form');
const notes = document.querySelector('#notes');
const noteCount = document.querySelector('#note-count');
const result = document.querySelector('#inquiry-result');
const inquiryText = document.querySelector('#inquiry-text');
const copyButton = document.querySelector('#copy-button');
const copyStatus = document.querySelector('#copy-status');

notes.addEventListener('input', () => { noteCount.textContent = notes.value.length; });

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const interest = new FormData(form).get('interest');
  const date = document.querySelector('#travel-date').value || '日期还没确定';
  const size = document.querySelector('#party-size').value;
  const extra = notes.value.trim();
  inquiryText.textContent = `你好，我想了解 Dali 交个好朋友的${interest}体验。计划日期：${date}；同行人数：${size}。${extra ? `补充说明：${extra}` : '想请你推荐合适的当期活动，并说明团期、费用、体力要求和注意事项。'}`;
  result.hidden = false;
  copyStatus.textContent = '';
  result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(inquiryText.textContent);
    copyStatus.textContent = '已复制';
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(inquiryText);
    selection.removeAllRanges();
    selection.addRange(range);
    copyStatus.textContent = '请按 ⌘C 复制';
  }
});
