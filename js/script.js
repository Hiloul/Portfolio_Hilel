const text =
  "Voici mon portfolio illustré, mes projets sont réalisés en HTML, CSS, JS, PHP, SQL, et Python.";
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

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
setInterval(function () {
  let binaryElement = document.createElement("div");
  binaryElement.classList.add("binary");
  binaryElement.innerText = Math.round(Math.random());
  document.body.append(binaryElement);
  const randomNumberLeft = Math.round(Math.random() * 100);
  binaryElement.style.left = `${randomNumberLeft}%`;
  binaryElement.style.opacity = Math.random();
  let randomIntervalOpacity = getRandomArbitrary(300, 1000);
  setInterval(function () {
    binaryElement.style.opacity = Math.random();
    randomIntervalOpacity = getRandomArbitrary(300, 1000);
  }, randomIntervalOpacity);

  binaryElement.addEventListener("mouseenter", function () {
    binaryElement.style.fontSize = "4em";
    binaryElement.classList.add("inHover");
  });
  binaryElement.addEventListener("mouseout", function () {
    setTimeout(function () {
      binaryElement.style.fontSize = "2em";
      binaryElement.classList.remove("inHover");
    }, 800);
  });

  setTimeout(function () {
    binaryElement.remove();
  }, 9000);
}, 15);
