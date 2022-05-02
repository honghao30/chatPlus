import Swiper, { Navigation, Pagination, Scrollbar, Autoplay} from 'swiper';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

new Swiper('.swiper.cmp-swiper', {
    modules: [Navigation, Pagination, Scrollbar,Autoplay],
    speed: 500,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true // 쓸어 넘기거나 버튼 클릭 시 자동 슬라이드 정지.
    },      
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,      
        renderBullet:function(index, className){
            return'<button type="button" class="'+ className +'"><span class="ir-text">' + (index + 1) + '번 슬라이드 </span></button>';
        },         
    },
}); 