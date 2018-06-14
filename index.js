'use strict';


function handleImage() {
  $('.thumbnail').on('click', event => {
    // save reference to this bulb,
    const targetImgSrc = $(this.child);
    
    console.log(event.currentTarget);

    //$('.hero img').attr('src', ) = targetThumb.src;


    // // store whether this bulb is aria-pressed.
    // // because attr() returns strings, we convert it
    // // back to a boolean by making a comparison.
    // const pressedBool = $(targetBulb).attr('aria-pressed') === 'true';
    
    // // Remove 'bulb-on' and uncheck bulbs that are not this one
    // otherBulbs.removeClass('bulb-on').attr('aria-pressed', false);
    // // toggle the presence of 'bulb-on' on this bulb; 
    // // toggle aria-pressed by inverting pressedBool 
    // // using the ! operator.
    // targetBulb.toggleClass('bulb-on').attr('aria-pressed', !pressedBool);
  });
}

$(handleImage);

// //Target an image with event handler (click and )
//   //take targeted image
//   //update container with targeted image

// $('.thumbnails').keypress(updateImage(event));

// $('.thumbnails').on('click', '.thumbnail', updateImage(event));

// function updateImage(e){
  
