 //header
 function toggleMenu() {
    var toggle = document.querySelector(".toggle");
    var nav = document.querySelector(".nav");
    toggle.classList.toggle("active");
    nav.classList.toggle("active");
}

//3d
let texts = ["Still", "360o", "3D"];
let index = 0;
let interval = setInterval(function() {
  index = (index + 1) % texts.length;
  document.getElementById("text").innerHTML = texts[index];
}, 2000);

// logo slider
var copy = document.querySelector(".logos-slide").cloneNode(true);
      document.querySelector(".logos").appendChild(copy);



  // product card slider  -- desktop view

  const productCard = document.querySelector('.productCard');
  const prevButton = document.getElementById('prev-button');
  const nextButton = document.getElementById('next-button');
  const slideWidth = 20; // Percentage width of each slide
  let currentSlide = 0;

  nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % 3;
    productCard.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
  });

  prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + 3) % 3;
    productCard.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
  });

// product card slider -- mobile view 

const slider3 = document.querySelector('.productCard');
const paginationDots = document.querySelectorAll('.pagination-dot');
let currentSlideMobileView = 0;

function goToSlide(slideIndex) {
  currentSlideMobileView = slideIndex;
  slider3.style.transform = `translateX(-${currentSlideMobileView * 35}%)`;

  paginationDots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlideMobileView);
  });
}

// sliderAccesories slide 

const sliderAccessories = document.querySelector('.accessories-slide');
const paginationDotsAccessories = document.querySelectorAll('.pagination-dot-accessories');
let currentSlideAccessoriesMobileView = 0;

function goToAccessoriesSlide(slideIndex) {
  currentSlideAccessoriesMobileView = slideIndex;
  sliderAccessories.style.transform = `translateX(-${currentSlideAccessoriesMobileView * 35}%)`;

  paginationDotsAccessories.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlideAccessoriesMobileView);
  });
}
