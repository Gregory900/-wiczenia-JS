const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector(".btn2");
const square = document.querySelector(".color");
const removeColor = document.querySelector(".remove-color");

function redColor (){
    square.classList.add("red");
    square.classList.remove("blue");
}

function blueColor (){
    square.classList.add("blue");
    square.classList.remove("red");
}

btn1.addEventListener("click", redColor);
btn2.addEventListener("click", blueColor);

function deleteColor(){
    square.classList.remove("blue", "red")
}

removeColor.addEventListener("click", deleteColor);