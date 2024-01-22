class Person{
    constructor(a,b){
        this.name=a
        this.age=b
    }
    dis(){
        console.log(`Name: ${this.name} Age: ${this.age}`)
    }
    adult(){
        return this.age>18
    }
}
const p1=new Person("Alok",21);
p1.dis()
if(p1.adult())
{
    console.log("Adult")
}