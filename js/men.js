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