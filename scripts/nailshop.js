
  // 🎬 Auto-play video wanneer zichtbaar in beeld + fade-in
  const videos = document.querySelectorAll("video");

  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const video = entry.target;

      if (entry.isIntersecting) {
        video.classList.add("visible");
        video.play();
      } else {
        video.pause();
        video.classList.remove("visible");
      }
    });
  }, { threshold: 0.6 });

  videos.forEach((vid) => videoObserver.observe(vid));

