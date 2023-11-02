document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".carousel-slide");
    let slideWidth = slides[0].clientWidth;
    let slideIndex = 0;

    // responsive sizing
    function setSlideWidth() {
        slideWidth = slides[0].clientWidth;
        updateCarousel();
    }

    //proceeds to next slide
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
    // Change slide every 5 seconds
    setInterval(nextSlide, 5000); 
});