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
        header.classList.remove('fixed')
        console.log('내려가나',Yoffset)

    } else {
        // upscroll code
        console.log('올라가나');
        if(keyvisual){
            const keyviHeight = keyvisual.offsetHeight * 0.7;
            if(Yoffset >= keyviHeight){
                header.classList.add('fixed')
            }else {
                header.classList.remove('fixed')
            }
        }

    }
    lastScrollTop = Yoffset <= 0 ? 0 : Yoffset;
    // 위 아래 구분을 위한 스크립트====================
}

//비주얼 모션
const keyvisual = document.querySelector('.key-visual');
if(keyvisual){
    const keyHeight = keyvisual.clientHeight;
    const keyoffTop = keyvisual.offsetTop;
    const keyScroHt = keyHeight * 4;
    const keyTotal = keyScroHt + keyoffTop;
    keyvisual.style.height = keyScroHt + "px";
    const keyviRadio = keyTotal * 100;
    const scrollPercentage = (keyvisual.keyoffTop + keyvisual.clientHeight) / keyvisual.scrollHeight;
    console.log(keyviRadio,scrollPercentage);


    // window.addEventListener('scroll', function (event) {
    //     let {scrollTop, scrollHeight, clientHeight} = event.target.scrollingElement;

    //     let contentHeight = scrollHeight - clientHeight;
    //     let ratio = (scrollTop / contentHeight) * 100;

    //     scrollBar.style.transform = `translateX(-${100 - ratio}%)`;
    //     scrollBar.style.transition = 'transform 0.5 ease-out';
    // })
}