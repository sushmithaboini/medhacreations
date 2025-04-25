document.addEventListener("DOMContentLoaded", () => {
  // DROPDOWN MENU BEHAVIOR
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(drop => {
    const button = drop.querySelector(".dropbtn");
    const links = drop.querySelectorAll(".dropdown-content a");
    const content = drop.querySelector(".dropdown-content");

    button.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdowns.forEach(d => {
          if (d !== drop) {
            d.classList.remove("active");
            const dContent = d.querySelector(".dropdown-content");
            if (dContent) dContent.style.display = "none";
          }
        });
        drop.classList.toggle("active");
        if (drop.classList.contains("active")) {
          content.style.display = "grid";
        } else {
          content.style.display = "none";
        }
      }
    });

    links.forEach(link => {
      link.addEventListener("click", () => {
        drop.classList.remove("active");
        content.style.display = "none";
      });
    });
  });

  // Close dropdowns on scroll
  window.addEventListener("scroll", () => {
    dropdowns.forEach(d => {
      d.classList.remove("active");
      const content = d.querySelector(".dropdown-content");
      if (content) content.style.display = "none";
    });
  });

  // Close dropdowns on outside click
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".dropdown")) {
      dropdowns.forEach(d => {
        d.classList.remove("active");
        const content = d.querySelector(".dropdown-content");
        if (content) content.style.display = "none";
      });
    }
  });

  // SLIDER FUNCTION
  window.changeSlide = function (direction, sliderId) {
    const slider = document.getElementById(sliderId);
    const slides = slider.querySelectorAll('.slide');

    if (!slider.dataset.index) {
      slider.dataset.index = 0;
    }

    let index = parseInt(slider.dataset.index);
    slides[index].style.display = 'none';

    index = (index + direction + slides.length) % slides.length;

    slides[index].style.display = 'block';
    slider.dataset.index = index;
  };
});
