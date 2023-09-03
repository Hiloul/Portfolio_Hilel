//Auto-writer
const text = "N'hésitez pas à me contacter";
const splitText = text.split("");
const containerText = document.querySelector("p");
let showLetters = "";
let counter = 0;
let randomSpeed = 100;
let interval;

function displayText() {
  let currentLetter = splitText[counter];
  showLetters += currentLetter;
  containerText.innerHTML =
    showLetters +
    '<span class="cursor"> <i class="fa-solid fa-pen fa-xs"></i></span>'; // Ajout du curseur après le texte
  counter++;

  // Si le message est entièrement affiché
  if (counter > splitText.length - 1) {
    clearInterval(interval); // Arrêtez l'intervalle

    // Retirez le curseur
    containerText.innerHTML = showLetters;

    // Après un délai de 5 secondes, redémarrez l'animation
    setTimeout(() => {
      counter = 0;
      showLetters = "";
      interval = setInterval(displayText, randomSpeed); // Redémarrez l'intervalle
    }, 5000); // Définissez le délai à 5 secondes
  }
}

interval = setInterval(displayText, randomSpeed);