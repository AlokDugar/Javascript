let b=document.getElementById("but")
b.classList.add("enabled")
b.onclick=function(){
    b.classList.toggle("enabled")
    /*if(b.classList==""||b.classlist=="disabled"){
        //b.classList.remove()
        //b.classList.add("enabled")
    }
    else{
        //b.classList.remove()
        //b.classList.add("disabled")
    }*/
}