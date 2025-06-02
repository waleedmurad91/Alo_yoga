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

let cardWidth = 0 
let visibleCards = 0;
let resize=()=>{
  if(window.innerWidth<750){
 cardWidth=50;
 visibleCards=2;
}
else if(window.innerWidth>=1600){
  cardWidth=25;
  visibleCards=4;
}
else{
  cardWidth=25.5;
  visibleCards=4;
}
}
resize();
window.addEventListener('resize',resize)
console.log(cardWidth);
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


function topFunction() {
 
  document.body.scrollTop =0;
  document.documentElement.scrollTop = 0;
}




const toggleBtn = document.getElementById('toggleSidebar');
const navSidebar = document.getElementById('nav-sidebar');
const crossBtn = document.getElementById('cross');
toggleBtn.addEventListener('click', () => {
  navSidebar.style.display="flex";
});

crossBtn.addEventListener('click', () => {
  navSidebar.style.display="none";
});




const menu = document.getElementById("menu-btns");
const buttons = menu.getElementsByClassName("menuBtn");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    const name = this.getAttribute("name"); 
    const classDisplay = name + "-menu-items";

    const allMenus = document.querySelectorAll(".navbar-menu-items > div");
    allMenus.forEach(div => {
      div.style.display = "none";
    });

 
    if (classDisplay) {
      const targetMenus = document.getElementById(classDisplay);
      console.log(targetMenus);
      if(targetMenus){
        targetMenus.style.display = "flex";}
    }

    
    const current = document.getElementById("active");
    if (current) current.removeAttribute("id");
    this.id = "active";
  });
}
