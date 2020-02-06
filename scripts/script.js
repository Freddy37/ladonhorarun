//start
//sidebar na mobiloch, otvorenie a zatvorenie
$('.open').click(function(e) {
  e.stopPropagation();
  $(".nav-list").toggleClass('active')
});
$('body').on('click touchend', function(e) {
  if ($('.nav-list').hasClass('active')) {
    $(".nav-list").toggleClass('active')
  }
});
$(window).scroll(function(){
  if ($(this).scrollTop() > 50) {
     $('.nav-list').removeClass('active');
  }
});

//------------------------------------------------------------------------------------------
//Postupne animacie obsahu pri scrollovani

window.sr = ScrollReveal();

sr.reveal('.pozadie h1', {
  origin: 'right' ,
  duration: 1500,
  distance: '0',
});

sr.reveal('.infopodtitle', {
  origin: 'right' ,
  duration: 1500,
  distance: '0',
});

sr.reveal('.landingpagelinks', {
  origin: 'right' ,
  duration: 1500,
  distance: '0',
});


sr.reveal('.textpretek', {
  origin: 'left' ,
  duration: 1500,
  distance: '50px',
});

sr.reveal('.obrazokpretek', {
  origin: 'right' ,
  duration: 2000,
  distance: '0',
});

sr.reveal('.registraciacoskoro h1', {
  duration: 1500,
  origin:'left',
  distance:'0'
});

sr.reveal('.contact-section h1, .border, form', {
  duration: 1500,
  origin:'right',
  distance:'0'
});

sr.reveal('.socialicon', {
  duration: 1500,
  origin:'bottom',
  distance:'0'
});

sr.reveal('article', {
  duration: 1500,
  origin:'bottom',
  distance:'0'
});

sr.reveal('.mainfooter', {
  duration: 1500,
  origin:'bottom',
  distance:'0'
});

//--------------------------------------------------------------------------------------------
//scroll line pod headerom 

$(window).scroll(function() {
  var wintop = $(window).scrollTop(), docheight =

$(document).height(), winheight = $(window).height();
var scrolled = (wintop/ (docheight-winheight))*100;

$('.scroll-line').css('width', (scrolled + '%'))
})

