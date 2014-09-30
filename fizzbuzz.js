function fizzbuzz(start, end) {
	mapping = {
		3: 'Fizz',
		5: 'Buzz'
	}	
	for (var i = start; i <= end; i ++) {
		var string = '';
		for (var number in mapping) {
			if (i % number == 0) {
				string += mapping[number];	
			}
		}
		if (string.length > 0) {
			console.log(string);
		} else {
			console.log(i);
		}
	}	
}
fizzbuzz(1, 1000);