import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
});

/*Barra de Navegacion Sticky*/
const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#article"),
    smooth: true
});

locoScroll.on('scroll', (position) => {
    if ((position.scroll.y) > 100) {
        document.querySelector('#nav').classList.add('sticky');
    } else {
        document.querySelector('#nav').classList.remove('sticky');
    }
});

barba.hooks.beforeLeave((data) => {
    scroll.destroy();
});

barba.hooks.after((data) => {
    scroll.init();
});


