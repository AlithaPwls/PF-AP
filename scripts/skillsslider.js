const hardBtn = document.getElementById("hard-btn");
const softBtn = document.getElementById("soft-btn");
const hardSkills = document.querySelector(".hard-skills");
const softSkills = document.querySelector(".soft-skills");

hardBtn.addEventListener("click", () => {
  hardBtn.classList.add("active");
  softBtn.classList.remove("active");
  hardSkills.style.display = "grid";
  softSkills.style.display = "none";
});

softBtn.addEventListener("click", () => {
  softBtn.classList.add("active");
  hardBtn.classList.remove("active");
  softSkills.style.display = "grid";
  hardSkills.style.display = "none";
});

