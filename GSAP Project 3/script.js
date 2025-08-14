gsap.to("#page2 img", {
    width: "100%",
    duration: 2,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start: "top 0",
        markers: true,
        end: "top -100%",
        pin : true,
        scrub:3,
    }
})