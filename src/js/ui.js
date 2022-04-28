//내비게이션
const keyvisual = document.querySelector(".key-visual");
const header = document.querySelector(".header");
if(keyvisual){
    header.classList.add("white-header");
}

///내비게이션-----
//모달
(() =>{
    // eslint-disable-next-line max-len
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (window.innerWidth < 768);
    const isTabletSize = window.innerWidth < 1025;
    //keyvisual 있을때
    
    const gnbStage = document.querySelector('.gnb__list--wrap');
    const hambugmenu = document.querySelector('.mobile-menu-btn');
   
   
    gnbStage.addEventListener('click',gnbList);

    function gnbList(event){
        if(event.target.tagName == "A" && event.target.className == "hasDepth"){
            const naviItemList = event.target.parentElement;
            const gnbDepthHandler = [header,naviItemList,document.body];
            console.log(event.target.tagName);
            if(naviItemList.classList.contains("is-active")){                
                closeElements(...gnbDepthHandler);                     
            }
            else{
                if(gnbStage.querySelector(".gnbitem.is-active")){
                    gnbStage.querySelector(".gnbitem.is-active").classList.remove('is-active');
                }  
                addclassElements(...gnbDepthHandler);                                                      
            }                    
        }               
    }
    // function moGnbOpen(){
    //     const monaviArry = [hambugmenu,document.body,gnbstageWrap];
    //     toggleElements(...monaviArry);                          
    // } 
    // hambugmenu.addEventListener('click',moGnbOpen);
    // //모바일 햄버거            
    // document.addEventListener('mouseup',(e)=>{
    //     closeOutside(e);
    // });
    // function closeOutside(e){
    //     if(!gnbstageWrap.contains(e.target)){
    //         if(document.body.classList.contains('is-active')){
    //             globalNavigationItems.forEach((gnbItem) => {
    //                 gnbItem.parentNode.classList.remove('is-active');                                                                              
    //             }); 
    //             const pcActiveArry = [document.body,gnbwrap,gnbstageWrap,headerUtil];                         
    //             closeElements(...pcActiveArry);                                                 
    //         }  
    //     }
    // }
    // window.addEventListener("resize", function(){
    //     if(this.innerWidth > 1205){
    //         navreset();
    //     }
    // });   
    // function navreset(){                
    //     if(gnbstageWrap.classList.contains("is-active")){
    //         const monaviArry = [hambugmenu,document.body,gnbstageWrap,headerUtil,gnbwrap];                    
    //         closeElements(...monaviArry);  
    //         if(gnbwrap.querySelector(".global-navigation__list.is-active")){
    //             gnbwrap.querySelector(".global-navigation__list.is-active").classList.remove('is-active');
    //         }                       
    //     }                
    // }
    // //영역외 클릭시 닫기
    function addclassElements(...elements) {
        const elementsToAdd = [...elements];
        elementsToAdd.forEach(elementsToAdd => elementsToAdd.classList.toggle('is-active'));
    }       
    function toggleElements(...elements) {
        const elementsToToggle = [...elements];
        elementsToToggle.forEach(elementsToToggle => elementsToToggle.classList.toggle('is-active'));
    }              
    function closeElements(...elements) {
        const elementsToClose = [...elements];
        elementsToClose.forEach(elementToClose => elementToClose.classList.remove('is-active'));
    }              
})();   

//모달=======
//콤보박스


///콤보박스-----


