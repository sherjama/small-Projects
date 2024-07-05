function shery_js() {
  // const logo = document.querySelector(".logo");
  Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.5,
    // scale: 0,
  });
}
function covervideo() {
  let cover = document.querySelectorAll(".cover");
  let video = document.querySelectorAll(".cover video");
  let ccrsr = document.querySelector(".video-cursor");

  for (let i = 0; i < cover.length; i++) {
    cover[i].addEventListener("mouseenter", () => {
      video[i].play();
      ccrsr.style.display = "inline";
      window.document.addEventListener("mousemove", (dets) => {
        ccrsr.style.left = dets.clientX - 50 + "px";
        ccrsr.style.top = dets.clientY - 50 + "px";
      });
    });
    cover[i].addEventListener("mouseout", () => {
      video[i].pause();
      ccrsr.style.display = "none";
    });
    // cover[i].addEventListener("mouseover", (dets) => {
    //   console.log(dets);
    // });
  }
}

function swiperf() {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 4,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slideActiveClass: "active",
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    pagination: {
      el: ".pagination",
      clickable: true,
    },
    autoplay: {
      enabled: true,
      delay: 3000,
    },
    // Media
    // breakpoints: {
    //   // when window width is >= 320px
    //   320: {
    //     slidesPerView: 2,
    //     spaceBetween: 20
    //   },
    //   // when window width is >= 480px
    //   480: {
    //     slidesPerView: 4,
    //     spaceBetween: 30
    //   },
    // }
  });
}

function swiperimg() {
  const swiper_slide = document.querySelectorAll(".swiper-slide");

  const imgs = {
    1: "https://cdn.cuberto.com/cb/upload/480b30071a8533b278c30dd7d9133f09.png",
    2: "https://cdn.cuberto.com/cb/upload/885fbbc555395f745746b23b73f539f5.png",
    3: "https://cdn.cuberto.com/cb/upload/99d9ee549abf01940d4b1cfa04734b7d.jpg",
    4: "https://cdn.cuberto.com/cb/upload/ef20532e8de88a471d4bd1338dc93414.png",
    5: "https://cdn.cuberto.com/cb/upload/0555c249862fecc53b6f506ab736b9ba.png",
    6: "https://cdn.cuberto.com/cb/upload/a1ed16046501be2d945ca6b223f26d14.png",
    7: "https://cdn.cuberto.com/cb/upload/9fcc77bdd5a1a6ee96478cbbc5dbb61e.png",
    8: "https://cdn.cuberto.com/cb/upload/db09164414d9bb9e833c272b52a535d7.png",
    9: "https://cdn.cuberto.com/cb/upload/ca9d9580b67854cbc017f4058591c833.png",
  };

  for (const key in imgs) {
    if (Object.hasOwnProperty.call(imgs, key)) {
      swiper_slide.forEach((slides, indx) => {
        slides.innerHTML = `<img src="${imgs[indx]}" alt="${"img"}">`;
        // console.log(imgs[key]);
      });
    }
  }
}

shery_js();
swiperimg();
// cursr();
covervideo();
swiperf();
