//testimonial carousel js

// declaring variables to allow javascript to interact with elements

const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".carousel img");



//initializes the currentIndex to 0 to keep track of what image is being displayed 
let currentIndex = 0;


//function is changing display properties for each image depending on our if else statement 
function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }
    });
}



// creating functions for previous and next buttons
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}


//linking functions to buttons to ensure the correct function is called when clicking
prevButton.addEventListener("click", prevImage);
nextButton.addEventListener("click", nextImage);


//initially displays the image at current index, when page first loads it will show the first image(0)
showImage(currentIndex);
