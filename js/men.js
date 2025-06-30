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




let hoveredId=null;

document.querySelectorAll('.men-product').forEach(el => {
  el.addEventListener('mouseenter', () => {
    hoveredId = el.id;
  });
});
let original=null;
function changeImage() {
  const card = document.getElementById(hoveredId);
   original= card.src;
  if (card) {
    let name= hoveredId + '.webp';
    card.src = name;
  }
}
function originalImage() {
  const card = document.getElementById(hoveredId);
  if (card) {
    card.src = original;
  }
}
document.querySelectorAll('.men-product').forEach(el => {
  el.addEventListener('mouseenter', changeImage);
  el.addEventListener('mouseleave', originalImage);
});

const toggleBtn = document.getElementById('toggleSidebar');
const navSidebar = document.getElementById('nav-sidebar');
const crossBtn = document.getElementById('cross');
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
