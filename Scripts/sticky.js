const Sticky = () => {
            /*Sticky locomotive*/
            scroll.on('scroll', (position) => {
                if ((position.scroll.y) > 100) {
                    document.querySelector('#nav').classList.add('sticky');
                } else {
                    document.querySelector('#nav').classList.remove('sticky');
                }
            });
    
            /*Sticky nav si locomotive no funciona*/
            window.addEventListener('scroll', function () {
                var header = document.querySelector("header");
                header.classList.toggle("sticky", window.scrollY > 150)
            })

            barba.hooks.after(() => {
                scroll.update();
            });
}

$(document).ready(function () {
    Sticky(Sticky)
});