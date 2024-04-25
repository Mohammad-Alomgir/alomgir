// Auto-typing-text
const type = new Typed(".auto-type", {
  strings: ["Reality", "Innovate ", "Create ", "Achieve "],
  typeSpeed: 200,
  backSpeed: 150,
  loop: true,
});

// toggle able navbar
const menubar = document.getElementById("menu-icon");
console.log(menubar);
const closebar = document.getElementById("menu-close-icon");
const navbar = document.querySelector(".menu");
function toggleMenu() {
  // menubar.classList.toggle("active");
  // closebar.classList.toggle("active");
  navbar.classList.toggle("active");
}

menubar.addEventListener("click", toggleMenu);
closebar.addEventListener('click',toggleMenu);
// toggl class when scroll
const hello = window.pageYOffset;
console.log(hello);
const initialInnerHeight = window.innerHeight;
window.onscroll = () => {
  if(initialInnerHeight > window.innerHeight){
    navbar.classList.toggle('active')
  }
}
