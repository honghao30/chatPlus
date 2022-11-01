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
const modalPopup = () => {
    const btnClts = document.querySelectorAll('.modal-open');
    btnClts.forEach(btnClt =>{
        btnClt.addEventListener('click',()=> {
            let _this = btnClt;       
            let _targetId = _this.getAttribute('data-modal');
            let _target = document.getElementById(_targetId);
            let _targetInner = _target.querySelector('.modal-popup__wrap');
            _this.classList.add('is-active');
            _target.classList.add('is-active');
            _targetInner.classList.toggle('is-active');
            _this.setAttribute('data-fucus','on');            
            _targetInner.setAttribute('tabindex','0');
            console.log(_this,_target)
        })        
    })
 

    document.addEventListener('click',(event) =>{
        if(event.target.classList.contains('btn-close-modal')){
            const _prarentEl = event.target.parentElement;
            _prarentEl.classList.remove('is-active');
            _prarentEl.removeAttribute('tabindex');
            document.querySelector('[data-fucus]').focus();
            setTimeout(() => {  
                _prarentEl.parentElement.classList.remove('is-active');
                document.querySelector('[data-fucus]').removeAttribute('data-fucus');
            }, 1000);        
        }
    })
 }
modalPopup();
//modal end
//modal type1
class Modal {
	constructor() {
		this.triggers = document.querySelectorAll( '.js-modal' );
		this.close = document.querySelectorAll( '.js-close-modal' );
		this.modals = document.querySelectorAll( '.modal' );
		this.modalInners = document.querySelectorAll( '.modal-inner' );

		this.listeners();
	}

	listeners() {
		window.addEventListener( 'keydown', this.keyDown );

		this.triggers.forEach( el => {
			el.addEventListener( 'click', this.openModal, false );
		} );

		this.modals.forEach( el => {
			el.addEventListener( 'transitionend', this.revealModal, false );
			el.addEventListener( 'click', this.backdropClose, false );
		} );

		this.close.forEach( el => {
			el.addEventListener( 'click', Modal.hideModal, false );
		} );

		this.modalInners.forEach( el => {
			el.addEventListener( 'transitionend', this.closeModal, false );
		} );
	}

	keyDown( e ) {
		if ( 27 === e.keyCode && document.body.classList.contains( 'modal-body' ) ) {
			Modal.hideModal();
		}
	}

	backdropClose( el ) {
		if (!el.target.classList.contains( 'modal-visible' ) ) {
			return;
		}
		let backdrop =  el.currentTarget.dataset.backdrop !== undefined ? el.currentTarget.dataset.backdrop : true ;
		if ( backdrop === true ) {
			Modal.hideModal();
		}
	}

	static hideModal() {
		let modalOpen = document.querySelector( '.modal.modal-visible' );
		modalOpen.querySelector( '.modal-inner' ).classList.remove( 'modal-reveal' );
		document.querySelector( '.modal-body' ).addEventListener( 'transitionend', Modal.modalBody, false );
		document.body.classList.add( 'modal-fadeOut' );
	}

	closeModal( el ) {
		if ( 'opacity' === el.propertyName && ! el.target.classList.contains( 'modal-reveal' ) ) {
			document.querySelector( '.modal.modal-visible' ).classList.remove( 'modal-visible' );
		}
	}

	openModal( el ) {
		if (!el.currentTarget.dataset.modal) {
			console.error( 'No data-modal attribute defined!' );
			return;
		}

		let modalID = el.currentTarget.dataset.modal;
		let modal = document.getElementById( modalID );

		document.body.classList.add( 'modal-body' );
		modal.classList.add( 'modal-visible' );
	}

	revealModal( el ) {
		if ( 'opacity' === el.propertyName && el.target.classList.contains( 'modal-visible' ) ) {
			el.target.querySelector( '.modal-inner' ).classList.add( 'modal-reveal' );
		}
	}

	static modalBody( el ) {
		if ( 'opacity' === el.propertyName && el.target.classList.contains( 'modal' ) && ! el.target.classList.contains( 'modal-visible' ) ) {
			document.body.classList.remove( 'modal-body', 'modal-fadeOut' );
		}
	}

}

new Modal();




//modal type2
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