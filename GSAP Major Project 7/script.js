function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
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
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
locomotiveAnimation();
function loadingAnimation() {
  function loaderAnimation() {
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

    gsap.to(
      "#loader",
      {
        y: "-100%",
        duration: 0.8,
        delay: 2.5,
     },
      "sameTime"
    );

    gsap.from(
      "#page1",
      {
        y: "100%",
        duration: 0.8,
        delay: 2.2,
      },
      "sameTime"
    );
  }
  loaderAnimation();

  gsap.from(".text h1", {
    y: 120,
    stagger: 0.2,
    delay: 4.7,
    duration: 0.5,
  });
  gsap.from(".text h2", {
    y: 120,
    delay: 4.9,
    duration: 0.5,
  });
}
loadingAnimation();

function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      x: dets.x,
      y: dets.y,
      duration: 0.15,
    });
  });
  Shery.makeMagnet("#nav-part2 h3", {
    ease: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    duration: 0.3,
  });
  Shery.makeMagnet("#svg1", {
    ease: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    duration: 0.3,
  });
  var videoPlay = document.querySelector("#videoplay")
  var playVideo = document.querySelector("#videoplay video ")
  videoPlay.addEventListener("mouseenter",function(){
    videoPlay.addEventListener("mousemove",function(dets){
      gsap.to("#cursor",{
        opacity:0,
      })
      gsap.to("#playbutton",{
        left:dets.x -500,
        top:dets.y -250,
        duration:0.8,
      })
    })
  })
  videoPlay.addEventListener("mouseleave",function(){
    gsap.to("#cursor",{
      opacity:1,
    })
    gsap.to("#playbutton",{
      top:"-15%",
      left:"70%",
      duration:0.8,
    })
  })
  var flag=0
  videoPlay.addEventListener("click",function(){
  if(flag ==0){
      playVideo.play()
      playVideo.style.opacity= 1
                      
      document.querySelector("#playbutton").innerHTML = `<i class="ri-pause-line"></i>`
      gsap.to("#playbutton",{
        scale: 0.7,
      })
      flag=1
  }else{
      playVideo.pause()
      playVideo.style.opacity= 0
                      
      document.querySelector("#playbutton").innerHTML = `<i class="ri-play-fill   "></i>`
      gsap.to("#playbutton",{
        scale: 1,
      })
      flag=0
  }
  })
  document.querySelector("#text3").addEventListener("mousemove",function(dets){
    gsap.to("#flag",{
      opacity:1,
      x:dets.x,
      y:dets.y,
    })
  })
  document.querySelector("#text3").addEventListener("mouseleave",function(dets){
    gsap.to("#flag",{
      opacity:0,
    })
  })

}
cursorAnimation();

function sheryAnimation() {
  Shery.imageEffect(".image-div",{
    style:5,
    config:{"a":{"value":1.37,"range":[0,30]},"b":{"value":0.59,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.8103532140986306},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.21,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.53,"range":[0,10]},"metaball":{"value":0.41,"range":[0,2]},"discard_threshold":{"value":0.52,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.47,"range":[0,2]},"noise_scale":{"value":7.63,"range":[0,100]}},
    // debug:true,
    gooey:true,
  })
  
}
sheryAnimation();