// 스크롤 모션
function ScrollEnterMain() {
    const scrollElements = document.querySelectorAll(".scroll-enter");
    if(scrollElements) {
        const elementInView = (el,dividend = 1) => {
            const elementTop = el.getBoundingClientRect().top;
            return(elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
        };
        // section enter 시
        const elementOutofView = (el) =>{
            const elementTop = el.getBoundingClientRect().top;
            return(elementTop > ( window.innerHeight || document.documentElement.clientHeight));
        };
        //section out 시
        const displayScrollElement = (element) => {
            element.classList.add("motion_view");
        };
        const hideScrollElement = (element) => {
            element.classList.remove("motion_view");
        };
        const handleScrollAnimation = () => {
            scrollElements.forEach((el) => {
                if(elementInView(el, 1.25)) {
                    displayScrollElement(el);
                }else if(elementOutofView(el)) {
                    hideScrollElement(el);
                }
            });
        };
        window.addEventListener("scroll", () => {
            handleScrollAnimation();
        });
    }
}
ScrollEnterMain();

///// === 스크롤 모션
// 위 아래 구분을 위한 스크립트
let lastScrollTop = 0;
window.addEventListener('scroll',scrollEventManage);

function scrollEventManage(){
    const Yoffset = window.pageYOffset || document.documentElement.scrollTop;
    const header = document.querySelector(".header");
    const keyvisual = document.querySelector(".key-visual");

    if (Yoffset > lastScrollTop){
        // downscroll code
        header.classList.remove('fixed');
        console.log('내려가나');

    } else {
        // upscroll code
        console.log('올라가나');
        if(keyvisual){
            const keyviHeight = keyvisual.offsetHeight * 0.7;

        }

    }
    lastScrollTop = Yoffset <= 0 ? 0 : Yoffset;
    // 위 아래 구분을 위한 스크립트====================
}
const keyvi = document.querySelector(".key-visual");
function keyviSet(){
    if(keyvi){
        const keyvisualHeight = 5 * window.innerHeight;
        keyvi.style.height = `${keyvisualHeight}px`;
        console.log("시작",keyvisualHeight)
        // if(yOffset >= 0){
        //     keyvi.classList.add('fixed');
        // };
        // if(yOffset >= keyviheight){
        //     keyvi.classList.remove('fixed');
        // };
    }
}

//VISUAL TEXT ANI
window.addEventListener('scroll',scrolltextmotion);
function scrolltextmotion(){
    keyviSet();
    const yOffset = window.pageYOffset;
    const keyviheight = keyvi.offsetHeight;
    const scrollRatio = (yOffset /  keyviheight) * 100;
    if(yOffset >= 0){
        document.querySelector(".slider-continer").classList.add('fixed');
    };
    if(yOffset >= keyviheight){
        document.querySelector(".slider-continer").classList.remove('fixed');
    };
    if(yOffset == 0){
        document.querySelector(".slider-continer").classList.remove('fixed');
    }
    if(yOffset <= (scrollRatio * 0.25)){
        document.querySelector(".tit-msg1").style.opacity = 1;
        console.log('1번',scrollRatio)
    }
}