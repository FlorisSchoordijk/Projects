var left = document.getElementById("left");
var middle = document.getElementById("middle");
var right = document.getElementById("right");
var resetButton = document.getElementById("reset");


left.onclick = function() {
left.style.backgroundColor = "red";
};

middle.onclick = function(){
middle.style.display = "none";
};

right.onclick = function(){
right.style.width = "400px";
right.style.height = "400px";
};
