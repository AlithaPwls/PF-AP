/* =======================================================
   PORTFOLIO ANIMATIES – Alitha Pauwels
   Minimalistische, subtiele interacties
======================================================= */

/* === 1. SCROLL REVEAL EFFECT ==========================
   Laat secties zacht in beeld verschijnen bij scrollen
======================================================= */
const revealElements = document.querySelectorAll(".about-project, .visuals, .reflection");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = `${i * 0.2}s`;
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.15 });

revealElements.forEach((el) => revealObserver.observe(el));

/* === 2. STICKY HEADER ANIMATIE ========================
   Verandert de header licht bij scroll (depth effect)
======================================================= */
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* === 3. SCROLL PROGRESS BAR ===========================
   Dunne rode lijn bovenaan toont scroll-voortgang
======================================================= */
const progressBar = document.createElement("div");
Object.assign(progressBar.style, {
  position: "fixed",
  top: 0,
  left: 0,
  height: "5px",
  background: "rgba(107,30,30,0.6)",
  zIndex: "9999",
  transition: "width 0.1s linear",
});
document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  progressBar.style.width = `${scrollPercent}%`;
});

/* === 4. HERO PARALLAX GLOW ============================
   Zachte spotlight die meebeweegt met de muis
======================================================= */
const hero = document.querySelector(".intro");

if (hero) {
  const glow = document.createElement("div");
  Object.assign(glow.style, {
    position: "absolute",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(107,30,30,0.15) 0%, transparent 70%)",
    pointerEvents: "none",
    filter: "blur(80px)",
    transition: "transform 0.15s ease-out",
    zIndex: 0,
  });
  hero.appendChild(glow);

  hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();
    const x = e.clientX - rect.left - glow.offsetWidth / 2;
    const y = e.clientY - rect.top - glow.offsetHeight / 2;
    glow.style.transform = `translate(${x}px, ${y}px)`;
  });
}

/* === 5. MAGNETIC BUTTONS ==============================
   Knoppen reageren subtiel op muispositie
======================================================= */
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0, 0)";
  });
});


