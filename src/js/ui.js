//내비게이션
const keyvisual = document.querySelector(".key-visual");
const header = document.querySelector(".header");
if(keyvisual){
    header.classList.add("white-header");
}

class GnbList {
    constructor() {        
        this.navList = document.querySelectorAll('.gnb__list--wrap li > a');        
        this.listeners();
    }
    listeners() {  
        this.navList.forEach( el => {
            el.addEventListener( 'mouseenter', this.gnbshow, false );
        });       
        this.navList.forEach( el => {
            el.addEventListener( 'mouseleave', this.gnbhide, false );
        });         
    }
    gnbshow(el){
        this.parentElement.classList.add('is-active');
    }
    gnbhide(el){
        this.parentElement.classList.remove('is-active');
    }
}
new GnbList();

//모달=======
//콤보박스


///콤보박스-----


