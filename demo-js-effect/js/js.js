const navBar = document.querySelector('.main-menu__wrap');
const html = document.querySelector('html');
const backToTop = document.querySelector('.back-to-top');
const textInfo = document.querySelector('.info__text');
let isNavBar = false;
console.log('navBar :', navBar);
console.log('html :', html);

html.addEventListener('scroll',function(){

    console.log('cor');
})
window.addEventListener('scroll',function(e){
    let getScrollTop = html.scrollTop;
console.log('getScrollTop :', getScrollTop);
    if (getScrollTop > 80 && !isNavBar){
        navBar.classList.add('js-nav-fixed');
        isNavBar=true;
        console.log('isNavBar :', isNavBar);
    }
    if (getScrollTop <57 && isNavBar) {
        navBar.classList.remove('js-nav-fixed');
        navBar.style.animation = "navShow 0.2s";
        isNavBar=false;
        console.log('isNavBar2 :', isNavBar); 
    }

    if (getScrollTop > 200){
        backToTop.classList.add('js-back-to-top-show');
    }
    if (getScrollTop < 200){
        backToTop.classList.remove('js-back-to-top-show');
    }

    if (getScrollTop > 800){
        textInfo.classList.add('js-info-move');
        console.log('vo day chua');
    }

})