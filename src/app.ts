const form = document.querySelector('form');

form?.addEventListener('submit', (e) => {
  e.preventDefault();

  if (form.email.value == '') {
    alert('Please fill the form');
  }
  alert('Email registered successfully');

  form.reset();
});

//email validation
const regEx = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})?$/;

//validation function
const validate = (field: any, regex: RegExp) => {
  if (regex.test(field.value)) {
    field.className = 'valid';
    console.log('valid');
  } else {
    field.className = 'invalid';
    console.log('invalid');
  }
};

//validating input
const email = document.querySelector('#email');
email?.addEventListener('keyup', (e) => {
  validate(e.target, regEx);
});
