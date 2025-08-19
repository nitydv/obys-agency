function locomotiveAnimation(){
  gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
locomotiveAnimation()
function loadingAnimation(){
  
  function loaderAnimation(){
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
        delay: 2.5,
    },"sameTime");

    gsap.from("#page1",{
        y: "100%",
        duration: 0.8,
        delay: 2.2,
    },"sameTime");

  }
  loaderAnimation()
  
  gsap.from(".text h1",{
    y:120,
    stagger:0.2,
    delay:4.7,
    duration:0.5,
  });
  gsap.from(".text h2",{
    y:120,
    delay:4.9,
    duration:0.5,
  });
}
loadingAnimation()  


function cursorAnimation(){
  document.addEventListener("mousemove",function(dets){
    gsap.to("#cursor", {
      x:dets.x,
      y:dets.y,
      duration:0.15,
      
     })
  })
  Shery.makeMagnet("#nav-part2 h3", {
    ease: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    duration: 0.3,
  });

  Shery.makeMagnet("#svg1", {
    ease: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    duration: 0.3,
  });
}
cursorAnimation()


