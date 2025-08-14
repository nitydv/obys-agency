var tl = gsap.timeline()

tl.from("#nav h3", {
    y:-30,

    opacity:0,
    duration:1,
    delay:0.4,
    stagger:0.4,
})

tl.from("#main h1", {
    x:-500,
    opacity:0,
    stagger:0.6,
    duration:1.5,
    delay:0.6,
})
tl.from("img", {
    rotate:60,
    opacity:0,
    duration:1.5,
    delay:0.1,
    stagger:0.5,


})
tl.from("#bottom h3", {
    y: 50,
    opacity:0,
    stagger:0.3,
    duration:1,
    delay:0.1,




})      












