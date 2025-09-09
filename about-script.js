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

    tl.from("#aboutUs p", {
        opacity: 0,
        duration: 0.3,
        scale: 1.3,
    })
}

// function card_page() {
//     var tl2 = gsap.timeline({
//         scrollTrigger: {
//             trigger: "#benefits",
//             scroller: "body",
//             start: "top 60%",
//             scrub: 2,
//             end: "top -30%",
//         }
//     })

//     tl2.from("#page2-intro ", {
//         opacity: 0,
//         x: -200,
//         stagger: 0.3,
//         duration: 1,
//     })

//     tl2.from("#card-container #card1", {
//         x: -200,
//         opacity: 0,
//         duration: 2
//     }, "anime1")

//     tl2.from("#card-container #card2", {
//         x: 200,
//         opacity: 0,
//         duration: 2
//     }, "anime1")

//     tl2.from("#card-container #card3", {
//         x: -200,
//         opacity: 0,
//         duration: 1
//     }, "anime2")

//     tl2.from("#card-container #card4", {
//         x: 200,
//         opacity: 0,
//         duration: 1
//     }, "anime2")
// }

function page2_Animation(){
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#mission",
            scroller: "body",
            start: "top 50%",
            scrub: 2,
            end: "top -10%",
        }
    })

    tl2.from("#missionTitle",{
        opacity:0,
        scale:1.3,
        duration:0.5,
    })

    tl2.from("#missionTagLine",{
        opacity:0,
        scale:1.3,
        duration:0.5,
    })
}

function page3_Animation(){
    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#team",
            scroller: "body",
            start: "top 70%",
            scrub: 2,
            end: "top -10%",
        }
    })

    tl3.from("#title",{
        opacity:0,
        scale:1.3,
        duration:0.5,
    })

    tl3.from("#tagLine",{
        opacity:0,
        scale:1.2,
        duration:0.5,
    })
}


page1_Animation()
page2_Animation()
page3_Animation()