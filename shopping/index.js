'use strict';

console.log('Script linked');

//Handle add
const addHandler = function(e){
  $('.js-shopping-list-form').submit(function(e) {
    
  });
};


//Handle delete
const deleteHandler = function(e){
  $('.shopping-list').on('click', '.shopping-item-delete', function(e){
    //console.log('Delete button clicked!');
    $(e.currentTarget).closest('li').remove();
  });
};

$(function() { 
  deleteHandler();
});

//Handle check
