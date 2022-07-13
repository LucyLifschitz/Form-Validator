const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordMatch = false;

function validateForm() {
  //Using Constraint API
  isValid = form.checkValidity();
  //Style main message for an error
  if (!isValid) {
    message.textContent = "Please fill out all fields.";
    message.style.color = "#e03131";
    messageContainer.style.borderColor = "#e03131";
    return;
  }
  //Check whether passwords match
  if (password1El.value === password2El.value) {
    passwordMatch = true;
    password1El.style.borderColor = "#37b24d";
    password2El.style.borderColor = "#37b24d";
  } else {
    passwordMatch = false;
    message.textContent = "Make sure passwords match!";
    message.style.color = "#e03131";
    messageContainer.style.borderColor = "#e03131";
    password1El.style.borderColor = "#e03131";
    password2El.style.borderColor = "#e03131";
    return;
  }
  //Success message
  if (isValid && passwordMatch) {
    message.textContent = "Successfully Registered!";
    message.style.color = "#37b24d";
    messageContainer.style.borderColor = "#37b24d";
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
  //Do something with user data
  console.log(user);
}

function processFormData(event) {
  event.preventDefault();
  //Validate Form
  validateForm();
  //Submit Data if Valid
  if (isValid && passwordMatch) {
    storeFormData();
  }
}

//Event Listener
form.addEventListener("submit", processFormData);
