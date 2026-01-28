const form = document.querySelector("form");
let userName = document.querySelector("#name");
let userLastName = document.querySelector("#lastName");
let userEmail = document.querySelector("#email");
let userPassword = document.querySelector("#password");
// let inputP = document.querySelector("p");
// let inputBord = document.querySelector("input");
console.log(inputBord);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let user = userName.value;
  let lastName = userLastName.value;
  let result = validateForm(user, lastName);
  if (result) {
    console.log(user);
    console.log(lastName);

    form.reset();
  }
});
function validateForm(user, lastName) {
  let valid = true;
  if (user === "" || lastName === "" ) {
    userName.classList.add("error");
    lastName.classList.add("error")
    valid = false;
  } else userName.classList.remove("error");
  return valid;
}
