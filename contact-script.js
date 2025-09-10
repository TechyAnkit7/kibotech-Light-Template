function page1_Animation() {
    var tl = gsap.timeline()

    tl.from("#bg", {
        opacity: 0,
        duration: 0.5,
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

    tl.from("#aboutContact h1", {
        opacity: 0,
        duration: 0.3,
        scale: 1.3,
    })

    tl.from("#aboutContact p", {
        opacity: 0,
        duration: 0.3,
        scale: 1.3,
    })

    tl.from(".container .left", {
        opacity: 0,
        x: -200,
    })

    tl.from(".container .right", {
        opacity: 0,
        x: 200,
    })

    tl.from("footer", {
        y: 100,
    })
}

const form = document.getElementById('contactForm');
        form.addEventListener('submit', e => {
            e.preventDefault();
            alert('Thank you for contacting us. We will get back to you shortly!');
            form.reset();
        });

page1_Animation()
