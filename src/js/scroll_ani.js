// 스크롤 모션 애플 타입

(() => {

	let yOffset = 0; // window.pageYOffset 대신 쓸 변수
    const heightNum = 5;
    const keycontainer = document.querySelector('.key-visual');
    const keymessageA = document.querySelector('.key-visual .visual-infor__text.tit-msg1');
    const keymessageB = document.querySelector('.key-visual .visual-infor__text.tit-msg2');
    const keymessageC = document.querySelector('.key-visual .visual-infor__text.tit-msg3');
    const keycanvas = document.querySelector('.slider-continer');

	const sceneInfo = [
        {
			values: {
				canvas_opacity: [1, 0, { start: 0.9, end: 1 }],
				messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
				messageB_opacity_in: [0, 1, { start: 0.3, end: 0.4 }],
				messageC_opacity_in: [0, 1, { start: 0.5, end: 0.6 }],

				messageA_translateY_in: [20, 0, { start: 0.1, end: 0.2 }],
				messageB_translateY_in: [20, 0, { start: 0.3, end: 0.4 }],
				messageC_translateY_in: [20, 0, { start: 0.5, end: 0.6 }],

				messageA_opacity_out: [1, 0, { start: 0.25, end: 0.3 }],
				messageB_opacity_out: [1, 0, { start: 0.45, end: 0.5 }],
				messageC_opacity_out: [1, 0, { start: 0.65, end: 0.7 }],

				messageA_translateY_out: [0, -20, { start: 0.25, end: 0.3 }],
				messageB_translateY_out: [0, -20, { start: 0.45, end: 0.5 }],
				messageC_translateY_out: [0, -20, { start: 0.65, end: 0.7 }],

			}
		},
	];



	window.addEventListener('load', () => {

		setLayout();

        window.addEventListener('scroll', () => {
            yOffset = window.pageYOffset;
            playAnimation();
  		});

  		window.addEventListener('resize', () => {
  			if (window.innerWidth > 900) {
  				setLayout();
                  playAnimation();
			}
  		});
	});
})();
