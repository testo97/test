var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cactus.png') {
        myImage.setAttribute ('src', 'images/cactus2.png');
    }
    else {
        myImage.setAttribute ('src', 'images/cactus.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Кактус ' + myName;
  }
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Кактус ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}