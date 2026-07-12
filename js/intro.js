window.addEventListener("load", ()=>{

    if(sessionStorage.getItem("introPlayed")){
        document.getElementById("intro").style.display="none";
        document.documentElement.classList.add("intro-played");
        const wrapper = document.getElementById("portfolio-wrapper");
        if (wrapper) {
            wrapper.style.opacity = "1";
            wrapper.style.visibility = "visible";
        }
        return;
    }

    sessionStorage.setItem("introPlayed","true");

    let tl=gsap.timeline();

    tl.from(".intro-eyebrow",{
        opacity:0,
        y:10,
        duration:0.6,
        ease:"power2.out"
    })

    .from("#intro-name",{
        opacity:0,
        y:20,
        duration:.5,
        ease:"power2.out"
    })

    .from("#intro-title",{
        opacity:0,
        y:20,
        duration:.5,
        ease:"power2.out"
    })

    .from("#intro-description",{
        opacity:0,
        y:20,
        duration:.5,
        ease:"power2.out"
    })

    .to(".progress-bar1",{
        width:"100%",
        duration:0.75,
        ease:"power1.inOut"
    })

    .to("#intro",{
        opacity:0,
        duration:.7,
        delay:.3,
        ease:"power2.inOut",
        onComplete:()=>{
            document.getElementById("intro").remove();
            document.documentElement.classList.add("intro-played");
        }
    })

    .to("#portfolio-wrapper", {
        opacity: 1,
        visibility: "visible",
        duration: 0.7,
        ease: "power2.inOut"
    }, "-=0.7");

});