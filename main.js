const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cPassword = document.getElementById("confirmed-password");
const phone = document.getElementById("phone");
const age = document.getElementById("age");
const url = document.getElementById("url");
const message = document.getElementById("message");
const sumbit = document.getElementById("submit");
const error = document.getElementById("error");
sumbit.addEventListener("click", validate);

function validate() {
  event.preventDefault();

  // name validation
  const name = document.getElementById("name").value;
  if ((name.length < 3 && name.length > 0) || name.length > 10) {
    error.innerText =
      "Your name must be more than 3 charachters and more less 10";
  } else if (name.length == 0) {
    error.innerText = "Enter Your Name Please";
  } else {
    error.innerText = "";
  }

  // email validation
  const regex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})"
  );
  function vaildEmail(email) {
    return email.value.match(regex);
    // return regex.test(String(email()).toLocaleLowerCase());
  }
  console.log(email.value.match(regex));
  if (email.value === "") console.log("empty email");
  else if (!vaildEmail(email)) console.log("invalidEmail");
  else console.log("valid email");
  // password validation

  // confirmed password vaidation

  // phone validation
  const phone = document.getElementById("phone").value;
  console.log(typeof phone);
  if (!isNaN && !phone.startsWith("777") && phone.length != 9) {
    error.innerText +=
      " \nPhone number must start with 777 and be 9 numbers long\n";
  } else if (phone.length == 0) {
    error.innerText += "\nPhone number is required\n";
  } else {
    error.innerText += "";
  }
  // age vaildation
  const age = document.getElementById("age").value;
  if (parseInt(age) < 18) {
    error.innerText = " \n Your age must be more than 18";
  } else if (age.length == 0) {
    error.innerText += "\nEnter Your age Please\n";
  } else {
    error.innerText = "";
  }

  // url validation
  //   const urlExp = new RegExp(
  //     "/(ftp|http|https)://(w+:{0,1}w*@)?(S+)(:[0-9]+)?(/|/([w#!:.?+=&%@!-/]))?/"
  //   );
  //   console.log(url.value.match(urlExp) !== null);
  //   console.log(url.value);
  //   if (url.value.match(urlExp) !== null) console.log("suck");
  //   else console.log("not suck");

  // message validation
  const messageLength = document.getElementById("message").value.length;
  console.log(messageLength);
  if (messageLength == 0) {
    error.innerText += "The message is neccessary";
  } else if (messageLength < 20 && messageLength > 0) {
    error.innerText += "The message must be more than 20 charachters";
  } else {
    error.innerText += "";
  }
}
