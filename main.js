const form = document.getElementsByTagName('form')[0];

const email = document.getElementById('email');
const emailError = document.querySelector('#email + span.error');

const zipcode = document.getElementById('zipcode');
const zipcodeError = document.querySelector('#zipcode + span.error');

const country = document.getElementById('country');
const countryError = document.querySelector('#country + span.error');

const password = document.getElementById('password');
const passwordError = document.querySelector('#password + span.error');

const passwordConfirm = document.getElementById('passwordConfirm');
const passwordConfirmError = document.querySelector('#passwordConfirm + span.error');

email.addEventListener('input', function (event) {
    if (email.validity.valid) {
        emailError.innerHTML = '';
        emailError.className = 'error';
    } else {
        showEmailError();
    }
});

zipcode.addEventListener('input', function (event) {
    if (zipcode.validity.valid) {
        zipcodeError.innerHTML = '';
        zipcodeError.className = 'error';
    } else {
        showZipcodeError();
    }
});

country.addEventListener('input', function (event) {
    if (country.validity.valid) {
        countryError.innerHTML = '';
        countryError.className = 'error';
    } else {
        showCountryError();
    }
});

password.addEventListener('input', function (event) {
    if (password.validity.valid) {
        passwordError.innerHTML = '';
        passwordError.className = 'error';
    } else {
        showPasswordError();
    }
});

form.addEventListener('submit', function (event) {
    if (!email.validity.valid) {
        showEmailError();
        event.preventDefault();
    }
    if (!zipcode.validity.valid) {
        showZipcodeError();
        event.preventDefault();
    }
    if (!country.validity.valid) {
        showCountryError();
        event.preventDefault();
    }
    if (!password.validity.valid)
    {
 	   showPasswordError();
  	  event.preventDefault();
    }
        if (!passwordConfirm.validity.valid)
    {
 	   showPasswordConfirmError();
  	  event.preventDefault();
    }
});

function showEmailError() {
    if (email.validity.valueMissing) {
        emailError.textContent = 'You need to enter an e-mail address.';
    } else if (email.validity.typeMismatch) {
        emailError.textContent = 'Entered value needs to be an e-mail address.';
    } else if (email.validity.tooShort) {
        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }
    emailError.className = 'error active';
}

function showZipcodeError() {
    if (zipcode.validity.valueMissing) {
        zipcodeError.textContent = 'You need to enter a zipcode.';
    }
    else if (zipcode.validity.tooShort) {
        zipcodeError.textContent = `Zipcode should be at least ${zipcode.maxLength} characters; you entered ${zipcode.value.length}.`;
    }
    else if (zipcode.validity.patternMismatch) {
        zipcodeError.textContent = "Entered value needs to be a valid zip code."
    }
    zipcodeError.className = 'error active';
}

function showCountryError() {
    if (country.validity.valueMissing) {
        countryError.textContent = 'You need to enter a country.';
    }
    else if (country.validity.patternMismatch) {
        countryError.textContent = "Entered value needs to be a valid country."
    }
    countryError.className = 'error active';
}

function showPasswordError() {
    if (password.validity.valueMissing) {
        passwordError.textContent = 'You need to enter a password.';
    }
    else if (passwordConfirm.value === password.value)
    {
    password.setCustomValidity('');
    } else {
    password.setCustomValidity('Passwords do not match');
    }
    passwordError.className = 'error active';
}

function showPasswordConfirmError() {
    if (passwordConfirm.validity.valueMissing) {
        passwordConfirmError.textContent = 'You need to enter a password.';
    }
    else if (password.value === passwordConfirm.value)
    {
    passwordConfirm.setCustomValidity('');
    } else {
    passwordConfirm.setCustomValidity('Passwords do not match');
    }
    passwordConfirmError.className = 'error active';
}
