import Swiper, { Navigation } from 'swiper';
const icelandAboutOpen = document.querySelector('#iceland-btn'),
    icelandAbout = document.querySelector('.iceland-hidden'),
    icelandAboutClose = document.querySelector('#iceland-about_close'),
    namibiaAbout = document.querySelector('.namibia-hidden'),
    namibiaAboutClose = document.querySelector('#namibia-about_close'),
    namibiaAboutOpen = document.querySelector('#namibia-btn'),
    header = document.querySelector('.header'),
    anchors = document.querySelectorAll('.header_item'),
    logo = document.querySelector('.header_logo'),  
    burger  = document.querySelector('.header__burger'),
    links = document.querySelectorAll('a');
Swiper.use([Navigation]);
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

gsap.from("#textDisc", {opacity: 0, duration: 2})

let smoother = ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1,
});

let swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    breakpoints: {
        // when window width is >= varPX
        1020: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        425: {
            slidesPerView: 1,
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});



logo.addEventListener('click', (e) => {
    smoother.scrollTo('.concept', true, "center center")
})

gsap.to('#textDisc', {
    scrollTrigger: {
        scrub: true
    },
    y: 500,
})
gsap.to('#textDiscIceland', {
    scrollTrigger: {
        trigger: '.iceland',
        start: '200px 200px',
        scrub: 1
    },
    y: 500,
})
gsap.to('#textDiscNambia', {
    scrollTrigger: {
        trigger: '.namibia',
        start: '200px 200px',
        scrub: 1
    },
    y: 500,
})

const tlAbout = gsap.timeline({
    scrollTrigger: {
        trigger: '.about',
        start: '0 0',
        pin: true,
        toggleActions: 'restart none none reset'
    }
});
tlAbout.from('#textDiscAbout', {x: 100, opacity: 0, duration: 2})
tlAbout.from('#parAbout', {y: 200, opacity: 0, duration: 1}, "-=2")
tlAbout.from('#bthAbout', {x: -200, opacity: 0, duration: 1}, "-=2")
tlAbout.from('#iconAbout', {x: 400, opacity: 0, duration: 1}, "-=2")

const tlContact = gsap.timeline({
    scrollTrigger: {
        trigger: '.contact',
        start: 'top top',
        toggleActions: 'restart none none reset'
    }
});
tlAbout.from('.contact__form', {x: 100, opacity: 0, duration: 2})
tlAbout.from('.contact__map', {x: -100, opacity: 0, duration: 1}, "-=2")

for (const anchor of anchors) {
    anchor.addEventListener('click', (e) => {
        e.preventDefault()

        const blockID = anchor.getAttribute('name').substring(0);
        
        if (header.classList.contains('active')) {
            header.classList.remove('active');
            setTimeout(() => {
                smoother.scrollTo('.' + blockID, true, "center center");
            }, 200)
        } else {
            smoother.scrollTo('.' + blockID, true, "center center");
        }
    })
};

for(const link of links) {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    })
}

icelandAboutOpen.addEventListener("click", (e) => {
    icelandAbout.classList.add('active');
    icelandAboutClose.classList.add('active');
    gsap.from('.iceland-hidden', {x: window.innerWidth, duration: 1.5})
});
icelandAboutClose.addEventListener("click", (e) => {
    gsap.to('.iceland-hidden', {x: window.innerWidth, duration: 1.5})
    setTimeout(() => {
        icelandAbout.classList.remove('active');
        icelandAboutClose.classList.remove('active');
    }, 1500)
});
namibiaAboutOpen.addEventListener("click", (e) => {
    namibiaAbout.classList.add('active');
    namibiaAboutClose.classList.add('active');
    gsap.from('.namibia-hidden', {x: window.innerWidth, duration: 1.5})
});
namibiaAboutClose.addEventListener("click", (e) => {
    gsap.to('.namibia-hidden', {x: window.innerWidth, duration: 1.5})
    setTimeout(() => {
        namibiaAbout.classList.remove('active');
        namibiaAboutClose.classList.remove('active');
    }, 1500)
});

burger.addEventListener('click', () => {
    header.classList.toggle('active')
});

window.addEventListener("scroll", () => {
    if(scrollY > 300) {
        header.classList.add('white-border');
    } else {
        header.classList.remove('white-border');
    }
});