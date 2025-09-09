function page1_Animation() {
    var tl = gsap.timeline()

    tl.from("#bg",{
        opacity:0,
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

    tl.from("#center-part h3", {
        y: -80,
        opacity: 0,
        scale: 1.4,
        duration: 0.6,
    })

    tl.from("#center-part p", {
        opacity: 0,
        duration: 0.3,
        scale: 1.3,
    })
    tl.from("#center-part button", {
        opacity: 0,
        scale: 1.3,
        duration: 0.3
    })

    gsap.from(".first", {
        y: 80,
        opacity: 0,
        duration: 0.5,
        delay: 1.2,
        stagger: 0.2,
    })

    gsap.from(".last", {
        y: 80,
        opacity: 0,
        duration: 0.5,
        delay: 1.4,
        stagger: -0.22,
    })
}

function breakText() {
    var h1 = document.querySelector("#center-part h1")
    var h1text = h1.textContent

    var splitedText = h1text.split("")

    var halfval = splitedText.length / 2

    var clutter = ""

    splitedText.forEach(function (elem, idx) {
        if (idx < halfval) {
            clutter += `<span class="first">${elem}</span>`
        }
        else {
            clutter += `<span class="last">${elem}</span>`
        }
        // clutter += `<span>${elem}</span>`
    })

    h1.innerHTML = clutter

}

function scroller() {
    window.addEventListener("wheel", function (dets) {
        if (dets.deltaY > 0) {
            gsap.to(".marque", {
                transform: "translateX(-200%)",
                duration: 3,
                repeat: -1,
                ease: "none",
            })

            gsap.to(".marque img", {
                rotate: 180,
                duration: 1
            })
        }
        else {
            gsap.to(".marque", {
                transform: "translateX(0%)",
                duration: 3,
                repeat: -1,
                ease: "none",
            })

            gsap.to(".marque img", {
                rotate: 0,
                duration: 1
            })
        }
    })

}

function page2_Animation() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#benefits",
            scroller: "body",
            start: "top 60%",
            scrub: 2,
            end: "top -30%",
        }
    })

    tl2.from("#page2-intro ", {
        opacity: 0,
        x: -200,
        stagger: 0.3,
        duration: 1,
    })

    tl2.from("#card-container #card1", {
        x: -200,
        opacity: 0,
        duration: 2
    }, "anime1")

    tl2.from("#card-container #card2", {
        x: 200,
        opacity: 0,
        duration: 2
    }, "anime1")

    tl2.from("#card-container #card3", {
        x: -200,
        opacity: 0,
        duration: 1
    }, "anime2")

    tl2.from("#card-container #card4", {
        x: 200,
        opacity: 0,
        duration: 1
    }, "anime2")
}

function page3_Animation(){
    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page3",
            scroller: "body",
            start: "top 70%",
            scrub: 2,
            end: "top -10%",
        }
    })

    tl3.from("h3",{
        opacity:0,
        scale:1.3,
        duration:1,
    })

    tl3.from("footer",{
        y: 100,
    })
}

scroller()
breakText()
page1_Animation()
page2_Animation()
page3_Animation()