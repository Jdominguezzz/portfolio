// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Project case study accordions
document.querySelectorAll('.project-toggle').forEach((btn) => {
  const detail = btn.nextElementSibling;
  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!isOpen));

    if (isOpen) {
      detail.style.maxHeight = null;
      detail.classList.remove('open');
    } else {
      detail.classList.add('open');
      detail.style.maxHeight = detail.scrollHeight + 'px';
    }
  });
});

// Recalculate open panel heights on resize (text reflow changes height)
window.addEventListener('resize', () => {
  document.querySelectorAll('.project-detail.open').forEach((detail) => {
    detail.style.maxHeight = detail.scrollHeight + 'px';
  });
});
