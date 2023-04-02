const randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = 0;

function checkGuess() {
  const guess = Number(document.getElementById("guess").value);
  const message = document.getElementById("message");
  if (guess < 1 || guess > 100) {
    message.textContent = "El número debe estar entre 1 y 100";
  } else {
    guesses++;
    if (guess === randomNumber) {
      message.textContent = `¡Correcto! Adivinaste en ${guesses} intentos.`;
      disableInputAndButton();
    } else if (guess < randomNumber) {
      message.textContent = "El número es mayor";
    } else {
      message.textContent = "El número es menor";
    }
  }
}

function disableInputAndButton() {
  const input = document.getElementById("guess");
  const button = document.querySelector("button");
  input.disabled = true;
  button.disabled = true;
  button.style.backgroundColor = "#ccc";
  button.style.cursor = "not-allowed";
}
