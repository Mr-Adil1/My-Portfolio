//navbar toggle
let navbar = document.getElementById('navbar');
let ul = document.getElementById('ul');
let menu_icon = document.getElementById('menu-bar');

menu_icon.addEventListener('click', () => {
    navbar.classList.toggle('nav-toggle');
    ul.classList.toggle('ul-flex');
    menu_icon.classList.toggle('bx-x')
});

window.onscroll = () => {
    navbar.classList.remove('nav-toggle');
    ul.classList.remove('ul-flex');
    menu_icon.classList.remove('bx-x')
};

window.onclick = (event) => {
    if (!event.target.matches('.bx-menu')) {
        var nav = document.getElementsByClassName('navbar');
        var i;
        for (i = 0; i < nav.length; i++) {
            if (nav[i].classList.contains('nav-toggle') && menu_icon.classList.contains('bx-x')) {
                nav[i].classList.remove('nav-toggle');
                menu_icon.classList.remove('bx-x');
            };
        };
    };
};


//scroll reviel

const sr = ScrollReveal({
        distance: "60px",
        duration: 2500,
        delay: 400,
        reset: true
    })
    // home-scroll-reveal
    // sr.reveal('.home', { delay: 200, origin: 'top' });
    // sr.reveal('.home .container .home-content', { delay: 400, origin: 'left' });
    // sr.reveal('.home .container .home-contect', { delay: 600, origin: 'left' });
    // sr.reveal('.home .links', { delay: 800, origin: 'left' });
    // // about-scroll-reveal
    // sr.reveal('.about .col-1', { delay: 400, origin: 'left' });
    // sr.reveal('.about .col-2', { delay: 600, origin: 'left' });
    // // skills-scroll-reveal
    // sr.reveal('.skills', { delay: 200, origin: 'left' });
    // sr.reveal('.skills .container .html-row', { delay: 400, origin: 'left' });
    // sr.reveal('.skills .container .css-row', { delay: 600, origin: 'left' });
    // sr.reveal('.skills .container .js-row', { delay: 700, origin: 'left' });
    // sr.reveal('.skills .container .tail-row', { delay: 800, origin: 'left' });
    // // work-scroll-reveal
    // sr.reveal('.work .work-container .row-1', { delay: 300, origin: 'top' });
    // sr.reveal('.work .work-container .row-2', { delay: 200, origin: 'top' });
    // sr.reveal('.work .work-container .row-1 .col-1', { delay: 500, origin: 'left' });
    // sr.reveal('.work .work-container .row-2 .col-1', { delay: 500, origin: 'left' });
    // sr.reveal('.work .work-container .row-1 .col-2', { delay: 700, origin: 'left' });
    // sr.reveal('.work .work-container .row-2 .col-2', { delay: 700, origin: 'left' });
    // // contect-scroll-reveal
    // sr.reveal('.contect', { delay: 200, origin: 'left' });
    // sr.reveal('.contect .second-col', { delay: 800, origin: 'left' });
    // sr.reveal('.contect .first-col', { delay: 600, origin: 'left' });
    // sr.reveal('.about', { delay: 200, origin: 'top' });