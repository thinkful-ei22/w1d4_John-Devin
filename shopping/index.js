'use strict';

//Handle add
const addHandler = function(e){
  $('.js-shopping-list-form').submit(function(e) {
    
  });
};




//Handle delete
const deleteHandler = function(e){
  $('.shopping-item').on('click', 'shopping-item-delete', function(e){
    console.log('Delete button clicked, no bubble!');
  });
};


deleteHandler();

//Handle check
