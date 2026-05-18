// PARALLAX 
const cloudLayers = document.querySelectorAll('#clouds img'); // nodelist of cloud imgs

let lastScrollPos = 0; 

function parallaxEffect() {
    const scrollPosition = window.scrollY;
    const height = window.innerHeight; // viewport height
    const scrollingDown = scrollPosition > lastScrollPos; 

    cloudLayers.forEach((cloud, index) => {
        const speed = (index + 1) * 0.08; // gives each cloud layer a different moving speed for depth

        
        if ((scrollingDown && scrollPosition < height*2.25) || (!scrollingDown && scrollPosition < height*2)){ // if scrolling down at/before "about", OR if scrolling UP at "about"
            cloud.style.setProperty('--parallax-y', `${scrollPosition * speed}px`); // setting css property from js, js expression in ${} interpolates into string)
            cloud.style.setProperty('--parallax-x', '0px'); 
            cloud.style.setProperty('--cloud-transition', '0s');                 
        } else if (scrollingDown && scrollPosition >= height*2.5) { // if scrolling down at/after "projects"
            cloud.style.setProperty('--parallax-x', index % 2 === 0 ? '-150%' : '150%'); // moves left/right depending on index (left if even, right if odd)
            cloud.style.setProperty('--cloud-transition', '2s ease-in-out');            
        } else if (!scrollingDown && scrollPosition < height*2.5) { // if scrolling UP at/above "projects"
            cloud.style.setProperty('--parallax-x', '0px');
            cloud.style.setProperty('--cloud-transition', '2s ease-in-out');            
        }
    }); 

    lastScrollPos = scrollPosition;
}

window.addEventListener('scroll', parallaxEffect);


// PROJECT SCROLL GRADIENT/FADE EFFECT 
const projectScroll = document.querySelector('.project-scroll');

projectScroll.addEventListener('scroll', () => {
    projectScroll.classList.toggle('scrolled', projectScroll.scrollTop > 0); // (class, condition that must be true in order to add -- removes if condition F)
});