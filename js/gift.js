
//navbar menu btns opacity downing

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



let hoveredId = null;

//image changing on hover
document.querySelectorAll('.product-card-image').forEach(card => {
  const hoverImage = card.getAttribute('data-hover');
  if (hoverImage) {
    card.style.backgroundImage = `url(${hoverImage})`;
  }
});


//sorting filter
document.querySelectorAll(".sort-dropdown").forEach((details) => {
  const summary = details.querySelector(".selected-option");
  const options = details.querySelectorAll(".options li");

  options.forEach((option) => {
    option.addEventListener("click", () => {
      summary.textContent = option.textContent;
      details.removeAttribute("open");
    });
  });
});

const toggleBtn = document.getElementById("toggleSidebar");
const navSidebar = document.getElementById("nav-sidebar");
const crossBtn = document.getElementById("cross");
toggleBtn.addEventListener("click", () => {
  navSidebar.classList.add("active");
});

crossBtn.addEventListener("click", () => {
  navSidebar.classList.remove("active");
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


//filter aside 
const toopen = document.getElementById("filter-open");
const toclose = document.getElementById("filter-aside-cross");
const open = document.getElementById("filter-aside");
toopen.addEventListener("click", () => {
  open.classList.add("show");
});
toclose.addEventListener("click", () => {
  open.classList.remove("show");
});

const fasidebtns = document.getElementById("f-aside-buttons");
const fasidebtn = fasidebtns.getElementsByClassName("f-aside-button");
let close = document.getElementById("f-aside-buttons");
for (let i = 0; i < fasidebtn.length; i++) {
  fasidebtn[i].addEventListener("click", function () {
    const id = this.getAttribute("id");
    let backbtn = document.getElementById(id + "-close");
    let filterType = document.getElementById(id + "-filter-type");
    filterType.style.display = "flex";
    filterType.classList.add("show");
    close.style.display = "none";
    document.getElementById("f-aside-bottom").style.display = "none";
    backbtn.addEventListener("click", () => {
      filterType.classList.remove("show");
      filterType.style.display = "none";
      close.style.display = "flex";
      document.getElementById("f-aside-bottom").style.display = "flex";
    });
  });
}

