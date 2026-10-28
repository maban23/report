const name = '민지성';
const hour = new Date().getHours();

function greet(name) {
  return `안녕하세요, ${name}님!`;
}

function hello(hour) {
  if (hour >= 12) {
    return '좋은 오후입니다.';
  } else {
    return '좋은 아침입니다.';
  }
}

const greetings = [
  `${greet(name)} ${hello(hour)}`,
  '오늘도 멋진 하루를 시작해볼까요?',
  '웹 페이지가 점점 예뻐지고 있어요!',
  '코딩은 어렵지만, 성장하는 재미가 있어요!',
  '배우는 만큼 더 멋진 결과물이 나올 거예요.'
];

let greetingIndex = 0;

const greetingEl = document.querySelector('#greeting');
const changeGreetingBtn = document.querySelector('#changeGreetingBtn');
const themeToggleBtn = document.querySelector('#themeToggleBtn');
const guestbookForm = document.querySelector('#guestbookForm');
const guestbookList = document.querySelector('#guestbookList');

function updateGreeting() {
  if (!greetingEl) return;
  greetingIndex = (greetingIndex + 1) % greetings.length;
  greetingEl.textContent = greetings[greetingIndex];
}

function applyTheme(isDark) {
  document.body.classList.toggle('dark', isDark);

  if (themeToggleBtn) {
    themeToggleBtn.textContent = isDark ? '라이트 모드' : '다크 모드';
    themeToggleBtn.setAttribute('aria-label', isDark ? '라이트 모드로 전환' : '다크 모드로 전환');
  }
}

if (changeGreetingBtn) {
  changeGreetingBtn.addEventListener('click', updateGreeting);
}

const savedTheme = localStorage.getItem('report-theme');
const initialTheme = savedTheme === 'dark';
applyTheme(initialTheme);

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('dark');
    applyTheme(isDark);
    localStorage.setItem('report-theme', isDark ? 'dark' : 'light');
  });
}

if (greetingEl) {
  greetingEl.textContent = greetings[0];
}

if (guestbookForm && guestbookList) {
  guestbookForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');

    if (!nameInput || !emailInput || !messageInput) return;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !email || !message) {
      return;
    }

    console.log(`이름: ${name}`);
    console.log(`이메일: ${email}`);
    console.log(`메시지: ${message}`);

    const item = document.createElement('article');
    item.className = 'guestbook-item';
    item.innerHTML = `
      <p class="guestbook-name">이름: ${name}</p>
      <p class="guestbook-email">이메일: ${email}</p>
      <p class="guestbook-message">메시지: ${message}</p>
    `;

    guestbookList.prepend(item);
    guestbookForm.reset();
  });
}

console.log(hour);
console.log(greetings[0]);