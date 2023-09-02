const text = "Voici mon portfolio illustré, mes projets sont réalisés en HTML, CSS, JS, PHP, SQL, et Python"
const splitText = text.split("")
const containerText = document.querySelector('p')
let showLetters = ""
let counter = 0
let randomSpeed = 100

setInterval(function(){
    let curentLetter = splitText[counter]
    showLetters += curentLetter
    containerText.innerText = showLetters
    counter++

    if(counter > splitText.length - 1){
        counter = 0
        showLetters = ""
    }
}, randomSpeed)


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
setInterval(function(){
    let binaryElement = document.createElement('div')
    binaryElement.classList.add('binary')
    binaryElement.innerText = Math.round(Math.random())
    document.body.append(binaryElement)
    const randomNumberLeft = Math.round(Math.random() * 100)
    binaryElement.style.left = `${randomNumberLeft}%`
    binaryElement.style.opacity = Math.random()
    let randomIntervalOpacity = getRandomArbitrary(300, 1000)
    setInterval(function(){
        binaryElement.style.opacity = Math.random()
        randomIntervalOpacity = getRandomArbitrary(300, 1000)
    }, randomIntervalOpacity)

    binaryElement.addEventListener('mouseenter', function(){
        binaryElement.style.fontSize = "4em"
        binaryElement.classList.add('inHover')
    })
    binaryElement.addEventListener('mouseout', function(){
        setTimeout(function(){
            binaryElement.style.fontSize = "2em"
            binaryElement.classList.remove('inHover')
        }, 800)
    })

    setTimeout(function(){
        binaryElement.remove()
    }, 9000)
}, 15)
