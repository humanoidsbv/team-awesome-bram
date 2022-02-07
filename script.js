const navButton = document.querySelector('.header__nav-button');
const navButtonImage = document.querySelector('.header__nav-button__image');
let menuOpen = false;

const article = document.querySelector('article');
const navMenu = document.querySelector('nav');

const toggleMenu = () => {
    if(!menuOpen) {
        navButtonImage.src = 'images/Close.svg'
        article.style.setProperty('display','none');
        navMenu.style.setProperty('display','flex');
        menuOpen = true;
    } else {
        navButtonImage.src = 'images/Hamburger.svg'
        article.style.setProperty('display','flex');
        navMenu.style.setProperty('display','none');
        menuOpen = false;  
    }  
}

navButton.addEventListener('click', toggleMenu)