const tl = gsap.timeline();

tl.from(".anim-logo", {
  x: 15,
  delay: 0.5,
  opacity: 0,
});

tl.from(".anim", {
  y: 15,
  stagger: 0.2,
  opacity: 0,
});

gsap.from(".anim-2", {
  y: 15,
  stagger: 0.2,
  opacity: 0,
});

// const logoClick = document.querySelector(".nav-logo");

// logoClick.addEventListener("click", clickLogo);
// function clickLogo() {
//   // let url = location.replace("https://www.amazon.com/");
//   // window.open(url, "_blank");
//   // location.href = "";
//   const url = "https://www.amazon.in";
//   window.open(url, "_blank");
// }
