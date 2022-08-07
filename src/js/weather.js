
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

    let wheaterInfoText = document.querySelector('.temperatureText');
    wheaterInfoText.innerText = `${data.weather[0].description}`;
    //날씨 상태

    let wheaterInfoIcon = document.querySelector('.temperatureIcon');
    wheaterInfoIcon.innerHtml = `${data.weather[0].icon}`;
    //날씨 아이콘

    let wheaterDetailInfo = document.querySelector('.whear-infor2 .tit1 span');
    wheaterDetailInfo.innerText = `${data.wind.speed} mps`;
    let wheaterDetailInfo2 = document.querySelector('.whear-infor2 .tit2 span');
    wheaterDetailInfo2.innerText = `${data.main.humidity} %`;
        console.log(data)    
    });  
//날씨 불러오기


//배경 설정하기
if(hours >= 18){
    document.querySelector('.main-wrap').classList.add('day2')
    console.log(hours)
}