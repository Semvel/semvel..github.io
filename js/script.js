let body = document.querySelector('body');
// меню бургер
const menuBtn = document.querySelector('.menu-icon');
const menuContainer = document.querySelector('.menu-container');
const menuWrapper = document.querySelector('.nav-wrapper');
menuBtn.onclick = function() {
    if (menuContainer.classList.contains('closed')) {
        menuContainer.classList.remove('closed');
        menuContainer.classList.add('opened');
        menuBtn.classList.remove('closed');
        menuBtn.classList.add('opened');
        body.style.overflowY = 'hidden';
        menuWrapper.classList.add('popup-show');
        
        
    } else if (menuContainer.classList.contains('opened')) {
        menuContainer.classList.remove('opened');
        menuContainer.classList.add('closed');
        menuBtn.classList.remove('opened');
        menuBtn.classList.add('closed');
        body.style.overflowY = 'visible';
        menuWrapper.classList.remove('popup-show');
    }
  }

// плавный скрол 
$('a[href*="#"]').on('click', function (e) {
  e.preventDefault();
  menuContainer.classList.remove('opened');
  menuContainer.classList.add('closed');
  menuBtn.classList.remove('opened');
  menuBtn.classList.add('closed');
  body.style.overflowY = 'visible';
  menuWrapper.classList.remove('popup-show');
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 500, 'linear');
});

//блик кнопка

$('.yellow-button').addClass('autoflash').append('<div class="flash lighting" style="height: 80px;width: 40px;top: 0px;left: -70px;"></div>');

// Первый слайдер characters
$('.characters .slider').slick({
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 639,
        settings: {
          arrows: true,
          centerMode: false,
          centerPadding: '50px',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }      
    ]
  });

// второй слайдер show
$('.show-list .slider').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});

// третий слайдер reviews 
$('.reviews .slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

// четвертый слайдер playgrounds 
$('.playgrounds .slider').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    adaptiveHeight: true
});


//читать дальше reviews

let reviewsButton = document.querySelectorAll(".reviews__button");
let reviewsPrev = document.querySelector(".reviews .slick-prev");
let reviewsNext = document.querySelector(".reviews .slick-next");


for (i = 0; i < reviewsButton.length; i++) {
    reviewsButton[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let panel = this.previousElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;   
        this.textContent = 'Читать полностью';      
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        this.textContent = 'Cкрыть';
        panel.scrollIntoView({block: "center", behavior: "smooth"});
        reviewsPrev.onclick = function () {
          let reviewsActive = document.querySelector(".reviews .slick-active button");
          panel.style.maxHeight = null;
          reviewsActive.textContent = 'Читать полностью';  
        }
        reviewsNext.onclick = function () {
          let reviewsActive = document.querySelector(".reviews .slick-active button");
          panel.style.maxHeight = null;
          reviewsActive.textContent = 'Читать полностью';  
        }
      } 
  });
}

// подмена видео1

function findVideos() {
  let videos = document.querySelectorAll('.video');
  
  for (let i = 0; i < videos.length; i++) {
      setupVideo(videos[i]);
  }        
}

function setupVideo(video) {
  let link = video.querySelector('.video__link');
  let media = video.querySelector('.video__media');
  let button = video.querySelector('.video__button');
  let id = 'ZcVvi7txfZI';

  video.addEventListener('click', () => {
    if (video.classList.contains('play')) {}
    else {
      let iframe = createIframe(id);

      link.remove();
      button.remove();
      video.classList.add('play');
      video.appendChild(iframe);
    }
      
  });
  
  link.removeAttribute('href');
  video.classList.add('video--enabled');
}

function createIframe(id) {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('video-2__media');

  return iframe;
}

