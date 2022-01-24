const { log } = require("console");
const { chdir } = require("process");
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const clear = () => console.log("\x1B[2J\x1B[0f");

//clear();

const moves = {
  // ROCK
  rock: [
    "    ________        ",
    "---'   _ ,  |       ",
    "      (__(__)       ",
    "      (_____)       ",
    "      (____)        ",
    "---.__(___)         ",
  ],

  // PAPER
  paper: [
    "      _______       ",
    "----'    ____)____  ",
    "            _______)",
    "            _______)",
    "           _______) ",
    "----.__________)    ",
  ],

  // SCISSORS
  scissors: [
    "    ____           ",
    "---'    |________  ",
    "     (__)________) ",
    "        _________) ",
    "      (____)       ",
    "---.__(___)        ",
  ],
};

//Fonction pour renvoyer un tableau contenant des propriétés d'un objet
function arrayMoves() {
  return Object.keys(moves);
}
const symbols = arrayMoves();

// Fonction pour generer un nombre aléatoire entre 0 et 2
const getRandom = () => {
  return symbols.Math.floor(Math.random() * 3);
};

console.log("Welcome to ShiFuMi");

reader.question("Please choose a move:\n Rock Paper Scissors?", (playerChoice) => {
  // Handle the move

  symbols.forEach((element, index) => console.log(`${index + 1} - ${element}`));
});

//comparer les éléments
const comparerElements = (choosePlayer, chooseCpu) => {
  console.log(choosePlayer, chooseCpu);

  if (choosePlayer === chooseCpu) {
    console.log("Egalité");
  } else if (
    (choosePlayer === "rock" && chooseCpu === "scissors") ||
    (choosePlayer === "paper" && chooseCpu === "rock") ||
    (choosePlayer === "scissors" && chooseCpu === "paper")
  ) {
    console.log("Gagné");
  } else if (
    (choosePlayer === "paper" && chooseCpu === "scissors") ||
    (choosePlayer === "rock" && chooseCpu === "paper") ||
    (choosePlayer === "scissors" && chooseCpu === "rock")
  ) {
    console.log("Perdu");
  }
};
