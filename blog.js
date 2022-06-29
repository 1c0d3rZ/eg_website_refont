
gsap.registerPlugin(ScrollTrigger)

// **********************************************************************

window.addEventListener('DOMContentLoaded', () => {
    gsap.from('.topbar', {
        y:100,opacity: 0, duration: 1, ease: 'power2-out'
    })
})

var stagger_el_foot = document.querySelectorAll('.stagger_el_foot');

const TLF = gsap.timeline({
    scrollTrigger: {
        trigger: stagger_el_foot,
        toggleActions: "restart pause reverse pause",
        start: "top 100%",
        end: "top 10%",
        scrub: 1
    }
});

TLF.staggerFrom(stagger_el_foot, 1, {
    duration: 5,
    y: '150px',
    opacity: 0,
}, 0.4, '-=1')


// **********************************************************************
