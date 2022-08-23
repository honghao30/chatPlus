const CardWrap = document.querySelector('.welcom-card__wrap');
const Cards = document.querySelectorAll('.card__item--wrap');
const Modal = document.querySelector(".modal-popup");
console.log(Cards)
const lucky = ["금전운", "재물운","건강운","연애운","대인관계운","직장/사업운"]
Cards.forEach(function(Card) {
  Card.addEventListener('click',function(event) {
      const ActiveCard = document.querySelector(".welcom-card__wrap .is-active");
      const randomValue = lucky[Math.floor(Math.random() * lucky.length)];
      console.log(randomValue)
      if(ActiveCard){
        alert("행운카드는 한번만^^");
        return;
      }else{
        Card.querySelector('.backface span').innerHTML = `축하합니다.<br> <strong>${randomValue}</strong><br> 상승`;
        Card.classList.add('is-active');
        Card.parentElement.classList.add('is-end');
      }
      setTimeout(function(){
        if(CardWrap.classList.contains('is-end')){
          Modal.classList.add('is-open');
        }
      }, 5000);
 });
});

const btnReset = document.querySelector('.btn-reset');
if(btnReset){
  btnReset.addEventListener('click',reset);
}
function reset(e){
  const ActiveCard = document.querySelector(".welcom-card__wrap .is-active");
  Modal.classList.remove('is-open');
  CardWrap.classList.remove('is-end');
  ActiveCard.classList.remove('is-active');
}


const luckyBtn = document.querySelector('.btn-lucky-card');

if(luckyBtn){
  luckyBtn.addEventListener('click',viewLuckyCard);
}

function viewLuckyCard() {
  const luckyBox = document.querySelector('.card-option__wrap');
  //luckyBox.style.display = 'block';
  luckyBox.classList.add('is-active');
}

const btnCloseLucky = document.querySelector('.btn-close');
if(btnCloseLucky){
  btnCloseLucky.addEventListener('click',closeLucky);
}

function closeLucky(){
  const luckyBox = document.querySelector('.card-option__wrap');
  luckyBox.classList.remove('is-active');
  luckyBtn.style.display = "none";
}
