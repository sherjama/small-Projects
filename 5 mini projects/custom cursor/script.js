var crsr = document.querySelector(".cursor");
var scren = document.querySelector(".container");

var xscale = 1;
var yscale = 1;

var xval = 0;
var yval = 0;

var xprev = 0;
var yprev = 0;

scren.addEventListener("mousemove", (dets) => {
  xval = dets.clientX - xprev;
  yval = dets.clientY - yprev;

  xprev = dets.clientX;
  yprev = dets.clientY;

  xscale = gsap.utils.clamp(0.8, 1.2, xval);
  yscale = gsap.utils.clamp(0.8, 1.2, yval);

  crsr.style.transform = `translate(${dets.x}px ,${dets.y}px) scale(${xscale},${yscale})`;
});
