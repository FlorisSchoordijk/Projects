var input = document.getElementById("input");
var button = document.getElementById("convert");
var flippedword = document.getElementById("flippedword");
var Check = document.getElementById("Check");

button.onclick = function() {
    var woord = input.value;
    var omgedraaid = woord.split('').reverse().join('');
    flippedword.innerText = "Omgdraaid woord: " + omgedraaid;

    if (woord === omgedraaid) {
        Check.innerText = "Dit woord is een palindroom.";
    } else {
        Check.innerText = "Dit woord is niet een palindroom.";
    }
};
