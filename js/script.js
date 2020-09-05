// меню бургер
const menuBtn = document.querySelector('.menu-icon');
const menuContainer = document.querySelector('.menu-container');

menuBtn.onclick = function() {
    if (menuContainer.classList.contains('closed')) {
        menuContainer.classList.remove('closed');
        menuContainer.classList.add('opened');
        menuBtn.classList.remove('closed');
        menuBtn.classList.add('opened');
    } else if (menuContainer.classList.contains('opened')) {
        menuContainer.classList.remove('opened');
        menuContainer.classList.add('closed');
        menuBtn.classList.remove('opened');
        menuBtn.classList.add('closed');
    }
  }

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
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
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
    slidesToShow: 1
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