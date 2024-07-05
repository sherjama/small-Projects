var lines = document.querySelectorAll(".lines");
// var images = .childNodes[3]
// var imgaes = elem_lines.childNodes[3];

lines.forEach((elem_lines) => {
  elem_lines.addEventListener("mouseenter", () => {
    elem_lines.childNodes[3].style.opacity = 1;
    // elem_lines.childNodes[3].style.display = "block";
  });
  elem_lines.addEventListener("mouseleave", () => {
    elem_lines.childNodes[3].style.opacity = 0;
    // elem_lines.childNodes[3].style.display = "none";
  });
  elem_lines.addEventListener("mousemove", (dets) => {
    // elem_lines.childNodes[3].style.top = dets.clientY + "px";
    elem_lines.childNodes[3].style.left = dets.clientX - 50 + "px";
  });
});
