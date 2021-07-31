function delay(n) {
    n = n || 3000;
    return new Promise(done => {
        setTimeout(() => {
            done();
        }, n);
    });
}

/*Animaciones*/

function firsVisit() {
    let tl = gsap.timeline();
    tl.to('ul.transition li', { duration: 0, scaleY: 1, transformOrigin: "bottom left"});
    tl.to('.load-anim', { duration: .9 ,opacity: 1});
    tl.to('.loading-bar', {  duration: 1, scaleX: 1, transformOrigin: "left"});
    tl.to('.load-anim', { duration: .9, opacity: 0});
    tl.to('ul.transition li', { duration: .6, scaleY: 0, transformOrigin: "bottom left", stagger: .1, delay: .1, });
    tl.to('.loading-bar', {  duration: 0, scaleX: 0, transformOrigin: "left"});
}

function pageTransition() {
    let tl = gsap.timeline();
    tl.to('ul.transition li', { duration: .6, scaleY: 1, transformOrigin: "bottom left", stagger: .2 });
    tl.to('.load-anim', { duration: .9 ,opacity: 1});
    tl.to('.loading-bar', {  duration: .8, scaleX: 1, transformOrigin: "left"});
    tl.to('.load-anim', { duration: .9, opacity: 0});
    tl.to('ul.transition li', { duration: .6, scaleY: 0, transformOrigin: "bottom left", stagger: .1, delay: .1, });
    tl.to('.loading-bar', {  duration: 0, scaleX: 0, transformOrigin: "left"});
}

function principalAnimation() {
    var tl = gsap.timeline();
    tl.from('.anim-nav', { duration: .9, translateY: -50, opacity: 0, stagger: .1, delay: 2.9 });
    tl.from('.switch', { duration: .9, translateX: 100, opacity: 0, delay: -.1});
    tl.to('#txt-parallax-1', { duration: .9, translateY: -50, opacity: 1, delay: -.6 });
    tl.to('#txt-parallax-2', { duration: .9, translateY: -60, opacity: 1, delay: -.5 });
}

function secondaryAnimation() {
    let tl = gsap.timeline();
    tl.from('#logo-2, #back', { duration: .9, translateY: -50, opacity: 0, delay: 2.9});
    tl.from('.NavBar-2', { duration: .9, translateY: -50, opacity: 0, delay: -.9 });
    tl.from('.anim-gallery', { duration: 1.1, translateY: 50, opacity: 0, stagger: 0.2 });
    tl.from('.imagen-completa', { duration: 1, opacity: 0, delay: -.7});
}

function pageout() {
    let tl = gsap.timeline();
    tl.to('.text', { duration: .9, opacity: 0 })
    tl.to('.nav-links-close', { duration: .9, translateY: -50, opacity: 0, delay: -1 });
    tl.to('#switch', { duration: .9, translateX: 100, opacity: 0, delay: -1 });
    tl.to(".logo", { duration: .9, translateY: -50, opacity: 0, delay: -1 });
    tl.to(".NavBar", { duration: .9, translateY: -800, opacity: 0, delay: -1 });
}

function secondarypageout() {
    let tl = gsap.timeline();
    tl.to('#logo-2, #back', { duration: .9, translateY: -50, opacity: 0});
    tl.to('.NavBar-2', { duration: .9, translateY: -50, opacity: 0, delay: -.85 });
    tl.to('.anim-gallery', { duration: 1, translateY: 50, opacity: 0, stagger: 0.2, delay: -.8 });
    tl.to('.imagen-completa', { duration: .9, opacity: 0, delay: -1.4 });
}


$(function () {
    barba.init({

        sync: true,

        transitions: [{

            async leave(data) {

                const done = this.async();

                pageout();

                secondarypageout();


                setTimeout(function () {
                    pageTransition();
                }, 200);

                await delay(1700);
                done();

            },

            async enter(data) {
                principalAnimation();
                secondaryAnimation();
            },

            async once(data) {
                firsVisit();
                principalAnimation();
                secondaryAnimation();
            }
        }]


    });

});

// update the scroll after entering a page

barba.hooks.beforeEnter(() => {
    window.scrollTo(0, 0);
});

barba.hooks.after(() => {
    scroller.update();
});

barba.hooks.afterEnter(() => {
    scroller.init();
});

barba.hooks.afterLeave(() => {
    scroller.destroy();
});

barba.hooks.enter(() => {
    NavSlide();
    BtnAnim();
    DarkMode();
    Lightbox();
    scroll();
    Sticky();
    addZoom();
});

