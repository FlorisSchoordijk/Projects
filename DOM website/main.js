var meercontent = document.getElementById("meercontent");
var hide = document.getElementById("hide");
var contentDiv = document.getElementById("content");

meercontent.onclick = function(){
contentDiv.style.display = "block";
};

hide.onclick = function(){
contentDiv.style.display = "none";
};