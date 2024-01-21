gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


ScrollSmoother.create({
  smooth: 0.8,
  effects: true,
  smoothTouch: 0.7,
});

gsap.fromTo('.hero-section', { opacity: 1 }, {
  opacity: 0,
  scrollTrigger: {
    trigger: '.hero-section',
    start: "center",
    end: '1000',
    scrub: true,
  }
 })

 let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

 itemsL.forEach(item => {
   gsap.fromTo(item, {
     opacity: 0,
     x: -100,
   }, {
     opacity: 1,
     x: 0,
     scrollTrigger: {
       trigger: item,
       scrub: true,
       start: "-800",
       end: "-100",
     }
   })
 });
 
let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

itemsR.forEach(item => {
  gsap.fromTo(item, {
    opacity: 0,
    x: 100,
    y: -200,
  }, {
    opacity: 1,
    x: 0,
    y:0,
    scrollTrigger: {
      trigger: item,
      scrub: true,
      start: "-800",
      end: "-100",
    }
  })
});
