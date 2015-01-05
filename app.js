$(document).ready(function() {
	$('input').keydown(function(e) {
		if (e.keyCode !== 13) 
			return;
			
		var n = $(this).val();
   		console.log(n);


   		var result1 = n % 3;
		var result2 = n % 5;

   		
		if ((result1 === 0) && (result2 === 0)) {
			$('ul').append('<p>FizzBuzz</p>');
			console.log('FizzBuzz');
		} else if (result1 === 0) {
			$('ul').append('<p>Fizz</p>');
			console.log('Fizz');
		} else if (result2 === 0) {
			$('ul').append('<p>Buzz</p>');
			console.log('Buzz');
		} else {
			$('ul').append('<p>'+ n + '</p>');
			console.log(n);
		}
	
	});
});

	


	//if (n) {};
	// $("#input").keydown(function() {
 //  		//alert(number);
	// });



