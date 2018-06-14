const submitHandler = function(e){
	$("#number-chooser").submit(function() {
		event.preventDefault();
		const choice = $("#number-choice").val();
		console.log(choice);
	});
}

submitHandler();



// const fizzBuzz = function(num){

//   let result = '';
//   if(num%3 !== 0 && num%5 !== 0)
//     return num;
//   if(num%3 === 0)
//     result += 'fizz';
//   if(num%5 === 0)
//     result += 'buzz';

//   return result;
// };