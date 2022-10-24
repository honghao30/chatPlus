//내비게이션
const keyvisual = document.querySelector(".key-visual");
const header = document.querySelector(".header");
if(keyvisual){
    header.classList.add("white-header");
}

// class GnbList {
//     constructor() {
//         this.navList = document.querySelectorAll('.gnb__list > li');
//         this.mobutton = document.querySelector('.mobile-menu');
//         this.listeners();
//     }
//     listeners() {
//         this.navList.forEach( el => {
//             el.addEventListener( 'mouseenter', this.gnbshow, false );
//         });
//         this.navList.forEach( el => {
//             el.addEventListener( 'mouseleave', this.gnbhide, false );
//         });
//         this.mobutton.addEventListener('click',this.toggleMo,false);
//     }
//     gnbshow(el){
//         this.classList.add('is-active');
//     }
//     gnbhide(el){
//         this.classList.remove('is-active');
//     }
//     toggleMo(){
//         const moGnbStage = document.querySelector('.header');
//         this.classList.toggle('is-active');
//         document.body.classList.toggle('is-active');
//         moGnbStage.classList.toggle('is-active');
//     }
// }
// new GnbList();


//모달=======
//콤보박스


///콤보박스-----




//function
//숫자에 콤마
const numComma = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// 형제 찾기
const searchSiblings = (el) => {
    return [...el.parentElement.children].filter(e => e !== el);
};
// 토글 일괄 
function toggleElements(...elements) {
  const elementsToToggle = [...elements];
  elementsToToggle.forEach(elementsToToggle => elementsToToggle.classList.toggle('is-active'));
}
//닫기 일괄
function closeElements(...elements) {
  const elementsToClose = [...elements];
  elementsToClose.forEach(elementToClose => elementToClose.classList.remove('is-active'));
}
//토글
function toggleHandler(triggers) {
    const triggerFunc = (el) => {
        if (el.classList.contains('is-set-toggle')) {
            return;
        }
        el.addEventListener( 'click', (e) => {
            e.preventDefault();
            el.classList.add('is-set-toggle');
            openToggleBox(el);
        });
    };
    if (triggers.length) {
        triggers.forEach( (el, idx) => {
            triggerFunc(el);
        });
    } else {
        triggerFunc(triggers);
    }
}


// 부모 찾기
function searchIdx(el, cls) {
    if (!el) {
        return;
    }
    if (el.classList.contains(cls)) {
        return el;
    }
    return searchIdx(el.parentElement, cls);
}