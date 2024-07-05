/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener("click", () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener("click", () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== SHOW CART ===============*/
const cart = document.getElementById('cart'),
      cartShop = document.getElementById('cart-shop'),
      cartClose = document.getElementById('cart-close')

/*===== CART SHOW =====*/
/* Validate if constant exists */
if(cartShop) {
    cartShop.addEventListener("click", () => {
        cart.classList.add('show-cart')
    })
}

/*===== CART HIDDEN =====*/
/* Validate if constant exists */
if(cartClose) {
    cartClose.addEventListener("click", () => {
        cart.classList.remove('show-cart')
    })
}

/*=============== SHOW LOGIN ===============*/
const login = document.getElementById('login'),
      loginButton = document.getElementById('login-button'),
      loginClose = document.getElementById('login-close')

/*===== LOGIN SHOW =====*/
/* Validate if constant exists */
if(loginButton) {
    loginButton.addEventListener("click", () => {
        login.classList.add('show-login')
    })
}

/*===== LOGIN HIDDEN =====*/
/* Validate if constant exists */
if(loginClose) {
    loginClose.addEventListener("click", () => {
        login.classList.remove('show-login')
    })
}

/*=============== HOME SWIPER ===============*/
var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: 'true',

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header') 
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== NEW SWIPER ===============*/
var newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 16,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: 'true',
  });

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== LIGHT BOX ===============*/


/*=============== QUESTIONS ACCORDION ===============*/
const accordionItem = document.querySelectorAll('.questions__item');
accordionItem.forEach((item) =>{
    const accordianHeader = item.querySelector('.questions__header');

    accordianHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open');
        toggleItem(item);

        if(openItem && openItem !== item){
            toggleItem(openItem);
        }
    })
})

const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.questions__content');

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style');
        item.classList.remove('accordion-open');
    }
    else{
        accordionContent.style.height = accordionContent.scrollHeight + "px";
        item.classList.add('accordion-open');
    }
}

/*=============== STYLE SWITCHER ===============*/
const styleSwitcherToggle = document.querySelector(".style_switcher-toggler");
styleSwitcherToggle.addEventListener("click", ()=> {
    document.querySelector(".style__switcher").classList.toggle("open");
})

//HIDE STYLE SWITCHER ON SCROLL
window.addEventListener("scroll", ()=> {
    if(document.querySelector(".style__switcher").classList.contains("open")){
        document.querySelector(".style__switcher").classList.remove("open");
    }
} )

/////////check line 16 in index.html add missing class

//THEME COLOR
function themeColor() {
    const colorStyle = document.querySelector(".js-color-style"),
    themeColorContainer = document.querySelector(".js-theme-color");
    themeColorContainer.addEventListener("click", ({target}) => {
        if(target.classList.contains("js-theme-color-item")){
            localStorage.setItem("color", target.getAttribute("data-js-theme-color"));
            setColors();
        }
    })
    function setColors(){
        let path = colorStyle.getAttribute("href").split("/");
        path = path.slice(0,path.length -1);
        colorStyle.setAttribute("href", path.join("/") + "/" + localStorage.getItem("color") + ".css");
        if(document.querySelector(".js-theme-color-item.active")){
            document.querySelector(".js-theme-color-item.active").classList.remove("active");
        }
        document.querySelector("[data-js-theme-color=" + localStorage.getItem("color") + "]").classList.add("active");
    }
    if(localStorage.getItem("color") !== null ){
        setColors();
    }
    else{
        const defaultColor = colorStyle.getAttribute("href").split("/").pop().split(".").shift();
        document.querySelector("[data-js-theme-color" + defaulter + "]").classList.add("active");
        console.log(defaultColor)
    }
    //1.19.05 watch 
}

themeColor();