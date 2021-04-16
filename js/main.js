$(document).ready(function () {
  $("#review-1").on('click', function() {

  $.fancybox.open([
    {
      src  : 'https://volzhskiy.floratelier.ru/upload/iblock/663/6636b04ee4c62a50112ceeef1b198e8d.jpg',
      opts : {
        caption : 'Общий вид букета',
      }
    },
    {
      src  : 'https://volzhskiy.floratelier.ru/upload/iblock/117/1175cd6bb2427533d0a476f6d67fa10e.jpg',
      opts : {
        caption : 'Букет в руках',
      }
    }
  ], {
    loop : true,
    thumbs : {
      autoStart : true
    }
  });
});

  const flowersSwiper = new Swiper('.flowers-slider', {
    // параметры слайдера
    loop: true,// Слайдер будет бесконечно работать
    slidesPerView: 6, // Количество видимых слайдов


  // Подключаем стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //настройки адаптивной версии
  breakpoints: {
    // если браузер >= 320px
    320: {
      slidesPerView: 2, // 2 картинки
     },

    // если браузер >= 480px
    480: {
      slidesPerView: 3, // 3 картинки
    },

    /// если браузер >= 992px
    992: {
      slidesPerView: 6, // 6 картинок
    }
  }
});

const freviewsSwiper = new Swiper('.reviews-slider', {
  // параметры слайдера
  loop: true,// Слайдер будет бесконечно работать
  slidesPerView: 1, // Количество видимых слайдов


  // Подключаем стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

});