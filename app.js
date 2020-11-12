const intro = document.querySelector('.intro');
const video = document.querySelector('video');
const text = document.querySelector('h1')

//SCROLL MAGIC🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
const controller = new ScrollMagic.Controller()

let scene = new ScrollMagic.Scene({
    duration: 9000,
    triggerElement: intro,
    triggerHook: 0,
})
.addIndicators()
.setPin(intro)
.addTo(controller);
//text animi🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

const textAnim = TweenMax.fromTo(text, 3,{opacity:1}, {opacity: 0})


let scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0,
})

.setTween(textAnim)
.addTo(controller)


//Video Animi🔥🔥🔥🔥🔥🔥🔥🔥

let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
    scrollpos = e.scrollPos/1000
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    video.currentTime = delay;
}, 33.3);