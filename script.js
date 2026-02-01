const form = document.querySelector("form");
const userName = document.querySelector("#name");
const userLastName = document.querySelector("#lastName");
const userEmail = document.querySelector("#email");
const userPassword = document.querySelector("#password");
const inputP = document.querySelectorAll("p");
const inputBord = document.querySelectorAll("input");


console.log(inputP);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // let user = userName.value;
  // let lastName = userLastName.value;
  let result = validateForm();
  if (result) {
    console.log(userName.value);
    console.log(userLastName.value);
    console.log(userEmail.value);
    console.log(userPassword.value);

    form.reset();
  }
});
function validateForm() {
  let valid = true;
  inputBord.forEach((item, index) => {
    if (item.value.trim() === "") {
      item.classList.add("error");
      inputP[index].classList.remove("hidden");
      valid = false;
    } else {
      item.classList.remove("error");
      inputP[index].classList.add("hidden");
    }
  });
  return valid;
}
