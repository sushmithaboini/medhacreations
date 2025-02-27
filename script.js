document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".slider").forEach(slider => {
        let slides = slider.querySelectorAll(".slide");
        let index = 0;

        // Function to update slide visibility
        const updateSlides = () => {
            slides.forEach((slide, i) => {
                slide.style.display = i === index ? "block" : "none";
            });
        };

        // Show first slide initially
        updateSlides();

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
    });
});
