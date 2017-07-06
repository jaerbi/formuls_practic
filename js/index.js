$(document).ready(function() {

//__Sum To
$('#btn-sum-to').click(function () {
	var userNumSum = document.getElementById('sumTo').value;
	userNumSum = parseInt(userNumSum);
	var userNumResult = sumTo(userNumSum);

	$('#go-sum-to>p>span').html(userNumResult);
});

function sumTo(n) {
	var sum = 0;
	for ( var i = 1; i <= n; i++) {
		sum += i;
	}
	return sum;
}

//__Factorial
$('#btn-goFac').click(function() {
	var userNumFac = document.getElementById('goFac').value;
	userNumFac = parseInt(userNumFac);
	var userNumResultFac = factorial(userNumFac);

	$('#go-factorial>p>span').html(userNumResultFac);
});

function factorial(n) {
	if (n != 1) {
		return n * factorial(n - 1);
	}
	return 1;
}

//__Fibonacci
$('#btn-goFib1').click(function() {
	var userNumFib = document.getElementById('goFib1').value;
	userNumFib = parseInt(userNumFib);

	var userNumResultFib = cuclFib(userNumFib);
	$('#go-fibonacci>p>span').html(userNumResultFib);
});

function cuclFib(n) {
	var fib1, fib2, fib3;
	fib1 = 1;
	fib2 = 1;
	for (var i = 2; i < n; i++) {
		var fib3 = fib1 + fib2;
		fib1 = fib2;
		fib2 = fib3;
	}
	return fib2;
}

//$(document).ready(function()
});