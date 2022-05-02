//내비게이션
const keyvisual = document.querySelector(".key-visual");
const header = document.querySelector(".header");
if(keyvisual){
    header.classList.add("white-header");
}

class GnbList {
    constructor() {        
        this.navList = document.querySelectorAll('.gnb__list--wrap li > a');        
        this.target = null;
        this.firstChild = null;
        this.lastChild = null;

        this.active = 'gnb-active';
    }
    
    init() {
        this.navLi.map(elm => {
            this.target = this.navList;
            this.mouseEvent();
        });
    }
    mouseEvent(){
        this.target.addEventListener('mouseenter',(e) => this.eventHandleer(e));
        this.target.addEventListener('mouseleave',(e) => this.eventHandleer(e));
    }
    eventHandleer(e){
        console.log(this.target)
        let type = e.type;
        // this.firstChild = e.target.firstElementChild;
        // this.lastChild = e.target.lastElementchild;                

        // (type == 'mouseenter') ? this.open() : this.close();
    }
}
new GnbList();

//모달=======
//콤보박스


///콤보박스-----


