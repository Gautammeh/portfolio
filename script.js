// ── THEME TOGGLE
const toggle = document.getElementById('themeToggle');
const html = document.documentElement;
let isDark = true;
function applyTheme() {
  html.setAttribute('data-theme', isDark ? 'dark' : 'light');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}
const saved = localStorage.getItem('theme');
if (saved === 'light') { isDark = false; applyTheme(); }
toggle.addEventListener('click', () => { isDark = !isDark; applyTheme(); });
toggle.addEventListener('keydown', e => { if(e.key==='Enter'||e.key===' '){isDark=!isDark;applyTheme();} });

// ── HAMBURGER
const ham = document.getElementById('hamburger');
const mob = document.getElementById('mobileMenu');
ham.addEventListener('click', () => {
  mob.classList.toggle('open');
  const open = mob.classList.contains('open');
  ham.querySelectorAll('span')[0].style.transform = open ? 'rotate(45deg) translate(4.5px, 4.5px)' : '';
  ham.querySelectorAll('span')[1].style.opacity = open ? '0' : '1';
  ham.querySelectorAll('span')[2].style.transform = open ? 'rotate(-45deg) translate(4.5px, -4.5px)' : '';
});
function closeMobile() { mob.classList.remove('open'); ham.querySelectorAll('span').forEach(s=>{s.style.transform='';s.style.opacity='1';}); }

// ── REVEAL ON SCROLL
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      // animate skill bars when visible
      e.target.querySelectorAll('.skill-bar-fill').forEach(b => b.classList.add('animated'));
    }
  });
}, { threshold: 0.12 });
reveals.forEach(r => observer.observe(r));

// animate skill bars that are inside already-visible skill cards on load
setTimeout(() => {
  document.querySelectorAll('.skill-card.visible .skill-bar-fill').forEach(b => b.classList.add('animated'));
}, 100);

// ── SMOOTH NAV SCROLL
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});
