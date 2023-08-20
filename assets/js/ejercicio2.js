function calcular() {
  let ducati = Number(document.getElementsByClassName("ducati")[0].value);
  let duke390 = Number(document.getElementsByClassName("duke-390")[0].value);
  let duke1290 = Number(document.getElementsByClassName("duke-1290")[0].value);
  let total = ducati + duke390 + duke1290;
  if (total <= 10) {
    message = document.getElementById("message");
    message.innerHTML = "llevas "+total+" stickers";
  } else {
    message = document.getElementById("message");
    message.innerHTML = "llevas demasiados stickers";
  }
}
