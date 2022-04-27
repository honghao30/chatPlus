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
////탭


///탭----
//내비게이션


///내비게이션-----
//모달


//모달=======
//콤보박스


///콤보박스-----


