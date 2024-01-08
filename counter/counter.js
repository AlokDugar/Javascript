const i=document.getElementById("inc");
const d=document.getElementById("dec");
const r=document.getElementById("res");
const c=document.getElementById("lab");
let count=0;

i.onclick= function(){
    count++;
    console.log(count);
    c.textContent=count;
}
d.onclick= function(){
    count--;
    c.textContent=count;
}
r.onclick= function(){
    count=0;
    c.textContent=count;
}