// Example of how a component should be initialized via JavaScript
// This script logs the value of the component's text property model message to the console

(function() {
    "use strict";

    // Best practice:
    // For a good separation of concerns, don't rely on the DOM structure or CSS selectors,
    // but use dedicated data attributes to identify all elements that the script needs to
    // interact with.
    var selectors = {
        self:      '[data-cmp-is="checkPlate"]',
    };

    function PlateCheck(config) {

        let plateInput = document.querySelectorAll('.inquiry-form__wrap .number');
        function fnChkBytes(obj, maxByte){
            let str = obj.value;
            let str_len = str.length;

            let rbyte = 0;
            let rlen = 0;
            let one_char = /\s/;
            let str2 =  /\s/;

            // var regExp = /[ \{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=]/gi;
            // if(regExp.test(obj.value) ){
            //     obj.value = obj.value.substring( 0 , obj.value.length - 1 ); // 입력한 특수문자 한자리 지움
            //  }
            if(one_char.exec(obj.value)) { //공백 체크
                alert("해당 항목에는 공백을 사용할수 없습니다.\n\n공백은 자동적으로 제거 됩니다.");
                obj.focus();
                obj.value = obj.value.replace(' ',''); // 공백제거

                return false;
            }
            var check_string = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9-|]+$/; // 숫자 및 하이픈

            if( !check_string.test(str) && str.length > 0) {
                alert("특수문자는 - 만 가능 합니다.",str);
                obj.value = obj.value.replace(str,''); // 공백제거
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
                alert("한글 영문 "+maxByte+"자를 초과 입력할 수 없습니다.");
                str2 = str.substr(0,rlen);                                  //문자열 자르기
                obj.value = str2;
                fnChkBytes(obj, maxByte);
            }else{
                //document.getElementById('byteInfo').innerText = rbyte;
            }
        }

        plateInput.forEach(function(plate, index) {
            plate.addEventListener('input',() => {
                fnChkBytes(plate,'13',index);
            });
        });

        // --------------


        function init(config) {
            // Best practice:
            // To prevents multiple initialization, remove the main data attribute that
            // identified the component.
            config.element.removeAttribute("data-cmp-is");

            if (console && console.log) {
                console.log(
                    "번호판 component JavaScript example",
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
            new PlateCheck({ element: elements[i] });
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
                                new PlateCheck({ element: element });
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