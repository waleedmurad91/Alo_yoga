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

const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
  item.addEventListener('mouseenter', opacitydDown);
  item.addEventListener('mouseleave',opacityNormal);
});
function opacitydDown() {
    const menuItemId = this.getAttribute('id');
    menuItems.forEach(el => {
      el.style.opacity = 0.5;
    });
    document.getElementById(menuItemId).style.opacity = 1;
  };
  function opacityNormal() {
    menuItems.forEach(el => {
      el.style.opacity = 1;
    });
  };


const sliderGrid = document.getElementById("sliderGrid");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let cardWidth = 0;
let visibleCards = 0;
const totalCards = document.querySelectorAll(".slider-card").length;

let currentIndex = 0;
let autoSlideInterval;

function updateSlider() {
  const card = document.querySelector('.slider-card');
  const cardOffset = card.offsetWidth + 12;
  sliderGrid.scrollTo({
    left: currentIndex * cardOffset,
    behavior: 'smooth'
  });

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

sliderGrid.addEventListener("mouseenter", stopAutoSlide);
sliderGrid.addEventListener("mouseleave", startAutoSlide);

startAutoSlide();





  
let logobutton = document.getElementById("mybtn");

const searchBtns = document.querySelectorAll('.search-icon');       
const closeBtns = document.querySelectorAll('.search-cross');      
const searchOverlay = document.getElementById('search-overlay');  


searchBtns.forEach(button => {
  button.addEventListener('click', () => {
    searchOverlay.style.display = 'block';
  });
});


closeBtns.forEach(button => {
  button.addEventListener('click', () => {
    searchOverlay.style.display = 'none';
  });
});





const toggleBtn = document.getElementById('toggleSidebar');
const navSidebar = document.getElementById('nav-sidebar');

toggleBtn.addEventListener('click', () => {
  // navSidebar.style.display="flex";
  navSidebar.classList.add('active');
});

crossBtn.addEventListener('click', () => {
  // navSidebar.style.display="none";
  navSidebar.classList.remove('active');
  
});




const menu = document.getElementById("menu-btns");
const buttons = menu.getElementsByClassName("menuBtn");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    const name = this.getAttribute("name"); 
    const classDisplay = name + "-menu-items";

    const allMenus = document.querySelectorAll(".navbar-menu-container > .navbar-menu-items");
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
