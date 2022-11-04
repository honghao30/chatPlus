// Example of how a component should be initialized via JavaScript
// This script logs the value of the component's text property model message to the console

(function() {
    "use strict";

    // Best practice:
    // For a good separation of concerns, don't rely on the DOM structure or CSS selectors,
    // but use dedicated data attributes to identify all elements that the script needs to
    // interact with.
    var selectors = {
        self:      '[data-cmp-is="vidoe-cmp"]',
    };

    function videoControll(config) {


        function init(config) {
            // Best practice:
            // To prevents multiple initialization, remove the main data attribute that
            // identified the component.
            config.element.removeAttribute("data-cmp-is");

            const _this = config.element;
            if (console && console.log) {
                console.log(
                    "스크립트 테스트",
                );
            }
            console.log(config,_this)
            //스크롤 시 동영상 재생
            window.addEventListener('scroll',scrollEventHandler);
            window.addEventListener('resize',scrollEventHandler);
            function scrollEventHandler()   {
                let scrollY = window.pageYOffset || document.documentElement.scrollTop;
                const videoElimOffsetTop = _this.offsetTop;
                const screenHeight = window.innerHeight / 2;
                const videoElimHeight = _this.screenHeight;
                if(scrollY > videoElimOffsetTop - screenHeight || scrollY < videoElimOffsetTop + videoElimHeight){
                    videoPlayAuto();
                }else{
                    videoPauseAuto();
                }               
            }
            //비디오 
            


            //video handler
            const videoControll = (e) => {
                if(!e.target.classList.contains('btn-play-video')) {
                    return;
                }
                const _thisVideo = e.target.nextElementSibling;
                const _isYoutube = _thisVideo.classList.contains('youtube');
                if (_isYoutube) {
                    let _youtubeplayer = _thisVideo.contentWindow;
                    if (e.target.classList.contains('is-pause')) {
                        _youtubeplayer.postMessage('{"event":"command","func":"pauseVideo","args":""}','*');
                    } else {
                        _youtubeplayer.postMessage('{"event":"command","func":"playVideo","args":""}','*');
                    }
                }else {
                    if (_thisVideo.paused) {
                        _thisVideo.play();   // play() ➡ 영상 재생하는 메서드
                    } else {
                        _thisVideo.pause();  // pause() ➡ 영상 중지하는 메서드
                    }
                }
                e.target.classList.toggle('is-pause');
            };
            //scroll auto play
            const videoPlayAuto = () => {
                const _videos = document.querySelectorAll('.video-cmp video');
                if(_videos){
                    for(var i=0; i<_videos.length;i++){
                      _videos[i].play();
                    }                    
                }
            };      
            //scroll auto pause
            const videoPauseAuto = () => {
                const _videos = document.querySelectorAll('.video-cmp video');
                if(_videos){
                    for(var i=0; i<_videos.length;i++){
                        _videos[i].pause();
                      
                    }                    
                }
            };                      
            // All Video Stop
            const videoStop = () => {
                const _videos = document.querySelectorAll('.cmp-swiper-full-pop .is-video');
                const _videoPlayer = document.querySelectorAll('.cmp-swiper-full-pop video');
                const _youtubeplayer = document.querySelectorAll('.cmp-swiper-full-pop iframe');
                if (_videos) {
                    Array.from(_videos).forEach(function(videos) {
                        let buttonPlay = videos.querySelector('.btn-play-video');
                        if(buttonPlay) {
                            buttonPlay.classList.remove('is-pause');
                        }
                    });
                }
            
                if(_videoPlayer) {
                    for(var i=0; i<_videoPlayer.length;i++){
                        _videoPlayer[i].pause();
                    }
                }            
                if(_youtubeplayer) {
                    Array.from(_youtubeplayer).forEach(function(youtubeplayer) {
                        let youtubeplayer2 = youtubeplayer.contentWindow;
                        youtubeplayer2.postMessage('{"event":"command","func":"stopVideo","args":""}','*');
                    });
                }
            };

        }

        if (config && config.element) {
            init(config);
        }
    }

    // Best practice:
    // Use a method like this mutation obeserver to also properly initialize the component
    // when an author drops it onto the page or modified it with the dialog.
    function onDocumentReady() {
        var elements = document.querySelectorAll(selectors.self);
        for (var i = 0; i < elements.length; i++) {
            new videoControll({ element: elements[i] });
        }

        var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        var body             = document.querySelector("body");
        var observer         = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                // needed for IE
                var nodesArray = [].slice.call(mutation.addedNodes);
                if (nodesArray.length > 0) {
                    nodesArray.forEach(function(addedNode) {
                        if (addedNode.querySelectorAll) {
                            var elementsArray = [].slice.call(addedNode.querySelectorAll(selectors.self));
                            elementsArray.forEach(function(element) {
                                new videoControll({ element: element });
                            });
                        }
                    });
                }
            });
        });

        observer.observe(body, {
            subtree: true,
            childList: true,
            characterData: true
        });
    }

    if (document.readyState !== "loading") {
        onDocumentReady();
    } else {
        document.addEventListener("DOMContentLoaded", onDocumentReady);
    }

}());
