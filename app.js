$(document).ready(function() {
	$('input').keydown(function(e) {
		if (e.keyCode !== 13) 
			return;
			
		var n = $(this).val();
		//n = +n;
   		console.log(n);

   		if (isNaN(n)) {
   			alert('Sorry, you need to supply a number!');
   			return;
   		};

   		function counter(arg) {	
			for (var i = 1; i <= arg; i++) {
				var msg = '';
			    if ( i % 3 == 0 ) { msg += "Fizz" };
			    if ( i % 5 == 0 ) { msg += "Buzz" };
			    var result = (msg || i);
			    //console.log(result);
			    $('ul').append('<li>' + result + '  ' + '</li>');
			};
			$('ul').append('<p></p>');

		}

		counter(n);
	
	});
});