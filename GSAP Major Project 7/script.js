// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true
// });

var tl = gsap.timeline();

gsap.from("#loader h1", {
  y: 100,
  duration: 0.6,
  delay: 0.3,
  stagger: 0.4,
});

gsap.from("#loader h2", {
  y: 100,
  duration: 0.4,
  delay: 1.2,
});

gsap.from("#loader h4, #loader h5", {
  opacity: 0,
  duration: 1.5,
  delay: 0.5,
});

var h5timer = document.querySelector(".line h5");
var grow = 0;
var interval = setInterval(function () {
  if (grow <= 100) {
    h5timer.textContent = grow++;
  } else {
    tl.to(".line", {
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
    });
  }
}, 35);

gsap.to("#loader",{
    y: "-100%",
    duration: 0.8,
    delay: 2.2,
    display: "none" ,
},"sameTime");

gsap.from("#page1",{
    y: "100%",
    duration: 0.8,
    delay: 2.2,
},"sameTime");















