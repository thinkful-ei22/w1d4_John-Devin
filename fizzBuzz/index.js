'use strict';

const submitHandler = function(e){
  $('#number-chooser').submit(function() {
    event.preventDefault();
    const choice = $('#number-choice').val();
    console.log(choice);
		
    for(let i = 1; i <= choice; i++){
      console.log(fizzBuzz(i));
			$('.js-results').append(fizzBuzzHtml(i));
    }

  });
};

function fizzBuzzHtml(n){
	let fizzy = fizzBuzz(n);
	let fizzBuzzClass = '';
	
	if(typeof fizzy === 'string'){
		fizzBuzzClass = fizzBuzz;
	}

	return `<div class="fizz-buzz-item ${fizzBuzzClass}"> <span>${fizzy}</span> </div>`;
}

submitHandler();



function fizzBuzz (num){

  let result = '';
  if(num%3 !== 0 && num%5 !== 0)
    return num;
  if(num%3 === 0)
    result += 'fizz';
  if(num%5 === 0)
    result += 'buzz';

  return result;
}