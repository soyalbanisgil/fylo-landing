"use strict";
var form = document.querySelector('form');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (form.email.value == '') {
        alert('Please fill the form');
    }
    alert('Email registered successfully');
    form.reset();
    form.email.classList.remove('valid' || 'invalid');
});
//email validation
var regEx = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})?$/;
//validation function
var validate = function (field, regex) {
    if (regex.test(field.value)) {
        field.className = 'valid';
        console.log('valid');
    }
    else {
        field.className = 'invalid';
        console.log('invalid');
    }
};
//validating input
var email = document.querySelector('#email');
email === null || email === void 0 ? void 0 : email.addEventListener('keyup', function (e) {
    validate(e.target, regEx);
});
