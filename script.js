gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline()
gsap.from("#nav a", {
    y:-50,
    opacity:0,
    duration:0.5,
})

gsap.from("#nav h1", {
    y:-50,
    opacity:0,
    duration:0.5,
})

gsap.from(".left",{
    x:-200,
    opacity:0,
    duration:1,
    delay:0.5
    // stagger:0.5
       
})

gsap.from(".right",{
    x:200,
    opacity:0,
    duration:1,
    delay:0.5

})

tl.from("#about .about-left", {
    x: -800,
    rotate: 120,
    // duration: 0.5,
    scrollTrigger: {
        trigger: "#about",
        scroller: "body",
        // markers: true,
        start: "top 110%",
        end: "top 20%",
        scrub: 2,
    }
});

tl.from("#about .about-right", {
    x: 800,
    rotate: 200,
    // duration: 0.5, // Fixed typo
    scrollTrigger: {
        trigger: "#about",
        scroller: "body",
        // markers: true,
        start: "top 110%",
        end: "top 20%",
        scrub: 2,
    }
});

tl.from("#language .lang-class",{
    y:-100,
    opacity:0,
    // duration:2,
    stagger:2,
    scrollTrigger: {
        trigger: "#language",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "top 130%",
        scrub: 3,
        
    }

})

tl.from("#projects div",{
    y:-100,
    opacity:0,
    // duration:2,
    stagger:2,
    scrollTrigger: {
        trigger: "#projects",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 80%",
        scrub: 2,
        
    }

})