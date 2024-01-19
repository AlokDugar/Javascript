
let r=Math.floor(Math.random()*100);
let f;
for(let i=1;i<=3;i++){
    let g;
    setTimeout( g=parseInt(prompt("Enter your guess")),4000);
    if(r===g){
        console.log("Guessed");
        f=1
        break
    }
    if(r<g){
        console.log("High");
    }
    else{
        console.log("Low");
    }
}
if(f==1){
    console.log("Number Guessed")
}
else{
    console.log("Number not found")
}