const l=document.getElementById("time")
const p=document.getElementById("pause")
const s=document.getElementById("start")
const r=document.getElementById("reset")
let timer=null;
let starttime=0;
let elapsedtime=0;
let isRunning=false;

function start(){
    console.log("Start")
    if(!isRunning){
        starttime= Date.now()-elapsedtime;
        timer=setInterval(update,10);
        isRunning=true;
    }
}
function reset(){
    clearInterval(timer)
    starttime=0;
    elapsedtime=0;
    timer=null;
    isRunning=false;
    l.textContent="00:00:00:00"
}
function pause(){
    if(isRunning){
        clearInterval(timer);
        elapsedtime=Date.now()-starttime
        isRunning=false
    }
}
function update(){
    const curr=Date.now();
    elapsedtime=curr-starttime;
    let hours=Math.floor(elapsedtime/(1000*60*60));
    let mins=Math.floor(elapsedtime/(1000*60)%60);
    let sec=Math.floor(elapsedtime/(1000)%60);
    let millis=Math.floor(elapsedtime%1000/10);
    
    hours=String(hours).padStart(2,"0");
    mins=String(mins).padStart(2,"0");
    sec=String(sec).padStart(2,"0");
    millis=String(millis).padStart(2,"0");

    l.textContent=`${hours}:${mins}:${sec}:${millis}`;

}