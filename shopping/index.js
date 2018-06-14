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
    $(e.currentTarget).closest('li').remove();
  });
};

const strikeThroughHandler = function(e){
  $('.shopping-list').on('click', '.shopping-item-toggle', function(e){
    $(e.currentTarget).parent().prev().toggleClass('shopping-item__checked');
  });
};

$(function() { 
  deleteHandler();
  strikeThroughHandler();
});

//Handle check
