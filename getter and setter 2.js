class Person{
    constructor(fn,ln,a){
        this.fn=fn
        this.ln=ln
        this.a=a
    }
    set fn(nfn){
        if(typeof(nfn)==="string" && nfn!=""){
            this._fn=nfn
        }
        else{
            console.log("Invalid first name")
        }
    }
    set ln(nln){
        if(typeof(nln)==="string" && nln!=""){
            this._ln=nln
        }
        else{
            console.log("Invalid last name")
        }
    }
    set a(na){
        if(typeof(na)==="number" && na>0){
            this._a=na
        }
        else{
            console.log("Invalid age")
        }
    }
    get fn(){
        return this._fn
    }
    get ln(){
        return this._ln
    }
    get a(){
        return this._a
    }
    get all(){
        console.log(`Name:${this._fn} ${this._ln} Age:${this._a}`)
    }
}
const p= new Person("Alok","Dugar",21)
console.log(p.fn)
console.log(p.ln)
console.log(p.a)