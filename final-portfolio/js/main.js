const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = ()=>{
  navbar.classList.add("show");
  menuBtn.classList.add("hide");     
  body.classList.add("disabled");
  // without this the hamburger will not open
}
cancelBtn.onclick = ()=>{
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
} 
// It will open but wont close if this is not applied
window.onscroll = ()=>{
  this.scrollY > 900 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}