class Ashok{
    constructor(age){
        this.age=age
    }
    ag(){
        console.log(`age: ${this.age}`)
    }
}
class alok extends Ashok{
    constructor(age){
        super(age)
    }
}
class dristi extends Ashok{
    constructor(age){
        super(age)
    }
}
const a=new alok(21)
console.log(a.age)
console.log(a.ag())