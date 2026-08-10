function navAnimation() {
    var nav = document.querySelector("nav");

    nav.addEventListener("mouseenter", function() {
        let tl = gsap.timeline();
        
        tl.to("#nav-bottom", {
            height: "21vh",
            duration: 0.4,
            ease: "power2.out"
        });
        
        tl.set(".nav-part2 h5", {
            display: "block"
        });
        
        tl.to(".nav-part2 h5 span", {
            y: 0,
            duration: 0.4,
            stagger: {
                amount: 0.25
            },
            ease: "power2.out"
        }, "-=0.2");
    });

    nav.addEventListener("mouseleave", function() {
        let tl = gsap.timeline();
        
        tl.to(".nav-part2 h5 span", {
            y: 25,
            duration: 0.25,
            stagger: {
                amount: 0.15
            },
            ease: "power2.in"
        }); 
        
        tl.set(".nav-part2 h5", {
            display: "none"
        });
        
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.35,
            ease: "power2.inOut"
        }, "-=0.2");
    });
} 

// navAnimation();

var rightElems = document.querySelectorAll(".right-elem")

rightElems.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        elem.childNodes[3].style.opacity = 1
})
 elem.addEventListener("mouseleave",function(){
        elem.childNodes[3].style.opacity = 0
})
})