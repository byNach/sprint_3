
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName").value;
	var fLastN = document.getElementById("fLastN").value;
	var fEmail = document.getElementById("fEmail").value;
	var fPassword = document.getElementById("fPassword").value;
	var fAddress = document.getElementById("fAddress").value;
	var fPhone = document.getElementById("fPhone").value;

	const onlyLetters = (/^([a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]{3,20}[\,\-\.]{0,1}[\s]{0,1}){1,3}$/);
	const mailFormat = (/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/);
	const passFormat = (/^(?=.*\d)(?=.*[a-zA-Z]).{4,8}$/);

	if (onlyLetters.test(fName) !== true) {
		error++;
		console.log(errorName);
	}
	if (onlyLetters.test(fLastN) !== true) {
		error++;
		console.log(errorLastN);
	}
	if (mailFormat.test(fEmail) !== true) {
		error++;
		console.log(errorEmail);
	}
	if (passFormat.test(fPassword) !== true) {
		error++;
		console.log(errorPassword);
	}
	if (fAddress.length < 3) {
		error++;
		console.log(errorAddress);
	}
	if (fPhone.length != 9) {
		error++;
		console.log(errorPhone);
	}
	if (error > 0) {
		alert("Error");
	} else {
		alert("OK");
	}
}
(function() {
	'use strict';
	window.addEventListener('load', function() {
	  // Fetch all the forms we want to apply custom Bootstrap validation styles to
	  var forms = document.getElementsByClassName('needs-validation');
	  // Loop over them and prevent submission
	  var validation = Array.prototype.filter.call(forms, function(form) {
		form.addEventListener('submit', function(event) {
		  if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		  }
		  form.classList.add('was-validated');
		}, false);
	  });
	}, false);
  })();