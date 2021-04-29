function delay(n) {
    n = n || 3000;
    return new Promise(done => {
        setTimeout(() => {
            done();
        }, n);
    });
}

// update the scroll after entering a page

barba.hooks.beforeLeave((data) => {
    scroll.destroy();
});

barba.hooks.after((data) => {
    scroll.init();
});

barba.hooks.enter(() => {
    NavSlide();
    BtnAnim();
    DarkMode();
});


/*Animaciones*/

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
    tl.to('#logo2, #back', { duration: .9, translateY: -50, opacity: 0 });
    tl.from('.text-part-img', { duration: .9, opacity: 0 });
}

function pageTransition() {
    let tl = gsap.timeline();
    tl.to('ul.transition li', { duration: .6, scaleY: 1, transformOrigin: "bottom left", stagger: .2 });
    tl.to('ul.transition li', { duration: 1.2, width: "100%", left: "100%", ease: "Expo.easeInOut", delay: 0.3 });
    tl.to('ul.transition li', { duration: .6, scaleY: 0, transformOrigin: "bottom left", stagger: .1, delay: .1, });
}

function secondaryAnimation() {
    let tl = gsap.timeline();
    tl.from('#logo2, #back', { duration: .9, translateY: -50, opacity: 0 });
    tl.from('.text-part-img', { duration: 1.5, translateY: 50, opacity: 0 });
    tl.to('.contenedor-imagen-completa', { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100% )" }, "-=1.1");
}

function contentAnimation() {
    var tl = gsap.timeline();
    tl.from('#txt-parallax-1', { duration: .9, translateY: 50, opacity: 0, delay: .1 });
    tl.from('#txt-parallax-2', { duration: .9, translateY: 70, opacity: 0, delay: -.9 });
    tl.from('.nav-links-close', { duration: .9, translateY: -50, opacity: 0, delay: -1 });
    tl.from('#switch', { duration: .9, translateX: 100, opacity: 0, delay: -1 });
    tl.from(".logo", { duration: .9, translateY: -50, opacity: 0, delay: -1 });

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
                contentAnimation();
                secondaryAnimation();
            },

            async once(data) {
                contentAnimation();
                secondaryAnimation();
            }
        }]


    });

});