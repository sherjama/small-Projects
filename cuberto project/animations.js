function locoplussT() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main-wrapper"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main-wrapper", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector(".main-wrapper").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

function header_hero() {
  const tl = gsap.timeline();

  tl.from(".logo , .menu,.menu-icon-animat", {
    opacity: 0,
    duration: 2,
    delay: 1.5,
  });

  tl.from(".content-hero h1", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
  });

  gsap.from(".animate-vid", {
    scale: 0,
    duration: 0.5,
    delay: 4,
  });
}

function btns() {
  gsap.from(".btn-an", {
    opacity: 0,
    scale: 0.8,
    duration: 0.8,
    scrollTrigger: {
      trigger: ".btn-an",
      scroller: ".main-wrapper",
      start: "top 75%",
      // markers: true,
      // scrub: 2,
    },
  });
}

function heading_animation() {
  gsap.from(".animet_heading h1", {
    y: 30,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".animet_heading",
      scroller: ".main-wrapper",
      start: "top 75%",
      // markers: true,
    },
  });
  gsap.from(".animet_heading span", {
    y: 30,
    duration: 0.8,
    scrollTrigger: {
      trigger: ".animet_heading span",
      scroller: ".main-wrapper",
      start: "top 76%",
      // markers: true,
    },
  });
}

function cover_animation() {
  gsap.from(".A", {
    y: 100,
    opacity: 0.2,
    duration: 0.8,
    scrollTrigger: {
      trigger: ".A",
      scroller: ".main-wrapper",
      start: "top 75%",
    },
  });
  gsap.from(".B", {
    y: 100,
    opacity: 0.2,
    duration: 0.8,
    scrollTrigger: {
      trigger: ".B",
      scroller: ".main-wrapper",
      start: "top 75%",
    },
  });
  gsap.from(".C", {
    y: 100,
    opacity: 0.2,
    duration: 0.8,
    scrollTrigger: {
      trigger: ".C",
      scroller: ".main-wrapper",
      start: "top 75%",
    },
  });
  gsap.from(".D", {
    y: 100,
    opacity: 0.2,
    duration: 0.8,
    scrollTrigger: {
      trigger: ".D",
      scroller: ".main-wrapper",
      start: "top 75%",
    },
  });
  gsap.from(".E", {
    y: 100,
    opacity: 0.2,
    duration: 0.8,
    scrollTrigger: {
      trigger: ".E",
      scroller: ".main-wrapper",
      start: "top 75%",
    },
  });
  gsap.from(".F", {
    y: 100,
    opacity: 0.2,
    duration: 0.8,
    scrollTrigger: {
      trigger: ".F",
      scroller: ".main-wrapper",
      start: "top 75%",
    },
  });
  gsap.from(".G", {
    y: 100,
    opacity: 0.2,
    duration: 0.8,
    scrollTrigger: {
      trigger: ".G",
      scroller: ".main-wrapper",
      start: "top 75%",
    },
  });
  gsap.from(".H", {
    y: 100,
    opacity: 0.2,
    duration: 0.8,
    scrollTrigger: {
      trigger: ".H",
      scroller: ".main-wrapper",
      start: "top 75%",
    },
  });
  gsap.from(".I", {
    y: 100,
    opacity: 0.2,
    duration: 0.8,
    scrollTrigger: {
      trigger: ".I",
      scroller: ".main-wrapper",
      start: "top 75%",
    },
  });
}

function contentFifthHeading_animation() {
  gsap.from(".content-fifth h1", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.4,
    scrollTrigger: {
      trigger: ".content-fifth",
      scroller: ".main-wrapper",
      start: "top 75%",
    },
  });
  gsap.from(".spans_animat span", {
    opacity: 0,
    duration: 0.3,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".spans_animat span",
      scroller: ".main-wrapper",
      start: "top 75%",
    },
  });
}

function vidtandf_animation() {
  gsap.from(".video-third", {
    scale: 0.5,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".video-third",
      scroller: ".main-wrapper",
      start: "top 80%",
    },
  });
  gsap.from(".video-fifth", {
    scale: 0.5,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".video-fifth",
      scroller: ".main-wrapper",
      start: "top 80%",
      // markers: true,
    },
  });
}

function csixth_swiper_animation() {
  gsap.from(".content-sixth h1", {
    y: 50,
    duration: 0.5,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".content-sixth h1",
      scroller: ".main-wrapper",
      start: "top 75%",
    },
  });

  gsap.from(".content-sixth-2 p", {
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: ".content-sixth-2 p",
      scroller: ".main-wrapper",
      start: "top 75%",
    },
  });

  gsap.from(".content-sixth-2 button", {
    y: 35,
    opacity: 0.6,
    duration: 0.8,
    scrollTrigger: {
      trigger: ".content-sixth-2 button",
      scroller: ".main-wrapper",
      start: "top 75%",
    },
  });

  gsap.to(".swiper-wrapper>div", {
    opacity: 1,
    duration: 0.5,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".swiper-wrapper>div",
      scroller: ".main-wrapper",
      start: "top 75%",
    },
  });
}

function qemail_animation() {
  gsap.from(".q-wrapper", {
    y: 100,
    duration: 0.5,
    stagger: 0.1,
    opacity: 0,
    scrollTrigger: {
      trigger: ".q-wrapper",
      scroller: ".main-wrapper",
      start: "top 70%",
      // markers: true,
    },
  });
}

function footer_animation() {
  gsap.from(".f-btn-animate", {
    opacity: 0,
    scale: 0.8,
    duration: 0.8,
    scrollTrigger: {
      trigger: ".f-btn-animate",
      scroller: ".main-wrapper",
      start: "top 75%",
      // markers: true,
      // scrub: 2,
    },
  });
  gsap.from(".btns-p", {
    opacity: 0,
    y: 50,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".btns-p",
      scroller: ".main-wrapper",
      start: "top 99%",
      // markers: true,
      // scrub: 2,
    },
  });
  gsap.from(".container-fvidcontaint h1", {
    opacity: 0,
    y: 50,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".container-fvidcontaint h1",
      scroller: ".main-wrapper",
      start: "top 99%",
      // markers: true,
      // scrub: 2,
    },
  });
  gsap.from(".btns button", {
    opacity: 0,
    y: 50,
    duration: 0.5,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".btns button",
      scroller: ".main-wrapper",
      start: "top 99%",
      // markers: true,
      // scrub: 2,
    },
  });
}

function call_allfunction() {
  locoplussT();
  header_hero();
  btns();
  heading_animation();
  cover_animation();
  contentFifthHeading_animation();
  vidtandf_animation();
  csixth_swiper_animation();
  qemail_animation();
  footer_animation();
}
call_allfunction();
