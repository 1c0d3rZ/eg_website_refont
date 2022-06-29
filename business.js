
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
    duration: 2,
    y: '100px',
    opacity: 0,
}, 0.6, '-=3')

var stagger_el2 = document.querySelectorAll('.stagger_el2');

const TL2 = gsap.timeline({
    scrollTrigger: {
        trigger: stagger_el2,
        toggleActions: "restart pause restart reset",
    }
});

TL2.from(stagger_el2, 1, {
    duration: 2,
    y: '100px',
    opacity: 0,
}, 0.4, '-=1')


var stagger_el3 = document.querySelectorAll('.stagger_el3');

const TL3 = gsap.timeline({
    scrollTrigger: {
        trigger: stagger_el3,
        toggleActions: "restart pause reverse pause",
        scrub: 1
    }
});

TL3.staggerFrom(stagger_el3, 1, {
    duration: 5,
    y: '200px',
    opacity: 0,
}, 0.6, '-=10')


var stagger_el4 = document.querySelectorAll('.stagger_el4');

const TL4 = gsap.timeline({
    scrollTrigger: {
        trigger: stagger_el4,
        toggleActions: "restart pause reverse pause",
        scrub: 1
    }
});

TL4.staggerFrom(stagger_el4, 1, {
    duration: 5,
    y: '100px',
    opacity: 0,
}, 0.4, '-=1')


var stagger_el5 = document.querySelectorAll('.stagger_el5');

const TL5 = gsap.timeline({
    scrollTrigger: {
        trigger: stagger_el5,
        toggleActions: "restart pause reverse pause",
        scrub: 1
    }
});

TL5.staggerFrom(stagger_el5, 1, {
    duration: 5,
    y: '100px',
    opacity: 0,
}, 0.4, '-=1')


var stagger_el6 = document.querySelectorAll('.option_legend');

const TL6 = gsap.timeline({
    scrollTrigger: {
        trigger: stagger_el6,
        toggleActions: "restart pause reverse pause",
        start: 'top 100%',
        end: 'top 20%',
        // scrub: 1
    }
});

TL6.staggerFrom(stagger_el6, 1, {
    duration: 1.2,
    y: '100px',
    opacity: 0,
}, 0.4, '-=1')



var pratica_el = document.querySelectorAll('.pratica_el');

const TLF = gsap.timeline({
    scrollTrigger: {
        trigger: pratica_el,
        toggleActions: "restart pause reverse pause",
        scrub: 1
    }
});

TLF.staggerFrom(pratica_el, 1, {
    duration: 2,
    y: '130px',
    opacity: 0,
}, 0.4, '-=1')

let sections = gsap.utils.toArray(".speaker");

gsap.to(sections, {
  xPercent: -100 * (sections.length),
  ease: "none",
  scrollTrigger: {
    trigger: ".speaker_el",
    scrub: 1,
    snap: 1 / (sections.length - 3),
    // base vertical scrolling on how wide the container is so it feels more natural.
    start: 'top 50%',
    end: "+=400",
  }
});


var procedure = document.querySelectorAll('.procedure');

const TL7 = gsap.timeline({
    scrollTrigger: {
        trigger: procedure,
        toggleActions: "restart pause pause pause",
    }
});

TL7.staggerFrom(procedure, 1, {
    duration: 2,
    y: '130px',
    opacity: 0,
}, 0.4, '-=1')

var procedur2 = document.querySelectorAll('.procedur2');

const TL8 = gsap.timeline({
    scrollTrigger: {
        trigger: procedur2,
        toggleActions: "restart pause pause pause",
        // scrub:1
    }
});

TL8.staggerFrom(procedur2, 1, {
    duration: 2,
    y: '130px',
    opacity: 0,
}, 0.4, '-=1')


var form_section = document.querySelectorAll('.form_section');

const TL9 = gsap.timeline({
    scrollTrigger: {
        trigger: form_section,
        toggleActions: "restart pause pause pause",
    }
});

TL9.staggerFrom(form_section, 1, {
    duration: 1,
    y: '100px',
    opacity: 0,
}, 0.2, '-=1')

var stagger_el_foot = document.querySelectorAll('.stagger_el_foot');

const TLM = gsap.timeline({
  scrollTrigger:{
    trigger: stagger_el_foot,
    toggleActions:"restart pause reverse pause",
  }
});

TLM.staggerFrom(stagger_el_foot,1,{
  duration:5,
  y:'100px',
  opacity:0,
}, 0.4,'-=1')


// **********************************************************************
