
gsap.registerPlugin(ScrollTrigger)
// **********************************************************************

window.addEventListener('DOMContentLoaded', () => {
    var bus_elem = document.querySelectorAll('.bus_elem')

    var home = gsap.timeline({paused: true});
    home.staggerFrom(
        bus_elem,
        1,
        {
            duration: 1,
            y: 200,
            opacity: 0
        },
        0.2,
        '-=1'
    )

    home.play()
})

var stagger_el = document.querySelectorAll('.stagger_el');

const TL = gsap.timeline({
    scrollTrigger: {
        trigger: stagger_el,
        toggleActions: "restart pause restart pause",
        start: "top 100%",
        end: "top 10%",
        scrub: 1
    }
});

TL.staggerFrom(stagger_el, 1, {
    duration: 4,
    y: '300px',
    opacity: 0,
}, 0.6, '-=3')


var stagger_el_foot = document.querySelectorAll('.stagger_el_foot');

const TLM = gsap.timeline({
  scrollTrigger:{
    trigger: stagger_el_foot,
    toggleActions:"restart pause reverse pause",
  }
});

TLM.staggerFrom(stagger_el_foot,1,{
  duration:1,
  y:'100px',
  opacity:0,
}, 0.4,'-=1')


// **********************************************************************
