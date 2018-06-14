'use strict';

console.log('Script linked');

//Handle add
const addHandler = function(e){
  $('#js-shopping-list-form').submit(function() {
    event.preventDefault();
    //fetch item name
    const itemName = $('.js-shopping-list-entry').val();

    //append item to ul
    if(itemName.length > 0)
      appendItem(itemName);
  });
};

const appendItem = function(name){
  const newItem = '<li>'
        + `<span class="shopping-item">${name}</span>`
        + '<div class="shopping-item-controls">'
        +  '<button class="shopping-item-toggle">'
        +    '<span class="button-label">check</span>'
        +  '</button>'
        +  '<button class="shopping-item-delete">'
        +    '<span class="button-label">delete</span>'
        +  '</button>'
        +'</div>'
        +'</li>';
  $('.shopping-list').append(newItem);
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
  addHandler();
  deleteHandler();
  strikeThroughHandler();
});

//Handle check
