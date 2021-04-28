//grab the elements from the HTML
const userInput = document.getElementById("user-input");
const button = document.getElementById("button");
const userName = document.getElementById("user-name");

//color change buttons, get elements
const lavenderBlush = document.getElementById("lavender-blush");
const mediumPurple = document.getElementById("medium-purple");
const powderBlue = document.getElementById("powder-blue");
const background = document.getElementById("background");
const message = document.getElementById("message");
const stuff = document.getElementById("stuff")

//get some listeners
button.addEventListener('click', () => {
    userName.textContent = userInput.value;
})

//get listeners for color buttons
lavenderBlush.addEventListener('click', () => {
    background.style.background = '#FFF0F5';
    message.style.color = '#BA55D3';
    stuff.style.color = '#BA55D3';
})
powderBlue.addEventListener('click', () => {
    background.style.background = '#B0E0E6';
    message.style.color = '#191970';
    stuff.style.color = '#191970';
})
mediumPurple.addEventListener('click', () => {
    background.style.background = '#9370DB';
    message.style.color = 'white';
    stuff.style.color = 'white';
})

//pronoun get elements by ids
const fem = document.getElementById("fem");
const masc = document.getElementById("masc");
const non = document.getElementById("non");
const pronoun = document.getElementById("pronoun");
const select = document.getElementById("select");
const add = document.getElementById("add");

//event listeners
pronoun.addEventListener('click', () => {
    
    //add.textContent = select.value;
    userName.textContent = userInput.value + select.value;
})