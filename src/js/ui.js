//내비게이션
const keyvisual = document.querySelector(".key-visual");
const header = document.querySelector(".header");
if(keyvisual){
    header.classList.add("white-header");
}

class GnbList {
    constructor() {
        this.navList = document.querySelectorAll('.gnb__list > li');
        this.mobutton = document.querySelector('.mobile-menu');
        this.listeners();
    }
    listeners() {
        this.navList.forEach( el => {
            el.addEventListener( 'mouseenter', this.gnbshow, false );
        });
        this.navList.forEach( el => {
            el.addEventListener( 'mouseleave', this.gnbhide, false );
        });
        this.mobutton.addEventListener('click',this.toggleMo,false);
    }
    gnbshow(el){
        this.classList.add('is-active');
    }
    gnbhide(el){
        this.classList.remove('is-active');
    }
    toggleMo(){
        const moGnbStage = document.querySelector('.header');
        this.classList.toggle('is-active');
        document.body.classList.toggle('is-active');
        moGnbStage.classList.toggle('is-active');
    }
}
new GnbList();
//스크롤 메뉴
function scrollTabLIst(){
    const categoryMenu =document.querySelectorAll(".scroll-type__wrap  li > a");
    for(let s = 0;s < categoryMenu.length;s++){
        categoryMenu[s].addEventListener('click',cateListInit);
    }
    function cateListInit(event){
        for(let i = 0;i < categoryMenu.length;i++){
            categoryMenu[i].parentNode.classList.remove('is-on');
        }
        event.target.parentNode.classList.add('is-on');
        activemove();
    }
}

function activemove(){
    const targetItem = document.querySelectorAll('.tab-scroll__list li');
    let listIWidth = 0;
    let targetLeft = 0;
    let pos = 0;
    const scrolltype = document.querySelector('.scroll-type__wrap');
    const scrollElim = document.querySelector('.scroll-type__wrap .inner-scroll');
    const scrollList = document.querySelector('.tab-scroll__list');
    const Eventtarget = document.querySelector('.tab-scroll__list li.is-on');

    if(scrolltype != null && window.innerWidth <= 1280){
        const scrollElimWid = scrollElim.offsetWidth; //스크롤 될 부모의 width
        const scrollBoxHarf = Math.ceil(scrollElimWid / 2);  //스크롤 될 부모 width 의 반
        const scrollAllList = scrollList.offsetWidth;
        const selectTarget = Eventtarget.offsetLeft;
        const selectTargetPos = selectTarget + (Eventtarget.offsetWidth / 2);
        for (var i=0; i< targetItem.length; i++) {
            listIWidth += targetItem[i].offsetWidth;
        }
        const this_index = Eventtarget.getAttribute('data-num');
        if (selectTargetPos <= scrollBoxHarf) { // left
            pos = 0;
        }else if ((listIWidth - selectTargetPos) <= scrollBoxHarf) { //right
            pos = listIWidth-scrollElimWid;
        }else {
            pos = selectTargetPos - scrollBoxHarf;
        }
        scrollList.style.transform = "translate3d("+ (pos*-1) +"px, 0, 0)";
        scrollList.style.transitionDuration = `500ms`;
        const scrollPos = scrollList.style.transform = "translate3d("+ (pos*-1) +"px, 0, 0)";
        //console.log('페이지이동후 이 값을 다시 박아주기' + scrollPos);
    }
}

    scrollTabLIst();
    activemove();

//모달=======
//콤보박스


///콤보박스-----


