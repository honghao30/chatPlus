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

//모달=======
//콤보박스


///콤보박스-----


