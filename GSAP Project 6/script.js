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

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
gsap.from("#page1 #box", {
    opacity:0,
    rotate:360,
    scale:0,
    duration:2,
    delay:0.3,
    
})

gsap.from("#page2 #box", {
    opacity:0,
    rotate:360,
    scale:0,
    duration:2,
    delay:0.3,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"#main",
        start:"top 75%",
        end:"top 50%",
        markers:true,
        scrub:3,
    }

})













