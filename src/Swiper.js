import Swiper, { Navigation, Pagination, Scrollbar, Autoplay} from 'swiper';

// import Swiper styles
import 'swiper/css';


new Swiper('.swiper.cmp-swiper', {
    modules: [Navigation, Pagination, Scrollbar,Autoplay],
    speed: 500,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        autoplay: {
            delay: 5000,
          },        
        renderBullet:function(index, className){
            return'<button type="button" class="'+ className +'"><span class="ir-text">' + (index + 1) + '번 슬라이드 </span></button>';
        },         
    },
}); 