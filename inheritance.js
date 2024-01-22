class Ashok{
    alive =true;
    ag(){
        console.log(`age: ${this.age}`)
    }
}
class alok extends Ashok{
    age=21
}
class dristi extends Ashok{
    age=25
}
const a=new alok()
const b=new alok()
const d=new dristi()
a.ag()
a.alive=false
console.log(a.alive)
console.log(b.alive)
console.log(d.alive)
