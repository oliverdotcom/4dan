const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
    duration: 3500,
    triggerElement: intro,
    triggerHook: 0
  })
  .addIndicators()
  .setPin(intro)
  .addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 3, {
  opacity: 0
}, {
  opacity: 1
});

let scene2 = new ScrollMagic.Scene({
    duration: 9000,
    triggerElement: intro,
    triggerHook: 0
  })
  .setTween(textAnim)
  .addTo(controller);

//Video Animation
let accelamount = 0.2;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);

  const s1 = document.querySelector(".labels span:nth-of-type(1)")
  if (scrollpos > 0.6) {
    s1.classList.add('active')
  }
  if (scrollpos > 1.3) {
    s1.classList.remove('active')
  }
  const s2 = document.querySelector(".labels span:nth-of-type(2)")
  if (scrollpos > 1.3) {
    s2.classList.add('active')
  }
  if (scrollpos > 2) {
    s2.classList.remove('active')
  }
  if (scrollpos < 1.3) {
    s2.classList.remove('active')
  }
  const s3 = document.querySelector(".labels span:nth-of-type(3)")
  if (scrollpos > 2) {
    s3.classList.add('active')
  }
  if (scrollpos > 2.5) {
    s3.classList.remove('active')
  }
  if (scrollpos < 1.9) {
    s3.classList.remove('active')
  }
  const s4 = document.querySelector(".labels span:nth-of-type(4)")
  if (scrollpos > 2.4) {
    s4.classList.add('active')
  }
  if (scrollpos > 3) {
    s4.classList.remove('active')
  }
  if (scrollpos < 2.5) {
    s4.classList.remove('active')
  }
  const s5 = document.querySelector(".labels span:nth-of-type(5)")
  if (scrollpos > 3) {
    s5.classList.add('active')
  }
  if (scrollpos > 3.52) {
    s5.classList.remove('active')
  }
  if (scrollpos < 3.1) {
    s5.classList.remove('active')
  }
  const p1 = document.querySelector(".description p:nth-of-type(1)")
  if (scrollpos > 4.2) {
    p1.classList.add('active')
  }
  const p2 = document.querySelector(".description p:nth-of-type(2)")
  if (scrollpos > 4.4) {
    p2.classList.add('active')
  }
  const p3 = document.querySelector(".description p:nth-of-type(3)")
  if (scrollpos > 4.5) {
    p3.classList.add('active')
  }
  const p4 = document.querySelector(".description p:nth-of-type(4)")
  if (scrollpos > 4.6) {
    p4.classList.add('active')
  }
  const p5 = document.querySelector(".description p:nth-of-type(5)")
  if (scrollpos > 4.7) {
    p5.classList.add('active')
  }

  video.currentTime = delay;
}, 63.3);
