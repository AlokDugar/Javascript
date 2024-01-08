const d=document.getElementById("dice");
const n= document.getElementById("num");
const p=document.getElementById("par");

d.onclick=function(){
    let r=Math.floor(Math.random()*6);
    console.log(r);
    n.textContent="Number:"+r;
    if(r==5){
        n.textContent="";
        p.innerHTML="You have scored 5";
    }
    else{
        p.innerHTML="";
    }
}