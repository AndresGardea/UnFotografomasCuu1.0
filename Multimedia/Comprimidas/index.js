const loco = () => {
    scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        smartphone: {
            smooth: true
        },
        tablet: {
            smooth: true
        },
        inertia: 0.80
    })
};

/*
    let currentScrollContainer = scrollContainer.querySelector('[data-scroll-container]')
scroll = new LocomotiveScroll({
    el: currentScrollContainer,
    smooth: true,
    inertia: 0.80,
});
    gsap.registerPlugin(ScrollTrigger)


    scroll.on('scroll', ScrollTrigger.update)

    ScrollTrigger.scrollProxy(
        '.container', {
        scrollTop(value) {
            return arguments.length ?
                scroll.scrollTo(value, 0, 0) :
                scroll.scroll.instance.scroll.y
        },
        getBoundingClientRect() {
            return {
                left: 0, top: 0,
                width: window.innerWidth,
                height: window.innerHeight
            }
        }
    }
    )


    ScrollTrigger.create({
        trigger: '.image-mask',
        scroll: '.container',
        start: 'top+=30% 50%',
        end: 'bottom-=40% 50%',
        animation: gsap.to('.image-mask', { backgroundSize: '125%' }),
        scrub: 2,
    })


    ScrollTrigger.addEventListener('refresh', () => scroll.update())


    ScrollTrigger.refresh()
*/

$(document).ready(function () {
    loco(loco)
});