function generateURL(id) {
  let query = '?rel=0&showinfo=0&autoplay=1';

  return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();

// подмена видео-2

function findVideos2() {
  let videos2 = document.querySelectorAll('.video-2');
  
  for (let i = 0; i < videos2.length; i++) {
      setupVideo2(videos2[i]);
  }        
}

function setupVideo2(video2) {
  let link2 = video2.querySelector('.video-2__link');
  let media2 = video2.querySelector('.video-2__media');
  let button2 = video2.querySelector('.video-2__button');
  let id2 = 'lqm4g9C_HlQ';

  video2.addEventListener('click', () => {
    if (video2.classList.contains('play')) {} 
    else {
      let iframe2 = createIframe(id2);

      link2.remove();
      button2.remove();
      video2.classList.add('play');
      video2.appendChild(iframe2);
    }
  });
  
  link2.removeAttribute('href');
  video2.classList.add('video--enabled');
}

function createIframe2(id2) {
  let iframe2 = document.createElement('iframe');

  iframe2.setAttribute('allowfullscreen', '');
  iframe2.setAttribute('allow', 'autoplay');
  iframe2.setAttribute('src', generateURL2(id2));
  iframe2.classList.add('video-2__media');
  iframe2.setAttribute('width', '100%');
  iframe2.setAttribute('hight', '100%');
  return iframe2;
}

function generateURL2(id2) {
  let query2 = '?rel=0&showinfo=0&autoplay=1&controls=0';

  return 'https://www.youtube.com/embed/' + id2 + query2;
}

findVideos2();

//попап

let popup = document.querySelector('.popup');
let popupWindow = document.querySelector('.popup__window');
let closePopupButton = document.querySelector('.popup-close');
let popupHeading = document.querySelector('.popup__window h3');
let popupParagraph = document.querySelector('.popup__window p');
let popupButton = document.querySelector('.popup-top button');
let additionalInfo = document.querySelector('.additional-info');

let fourOptionsButton = document.querySelector('.four-options');
let characterButton = document.querySelector('.character');
let downloadCatalog = document.querySelector('.download-catalog');
let priceButton1 = document.querySelector('.price-button-1');
let priceButton2 = document.querySelector('.price-button-2');
let priceButton3 = document.querySelector('.price-button-3');
let priceButton4 = document.querySelector('.price-button-4');
let showButton = document.querySelector('.show-button');
let scenarioButton = document.querySelector('.scenario-button');

fourOptionsButton.onclick = function () {
  popupHeading.textContent = 'Подберем 4 варианта праздника на основе ваших пожеланий';
  popupParagraph.textContent = 'Оставьте WhatsApp, чтобы определить оптимальный вариант программы под ваш бюджет + получите подарки';
  popupButton.textContent = 'Получить 4 варианта праздника';
  additionalInfo.value = 'Получить 4 варианта праздника';
  popup.classList.add('popup-show');
  body.style.overflowY = 'hidden';
}

characterButton.onclick = function () {
  popupHeading.textContent = 'Поздравляем! Остался последний шаг.';
  popupParagraph.textContent = 'Оставьте WhatsApp / Viber, чтобы мы закрепили за Вами этого персонажа + рассказали более подробно о программе';
  popupButton.textContent = 'Хочу узнать подробнее';
  let character = document.querySelector('.slick-active p');
  let characterSelected = character.innerText;
  additionalInfo.value = 'Выбран персонаж: ' + characterSelected;
  popup.classList.add('popup-show');
  body.style.overflowY = 'hidden';
}

downloadCatalog.onclick = function () {
  popupHeading.textContent = 'Скачать каталог + получить БОНУСЫ';
  popupParagraph.textContent = 'Оставьте WhatsApp / Viber, чтобы получить каталог + скидку в размере 2000 руб. + 4 варианта праздника';
  popupButton.textContent = 'Получить каталог + БОНУСЫ';
  additionalInfo.value = 'Скачать каталог + получить БОНУСЫ';
  popup.classList.add('popup-show');
  body.style.overflowY = 'hidden';
}

priceButton1.onclick = function () {
  popupHeading.textContent = 'Поздравляем! Остался последний шаг.';
  popupParagraph.textContent = 'Оставьте WhatsApp / Viber, чтобы мы закрепили за Вами этот пакет + рассказали более подробно о программе';
  popupButton.textContent = 'Хочу узнать подробнее';
  additionalInfo.value = 'Выбрали пакет: Стандарт';
  popup.classList.add('popup-show');
  body.style.overflowY = 'hidden';
}
priceButton2.onclick = function () {
  popupHeading.textContent = 'Поздравляем! Остался последний шаг.';
  popupParagraph.textContent = 'Оставьте WhatsApp / Viber, чтобы мы закрепили за Вами этот пакет + рассказали более подробно о программе';
  popupButton.textContent = 'Хочу узнать подробнее';
  additionalInfo.value = 'Выбрали пакет: Акция +';
  popup.classList.add('popup-show');
  body.style.overflowY = 'hidden';
}
priceButton3.onclick = function () {
  popupHeading.textContent = 'Поздравляем! Остался последний шаг.';
  popupParagraph.textContent = 'Оставьте WhatsApp / Viber, чтобы мы закрепили за Вами этот пакет + рассказали более подробно о программе';
  popupButton.textContent = 'Хочу узнать подробнее';
  additionalInfo.value = 'Выбрали пакет: Под ключ';
  popup.classList.add('popup-show');
  body.style.overflowY = 'hidden';
}
priceButton4.onclick = function () {
  popupHeading.textContent = 'Поздравляем! Остался последний шаг.';
  popupParagraph.textContent = 'Оставьте WhatsApp / Viber, чтобы мы закрепили за Вами этот пакет + рассказали более подробно о программе';
  popupButton.textContent = 'Хочу узнать подробнее';
  additionalInfo.value = 'Выбрали пакет: Премиум';
  console.log(additionalInfo.value);
  popup.classList.add('popup-show');
  body.style.overflowY = 'hidden';
}

showButton.onclick = function () {
  popupHeading.textContent = 'Подобрать шоу-программу за 3 минуты';
  popupParagraph.textContent = 'Оставьте WhatsApp / Viber, чтобы мы подобрали шоу-программу за 3 минуты в формате онлайн по вашим критериям';
  popupButton.textContent = 'Подобрать шоу-программу';
  additionalInfo.value = 'Подобрать шоу-программу за 3 минуты';
  popup.classList.add('popup-show');
  body.style.overflowY = 'hidden';
}

scenarioButton.onclick = function () {
  popupHeading.textContent = 'Получить сценарий + сэкономить 5000 Р';
  popupParagraph.textContent = 'Оставьте WhatsApp / Viber, чтобы получить сценарий + ЧЕК-лист о том, как сэкономить до 5000 Р. на празднике';
  popupButton.textContent = 'Получить сценарий + ЧЕК-лист';
  additionalInfo.value = 'Получить сценарий + сэкономить 5000 Р';
  popup.classList.add('popup-show');
  body.style.overflowY = 'hidden';
}

closePopupButton.onclick = function () {
  if (popup.classList.contains('popup-show')) {
    popup.classList.remove('popup-show');     
    body.style.overflowY = 'visible';
    popupHeading.textContent = '';
    popupParagraph.textContent = '';
    popupButton.textContent = '';
  }
}
