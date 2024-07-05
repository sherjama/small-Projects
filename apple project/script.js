let wrapper1 = document.querySelector(".wrapOne");
let wrapper2 = document.querySelector(".wrapTwo");
let wrapper3 = document.querySelector(".wrapThree");
let wrapper4 = document.querySelector(".wrapFour");
let wrapper5 = document.querySelector(".wrapfive");
let wrapper6 = document.querySelector(".wrapSix");
let wrapper7 = document.querySelector(".wrapSaven");
let wrapper8 = document.querySelector(".wrapEight");
let wrapper9 = document.querySelector(".wrapNine");
let wrapper10 = document.querySelector(".wrapTan");
let wrapper11 = document.querySelector(".wrapEleven");

// uls?
let ul1 = document.querySelector("#ul-1");

let remove = document.querySelector(".remove");
let tapes = 1;
wrapper1.addEventListener("click", () => {
  function tape1() {
    if (tapes == 1) {
      wrapper1.style.cssText =
        " border-top: 5px solid #62ADF8; border-bottom: 5px solid #62ADF8;border-right: 3px solid #62ADF8;border-left: 3px solid #62ADF8;";
      document.getElementById("ul-1").style.display = "inline-block";
      document.querySelector(".wrapOne i").style.transform = "rotate(45deg)";

      gsap.to("#ul-1", {
        // rotate: 200,
        opacity: 2.5,
        duration: 3,
      });
      tapes = 0;
    } else {
      tape1remove();
    }
  }
  function tape1remove() {
    wrapper1.style.cssText = "";
    document.getElementById("ul-1").style.display = "none";
    document.querySelector(".wrapOne i").style.transform = "rotate(0)";
    // document.querySelector("#ul-1 li").style.opacity = "0";
    tapes = 1;
  }
  tape1();
});
wrapper2.addEventListener("click", () => {
  function tape2() {
    if (tapes == 1) {
      wrapper2.style.cssText =
        " border-top: 5px solid #62ADF8; border-bottom: 5px solid #62ADF8;border-right: 3px solid #62ADF8;border-left: 3px solid #62ADF8;";
      document.getElementById("ul-2").style.display = "block";
      document.querySelector(".wrapTwo i").style.transform = "rotate(45deg)";
      gsap.from("#ul-2", {
        top: -300,
        duration: 0.5,
      });
      tapes = 0;
    } else {
      tape2remove();
    }
  }
  function tape2remove() {
    wrapper2.style.cssText = "";
    document.getElementById("ul-2").style.display = "none";
    document.querySelector(".wrapTwo i").style.transform = "rotate(0)";
    tapes = 1;
  }
  tape2();
});
wrapper3.addEventListener("click", () => {
  function tape3() {
    if (tapes == 1) {
      wrapper3.style.cssText =
        " border-top: 5px solid #62ADF8; border-bottom: 5px solid #62ADF8;border-right: 3px solid #62ADF8;border-left: 3px solid #62ADF8;";
      document.getElementById("ul-3").style.display = "block";
      document.querySelector(".wrapThree i").style.transform = "rotate(45deg)";
      gsap.from("#ul-3", {
        top: -300,
        duration: 0.5,
      });
      tapes = 0;
    } else {
      tape3remove();
    }
  }
  function tape3remove() {
    wrapper3.style.cssText = "";
    document.getElementById("ul-3").style.display = "none";
    document.querySelector(".wrapThree i").style.transform = "rotate(0)";
    tapes = 1;
  }
  tape3();
});
wrapper4.addEventListener("click", () => {
  function tape4() {
    if (tapes == 1) {
      wrapper4.style.cssText =
        " border-top: 5px solid #62ADF8; border-bottom: 5px solid #62ADF8;border-right: 3px solid #62ADF8;border-left: 3px solid #62ADF8;";
      document.getElementById("ul-4").style.display = "block";
      document.querySelector(".wrapFour i").style.transform = "rotate(45deg)";
      gsap.from("#ul-4", {
        top: -300,
        duration: 0.5,
      });
      tapes = 0;
    } else {
      tape4remove();
    }
  }
  function tape4remove() {
    wrapper4.style.cssText = "";
    document.getElementById("ul-4").style.display = "none";
    document.querySelector(".wrapFour i").style.transform = "rotate(0)";
    tapes = 1;
  }
  tape4();
});
wrapper5.addEventListener("click", () => {
  function tape5() {
    if (tapes == 1) {
      wrapper5.style.cssText =
        " border-top: 5px solid #62ADF8; border-bottom: 5px solid #62ADF8;border-right: 3px solid #62ADF8;border-left: 3px solid #62ADF8;";
      document.getElementById("ul-5").style.display = "block";
      document.querySelector(".wrapfive i").style.transform = "rotate(45deg)";
      gsap.from("#ul-5", {
        top: -300,
        duration: 0.5,
      });
      tapes = 0;
    } else {
      tape5remove();
    }
  }
  function tape5remove() {
    wrapper5.style.cssText = "";
    document.getElementById("ul-5").style.display = "none";
    document.querySelector(".wrapfive i").style.transform = "rotate(0)";
    tapes = 1;
  }
  tape5();
});
wrapper6.addEventListener("click", () => {
  function tape6() {
    if (tapes == 1) {
      wrapper6.style.cssText =
        " border-top: 5px solid #62ADF8; border-bottom: 5px solid #62ADF8;border-right: 3px solid #62ADF8;border-left: 3px solid #62ADF8;";
      document.getElementById("ul-6").style.display = "block";
      document.querySelector(".wrapSix i").style.transform = "rotate(45deg)";
      gsap.from("#ul-6", {
        top: -300,
        duration: 0.5,
      });
      tapes = 0;
    } else {
      tape6remove();
    }
  }
  function tape6remove() {
    wrapper6.style.cssText = "";
    document.getElementById("ul-6").style.display = "none";
    document.querySelector(".wrapSix i").style.transform = "rotate(0)";
    tapes = 1;
  }
  tape6();
});
wrapper7.addEventListener("click", () => {
  function tape7() {
    if (tapes == 1) {
      wrapper7.style.cssText =
        " border-top: 5px solid #62ADF8; border-bottom: 5px solid #62ADF8;border-right: 3px solid #62ADF8;border-left: 3px solid #62ADF8;";
      document.getElementById("ul-7").style.display = "block";
      document.querySelector(".wrapSaven i").style.transform = "rotate(45deg)";
      gsap.from("#ul-7", {
        top: -300,
        duration: 0.5,
      });
      tapes = 0;
    } else {
      tape7remove();
    }
  }
  function tape7remove() {
    wrapper7.style.cssText = "";
    document.getElementById("ul-7").style.display = "none";
    document.querySelector(".wrapSaven i").style.transform = "rotate(0)";
    tapes = 1;
  }
  tape7();
});
wrapper8.addEventListener("click", () => {
  function tape8() {
    if (tapes == 1) {
      wrapper8.style.cssText =
        " border-top: 5px solid #62ADF8; border-bottom: 5px solid #62ADF8;border-right: 3px solid #62ADF8;border-left: 3px solid #62ADF8;";
      document.getElementById("ul-8").style.display = "block";
      document.querySelector(".wrapEight i").style.transform = "rotate(45deg)";
      gsap.from("#ul-8", {
        top: -300,
        duration: 0.5,
      });
      tapes = 0;
    } else {
      tape8remove();
    }
  }
  function tape8remove() {
    wrapper8.style.cssText = "";
    document.getElementById("ul-8").style.display = "none";
    document.querySelector(".wrapEight i").style.transform = "rotate(0)";
    tapes = 1;
  }
  tape8();
});
wrapper9.addEventListener("click", () => {
  function tape9() {
    if (tapes == 1) {
      wrapper9.style.cssText =
        " border-top: 5px solid #62ADF8; border-bottom: 5px solid #62ADF8;border-right: 3px solid #62ADF8;border-left: 3px solid #62ADF8;";
      document.getElementById("ul-9").style.display = "block";
      document.querySelector(".wrapNine i").style.transform = "rotate(45deg)";
      gsap.from("#ul-9", {
        top: -300,
        duration: 0.5,
      });
      tapes = 0;
    } else {
      tape9remove();
    }
  }
  function tape9remove() {
    wrapper9.style.cssText = "";
    document.getElementById("ul-9").style.display = "none";
    document.querySelector(".wrapNine i").style.transform = "rotate(0)";
    tapes = 1;
  }
  tape9();
});

