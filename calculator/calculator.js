let e=document.getElementById('exp')
function append(i){
    e.value+=i
}
function calc(){
    try{
        x=e.value
        e.value=eval(x)
    }
    catch{
        e.value="Error"
    }
}
function clr(){
    e.value="";
}