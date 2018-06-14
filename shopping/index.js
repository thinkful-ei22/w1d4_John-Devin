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

const strikeThroughHandler = function(e){
  $('.shopping-item-toggle').on('click', '.shopping-item-toggle', function(e){
    console.log('Strikethrough!');
    $(e.currentTarget).find('span').toggleClass('.shopping-item__checked');
  });
};

$(function() { 
  deleteHandler();
  strikeThroughHandler();
});

//Handle check
