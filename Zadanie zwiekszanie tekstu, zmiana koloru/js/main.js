const sizeUp = document.querySelector(".size-up");
const sizeDown = document.querySelector(".size-down");
const changeColor = document.querySelector(".color");
const p = document.querySelector("p");

let fontSize = 20;

function bigText(){
    fontSize += 5
    p.style.fontSize = fontSize +"px";
}

function smallText(){
    fontSize -= 5
    p.style.fontSize = fontSize +"px";
}

function Color(){
    p.style.color = "gold"
}

sizeUp.addEventListener("click", bigText);
sizeDown.addEventListener("click", smallText);
changeColor.addEventListener("click", Color);


