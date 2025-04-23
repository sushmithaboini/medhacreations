document.addEventListener("DOMContentLoaded", () => {
    // Slider functionality
    document.querySelectorAll(".slider").forEach(slider => {
      let slides = slider.querySelectorAll(".slide");
      let index = 0;
  
      slides[index].style.display = "block";
  
      let prevButton = slider.querySelector(".prev");
      let nextButton = slider.querySelector(".next");
  
      if (prevButton && nextButton) {
        prevButton.addEventListener("click", () => {
          index = (index - 1 + slides.length) % slides.length;
          updateSlides();
        });
  
        nextButton.addEventListener("click", () => {
          index = (index + 1) % slides.length;
          updateSlides();
        });
      }
  
      let startX = 0;
      let endX = 0;
  
      slider.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
      });
  
      slider.addEventListener("touchend", (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
      });
  
      function handleSwipe() {
        if (startX - endX > 50) {
          index = (index + 1) % slides.length;
          updateSlides();
        } else if (endX - startX > 50) {
          index = (index - 1 + slides.length) % slides.length;
          updateSlides();
        }
      }
  
      function updateSlides() {
        slides.forEach(slide => slide.style.display = "none");
        slides[index].style.display = "block";
      }
    });
  
    // Mobile dropdown toggle
    const dropBtn = document.querySelector(".dropbtn");
    const dropdown = document.querySelector(".dropdown");
  
    dropBtn.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdown.classList.toggle("active");
      }
    });
  });
  