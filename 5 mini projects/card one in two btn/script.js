var heart = document.querySelector(".heart");
var tick = document.querySelector(".ticked");
var btn = document.querySelector("#btn");
var check = 0;

btn.addEventListener("click", () => {
  if (check == 0) {
    btn.innerHTML = "remove";
    btn.style.backgroundColor = "rgb(232, 76, 76)";
    btn.style.color = "white";
    heart.style.scale = "1";
    heart.style.opacity = "100%";
    tick.style.opacity = "100%";
    setTimeout(() => {
      heart.style.animation = "animateHeart 1.2s infinite";
      heart.style.scale = "0.2";
      heart.style.opacity = "0";
    }, 1300);
    check++;
  } else {
    btn.innerHTML = "add";
    btn.style.backgroundColor = "rgb(145, 249, 145)";
    btn.style.color = "black";
    tick.style.opacity = "0";
    check--;
  }
});
