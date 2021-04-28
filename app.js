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

//get some listeners
button.addEventListener('click', () => {
    userName.textContent = userInput.value;
})

//get listeners for color buttons
lavenderBlush.addEventListener('click', () => {
    background.style.background = '#FFF0F5';
    message.style.color = 'black';
})
powderBlue.addEventListener('click', () => {
    background.style.background = '#B0E0E6';
})
mediumPurple.addEventListener('click', () => {
    background.style.background = '#9370DB';
})