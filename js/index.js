

  window.addEventListener("scroll", () => {
    var windo = window.pageYOffset;

    if (about.offsetTop < windo ) {
      
      document.querySelector(".scroll").classList.add("appear");
     
    }else{
      document.querySelector(".scroll").classList.remove("appear");

    }
  });


   //smooth scrolling

   const scroll = new SmoothScroll('a[href*="#"]',{
    speed:600
  });
