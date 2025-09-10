function page1_Animation() {
    var tl = gsap.timeline()

    tl.from("#background",{
        opacity:0,
        duration:0.5,
    })

    tl.from("nav h1", {
        y: -20,
        opacity: 0,
        scale: 1.4,
        duration: 0.3,
        delay: 0.3,
    })

    tl.from("nav h4, nav button", {
        y: -20,
        opacity: 0,
        scale: 1.4,
        duration: 0.4,
        stagger: 0.2,
    })

    tl.from("#aboutServices h3", {
        opacity: 0,
        duration: 0.3,
        scale: 1.3,
    })

    tl.from("#aboutServices p", {
        opacity: 0,
        duration: 0.3,
        scale: 1.3,
    })
}


function card_page() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page2",
            scroller: "body",
            start: "top 60%",
            scrub: 3,
            end: "top -10%",
        }
    })

    tl2.from(".container .box1", {
        x: -200,
        opacity: 0,
        duration: 0.7
    }, "anime1")

    tl2.from(".container .box2", {
        x: 200,
        opacity: 0,
        duration: 0.7
    }, "anime1")

    tl2.from(".container .box3", {
        x: -200,
        opacity: 0,
        duration: 0.7
    }, "anime2")

    tl2.from(".container .box4", {
        x: 200,
        opacity: 0,
        duration: 0.7
    }, "anime2")

    tl2.from(".container .box5", {
        y: 300,
        opacity: 0,
        duration: 0.7
    }, "anime2")
}

page1_Animation()

card_page()
