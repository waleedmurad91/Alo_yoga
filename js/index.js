const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

document.querySelectorAll('.hidden').forEach(el => observer.observe(el));


const sliderTrack = document.getElementById("sliderTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const cardWidth = 25; 
const visibleCards = 4;
const totalCards = document.querySelectorAll(".slider-card").length;

let currentIndex = 0;
let autoSlideInterval;

function updateSlider() {
  sliderTrack.style.transform = `translateX(-${currentIndex * cardWidth}%)`;
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex >= totalCards - visibleCards;
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    if (currentIndex < totalCards - visibleCards) {
      currentIndex++;
    } else {
      currentIndex = 0; 
    }
    updateSlider();
  }, 3000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < totalCards - visibleCards) {
    currentIndex++;
  } else {
    currentIndex = 0; 
  }
  updateSlider();
});


startAutoSlide();


sliderTrack.addEventListener("mouseenter", stopAutoSlide);
sliderTrack.addEventListener("mouseleave", startAutoSlide);




  
let logobutton = document.getElementById("mybtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    logobutton.style.display = "block";
  } else {
    logobutton.style.display = "none";
  }
}

console.log(document.body.scrollTop);
function topFunction() {
  console.log(document.body.scrollTop);
  document.body.scrollTop =0;
  document.documentElement.scrollTop = 0;
}