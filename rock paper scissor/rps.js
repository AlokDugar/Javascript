const ch=["Rock","Paper","Scissor"]
p=document.getElementById("pc")
c=document.getElementById("cc")
r=document.getElementById("result")
function playgame(choice){
    let r=""
    p.textContent+=` ${choice}`
    let i=Math.floor(Math.random()*3)
    c.textContent+=` ${ch[i]}`
    if(choice === ch[i]){
        r.textContent="Tie!"
    }
    else if(choice==="Rock"){
        ch[i]==="Paper"? r.textContent="Player Wins" : r.textContent="Computer Wins"
    }
    else if(choice==="Paper"){
        ch[i]==="Rock"? r.textContent="Player Wins" : r.textContent="Computer Wins"
    }
    else{
        ch[i]==="Paper"? r.textContent="Player Wins" : r.textContent="Computer Wins"
    }
}