// wrapper10.addEventListener("click", () => {
//   function tape10() {
//     if (tapes == 1) {
//       wrapper10.style.cssText =
//         " border-top: 5px solid #62ADF8; border-bottom: 5px solid #62ADF8;border-right: 3px solid #62ADF8;border-left: 3px solid #62ADF8;";
//       document.getElementById("ul-010").style.display = "block";
//       document.getElementById("ten10").style.transform = "rotate(45deg)";
//       gsap.from("#ul-010", {
//         top: -300,
//         duration: 0.5,
//       });
//       tapes = 0;
//     } else {
//       tape10remove();
//     }
//   }
//   function tape10remove() {
//     wrapper10.style.cssText = "";
//     document.getElementById("ul-010").style.display = "none";
//     document.querySelector(".wrapTen i").style.transform = "rotate(0)";
//     tapes = 1;
//   }
//   tape10();
// });
wrapper11.addEventListener("click", () => {
  function tape11() {
    if (tapes == 1) {
      wrapper11.style.cssText =
        " border-top: 5px solid #62ADF8; border-bottom: 5px solid #62ADF8;border-right: 3px solid #62ADF8;border-left: 3px solid #62ADF8;";
      document.getElementById("ul-11").style.display = "block";
      document.querySelector(".wrapEleven i").style.transform = "rotate(45deg)";
      gsap.from("#ul-11", {
        top: -300,
        duration: 0.5,
      });
      tapes = 0;
    } else {
      tape11remove();
    }
  }
  function tape11remove() {
    wrapper11.style.cssText = "";
    document.getElementById("ul-11").style.display = "none";
    document.querySelector(".wrapEleven i").style.transform = "rotate(0)";
    tapes = 1;
  }
  tape11();
});
