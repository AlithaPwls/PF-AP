

// fade-up animatie bij scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = `${i * 0.15}s`;
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
document.querySelectorAll('#about .para, #about .imageabout img').forEach(el => observer.observe(el));



const hero = document.querySelector('.hero');

hero.addEventListener('mousemove', (e) => {
  const rect = hero.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  hero.style.setProperty('--x', `${x}%`);
  hero.style.setProperty('--y', `${y}%`);
});

// Zorg dat de glow zacht terugkeert naar het midden als de muis weggaat
hero.addEventListener('mouseleave', () => {
  hero.style.setProperty('--x', '50%');
  hero.style.setProperty('--y', '50%');
});


