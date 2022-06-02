const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {            
            document.querySelectorAll('.js-scroll').forEach((link) => {
              link.classList.toggle('js-scroll-active',
                   link.getAttribute('href').replace('#','') === entry.target.id
                   ); 
            });
        }
    });
},{
            threshold: 0.7,
    });
    

document.querySelectorAll('.js-section').forEach((section) => 
    observer.observe(section),
);

//Burger handler

const burgerItem = document.querySelector('.js-burger');
const menu = document.querySelector('.js-header__nav');
const menuCloseItem = document.querySelector('.js-header__nav-close');
const menuLinks = document.querySelectorAll('.js-header__link');

burgerItem.addEventListener('click', () => {
    menu.classList.add('js-header__nav_active');
});
menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('js-header__nav_active');
});
if (window.innerWidth <= 375) {
    menuLinks.forEach(function (value, i) {
        menuLinks[i].addEventListener('click', () => {
            menu.classList.remove('js-header__nav_active');
        })
        
    });
}



// Scroll to anchors



const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};
const scrollTo = function () {
    const links = document.querySelectorAll('.js-scroll');
    links.forEach(each => {
        each.addEventListener('click', function () {
            const currentTarget = this.getAttribute('href');
            smoothScroll(currentTarget, 1000);
        });
    });
};
scrollTo();
