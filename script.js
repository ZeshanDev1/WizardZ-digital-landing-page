var tl = gsap.timeline();

tl.from("nav h1,nav h4,nav button",{
    y:-100,
    opacity:0,
    duration:0.5,
    delay:0.5,
    stagger:0.1
})

tl.from("#centrepart1 h1,#centrepart1 p,#centrepart1 button",{
    x:-200,
    duration:0.3,
    
    opacity:0,
    stagger:0.2
},"-=0.5")
tl.from("#centrepart2 img",{
    opacity:0,
    duration:0.5
},"-=0.5")

tl.from("#section1bottom img",{
    y:100,
    opacity:0,
    stagger:0.15,
    duration:0.6
})



var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        markers:false,
        start:"top 50%",
        end: "top 0%",
        scrub:1
    }
})

 

tl2.from(".services",{
    y:20,
    opacity:0,
    duration:0.1,

})
tl2.from(".elem.line1.left",{
    x:-500,
    opacity:0,
    duration:1

},"anim1")

tl2.from(".elem.line1.right",{
    x:500,
    opacity:0,
    duration:1
},"anim1")

tl2.from(".elem.line2.left", {
  x: -500,
  opacity: 0,
  duration: 1,
}, "anim2");

tl2.from(".elem.line2.right", {
  x: 500,
  opacity: 0,
  duration: 1,
}, "anim2");


