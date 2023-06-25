var init = false;
var swiper;
var paginationStatus = document.querySelector('.swiper-pagination');

function swiperCard() {
  if (window.innerWidth <= 768) {
    if (!init) {
      init = true;
      paginationStatus.classList.remove('pagination--hidden');
      swiper = new Swiper('.equipment-repair__container', {
        direction: 'horizontal',
        loop: false,
  
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

    autoHeight: true,
    slidesPerView: 'auto',
    watchOverflow: true,
    spaceBetween: 16,
    speed: 800,
     });
    }
} else if (init) {
  swiper.destroy();
  init = false;
  paginationStatus.classList.add('pagination--hidden');

}
}
swiperCard();
window.addEventListener("resize", swiperCard);

var buttonRead = document.querySelector('.button-read');
var containerItem = document.querySelector('.container');
var button = buttonRead.querySelector('.button');
var condition = true;

button.addEventListener('click', function(){
        if (condition) {
            containerItem.classList.add('container--expand');
            button.value = "Скрыть";
            buttonRead.classList.add('button-read--active');
            condition = false;
        } else {
            containerItem.classList.remove('container--expand');
            button.value = "Показать все";
            buttonRead.classList.remove('button-read--active');
            condition = true;
        }
});

