import { firstVisit, pageTransition, principalAnimation, secondaryAnimation, pageOut, secondaryPageOut } from './transitions';

function smooth(scrollContainer) {

    let currentScrollContainer = scrollContainer.querySelector('[data-scroll-container]')
    scroll = new LocomotiveScroll({
        el: currentScrollContainer,
        smooth: true,
        inertia: 0.80,
    });

    setTimeout(() => {
        done();
    }, 3000);
}

let scroll;

barba.init({

    schema: {
        prefix: 'data-dpk',
    },

    transitions: [{
        name: 'dpk-transition',

        once({ next }) {
            firstVisit();
            smooth(next.container);
        },
        beforeEnter({ next }) {
            scroll.destroy();
            smooth(next.container);
        },
        leave({ next }) {
            pageOut();
        },
    }]

});

//import { firstVisit, pageTransition, principalAnimation, secondaryAnimation, pageOut, secondaryPageOut } from './transitions';

function smooth(scrollContainer) {

    let currentScrollContainer = scrollContainer.querySelector('[data-scroll-container]')
    scroll = new LocomotiveScroll({
        el: currentScrollContainer,
        smooth: true,
        inertia: 0.80,
    });

    setTimeout(() => {
        done();
    }, 3000);
}

let scroll;

barba.init({

    sync: true,

    debug: true,

    transitions: [{

        name: 'transition',

        async once({ next }) {
            firsVisit();
            principalAnimation();
            secondaryAnimation();
            smooth(next.container);
        },

        async beforeEnter({ next }) {
            scroll.destroy();
            principalAnimation();
            secondaryAnimation();
            smooth(next.container);
        },

        async leave(next ) {

            const done = this.async();

            pageout();

            secondarypageout();


            setTimeout(function () {
                pageTransition();
            }, 200);

            await delay(1700);
            done();
        }
    }]
});


// update the scroll after entering a page

barba.hooks.enter(() => {
    NavSlide();
    BtnAnim();
    DarkMode();
    Lightbox();
    scroll();
    Sticky();
    addZoom();
});



function smooth(scrollContainer) {

    let currentScrollContainer = scrollContainer.querySelector('[data-scroll-container]')
    scroll = new LocomotiveScroll({
        el: currentScrollContainer,
        smooth: true,
        inertia: 0.80,
    });

    setTimeout(() => {
        done();
    }, 3000);
}

let scroll;

barba.init({

    sync: true,

    debug: true,

    transitions: [{

        name: 'transition',

        async once ({ next }) {
            firsVisit(next.container);
            principalAnimation(next.container);
            secondaryAnimation(next.container);
            smooth();
        },

        async enter ({ next }) {
            principalAnimation(next.container);
            secondaryAnimation(next.container);
        },

        async beforeEnter({  }) {
            scroll.setScroll(0,0);
        },

        async leave(current) {

            const done = this.async();

            pageout(current.container);

            secondarypageout(current.container);


            setTimeout(function () {
                pageTransition();
            }, 200);

            await delay(1700);
            done();
        }
    }]
});

// update the scroll after entering a page

barba.hooks.enter(() => {
    NavSlide();
    BtnAnim();
    DarkMode();
    Lightbox();
    scroll();
    Sticky();
    addZoom();
});
