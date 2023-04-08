// приветствую смотрящих x2)


//аккордион

document.querySelectorAll('.top-item-skill-card').forEach((el) =>{
    const CARD_DESC = document.querySelectorAll('.card-desc');
    
    el.addEventListener('click', () => {
        let skillDesc = el.parentElement.lastElementChild;
        if (el.lastElementChild.textContent === '+') {
            document.querySelectorAll('.skill-card-button').forEach((el) => el.textContent = '+');
            document.querySelectorAll('.skill-card').forEach((el) => el.style.border = 'solid 1px #E1E5EE');
            el.parentElement.style.border = 'solid 1px #6E38F7';
            el.lastElementChild.textContent = '-';
            CARD_DESC.forEach((el) => el.style.display = 'none');
            skillDesc.style.display = 'block';
        } else {
            CARD_DESC.forEach((el) => el.style.display = 'none');
            el.lastElementChild.textContent = '+';
            el.parentElement.style.border = 'solid 1px #E1E5EE';
        }
    });
});

//меню-бургер

const MENU_BURGER = document.querySelector('.menu-burger');
MENU_BURGER.addEventListener('click', () => {
    let menuBurgerContent = document.querySelector('.menu-burger-content');
    if (menuBurgerContent.style.display !== 'flex' && MENU_BURGER.src !== `assets/images/x-menu-burger.png`){
        MENU_BURGER.src = 'assets/images/x-menu-burger.png';
        menuBurgerContent.style.display = 'flex';
        document.querySelector("body").style.overflow = 'hidden';

        document.querySelectorAll('.menu-burger-content > a').forEach((el) => {
            el.addEventListener('click', () => {
                MENU_BURGER.src = `assets/images/menu-burger.png`;
                menuBurgerContent.style.display = 'none';
                document.querySelector("body").style.overflow = 'visible';
            })
        })
    } else {
        MENU_BURGER.src = `assets/images/menu-burger.png`;
        menuBurgerContent.style.display = 'none';
        document.querySelector("body").style.overflow = 'visible';
    }
});

//плавный скролл якорных ссылок

document.querySelectorAll('.nav-item').forEach((el) =>{
    el.addEventListener('click', (ev) => {
        ev.preventDefault();
        let divId = el.getAttribute('href');
        document.querySelector('' + divId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

//слайдер

(function slider () {
    const SLIDER_BTN_PREV = document.querySelector('.slider-arrow-left'); 
    const SLIDER_BTN_NEXT = document.querySelector('.slider-arrow-right'); 
    const SLIDES_BLOCK =  document.querySelector('.slides'); 
    let slide; 
    let newSlide; 

    SLIDER_BTN_PREV.addEventListener('click', () => { 
        let slides = Array.from(document.querySelectorAll('.slide')); 
        slide = slides[slides.length-1]; 
        newSlide = slide.cloneNode(true);
        slide.remove();
        SLIDES_BLOCK.insertAdjacentElement('afterbegin', newSlide);
    });
    SLIDER_BTN_NEXT.addEventListener('click', () => {
        let slides = Array.from(document.querySelectorAll('.slide'));
        slide = slides[0];
        newSlide = slide.cloneNode(true);
        slide.remove();
        SLIDES_BLOCK.insertAdjacentElement('beforeend', newSlide);
    })
}());

(function sendButton () {
    const SEND_BTN = document.querySelector('.form-button');
    const FORM_NAME = document.querySelector('.form-name');
    const FORM_EMAIL = document.querySelector('.form-email');
    FORM_NAME.setAttribute('pattern', '^[a-zA-Z]+$');
    FORM_EMAIL.setAttribute('type', 'email');
    
    SEND_BTN.addEventListener('click', () =>{
        if (!FORM_EMAIL.value && !FORM_NAME.value) {
            FORM_EMAIL.style.border = 'solid 1px #DF1F1F';
            FORM_NAME.style.border = 'solid 1px #DF1F1F';
        }
    })
}());