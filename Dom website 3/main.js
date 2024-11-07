var input = document.getElementById("input");
var button = document.getElementById("insert");
var message = document.getElementById("message");
var geheimGetal = "42";

button.onclick = function() {
    var Getal = input.value;
    
    if (Getal < geheimGetal) {
        message.innerText = "Het ingevoerde getal is te hoog!";
    } else if (Getal > geheimGetal) {
        message.innerText = "Het ingevoerde getal is te laag!";
    } else {
        message.innerText = "Gefeliciteerd! Je hebt het getal geraden!";
    }
};