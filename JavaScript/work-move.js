function workDeliClick(){
    $('.work-deli-content').click(function(){
      $('.work-deli-detail').show();
    }
)};

function workIdeClick(){
    $('.work-ide-content').click(function(){
      $('.work-ide-detail').show();
    }
)};

function worksDetailExit(){
    $('.work-exit').click(function(){
      $('.work-deli-detail').hide();
      $('.work-ide-detail').hide();
    });
};

$(window).on('load',function(){
    workDeliClick();
    workIdeClick();
    worksDetailExit();
});

const deliImages = ["images/deli-1.png", "images/deli-2.png", 'images/deli-3.png', 'images/deli-4.png', 'images/deli-5.png', 'images/deli-6.png', 'images/deli-7.png'];
const ideImages = ["images/ide-1.png", "images/ide-2.png", "images/ide-3.png"]
let current = 0;

function changeDeliImage(num) {
  if(current + num >= 0 && current + num < deliImages.length) {
    current += num ;
    $('.main-image.deli').attr('src', deliImages[current]);
  }
};

function changeIdeImage(num) {
  if(current + num >= 0 && current + num < deliImages.length) {
    current += num ;
    $('.main-image.ide').attr('src', ideImages[current]);
  }
};

$(document).ready(function(){
  $('.image-prev.deli').click(function(){
    changeDeliImage(-1);
  });
        
  $('.image-next.deli').click(function(){
    changeDeliImage(1);
  });

  $('.image-prev.ide').click(function(){
    changeIdeImage(-1);
  });
        
  $('.image-next.ide').click(function(){
    changeIdeImage(1);
  });
});