function ingresar() {
  let number1 = document.getElementById("numberOne").value;
  let number2 = document.getElementById("numberTwo").value;
  let number3 = document.getElementById("numberThree").value;
  let total = number1 + number2 + number3;
  let message = document.getElementById("message");
  if (total === "911") {
    message.innerHTML = "password 1 correcto";
  } else if (total === "714") {
    message.innerHTML = "password 2 correcto";
  } else {
    message.innerHTML = "password incorrecto";
  }
}
