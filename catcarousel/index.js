'use strict';


function handleImage() {
  $('.thumbnail').on('click', event => {
    let targetImgSrc;
    let targetImgAlt;
    
    console.log($(event.target));
    
    if(event.which === 13){
      console.log('Hello!');
      targetImgSrc = $(event.target).last().attr('src');
      targetImgAlt = $(event.target).last().attr('alt');
    }else{
      targetImgSrc = $(event.target).attr('src');
      targetImgAlt = $(event.target).attr('alt');
    }
    
    console.log(targetImgSrc);

    console.log($('.hero > img').attr('src', targetImgSrc));
    console.log($('.hero > img').attr('alt', targetImgAlt));
  });
}

$(handleImage);
