const navButton = document.querySelector('.header__nav-button--mobile');
const navButtonImage = document.querySelector('.header__nav-button__image--mobile');
let menuOpen = false;

const article = document.querySelector('article');
const navMenu = document.querySelector('.navigation--mobile');

const toggleMenu = () => {
    if(!menuOpen) {
        navButtonImage.src = 'images/close.svg'
        article.style.setProperty('display','none');
        navMenu.style.setProperty('display','flex');
        menuOpen = true;
    } else {
        navButtonImage.src = 'images/hamburger.svg'
        article.style.setProperty('display','flex');
        navMenu.style.setProperty('display','none');
        menuOpen = false;  
    }  
}

navButton.addEventListener('click', toggleMenu)
