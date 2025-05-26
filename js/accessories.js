





let hoveredId=null;

document.querySelectorAll('.product').forEach(el => {
  el.addEventListener('mouseenter', () => {
    hoveredId = el.id;
  });
});
let original=null;
function changeImage() {
  const card = document.getElementById(hoveredId);
   original= card.src;
  if (card) {
    let name=hoveredId + '.webp';
    card.src = name;
  }
}
function originalImage() {
  const card = document.getElementById(hoveredId);
  if (card) {
    card.src = original;
  }
}
document.querySelectorAll('.product').forEach(el => {
  el.addEventListener('mouseenter', changeImage);
  el.addEventListener('mouseleave', originalImage);
});







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