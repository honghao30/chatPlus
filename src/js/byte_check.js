// Example of how a component should be initialized via JavaScript
// This script logs the value of the component's text property model message to the console

(function() {
    "use strict";

    // Best practice:
    // For a good separation of concerns, don't rely on the DOM structure or CSS selectors,
    // but use dedicated data attributes to identify all elements that the script needs to
    // interact with.
    var selectors = {
        self:      '[data-cmp-is="byte-check"]',
    };

    function ByteCheck(config) {

        console.log(config);        
        let target = document.querySelector(selectors.self);
        let inputText = target.querySelectorAll('input[data-type="user-data"]');
        let textAeas = target.querySelectorAll('textarea');
        function fnChkByte(textAea,maxByte,index){
            let str = textAea.value;
            let str_len = str.length;

            let rbyte = 0;
            let rlen = 0;
            let one_char = "";
            let str2 = "";
            let max = textAea.getAttribute('data-max');
            if(max) {
                maxByte = max;
            }

            for(var i=0; i<str_len; i++){
                one_char = str.charAt(i);
                if(escape(one_char).length > 4){
                    rbyte += 2;  //한글2Byte
                }else{
                    rbyte++; //영문 등 나머지 1Byte
                }

                if(rbyte <= maxByte){
                    rlen = i+1;  //return할 문자열 갯수
                }
            }
            if(rbyte > maxByte){
                alert("한글 "+(maxByte/2)+"자 / 영문 "+maxByte+"자를 초과 입력할 수 없습니다.");
                str2 = str.substr(0,rlen); //문자열 자르기
                textAea.value = str2;
                fnChkByte(textAea,maxByte,index);
            }else{
                if( document.getElementById('byteInfo')) {                    
                    if(textAea.getAttribute('type')!=='text') {                        
                        document.getElementById('byteInfo').innerText = rbyte;
                    }
                }else {
                    // 멀티 케이스, data-max값 있는 경우 
                    if(textAea.getAttribute('type')!=='text') {
                        //texarea용
                        document.querySelectorAll('.byteInfo')[index].innerText = rbyte;
                    }
                }
            }
        }

        // 기본 제한 글자 수 2000
        // 마크업에 data-max 있는 경우는 추가 체크 
        textAeas.forEach(function(textAea, index) {
            textAea.addEventListener('input',() => {
                fnChkByte(textAea,'100',index);
            });
        });

        if(inputText) {
            inputText.forEach(function(inputText, index) {
                inputText.addEventListener('input',() => {
                    fnChkByte(inputText,'100',index);
                });
            });
        }
        
        
        // --------------


        function init(config) {
            // Best practice:
            // To prevents multiple initialization, remove the main data attribute that
            // identified the component.
            config.element.removeAttribute("data-cmp-is");          

            if (console && console.log) {
                console.log(
                    "price-category component JavaScript example",
                );
            }

            //필요할 경우
       

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
            new ByteCheck({ element: elements[i] });
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
                                new ByteCheck({ element: element });
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