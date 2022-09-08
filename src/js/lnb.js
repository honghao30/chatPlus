// Example of how a component should be initialized via JavaScript
// This script logs the value of the component's text property model message to the console

(function() {
    "use strict";

    // Best practice:
    // For a good separation of concerns, don't rely on the DOM structure or CSS selectors,
    // but use dedicated data attributes to identify all elements that the script needs to
    // interact with.
    var selectors = {
        self:      '[data-cmp-is="lnb"]',
    };

    function lnbmenu(config) {


        function init(config) {
            // To prevents multiple initialization, remove the main data attribute that
            // identified the component.
            const Linklist = [
                {
                    name : "블로그",
                    link : "https://velog.io/@honghao",
                    target : "_blank"
                },
                {
                    name : "갤러리(클릭더보기)",
                    link : "gallery01.html",
                    dataid: 1
                },
                {
                    name : "Faq",
                    link : "js_faq.html",
                    dataid: 2
                },
                {
                    name : "tab menu",
                    link : "js_tabtype1.html",
                    dataid: 3
                }
            ];
            const minigame = [
                {
                    name : "점심메뉴",
                    link : "lunch-menu.html",
                },
            ];
            config.element.removeAttribute("data-cmp-is");


            const _this = config.element;
            let resultHtml = ``;
            // menuli.innerHTML = `
            // <a href="#" >메뉴명</a>
            // `;
            //const menuli = document.createElement('li');
            for(let i = 0;i < Linklist.length;i++){
                resultHtml += `
                    <li>
                        <a href="${Linklist[i].link}" target="${Linklist[i].target}" data-id="${Linklist[i].dataid}">${Linklist[i].name}</a>
                    </li>
                `;
            }

            // Linklist.forEach(function(item,key){
            //     console.log(item,key);
            //     menuli.innerHTML = `
            //     <a href="#" >메뉴명</a>
            //     `;
            // })
            _this.querySelector('.lmuenu').innerHTML = resultHtml;
            //_this.querySelector('.lmuenu').appendChild(resultHtml);
            console.log(_this.querySelector('.lmuenu'))

            if (console && console.log) {
                console.log(
                    "lnb load",
                );
            }




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
            new lnbmenu({ element: elements[i] });
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
                                new lnbmenu({ element: element });
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
