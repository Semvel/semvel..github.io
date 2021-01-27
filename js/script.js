'use strict'

document.addEventListener('DOMContentLoaded', function () {
  // слайдер персонажей 
  new Swiper('.сharacters-slider', {
    //стрелки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    //количесво слайдов для показа
    slidesPerView: 1,
    //слайдов за раз
    slidesPerGroup: 1,
    //отступ между слайдами
    spaceBetween: 40,
    //бесконечность
    loop: true,
  });

  // слайдер галереи
  new Swiper('.gallery-slider', {
    //стрелки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    //количесво слайдов для показа
    slidesPerView: 1,
    //слайдов за раз
    slidesPerGroup: 1,
    //отступ между слайдами
    spaceBetween: 40,
    //бесконечность
    loop: true,
    breakpoints: {
      320: {
        navigation: false,
        pagination: false,
        //количесво слайдов для показа
        slidesPerView: 0.3,
        freeMode: true,
        //отступ между слайдами
        spaceBetween: 0,
      },
      480: {
        navigation: false,
        pagination: false,
        //количесво слайдов для показа
        slidesPerView: 0.3,
        freeMode: true,
        //отступ между слайдами
        spaceBetween: -90,
      },
      767: {
        navigation: false,
        pagination: false,
        //количесво слайдов для показа
        slidesPerView: 0.8,
        freeMode: true,
        //отступ между слайдами
        spaceBetween: 0,
      },
      999: {
        //стрелки
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        //количесво слайдов для показа
        slidesPerView: 1,
        //слайдов за раз
        slidesPerGroup: 1,
        //отступ между слайдами
        spaceBetween: 40,
        //бесконечность
        loop: true,
      }
    }
  });
  // слайдер отзывов

  new Swiper('.reviews-slider', {
    breakpoints: {
      320: {
        //стрелки
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        //вертикальный слайдер 
        direction: 'vertical',
        //количесво слайдов для показа
        slidesPerView: 2,
        //слайдов за раз
        slidesPerGroup: 2,
        //отступ между слайдами
        spaceBetween: 30,
        //бесконечность
        loop: true,
      },
      480: {
        //стрелки
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        //вертикальный слайдер 
        direction: 'vertical',
        //количесво слайдов для показа
        slidesPerView: 3,
        //слайдов за раз
        slidesPerGroup: 3,
        //отступ между слайдами
        spaceBetween: 15,
        //бесконечность
        loop: true,
      }
    }
  });

  const popupButtons = document.querySelectorAll('.popup-button');
  const body = document.querySelector('body');
  const popupClose = document.querySelector('.popup-application__close')
  const popupApplication = document.querySelector('.popup-application')

  let unlock = true;

  const timeout = 500;

  if (popupButtons.length > 0) {
    for (let i = 0; i < popupButtons.length; i++) {
      const popupButton = popupButtons[i];
      popupButton.addEventListener('click', function (e) {
        if (popupButton.dataset.link == 'choose') {
          choose()
        } else if (popupButton.dataset.link == 'reserve') {
          if (popupButton.dataset.package == 1) {
            additional.value = 'Пакет Минимум';
          } else if (popupButton.dataset.package == 2) {
            additional.value = 'Пакет Стандарт';
          } else if (popupButton.dataset.package == 3) {
            additional.value = 'Пакет Максимум';
          }
          reserve()
        } else if (popupButton.dataset.link == 'collect') {
          collect()
        }
        popupApplication.classList.add('open');
        body.style.overflowY = 'hidden';
      })
    }
  }

  popupClose.addEventListener('click', function (e) {
    popupApplication.classList.remove('open');
    setTimeout(clear, timeout)
    additional.value = '';
  })

  const popupTitle = document.querySelector('.popup-application__title');
  const popupText = document.querySelector('.popup-application__text');
  const additional = document.getElementById('additional');

  function choose() {
    popupTitle.innerHTML = 'Подобрать программу праздника';
    popupText.innerHTML = 'Оставьте номер телефона, и мы подоберём вам программу по вашим желаниям';
    additional.value = 'подобрать програму правздника+услуги фотографа в подарок';
  }
  function reserve() {
    popupTitle.innerHTML = 'Осталось совсем немного :)';
    popupText.innerHTML = 'Оставьте номер телефона, чтобы мы забронировали нужную для вас дату и рассказали более подробно о программе';
  }
  function collect() {
    popupTitle.innerHTML = 'Собери свой праздник сам';
    popupText.innerHTML = 'Оставьте номер телефона, чтобы мы помогли вам с выбором шоу-программ и конкурсами';
    additional.value = 'Собери праздник сам';
  }

  function clear() {
    popupTitle.innerHTML = '';
    popupText.innerHTML = '';
    body.style.overflowY = '';
    thanksDiv.classList.remove('open');
  }

  // Отправка форм с попапа
  const thanksDiv = document.querySelector('.thanks');
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);

    let formData = new FormData(form);
    console.log(formData)


    if (error === 0) {
      let response = await fetch('../telegram.php', {
        method: 'POST',
        body: formData
      });
      if (response.ok) {
        let result = await response.json();
        form.reset();
        if (result.message === 'Успешно') {
          thanksDiv.classList.add('open');
        }
      } else {
        alert('ошибка');
      }
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('#form ._req');

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.value === '') {
        formAddError(input);
        error++;
      }
    }
    return error;
  }

  function formAddError(input) {
    input.classList.add('_error');
  }
  function formRemoveError(input) {
    input.classList.remove('_error');
  }

  // форма в контактах

  const form2 = document.getElementById('form-2');
  form2.addEventListener('submit', formSend2);

  async function formSend2(e) {
    e.preventDefault();

    let error = formValidate2(form2);

    let formData = new FormData(form2);
    console.log(formData)
    if (error === 0) {
      let response = await fetch('../telegram.php', {
        method: 'POST',
        body: formData
      });
      if (response.ok) {
        let result = await response.json();
        form2.reset();
        if (result.message === 'Успешно') {
          popupApplication.classList.add('open');
          body.style.overflowY = 'hidden';
          thanksDiv.classList.add('open');
        }
      } else {
        alert('ошибка');
      }
    }
  }

  function formValidate2(form) {
    let error = 0;
    let formReq = document.querySelectorAll('#form-2 ._req');

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.value === '') {
        formAddError(input);
        error++;
      }
    }
    return error;
  }

  // плавный скролл меню

  const anchors = document.querySelectorAll('a[href*="#"]')
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }

  // кнопка вверх
  const buttonUp = document.querySelector('.button-up');

  window.addEventListener('scroll', function () {
    if (pageYOffset > 299) {
      buttonUp.classList.add('vis')
    } else if (pageYOffset < 299) {
      buttonUp.classList.remove('vis')
    }
  });

  // все персонажи

  const moreCharacters = document.querySelector('.all-сharacters');
  const moreCharactersButton = document.querySelector('.more-сharacters');
  const hiddenCharacters = document.querySelector('.hidden-сharacters');

  moreCharactersButton.addEventListener('click', function (e) {
    if (moreCharacters.classList.contains('show')) {
      moreCharacters.classList.remove('show');
      moreCharacters.style.maxHeight = 0 + 'px';
      moreCharactersButton.textContent = 'смотреть всех персонажей';
    } else {
      moreCharacters.classList.add('show');
      moreCharacters.style.maxHeight = moreCharacters.scrollHeight + 'px';
      moreCharactersButton.textContent = 'cкрыть персонажей';
    }
  })
  hiddenCharacters.addEventListener('click', function (e) {
    if (moreCharacters.classList.contains('show')) {
      moreCharacters.classList.remove('show');
      moreCharacters.style.maxHeight = 0 + 'px';
      moreCharactersButton.textContent = 'смотреть всех персонажей';
      moreCharactersButton.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  })
});

