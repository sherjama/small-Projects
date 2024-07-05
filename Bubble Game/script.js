let time = 60;
let score = 0;
var randomHits;

function AddScore() {
  score += 10;
  document.querySelector(".Score").textContent = score;
}

function BubbleCreater() {
  let clutter = "";
  for (i = 0; i <= 125; i++) {
    let random = Math.floor(Math.random() * 10);
    clutter += `<div class="Bubble">${random}</div>`;
  }
  document.querySelector(".panel-main").innerHTML = clutter;
}

function Timer() {
  let seconds = setInterval(function () {
    time--;
    document.querySelector(".Timer").textContent = time;

    //instructions when time is zero .

    if (time == 0) {
      clearInterval(seconds);
      document.querySelector(".panel-main").style.flexDirection = "column";
      let gO = `<h1>Game Over</h1>
      <h3 class="Go-score">Your Score is : ${score}</h3>
      `;
      document.querySelector(".panel-main").innerHTML = gO;
    }
  }, 1000);
}

function randomHit() {
  randomHits = Math.floor(Math.random() * 10);
  document.querySelector(".Hit").textContent = randomHits;
}

function userHit() {
  let panel = document.querySelector(".panel-main");
  panel.addEventListener("click", function (details) {
    let userHited = Number(details.target.textContent);
    if (userHited == randomHits) {
      AddScore();
      randomHit();
      BubbleCreater();
    } else {
      score -= 5;
      document.querySelector(".Score").textContent = score;
    }
  });
}

BubbleCreater();
Timer();
randomHit();
userHit();
