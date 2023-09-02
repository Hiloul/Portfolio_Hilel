//Auto-writer
const text = "N'hésitez pas à me contacter";
const splitText = text.split("");
const containerText = document.querySelector("p");
let showLetters = "";
let counter = 0;
let randomSpeed = 100;

// setInterval(function () {
//   let curentLetter = splitText[counter];
//   showLetters += curentLetter;
//   containerText.innerText = showLetters;
//   counter++;

//   if (counter > splitText.length - 1) {
//     counter = 0;
//     showLetters = "";
//   }
// }, randomSpeed);


// Exemple a suivre 
// variable to store our intervalID
let nIntervId;

function displayText() {
  // check if an interval has already been set up
  if (!nIntervId) {
    nIntervId = setInterval(function () {
        let curentLetter = splitText[counter];
        showLetters += curentLetter;
        containerText.innerText = showLetters;
        counter++;
      
        if (counter > splitText.length - 1) {
          counter = 0;
          showLetters = "";
        }
      }, randomSpeed);
  }
}
displayText()
