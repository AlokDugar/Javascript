class Rect{
    constructor(width,height){
        this.width=width
        this.height=height
    }
    set width(newidth){
        if(newidth>0){
            this._width=newidth
        }
        else{
            console.log("Width should be positive")
        }
    }
    set height(neheight){
        if(neheight>0){
            this._height=neheight
        }
        else{
            console.log("Height should be positive")
        }
    }
    get width(){
        return this._width
    }
    get height(){
        return this._height
    }
}
const r=new Rect(10,10)
console.log(r.width)
console.log(r.height)