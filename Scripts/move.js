function titleFade(){
  $('.title').each(function(){
    const elemPos = $(this).offset().top-50;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('titleFadeIn')
    } else {
      $(this).removeClass('titleFadeIn')
    }
  });
};

function welcomeTitleFade(){
  $('.welcome-title').each(function(){
    const elemPos = $(this).offset().top-50;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('maintitleFadeIn')
    } else {
      $(this).removeClass('maintitleFadeIn')
    }
  });
};

function timeArticleFade(){
  $('.timeline-article').each(function(){
    const elemPos = $(this).offset().top-50;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('timelineFade')
    } else {
      $(this).removeClass('timelineFade')
    }
  });
};

function sentenceUnderline(){
  $('.sentence').each(function(){
    const elemPos = $(this).offset().top-50;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('move')
    } else {
      $(this).removeClass('move')
    }
  });
};

function skillFrip(){
  $('.skill-content').each(function(){
    const elemPos = $(this).offset().top-50;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('flipRightTop')
    } else {
      $(this).removeClass('flipRightTop')
    }
  });
};

$(window).scroll(function(){
  welcomeTitleFade();
  titleFade();
  timeArticleFade();
  sentenceUnderline();
  skillFrip();
  workHover();
});
