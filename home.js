
gsap.registerPlugin(ScrollTrigger)

// **********************************************************************

window.addEventListener('DOMContentLoaded',()=>{
  gsap.from(".menu_bar",{
    duration:1, y:'-100%',ease:'linear'
  })

  gsap.from('.homepage_banner',{
    opacity:0, duration:1, ease:'power2-out'
  })
  
  gsap.from('.img_text',{
    y: 100,opacity:0, duration:1.3, ease:'power2-in'
  })
})

var stagger_el = document.querySelectorAll('.stagger_el');

const TL = gsap.timeline({
  scrollTrigger:{
    trigger: stagger_el,
    toggleActions:"restart pause restart pause",
    start: "top 100%",
    end: "top 10%",
    scrub: 1
  }
});

TL.staggerFrom(stagger_el,1,{
  duration:2,
  y:'100px',
  opacity:0,
}, 0.4,'-=1')

var stagger_el2 = document.querySelectorAll('.stagger_el2');

const TL2 = gsap.timeline({
  scrollTrigger:{
    trigger: stagger_el2,
    toggleActions:"restart pause restart pause",
    start: "top 100%",
    end: "top 10%",
    scrub: 1
  }
});

TL2.staggerFrom(stagger_el2,1,{
  duration:2,
  y:'100px',
  opacity:0,
}, 0.4,'-=1')


var stagger_el3 = document.querySelectorAll('.stagger_el3');

const TL3 = gsap.timeline({
  scrollTrigger:{
    trigger: stagger_el3,
    toggleActions:"restart pause reverse pause",
    start: "top 100%",
    end: "top 10%",
    scrub:1
  }
});

TL3.staggerFrom(stagger_el3,1,{
  duration:5,
  y:'100px',
  opacity:0,
}, 0.4,'-=10')


var stagger_el4 = document.querySelectorAll('.stagger_el4');

const TL4 = gsap.timeline({
  scrollTrigger:{
    trigger: stagger_el4,
    toggleActions:"restart pause reverse pause",
    start: "top 100%",
    end: "top 10%",
    scrub: 1
  }
});

TL4.staggerFrom(stagger_el4,1,{
  duration:5,
  y:'100px',
  opacity:0,
}, 0.4,'-=1')


var stagger_el5 = document.querySelectorAll('.stagger_el5');

const TL5 = gsap.timeline({
  scrollTrigger:{
    trigger: stagger_el5,
    toggleActions:"restart pause reverse pause",
    start: "top 100%",
    end: "top 10%",
    scrub: 1
  }
});

TL5.staggerFrom(stagger_el5,1,{
  duration:5,
  y:'100px',
  opacity:0,
}, 0.4,'-=1')


var stagger_el6 = document.querySelectorAll('.stagger_el6');

const TL6 = gsap.timeline({
  scrollTrigger:{
    trigger: stagger_el6,
    toggleActions:"restart pause reverse pause",
    start: "top 100%",
    end: "top 10%",
    scrub: 1
  }
});

TL6.staggerFrom(stagger_el6,1,{
  duration:5,
  y:'100px',
  opacity:0,
}, 0.4,'-=1')



var stagger_el_foot = document.querySelectorAll('.stagger_el_foot');

const TLF = gsap.timeline({
  scrollTrigger:{
    trigger: stagger_el_foot,
    toggleActions:"restart pause reverse pause",
    start: "top 100%",
    end: "top 10%",
    scrub: 1
  }
});

TLF.staggerFrom(stagger_el_foot,1,{
  duration:5,
  y:'100px',
  opacity:0,
}, 0.4,'-=1')


// **********************************************************************
