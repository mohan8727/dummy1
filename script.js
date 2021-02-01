	var x = document.getElementById('mybtn');
			x.addEventListener('click', myfunc);
			x.addEventListener('click', func1);
			function myfunc() {
				alert('this is for first click');
			}
			function func1() {
				alert('this is  for second click');
			}
