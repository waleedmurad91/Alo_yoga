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
    card.style.setProperty('--hover-bg', `url(${hoverImage})`);
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
console.log(id);
    let backbtn = document.getElementById(id + "-close");
    console.log(backbtn)
    let filterType = document.getElementById(id + "-filter-type");
    filterType.style.display = "flex";
    close.style.display = "none";
    filterType.classList.add("show");
    document.getElementById("f-aside-bottom").style.display = "none";
    backbtn.addEventListener("click", () => {
      filterType.classList.remove("show");
      filterType.style.display = "none";
      close.style.display = "flex";
      document.getElementById("f-aside-bottom").style.display = "flex";
    });
  });
}








//filter aside checkbox

  const inputs = document.querySelectorAll('.input');

  inputs.forEach(input => {
    input.addEventListener('click', () => {
      input.classList.toggle('checked');
    });
  });


  const filterCheckBox = document.querySelectorAll('.filter-section-checkbox');

  filterCheckBox.forEach(input => {
    input.addEventListener('click', () => {
      input.classList.toggle('filter-checked');
    });
  });


  //show more button
  const showmore = document.getElementById('showmore');
  const showless = document.getElementById('showless');
  const extendColor = document.getElementById('extended-color');

  showmore.addEventListener('click',()=>{
extendColor.style.display='flex';
showmore.style.display= 'none';
showless.style.display= 'block';
  })
  showless.addEventListener('click',()=>{
extendColor.style.display='none';
showmore.style.display= 'block';
showless.style.display= 'none';
  })

  //size show more button
  const sizeshowmore = document.getElementById('size-show-more');
  const sizeshowless = document.getElementById('size-show-less');
  const tohide = document.querySelectorAll('.to-hide');

  sizeshowmore.addEventListener('click',()=>{
tohide.forEach(el => el.style.display='flex');
sizeshowmore.style.display= 'none';
sizeshowless.style.display= 'block';
  });
  sizeshowless.addEventListener('click',()=>{
tohide.forEach(el=> el.style.display='none');
sizeshowmore.style.display= 'block';
sizeshowless.style.display= 'none';
  })



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
