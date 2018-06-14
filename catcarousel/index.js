'use strict';

function handleImage() {
  $('.thumbnail').on('click', event => {
    const targetImgSrc = $(event.currentTarget).find('img').attr('src');
    const targetImgAlt = $(event.currentTarget).find('img').attr('alt');

    console.log($('.hero > img').attr('src', targetImgSrc));
    console.log($('.hero > img').attr('alt', targetImgAlt));
  });
}

$(handleImage);
