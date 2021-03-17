console.log('js is there')
$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots:'.slider-dots',
        dotsClass: 'dots'
    })
})


$('.sliderart').slick({
    arrows: false,
    dots: true,
    appendDots: '.slider-dots-art',
    dotsClass: 'dotsart',
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });


  var targetabout = document.querySelector("#buttonnice");

  document.addEventListener('scroll', () => {
    if (window.scrollY >= targetabout.getBoundingClientRect().top) {
      targetabout.classList.add('animate__animated')
      targetabout.classList.add('animate__fadeIn')
    }
  });

  var targetserve1 = document.querySelector(".moveleft");
  var targetserve2 = document.querySelector(".moveleft2");
  var targetserve3 = document.querySelector(".moveleft3");

  document.addEventListener('scroll', () => {
    if (window.scrollY >= targetserve1.getBoundingClientRect().top) {
      targetserve1.classList.add('animate__animated')
      targetserve1.classList.add('animate__slideInRight')
      targetserve2.classList.add('animate__animated')
      targetserve2.classList.add('animate__slideInRight')
      targetserve3.classList.add('animate__animated')
      targetserve3.classList.add('animate__slideInRight')
    }
  });

  var targetserve4 = document.querySelector(".moveright");
  var targetserve5 = document.querySelector(".moveright2");
  var targetserve6 = document.querySelector(".moveright3");

  document.addEventListener('scroll', () => {
    if (window.scrollY >= targetserve4.getBoundingClientRect().top) {
      targetserve4.classList.add('animate__animated')
      targetserve4.classList.add('animate__slideInLeft')
      targetserve5.classList.add('animate__animated')
      targetserve5.classList.add('animate__slideInLeft')
      targetserve6.classList.add('animate__animated')
      targetserve6.classList.add('animate__slideInLeft')
    }
  });

