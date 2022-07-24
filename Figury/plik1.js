let figures=document.querySelectorAll(".pole div");

const newDescription=(e)=>{

    const createDescriptionParent=e.target;
    const createDescriptionText=e.target.dataset.description;
    
    const newDescriptionPut = document.createElement("p");
    newDescriptionPut.innerHTML=createDescriptionText;
    newDescriptionPut.classList="p";

    createDescriptionParent.appendChild(newDescriptionPut);
};

const removeDescription=(e)=>{
    const cancelDescription=e.target.querySelector(".p");
    cancelDescription.remove();
};

figures.forEach(figure=>{
    figure.addEventListener("mouseover",newDescription)
});

figures.forEach(figure=>{
    figure.addEventListener("mouseleave",removeDescription)
});