function validate(event) {
	var error = 0;
	event.preventDefault();

	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	const onlyLettersRegEx = (/^([a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]{3,20}[\,\-\.]{0,1}[\s]{0,1}){1,3}$/);
	const emailRegEx = (/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/);
	const passwordRegEx = (/^(?=.*\d)(?=.*[a-zA-Z]).{4,8}$/);

	//validate Name
	if (fName.value.length < 3 || onlyLettersRegEx.test(fName.value) == false) {
		fName.classList.add("is-invalid");
		error++;
	} else {
		fName.classList.remove("is-invalid");
		fName.classList.add("is-valid");
	}

	//validate Last Name
	if (fLastN.value.length < 3 || onlyLettersRegEx.test(fLastN.value) == false) {
		fLastN.classList.add("is-invalid");
		error++;
	} else {
		fLastN.classList.remove("is-invalid");
		fLastN.classList.add("is-valid");
	}

	//validate eMail
	if (fEmail.value.length < 3 && emailRegEx.test(fEmail.value) == false) {
		fEmail.classList.add('is-invalid');
		error++;
	} else {
		fEmail.classList.remove("is-invalid");
		fEmail.classList.add("is-valid");
	}

	//validate password
	if (passwordRegEx.test(fPassword.value) == false) {
		fPassword.classList.add('is-invalid');
		error++;
	} else {
		fPassword.classList.remove("is-invalid");
		fPassword.classList.add("is-valid");
	}

	//validate Address
	if (fAddress.value.length < 3) {
		fAddress.classList.add('is-invalid');
		error++;
	} else {
		fAddress.classList.remove("is-invalid");
		fAddress.classList.add("is-valid");
	}

	//validate phone number
	if (fPhone.value.length < 9) {
		fPhone.classList.add('is-invalid');
		error++;
	} else {
		fPhone.classList.remove("is-invalid");
		fPhone.classList.add("is-valid");
	}
}