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
    let id = 'c4tdKxX4Uq0';

    video.addEventListener('click', () => {
        let iframe = createIframe(id);

        link.remove();
        button.remove();
        video.appendChild(iframe);
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
    let id2 = 'ZbB5mPO5yPo';

    video2.addEventListener('click', () => {
        let iframe2 = createIframe2(id2);

        link2.remove();
        button2.remove();
        video2.appendChild(iframe2);
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

// подмена видео-3

function findVideos3() {
    let videos3 = document.querySelectorAll('.video-3');
    
    for (let i = 0; i < videos3.length; i++) {
        setupVideo3(videos3[i]);
    }        
}

function setupVideo3(video3) {
    let link3 = video3.querySelector('.video-3__link');
    let media3 = video3.querySelector('.video-3__media');
    let button3 = video3.querySelector('.video-3__button');
    let id3 = 'cbg5SGGv7iU';

    video3.addEventListener('click', () => {
        let iframe3 = createIframe3(id3);

        link3.remove();
        button3.remove();
        video3.appendChild(iframe3);
    });
    
    link3.removeAttribute('href');
    video3.classList.add('video--enabled');
}

function createIframe3(id3) {
    let iframe3 = document.createElement('iframe');

    iframe3.setAttribute('allowfullscreen', '');
    iframe3.setAttribute('allow', 'autoplay');
    iframe3.setAttribute('src', generateURL3(id3));
    iframe3.classList.add('video-3__media');
    iframe3.setAttribute('width', '100%');
    iframe3.setAttribute('hight', '100%');
    return iframe3;
}

function generateURL3(id3) {
    let query3 = '?rel=0&showinfo=0&autoplay=1&controls=0';

    return 'https://www.youtube.com/embed/' + id3 + query3;
}

findVideos3();

// подмена видео-4

function findVideos4() {
    let videos4 = document.querySelectorAll('.video-4');
    
    for (let i = 0; i < videos4.length; i++) {
        setupVideo4(videos4[i]);
    }        
}

function setupVideo4(video4) {
    let link4 = video4.querySelector('.video-4__link');
    let media4 = video4.querySelector('.video-4__media');
    let button4 = video4.querySelector('.video-4__button');
    let id4 = '_F_tqd2FcsU';

    video4.addEventListener('click', () => {
        let iframe4 = createIframe4(id4);

        link4.remove();
        button4.remove();
        video4.appendChild(iframe4);
    });
    
    link4.removeAttribute('href');
    video4.classList.add('video--enabled');
}

function createIframe4(id4) {
    let iframe4 = document.createElement('iframe');

    iframe4.setAttribute('allowfullscreen', '');
    iframe4.setAttribute('allow', 'autoplay');
    iframe4.setAttribute('src', generateURL4(id4));
    iframe4.classList.add('video-4__media');
    iframe4.setAttribute('width', '100%');
    iframe4.setAttribute('hight', '100%');
    return iframe4;
}

function generateURL4(id4) {
    let query4 = '?rel=0&showinfo=0&autoplay=1&controls=0';

    return 'https://www.youtube.com/embed/' + id4 + query4;
}

findVideos4();

// подмена видео-5

function findVideos5() {
    let videos5 = document.querySelectorAll('.video-5');
    
    for (let i = 0; i < videos5.length; i++) {
        setupVideo5(videos5[i]);
    }        
}

function setupVideo5(video5) {
    let link5 = video5.querySelector('.video-5__link');
    let media5 = video5.querySelector('.video-5__media');
    let button5 = video5.querySelector('.video-5__button');
    let id5 = 'MrWBlpsH0L4';

    video5.addEventListener('click', () => {
        let iframe5 = createIframe5(id5);

        link5.remove();
        button5.remove();
        video5.appendChild(iframe5);
    });
    
    link5.removeAttribute('href');
    video5.classList.add('video--enabled');
}

function createIframe5(id5) {
    let iframe5 = document.createElement('iframe');

    iframe5.setAttribute('allowfullscreen', '');
    iframe5.setAttribute('allow', 'autoplay');
    iframe5.setAttribute('src', generateURL5(id5));
    iframe5.classList.add('video-5__media');
    iframe5.setAttribute('width', '100%');
    iframe5.setAttribute('hight', '100%');
    return iframe5;
}

function generateURL5(id5) {
    let query5 = '?rel=0&showinfo=0&autoplay=1&controls=0';

    return 'https://www.youtube.com/embed/' + id5 + query5;
}

findVideos5();

// подмена видео-6

function findVideos6() {
    let videos6 = document.querySelectorAll('.video-6');
    
    for (let i = 0; i < videos6.length; i++) {
        setupVideo6(videos6[i]);
    }        
}

function setupVideo6(video6) {
    let link6 = video6.querySelector('.video-6__link');
    let media6 = video6.querySelector('.video-6__media');
    let button6 = video6.querySelector('.video-6__button');
    let id6 = 'QzJ6Nc-shNY';

    video6.addEventListener('click', () => {
        let iframe6 = createIframe6(id6);

        link6.remove();
        button6.remove();
        video6.appendChild(iframe6);
    });
    
    link6.removeAttribute('href');
    video6.classList.add('video--enabled');
}

function createIframe6(id6) {
    let iframe6 = document.createElement('iframe');

    iframe6.setAttribute('allowfullscreen', '');
    iframe6.setAttribute('allow', 'autoplay');
    iframe6.setAttribute('src', generateURL6(id6));
    iframe6.classList.add('video-6__media');
    iframe6.setAttribute('width', '100%');
    iframe6.setAttribute('hight', '100%');
    return iframe6;
}

function generateURL6(id6) {
    let query6 = '?rel=0&showinfo=0&autoplay=1&controls=0';

    return 'https://www.youtube.com/embed/' + id6 + query6;
}

findVideos6();

// подмена видео-7

function findVideos7() {
    let videos7 = document.querySelectorAll('.video-7');
    
    for (let i = 0; i < videos7.length; i++) {
        setupVideo7(videos7[i]);
    }        
}

function setupVideo7(video7) {
    let link7 = video7.querySelector('.video-7__link');
    let media7 = video7.querySelector('.video-7__media');
    let button7 = video7.querySelector('.video-7__button');
    let id7 = 'SQDg1WJTLys';

    video7.addEventListener('click', () => {
        let iframe7 = createIframe7(id7);

        link7.remove();
        button7.remove();
        video7.appendChild(iframe7);
    });
    
    link7.removeAttribute('href');
    video7.classList.add('video--enabled');
}

function createIframe7(id7) {
    let iframe7 = document.createElement('iframe');

    iframe7.setAttribute('allowfullscreen', '');
    iframe7.setAttribute('allow', 'autoplay');
    iframe7.setAttribute('src', generateURL7(id7));
    iframe7.classList.add('video-7__media');
    iframe7.setAttribute('width', '100%');
    iframe7.setAttribute('hight', '100%');
    return iframe7;
}

function generateURL7(id7) {
    let query7 = '?rel=0&showinfo=0&autoplay=1&controls=0';

    return 'https://www.youtube.com/embed/' + id7 + query7;
}

findVideos7();

// подмена видео-8

function findVideos8() {
    let videos8 = document.querySelectorAll('.video-8');
    
    for (let i = 0; i < videos8.length; i++) {
        setupVideo8(videos8[i]);
    }        
}

function setupVideo8(video8) {
    let link8 = video8.querySelector('.video-8__link');
    let media8 = video8.querySelector('.video-8__media');
    let button8 = video8.querySelector('.video-8__button');
    let id8 = 'KRg2qr3-KW4';

    video8.addEventListener('click', () => {
        let iframe8 = createIframe8(id8);

        link8.remove();
        button8.remove();
        video8.appendChild(iframe8);
    });
    
    link8.removeAttribute('href');
    video8.classList.add('video--enabled');
}

function createIframe8(id8) {
    let iframe8 = document.createElement('iframe');

    iframe8.setAttribute('allowfullscreen', '');
    iframe8.setAttribute('allow', 'autoplay');
    iframe8.setAttribute('src', generateURL8(id8));
    iframe8.classList.add('video-8__media');
    iframe8.setAttribute('width', '100%');
    iframe8.setAttribute('hight', '100%');
    return iframe8;
}

function generateURL8(id8) {
    let query8 = '?rel=0&showinfo=0&autoplay=1&controls=0';

    return 'https://www.youtube.com/embed/' + id8 + query8;
}

findVideos8();


//скрипт слайдера

$(document).ready(function(){
	$('.block-2__slider').slick({
		arrows:true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});


$(document).ready(function(){
	$('.reviews').slick({
		arrows:true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 500,
        dots:true,
        cssEase: 'linear',
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

// FAQ 

let faqButton = document.querySelectorAll(".faq__button");

for (i = 0; i < faqButton.length; i++) {
    faqButton[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// показать больше бантиков

let moreBow = document.querySelector('.block-7__list');
let moreBowButton = document.querySelector('.block-7 > .red-button');

moreBowButton.onclick = function () {
    if (moreBow.classList.contains('show')) {
        moreBow.classList.remove('show');
        moreBowButton.textContent = 'показать еще бантики'; 
        moreBow.style.maxHeight = 700 + 'px';
    } else {
        moreBow.classList.add('show');
        moreBowButton.textContent = 'скрыть'; 
        moreBow.style.maxHeight = moreBow.scrollHeight + 'px';
        moreBow.scrollIntoView({block: "center", behavior: "smooth"});
    }
    
}



//показать больше видео-обзоров 

let moreVideo = document.querySelector('.block-9__container');
let moreVideoButton = document.querySelector('.block-9 > .red-button');

moreVideoButton.onclick = function () {
    if (moreVideo.classList.contains('show')) {
        moreVideo.classList.remove('show');
        moreVideoButton.textContent = 'посмотрите видео-обзоры других бантиков'; 
        moreVideo.style.maxHeight = 325 + 'px';
    } else {
        moreVideo.classList.add('show');
        moreVideoButton.textContent = 'скрыть'; 
        moreVideo.style.maxHeight = moreVideo.scrollHeight + 'px';
        moreVideo.scrollIntoView({block: "center", behavior: "smooth"});
    }
    
}

//открыть квиз
let body = document.querySelector('body');

let quiz = document.querySelector('.quiz');
let openQuizButton = document.querySelectorAll('.open-quiz');
let closeQuizButton = document.querySelector('.close-button');


closeQuizButton.onclick = function () {
    if (quiz.classList.contains('quiz-show')) {
        quiz.classList.remove('quiz-show');
        body.style.overflowY = 'visible';
    }
}

for (i = 0; i < openQuizButton.length; i++) {
    openQuizButton[i].onclick = function () {
        quiz.classList.add('quiz-show');
        body.style.overflowY = 'hidden';
    }
}

//Попап с конкретными бантиками

let popup = document.querySelector('.popup');
let openPopupButton = document.querySelectorAll('.block-7__item > button');
let openPopupButton_array = Array.prototype.slice.call(openPopupButton);
let imgPopup = document.querySelector('.popup__window img');
let sourcePopup = document.querySelector('.popup__window source');

/*
closeButton.onclick = function () {
    if (quiz.classList.contains('quiz-show')) {
        quiz.classList.remove('quiz-show');
    }
}
*/

for (i = 0; i < openPopupButton.length; i++) {
    openPopupButton[i].setAttribute('data-key', i + 1);
    let key = openPopupButton[i].dataset.key;
    openPopupButton[i].onclick = function () {
        imgPopup.src = '/img/' + key + '.jpg';
        sourcePopup.srcset = '/img/' + key + '.webp';
        popup.classList.add('popup-show');
        body.style.overflowY = 'hidden';
    }
}
