import weatherDescKo from "./weather_ko";

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

    //배경 설정하기
    if(hours >= 5 && hours <= 8){
        if(weathercod == 200 || weathercod == 201 ||  weathercod == 202 ||  weathercod == 210 ||  weathercod == 211 ||  weathercod == 212){
            document.querySelector('.main-wrap').style.backgroundImage  = 'url(https://raw.githubusercontent.com/honghao30/mycode/main/media/day5.jpg)';
        }else {
            document.querySelector('.main-wrap').style.backgroundImage  = 'url(https://raw.githubusercontent.com/honghao30/mycode/main/media/day1.jpg)';
            console.log(hours)
        }
    } else if(hours >= 9 && hours <= 15){
        if(weathercod == 200 || weathercod == 201 ||  weathercod == 202 ||  weathercod == 210 ||  weathercod == 211 ||  weathercod == 212){
            document.querySelector('.main-wrap').style.backgroundImage  = 'url(https://raw.githubusercontent.com/honghao30/mycode/main/media/day5.jpg)';
        }else {
            document.querySelector('.main-wrap').style.backgroundImage  = 'url(https://raw.githubusercontent.com/honghao30/mycode/main/media/day2.jpg)';
            console.log(hours)
        }
    }else if(hours >= 16 && hours <= 18){
        if(weathercod == 200 || weathercod == 201 ||  weathercod == 202 ||  weathercod == 210 ||  weathercod == 211 ||  weathercod == 212){
            document.querySelector('.main-wrap').style.backgroundImage  = 'url(https://raw.githubusercontent.com/honghao30/mycode/main/media/day5.jpg)';
        }else {
            document.querySelector('.main-wrap').style.backgroundImage  = 'url(https://raw.githubusercontent.com/honghao30/mycode/main/media/day3.jpg)';
            console.log(hours)
        }
    }else{
        if(weathercod == 200 || weathercod == 201 ||  weathercod == 202 ||  weathercod == 210 ||  weathercod == 211 ||  weathercod == 212){
            document.querySelector('.main-wrap').style.backgroundImage  = 'url(https://raw.githubusercontent.com/honghao30/mycode/main/media/day6.jpg)';
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


