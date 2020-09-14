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
  iframe.classList.add('video__media');

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
  let id2 = 'ZcVvi7txfZI';

  video2.addEventListener('click', () => {
    if (video.classList.contains('play')) {} 
    else {
      let iframe = createIframe(id);

      link.remove();
      button.remove();
      video.classList.add('play');
      video.appendChild(iframe);
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