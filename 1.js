
$('body').append('<div style="" id="loadingDiv"><div class="loading-div-icon-container"><img id="loading-div-icon" src="https://www.matteogiordano.info/svg/menu--icn---light.svg"></div>    <div class="loader">Loading...</div></div>  ');

$(window).on('load', function() {
    setTimeout(removeLoader, 200); //wait for page load PLUS two seconds.
});

function removeLoader() {
    $("#loadingDiv, .yo").fadeOut(200, function() {
        // fadeOut complete. Remove the loading div
        $("#loadingDiv, .yo").remove(); //makes page more lightweight 

    });
}



window.onload = () => {
    footer = document.querySelector(".footer");
    window.onwheel = e => {
        handleScroll(e);
    };
};

window.onscroll = function() {
    var d = document.documentElement;
    var offset = d.scrollTop + window.innerHeight;
    var height = d.offsetHeight;
    console.log('offset = ' + offset);
    console.log('height = ' + height);
    if (offset >= height) {
        console.log('at the bottom');
    }
}
$(document).ready(function() {
    document.getElementsByTagName("html")[0].style.visibility = "visible";
});
// Function to call when re-initalizing nav
function initNav() {
    $('.button').on('click', () => {
        $('.js-menu').toggleClass('active');
        $('.js-nav').toggleClass('open');
        $('.js-nav__list').toggleClass('show');

    });
}
// Init Navigation first time round
$(document).ready(function() {
    initNav();
});
// Re-init Navigation after barba transition
barba.hooks.afterEnter(() => {
    initNav();
});

function Slideshow(element) {
    this.el = document.querySelector(element);
    this.init();
}
Slideshow.prototype = {
    init: function() {
        this.wrapper = this.el.querySelector(".promo-intro-slider-wrapper");
        this.slides = this.el.querySelectorAll(".promo-intro-slide");
        this.previous = this.el.querySelector(".promo-intro-slider-previous");
        this.next = this.el.querySelector(".promo-intro-slider-next");
        this.index = 0;
        this.total = this.slides.length;
        this.timer = null;
        this.action();
        this.stopStart();
    },
    _slideTo: function(slide) {
        var currentSlide = this.slides[slide];
        currentSlide.style.opacity = 1;
        for (var i = 0; i < this.slides.length; i++) {
            var slide = this.slides[i];
            if (slide !== currentSlide) {
                slide.style.opacity = 0;
            }
        }
    },
    action: function() {
        var self = this;
        self.timer = setInterval(function() {
            self.index++;
            if (self.index == self.slides.length) {
                self.index = 0;
            }
            self._slideTo(self.index);
        }, 500);
    },
};
document.addEventListener("DOMContentLoaded", function() {
    var slider = new Slideshow("#promo-intro-main-slider");
});






function delay(n) {
    n = n || 2000
    // Keep official documentation wording, done -> resolve
    // and make it more concise
    return new Promise(resolve => {
        setTimeout(resolve, n)
    })
}


function pageTransition() {
    var tl = gsap.timeline();


    tl.to(".animate-this nav li", {
        duration: .2,
        opacity: 0,
        delay: 0,
        y: 30, //scale:0, delay: 0.2, 
    });

    tl.to(".hide-me-img", {
        duration: .4,
        opacity: 0,
        delay: 0,
        y: 30, //scale:0, delay: 0.2, 
    });

    tl.to(".hide-me", {
        duration: .5,
        opacity: 0,
        delay: 0,
        y: 30, //scale:0, delay: 0.2, 
    });

    tl.fromTo(".loading-screen", { width: 0, left: 0 }, {
        duration: 1,
        width: "100%",
        left: "0%",
        ease: "expo.inOut",
        delay: .3,
        onComplete: function() {
            window.scrollTo(0, 0);
        }
    });

    tl.to("#svg-1", {
        duration: 1.3,
        opacity: 0,
        stagger: 0.8,
        delay: 0.2,
    });

    tl.to(".loading-screen", {
        duration: 1,
        width: "100%",
        left: "100%",
        ease: "expo.inOut",
        delay: 0,
    });

    tl.set(".loading-screen", { left: "-100%", });
    tl.set("#svg-1", { opacity: 1, y: 0,  });

}

function contentAnimation() {
    var tl = gsap.timeline();


    tl.from(".animate-this nav li", { duration: .5, y: 30, opacity: 0, delay: 1 });
    tl.from(".hide-me", { duration: .5, y: 30, opacity: 0, delay: 0 });
    tl.from(".hide-me-img", { duration: .9, y: 30, opacity: 0, delay: 0 });


}

