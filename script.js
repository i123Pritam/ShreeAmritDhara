// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const navMobile = document.getElementById('navMobile');
const menuIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', () => {
  const open = navMobile.classList.toggle('open');
  menuIcon.className = open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
});

// Close mobile menu on link click
navMobile.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navMobile.classList.remove('open');
    menuIcon.className = 'fa-solid fa-bars';
  });
});

// Active nav highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-desktop a');
window.addEventListener('scroll', () => {
  const y = window.scrollY + 120;
  let current = '';
  sections.forEach(sec => {
    if (sec.offsetTop <= y) current = sec.id;
  });
  navLinks.forEach(l => {
    l.classList.toggle('active', l.getAttribute('href') === '#' + current);
  });
});

// Form submit
document.getElementById('inquiryForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे।');
  e.target.reset();
});
