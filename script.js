// pointers
const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

// Form is not Valid by default
let isValid = false;
let passwordsMatch = false;

function validateForm() {
  // Using Constraint API
  isValid = form.checkValidity();
  // if Passwords are not Valid
  if (!isValid) {
    //   style main message for an error
    message.textContent = 'Please fill out fields.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    // End function here (break)
    return;
  }
  // Check to see if Passwords Match
  if (password1El.value === password2El.value) {
    passwordsMatch = true;
    password1El.style.borderColor = 'green';
    password2El.style.borderColor = 'green';
    messageContainer.style.borderColor = 'green';
  } else {
    passwordsMatch = false;
    message.textContent = 'Make sure passwords match.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    password1El.style.borderColor = 'red';
    password2El.style.borderColor = 'red';
    // End function here (break)
    return;
  }
  // Success - If form is Valid and Passwords Match
  if (isValid && passwordsMatch) {
    message.textContent = 'Successfully Registered';
    message.style.color = 'green';
    messageContainer.borderColor = 'green';
  }
}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  // Do something with user data
  console.log(user);
}

function processFormData(event) {
  event.preventDefault();
  //    Validate Form
  validateForm();
  // Submit Data if Valid
  if (isValid && passwordsMatch) {
    storeFormData();
  }
}
// Event Listener
form.addEventListener('submit', processFormData);

// https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
