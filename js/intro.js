window.addEventListener("load", ()=>{

    if(sessionStorage.getItem("introPlayed")){
        document.getElementById("intro").style.display="none";
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

    .from("h1",{
        opacity:0,
        y:20,
        duration:.5,
        ease:"power2.out"
    })

    .from("h2",{
        opacity:0,
        y:20,
        duration:.5,
        ease:"power2.out"
    })

    .from("p",{
        opacity:0,
        y:20,
        duration:.5,
        ease:"power2.out"
    })

    .to(".progress-bar",{
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
        }
    });

});