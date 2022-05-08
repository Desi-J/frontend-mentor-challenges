//grab elements
const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  //all inputs
  [firstName, lastName, email, password].forEach(input => {

    if(input.id === "email") {
      checkEmail()
    } else if (checkIfEmpty(input)) {
      showError(input)
    } else {
      removeError(input)
    }
  })
});


//return true if empty
function checkIfEmpty(input) {
  return (input.value.trim() === "");
};

function checkEmail() {
  //regex to test email
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 return regex.test(email.value.trim()) ? removeError(email) : showError(email);
};

//show error message
function showError(input) {
  const parentElement = input.parentElement;
  const errorElements = parentElement.querySelectorAll(".error");

  errorElements.forEach(element => {
    element.classList.remove("hidden");
  });

  input.classList.remove("success");
};

//remove or don't show error message
function removeError(input) {
  const parentElement = input.parentElement;
  const errorElements = parentElement.querySelectorAll(".error");
  
  errorElements.forEach(element => {
    element.classList.add("hidden");
  });

  input.classList.add("success");
};


