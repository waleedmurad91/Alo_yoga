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










function scrollSlider(direction) {
  const slider = document.getElementById('cardSlider');
  const scrollAmount = 1300; 
  slider.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}
function scrollSliderr(direction) {
  const slider = document.getElementById('cardSlider1');
  const scrollAmount = 1300; 
  slider.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}




document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.men-slider-card-image').forEach(card => {
    const hoverImage = card.getAttribute('data-hover');
    if (hoverImage) {
      card.style.setProperty('--hover-bg', `url(${hoverImage})`);
    }
  });
});



const toggleBtn = document.getElementById('toggleSidebar');
const navSidebar = document.getElementById('nav-sidebar');
const menuclose = document.getElementById('cross');
toggleBtn.addEventListener('click', () => {
  // navSidebar.style.display="flex";
  navSidebar.classList.add('active');
});

menuclose.addEventListener('click', () => {
  // navSidebar.style.display="none";
  navSidebar.classList.remove('active');
  
});



const menu = document.getElementById("menu-btns");
const buttons = menu.getElementsByClassName("menuBtn");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    const name = this.getAttribute("name");
    const classDisplay = name + "-menu-items";

    const allMenus = document.querySelectorAll(
      ".navbar-menu-container > .navbar-menu-items"
    );
    allMenus.forEach((div) => {
      div.style.display = "none";
    });

    if (classDisplay) {
      const targetMenus = document.getElementById(classDisplay);
      console.log(targetMenus);
      if (targetMenus) {
        targetMenus.style.display = "flex";
      }
    }

    const current = document.getElementById("active");
    if (current) current.removeAttribute("id");
    this.id = "active";
  });
}



//search icon toggle
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
