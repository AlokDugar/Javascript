class rectangle{
    static area(l,b){
        return l*b
    }
}
console.log(rectangle.area(5,6))
/*const r1=new rectangle()
console.log(r1.area(5,6))
wont work dur to use of static keyword it is only accessible to the class and not to its object/instance*/


//To better elaborate this
class user{
    static usercount=0
    constructor(username){
        this.username=username
        user.usercount++
    }
    static userId(){
        console.log(`The user count right now is ${user.usercount}`)
    }
    hello(){
        console.log(`hi ${this.username}`)
    }
}
const u1= new user("alok")
console.log(u1.username)
console.log(user.usercount)
u1.hello()
user.userId()
//u1.userId()
//console.log(u1.usercount)