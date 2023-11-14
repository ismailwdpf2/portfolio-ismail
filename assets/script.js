let menu = document.querySelector('#menu-icon');
let navabr = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navabr.classList.toggle('open');
};
const sr = ScrollReveal({
    distance : '40px',
    duration : 2500,
    reset : true
});
sr.reveal('.logo',{delay:250, origin:'left'});
sr.reveal('.navbar',{delay:400, origin:'top'});
sr.reveal('.menu-btn',{delay:300, origin:'top'});
sr.reveal('.home-text span',{delay:350, origin:'right'});
sr.reveal('.home-text h1',{delay:300, origin:'right'});
sr.reveal('.home-text p',{delay:350, origin:'left'});
sr.reveal('.main-btn',{delay:350, origin:'top'});
sr.reveal('.home-img',{delay:300, origin:'left'});

sr.reveal('.social',{delay:700, origin:'top'});