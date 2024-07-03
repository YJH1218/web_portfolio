$(document).ready(function(){
    
    gsap.registerPlugin(ScrollTrigger);
   
    gsap.to(".icon_01", {
        scrollTrigger: {
            trigger: "footer",
            start: "0% 80%",
            toggleActions: "restart pause resume reverse"
        },
        opacity: 1,
        y: -40,
    })
    gsap.to(".icon_02", {
        scrollTrigger: {
            trigger: "footer",
            start: "0% 80%",
            toggleActions: "restart pause resume reverse"
        },
        opacity: 1,
        y: -40,
        delay: 0.2,
    })
    gsap.to(".icon_03", {
        scrollTrigger: {
            trigger: "footer",
            start: "0% 80%",
            toggleActions: "restart pause resume reverse"
        },
        opacity: 1,
        y: -40,
        delay: 0.4,
    })

});