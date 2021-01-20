const scrollBtn = document.querySelector(".scroll");

window.addEventListener("scroll", () => {
  const windo = window.pageYOffset;

  about.offsetTop < windo
    ? scrollBtn.classList.add("appear")
    : scrollBtn.classList.remove("appear");
});

//smooth scrolling

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 600,
});
