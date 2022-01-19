var secretCode = "1234";

var guessedCode = "";

while (guessedCode != secretCode) {
  guessedCode = prompt("Guess the code !");

  if (guessedCode == secretCode) {
    alert("Bravo !");
  } else {
    alert("Try again");
  }
}
