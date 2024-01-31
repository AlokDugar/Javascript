let buttons=document.querySelectorAll(".but");
console.log(buttons)
buttons.forEach(element => {
    element.style.backgroundColor="green"
    element.textContent+="lily"
});
buttons.forEach(element=>{
    element.addEventListener("click",event=>{
        event.target.textContent="I love lily"
    });
    element.addEventListener("keydown",event=>{
        event.target.textContent="Lily loves me"
    })
});
const nb=document.createElement("button");
nb.textContent="button 5"
nb.classList = "but"
document.body.appendChild(nb)