$(function() {
    barba.init({
        sync: true,


        views: [


            {
                namespace: 'home-section',
                beforeEnter({ next }) {
                    // load my script


                    var slider = new Slideshow("#promo-intro-main-slider");
                    let script = document.createElement('script');
                    //script.src = 'https://www.matteogiordano.info/js/draggable--edit.js';
                    //script.src = 'https://www.matteogiordano.info/js/slideshow-x23.js';



                    next.container.appendChild(script);
                }
            },


            {
                namespace: 'tribe-section',
                beforeEnter({ next }) {
                    // load my script
                    let script = document.createElement('script');
                    script.src = 'https://www.lastorgy.com/js/toggle-menu.js';
                    next.container.appendChild(script);
                }
            },
            {
                namespace: 'tribe-section',
                beforeEnter({ next }) {
                    // load my script
                    let script = document.createElement('script');
                    script.src = 'https://www.lastorgy.com/js/flick-this.js';
                    next.container.appendChild(script);
                }
            },


            {
                namespace: 'tapes-section',
                beforeEnter({ next }) {
                    // load my script
                    let script = document.createElement('script');
                    script.src = 'https://www.lastorgy.com/js/toggle-menu.js';
                    next.container.appendChild(script);
                }
            },


            {
                namespace: 'tapes-section',
                beforeEnter({ next }) {
                 
                }
            },
      

            {
                namespace: 'contact-section',
                beforeEnter({ next }) {
                  

                }
            },


          
             {
                namespace: 'orgy-section',
                beforeEnter({ next }) {
                    let script = document.createElement('script');
                    script.src = 'https://www.lastorgy.com/js/feather.min.js';
                  
                  
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

                  
                  
                    feather.replace();
                  
                  const eye = document.querySelector(".feather-eye");
const eyeoff = document.querySelector(".feather-eye-off");
const passwordField = document.querySelector("input[type=password]");
eye.addEventListener("click", () => {
  eye.style.display = "none";
  eyeoff.style.display = "block";

  passwordField.type = "text";
});

eyeoff.addEventListener("click", () => {
  eyeoff.style.display = "none";
  eye.style.display = "block";

  passwordField.type = "password";
});

                        

                }
            },
          
          
            {
                namespace: 'music-section',
                beforeEnter({ next }) {
                  
                }
            }

        ],


        transitions: [{


            async leave(data) {


                const done = this.async();
                pageTransition();
                await delay(2300); //CHANGE TIME HERE END TRANS
                //await delay(1500);
                done();
            },

            async enter(data) {
                contentAnimation();
            },

            async once(data) {
                contentAnimation();
            },

        }, ],
    });
});

// Function to call when re-initalizing nav
function initTav(container) {
    $(document).on('click', '.ph-video', function(event) {
        var change = $(this).find("img").attr("src").split("/");
        $(".ph-master-video-section > iframe").attr("src", "https://www.youtube.com/embed/" + change[4] + "?rel=&autoplay=1");
    });

    //   Variables
    let flickity = null;
    const slideshowEl = container.querySelector('.js-slideshow');
    //   Functions
    const update = () => {
        console.log('update');
    };

    const pause = () => {
        isPaused = true;
    };

    const play = () => {
        if (isPaused) {
            isPaused = false;
            window.requestAnimationFrame(update);
        }
    };

    //
    //   Create Flickity
    //
    //////////////////////////////////////////////////////////////////////
    if (slideshowEl !== null) {
        flickity = new Flickity(slideshowEl, {
            prevNextButtons: false,
            pageDots: false,
            //autoPlay: 2000,
            draggable: true,
            wrapAround: true,
            selectedAttraction: 0.015,
            friction: 0.25
        });
        flickity.x = 0;


        //
        //   Add Event Listeners
        //
        //////////////////////////////////////////////////////////////////////

        slideshowEl.addEventListener('mouseenter', pause, false);
        slideshowEl.addEventListener('focusin', pause, false);
        slideshowEl.addEventListener('mouseleave', play, false);
        slideshowEl.addEventListener('focusout', play, false);

        flickity.on('dragStart', () => {
            isPaused = true;
        });

    }


    //
    //   Start Ticker
    //
    //////////////////////////////////////////////////////////////////////

    update();
}

// Init Navigation first time round
$(document).ready(function() {
    initTav(document);
});

// Re-init Navigation after barba transition
barba.hooks.afterEnter(({ next }) => {
    initTav(next.container);
});


// Function to call when re-window.onloadtalizing footer

function initfooter() {

    let scrollDown = false;
    let pageBottom = null;
    let updated = null;
    let footer = document.querySelector(".footer");


    handleScroll = e => {
        scrollDown = e.deltaY >= 0;
        pageBottom =
            window.innerHeight + window.scrollY >= document.body.offsetHeight;

        if (!updated) window.requestAnimationFrame(toggleFooter);
        updated = true;
    };

    toggleFooter = () => {
        if (scrollDown && pageBottom) {
            show();
        } else if (!scrollDown) {
            hide();
        }
        updated = false;
    };

    show = () => {
        if (footer.classList.contains("footer-hide")) {
            footer.classList.remove("footer-hide");
            footer.classList.add("footer-show");
        }
    };

    hide = () => {
        if (
            footer.classList.contains("footer-show") ||
            !footer.classList.contains("footer-hide")
        ) {
            footer.classList.remove("footer-show");
            footer.classList.add("footer-hide");
        }
    };
}
// Init Footer first time round
$(document).ready(function() {
    initfooter();
});
// Re-init Navigation after barba transition
barba.hooks.afterEnter(() => {
    initfooter();
});

 function onSubmit() {      
   if (document.getElementById('password').value == 'orgy') {window.button2.style.display="block"; }else{ alert('Access Denied, Please try again');}
     }
     

document.addEventListener("DOMContentLoaded", checkonSubmit);
barba.hooks.afterEnter(() => {
checkonSubmit();
});












 