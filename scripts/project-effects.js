// === SCROLL REVEAL EFFECT ===
const revealElements = document.querySelectorAll(".about-project, .visuals, .reflection");
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = `${i * 0.2}s`;
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });
revealElements.forEach((el) => revealObserver.observe(el));

// === STICKY HEADER ANIMATIE ===
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) header.classList.add("scrolled");
  else header.classList.remove("scrolled");
});

// === SCROLL PROGRESS BAR ===
const progressBar = document.createElement("div");
progressBar.style.position = "fixed";
progressBar.style.top = 0;
progressBar.style.left = 0;
progressBar.style.height = "3px";
progressBar.style.background = "#6B1E1E";
progressBar.style.zIndex = "9999";
progressBar.style.transition = "width 0.1s linear";
document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  progressBar.style.width = `${scrollPercent}%`;
});

// === HERO PARALLAX GLOW ===
const hero = document.querySelector(".intro");
const glow = document.createElement("div");
glow.style.position = "absolute";
glow.style.width = "400px";
glow.style.height = "400px";
glow.style.borderRadius = "50%";
glow.style.background = "radial-gradient(circle, rgba(107,30,30,0.25) 0%, transparent 70%)";
glow.style.pointerEvents = "none";
glow.style.filter = "blur(80px)";
glow.style.transition = "transform 0.15s ease-out";
hero.appendChild(glow);

hero.addEventListener("mousemove", (e) => {
  const rect = hero.getBoundingClientRect();
  const x = e.clientX - rect.left - glow.offsetWidth / 2;
  const y = e.clientY - rect.top - glow.offsetHeight / 2;
  glow.style.transform = `translate(${x}px, ${y}px)`;
});

// === MAGNETIC BUTTONS ===
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0, 0)";
  });
});

// === SMOOTH SCROLL-TO-TOP BUTTON ===
const topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.right = "30px";
topBtn.style.background = "#6B1E1E";
topBtn.style.color = "#F7F3EF";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.width = "45px";
topBtn.style.height = "45px";
topBtn.style.cursor = "pointer";
topBtn.style.opacity = "0";
topBtn.style.transition = "opacity 0.4s ease, transform 0.3s ease";
topBtn.style.boxShadow = "0 6px 25px rgba(0,0,0,0.15)";
topBtn.style.fontSize = "1.4rem";
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    topBtn.style.opacity = "1";
    topBtn.style.transform = "translateY(0)";
  } else {
    topBtn.style.opacity = "0";
    topBtn.style.transform = "translateY(20px)";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
