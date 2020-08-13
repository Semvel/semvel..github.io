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
