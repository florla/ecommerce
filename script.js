document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".carousel-slide");
    let slideWidth = slides[0].clientWidth;
    let slideIndex = 0;

    function setSlideWidth() {
        slideWidth = slides[0].clientWidth;
        updateCarousel();
    }

    function nextSlide() {
        if (slideIndex < slides.length - 1) {
            slideIndex++;
        } else {
            slideIndex = 0;
        }
        updateCarousel();
    }

    function updateCarousel() {
        carousel.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    }

    window.addEventListener("resize", setSlideWidth);
    setSlideWidth();
    setInterval(nextSlide, 5000); // Change slide every 5 seconds
});