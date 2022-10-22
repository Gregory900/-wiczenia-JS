const pic1 = document.querySelector(".item1");
const pic2 = document.querySelector(".item2");
const button = document.querySelector(".fas");

function show(){
    pic1.classList.toggle("show")

    if (pic1.classList.contains("show")){
        button.style.transform = "rotate(180deg)"
    }
    else 
        button.style.transform = "rotate(0deg)"
}

button.addEventListener('click', show);