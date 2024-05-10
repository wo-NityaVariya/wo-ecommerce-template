// sidemenu
$(document).ready(function () {
  $(".humburger").click(function () {
    $(".humburger").toggleClass("activehumburger");
    $(".sidemenu").toggleClass("activesidemenu");
  });
  $(".close_btn").click(function () {
    $(".sidemenu").removeClass("activesidemenu");
  });
});

// btn effect
var $btn = $(".main-btn");

$btn.each(function (i, el) {
  // find relevant elements
  var $arrow = $(this).find(".icon-arrow");
  var $btnBg = $(this).find(".btn-arrow-box");

  // setup btn anim TL's
  var arrowTL = new TimelineMax({
    repeat: -1,
    repeatDelay: 0.025,
    paused: true,
  });
  var btnBgTL = new TimelineMax({ paused: true });
  var a = arrowTL
    .fromTo(
      $arrow,
      0.35,
      { x: 0, y: 0 },
      { x: 40, y: -40, z: 0, ease: Power4.easeIn }
    )
    .set($arrow, { x: -40, y: 40, z: 0 })
    .to($arrow, 0.7, { x: 0, y: 0, z: 0, ease: Power4.easeOut });

  var b = btnBgTL.to($btnBg, 0.88, {
    boxShadow: "inset -43px 0 0 rgba(0,0,0,0.075)",
    ease: Power4.easeInOut,
    delay: 0.035,
  });
  // store TL's in JS DOM
  $(el).data("arrowTL", a);
  $(el).data("btnBgTL", b);

  // add mouseenter function
  function onBtnHover() {
    $(this).data("arrowTL").play();
    arrowTL.eventCallback("onRepeat", null);
  }
  // pause animation once timeline completes
  function completeAnim() {
    arrowTL.eventCallback("onRepeat", function () {
      arrowTL.pause();
    });
  }
  // setup hover animation
  $btn.mouseenter(onBtnHover);
  $btn.mouseleave(completeAnim);
  // setup click animation
  $btn.click(function (e) {
    e.preventDefault();
    // grab current link
    var goToLink = $(this).find("a").attr("href");
    // play tween
    $(this).data("btnBgTL").play();
    // navigate to href after animation
    setTimeout(function () {
      window.location = href;
    }, 0);
  });
});

/* top text */
// gsap.registerPlugin(ScrollTrigger);
// let tl3 = gsap.timeline();
// gsap.to(".back", {
//   opacity: 1,
//   x: 400, // Move the element 400 pixels to the right
//   duration: 20,
//   scrollTrigger: {
//     trigger: ".back",
//     start: "top bottom", // Start animation when the top of the section enters the viewport
//     end: "bottom top", // End animation when the bottom of the section leaves the viewport
//     scrub: 1, // Smoothly scrub through animation
//     ease: "linear",
//   },
// });
/* top text */

/* bottom text */
// gsap.registerPlugin(ScrollTrigger);
// let tl4 = gsap.timeline();
// gsap.to(".front", {
//   opacity: 1,
//   x: -400, // Move the element 400 pixels to the left
//   duration: 1,
//   scrollTrigger: {
//     trigger: ".front",
//     start: "top bottom", // Start animation when the top of the section enters the viewport
//     end: "bottom top", // End animation when the bottom of the section leaves the viewport
//     scrub: 1, // Smoothly scrub through animation
//     ease: "linear",
//   },
// });
/* bottom text */

// marquee line
gsap.registerPlugin(ScrollTrigger);
let tl2 = gsap.timeline();
tl2.to(".marquee_warp", {
  x: 1500,
  duration: 40,
  repeat: -1,
  ease: "linear",
});
let tl = gsap.timeline();
tl.to(".marquee_warp", {
  xPercent: 105,
  scrollTrigger: {
    trigger: ".marquee_warp",
    scrub: 1,
  },
});

// smooth scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: "vertical", // vertical, horizontal
  gestureDirection: "both", // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: true,
  touchMultiplier: 2,
  infinite: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// best seller slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1199: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

/* For round text */

const roundtext = document.querySelector(".curvtext");
roundtext.innerHTML = roundtext.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 5.5}deg)">${char}</span>`
  )
  .join("");

/* rotate animation */

/* zoom out text animation */
// Define GSAP animation timeline
const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".six video",
    start: "top center",
    end: "+=100%",
    scrub: true,
    ease: "power4",
  },
});

// Define animations
tl3.to(".six video", { scale: 1.2 });
/* zoom out text animation */

/* filter new arrivals */
const filterbuttons = document.querySelectorAll(".nav_part ul li a");
const filtercards = document.querySelectorAll(".product_warp");

