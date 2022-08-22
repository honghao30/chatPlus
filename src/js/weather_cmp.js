import weatherDescKo from "./weather_ko";

(function() {
    "use strict";

    var selectors = {
        self:      '[data-cmp-is="weaTher"]',
    };

    function TodayWeather(config) {


        function init(config) {
            // Best practice:
            // To prevents multiple initialization, remove the main data attribute that
            // identified the component.
            config.element.removeAttribute("data-cmp-is");


            const monthNames = ["1", "2", "3", "4", "5", "6",
            "7", "8", "9", "10", "11", "12"
            ];            
            
            
            let dateObj = new Date();
            let month = monthNames[dateObj.getUTCMonth()];
            let day = dateObj.getUTCDate();
            let year = dateObj.getUTCFullYear();            
            
            
            let hours = dateObj.getHours(); // 시
            let minutes = dateObj.getMinutes();  // 분
            let seconds = dateObj.getSeconds();  // 초
            
            let nowtime = `${hours}시 : ${minutes}분 : ${seconds}초`;
            let newdate = `${year}년 ${month}월 ${day}일 ${nowtime}` ;
            console.log(hours,minutes,seconds)
            
            const dataInfo = document.querySelector('.data');
            dataInfo.innerText = newdate;
            //오늘 날짜
            
            fetch('https://api.openweathermap.org/data/2.5/weather?q=Seoul,kr&APPID=13b55b2bf5bf4b64df063ddbfe1f3c5c&units=metric')
                .then(response => response.json())
                .then(data => {
                let citiWrap = document.querySelector('.citis-tit span')
                citiWrap.innerText = `${data.name}`;
                //도시명 출력
            
                let wheaterInfo = document.querySelector('.temperature');
                wheaterInfo.innerHTML = Math.round(data.main.temp) + '&deg';
                //온도 표시            
            
                let weathercod = data.weather[0].id;
                console.log(weatherDescKo[weathercod]);
                let wheaterInfoText = document.querySelector('.temperatureText');
                wheaterInfoText.innerText = weatherDescKo[weathercod];
            
                const rainDay = [200,201,202,210,211,212,221,230,231,232,300,301,302,310,311,313,314,321,500,501,502,503,504,511,520,521,522,531];
                const cloudDay = [721,731,741,804,802];
            
                //배경 설정하기
                if(hours >= 5 && hours <= 8){
                    if(rainDay.includes(weathercod)){
                        document.querySelector('.main-wrap').style.backgroundImage  = 'url(https://raw.githubusercontent.com/honghao30/mycode/main/media/day13.jpg)';
                    }else if(cloudDay.includes(weathercod)){
                        document.querySelector('.main-wrap').style.backgroundImage  = 'url(https://raw.githubusercontent.com/honghao30/mycode/main/media/day12.jpg)';
                    }else {
                        document.querySelector('.main-wrap').style.backgroundImage  = 'url(https://raw.githubusercontent.com/honghao30/mycode/main/media/day1.jpg)';
                        console.log(hours)
                    }
                } else if(hours >= 9 && hours <= 16){
                    if(rainDay.includes(weathercod)){
                        document.querySelector('.main-wrap').style.backgroundImage  = 'url(https://raw.githubusercontent.com/honghao30/mycode/main/media/day13.jpg)';
                    }else if(cloudDay.includes(weathercod)){
                        document.querySelector('.main-wrap').style.backgroundImage  = 'url(https://raw.githubusercontent.com/honghao30/mycode/main/media/day12.jpg)';
                    }else {
                        document.querySelector('.main-wrap').style.backgroundImage  = 'url(https://raw.githubusercontent.com/honghao30/mycode/main/media/day2.jpg)';
                        console.log(hours)
                    }
                }else if(hours >= 15 && hours <= 18){
                    if(rainDay.includes(weathercod)){
                        document.querySelector('.main-wrap').style.backgroundImage  = 'url(https://raw.githubusercontent.com/honghao30/mycode/main/media/day13.jpg)';
                    }else if(cloudDay.includes(weathercod)){
                        document.querySelector('.main-wrap').style.backgroundImage  = 'url(https://raw.githubusercontent.com/honghao30/mycode/main/media/day12.jpg)';
                    }else {
                        document.querySelector('.main-wrap').style.backgroundImage  = 'url(https://raw.githubusercontent.com/honghao30/mycode/main/media/day3.jpg)';
                        console.log(hours)
                    }
                }else{
                    if(rainDay.includes(weathercod)){
                        document.querySelector('.main-wrap').style.backgroundImage  = 'url(https://raw.githubusercontent.com/honghao30/mycode/main/media/day6.jpg)';
                    }else if(cloudDay.includes(weathercod)){
                        document.querySelector('.main-wrap').style.backgroundImage  = 'url(https://raw.githubusercontent.com/honghao30/mycode/main/media/day9.jpg)';
                    }else {
                        document.querySelector('.main-wrap').style.backgroundImage  = 'url(https://raw.githubusercontent.com/honghao30/mycode/main/media/day4.jpg)';
                        console.log(hours)
                    }
                }
            
            
                //날씨 상태            
                const wheaterInfoIcon = document.querySelector('.temperatureIcon');
                let wheaterIcon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
                console.log(wheaterInfoIcon,wheaterIcon)
                let wheaterInfohtml = `<img src="${wheaterIcon}" alt="">`;
                wheaterInfoIcon.innerHTML = wheaterInfohtml;
            
            
            
            
                //날씨 아이콘
                let wheaterDetailInfo = document.querySelector('.whear-infor2 .tit1 span');
                wheaterDetailInfo.innerText = `${data.wind.speed} mps`;
                let wheaterDetailInfo2 = document.querySelector('.whear-infor2 .tit2 span');
                wheaterDetailInfo2.innerText = `${data.main.humidity} %`;
                    console.log(data)
                });
                //날씨 불러오기


            if (console && console.log) {
                console.log(
                    "스크립트 테스트",
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
            new TodayWeather({ element: elements[i] });
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
                                new TodayWeather({ element: element });
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
