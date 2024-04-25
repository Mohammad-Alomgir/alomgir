// Auto-typing-text
const type = new Typed('.auto-type',{
    strings: ['Reality','Innovate ','Create ','Achieve '],
    typeSpeed: 200,
    backSpeed: 150,
    loop: true
});

// toggle able navbar
const btn = document.getElementById('menu-icon');
const navList = document.querySelector('.nav-list');
btn.addEventListener('click',() => {
  navList.classList.toggle('active');
})