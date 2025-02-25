document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".slider").forEach(slider => {
        let slides = slider.querySelectorAll(".slide");
        let index = 0;

        // Show first slide
        slides[index].style.display = "block";

        let prevButton = slider.querySelector(".prev");
        let nextButton = slider.querySelector(".next");

        if (prevButton && nextButton) {
            prevButton.addEventListener("click", () => {
                index = (index - 1 + slides.length) % slides.length;
                slides.forEach(slide => slide.style.display = "none");
                slides[index].style.display = "block";
            });

            nextButton.addEventListener("click", () => {
                index = (index + 1) % slides.length;
                slides.forEach(slide => slide.style.display = "none");
                slides[index].style.display = "block";
            });
        }
    });
});
