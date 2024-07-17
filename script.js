function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco()


// page1
let tl = gsap.timeline({
    scrollTrigger:{
      trigger:'page1',
      scroller:'main',
    //   markers:true,
      start:'top -47%',
      end:'500% -170%',
      scrub:1,
      pin:true,
    }
  })
  tl.to('.left-part',{
    x:'-1000%',
  },'same')
  tl.to('.l-left',{
    x: '-1000%',
    rotate : '-360deg'
  },'same')
  tl.to('.l-right',{
    x: '-1200%',
    rotate : '-360deg'
  },'same')
  tl.to('.center',{
    y:'-500',
    width:'2000vw',
    duration:.1,
  },'same')
  tl.to('.right-part',{
    x: '1000%'
  },'same')
  tl.to('.r-right',{
    x: '1000%',
    rotate : '360deg'
  },'same')
  tl.to('.r-left',{
    x: '1200%',
    rotate : '360deg'
  },'same')


//   page3
gsap.to('.page3',{
    scrollTrigger:{
      trigger:'.card-container3',
      scroller:'main',
      start:'top 19%',
      end:'200% top',
      // markers:true,
      scrub:3,
      pin:true
    },
    rotate: "2deg"
 })

 gsap.to('.page4',{
    scrollTrigger:{
      trigger:'.card-container4',
      scroller:'main',
      start:'top 19%',
      end:'100% top',
    //   markers:true,
      scrub:3,
      pin:true
    },
    rotate: "2deg"
 })

 gsap.to('.page5',{
    scrollTrigger:{
      trigger:'.card-container5',
      scroller:'main',
      start:'top 19%',
      end:'100% top',
    //   markers:true,
      scrub:3,
      pin:true
    },
    rotate: "2deg"
 })

 gsap.to('.page6',{
    scrollTrigger:{
      trigger:'.card-container6',
      scroller:'main',
      start:'top 19%',
      end:'top 30%',
    //   markers:true,
      scrub:3,
      pin:true
    },
    rotate: "2deg"
 })

