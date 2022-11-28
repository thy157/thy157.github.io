// første classe: firkant
class square{
    constructor(pos){
     this.posXY = createVector([x], [y])  
     this.posHW = createVector([h], [w])
    }

    render(){
        rect(this.posXY.x, this.posXY.y, this.posHW.h, this.posHW.w,);
    }
}