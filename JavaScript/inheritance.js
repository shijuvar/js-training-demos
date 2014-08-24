function Rectangle(length,width){
    this.length=length;
    this.width=width;
}
Rectangle.prototype.area=function(){
    return this.length * this.width;
};
Rectangle.prototype.toString=function(){
    return "[Rectangle "+ this.length + "x" + this.width + "]";
};
function Square(size){
    //this.length=size;
    //this.width=size;
    Rectangle.call(this,size,size);
}
Square.prototype=Object.create(Rectangle.prototype, { //Object.defineProperty()
    constructor: {
        configurable: true, //whether or not a property descriptor can be changed
        enumerable: true, //whether or not a property is enumerated
        value: Square, //value
        writable: true} // writable or not
});
Square.prototype.toString=function(){
    //accessing supertype method
    var text=Rectangle.prototype.toString.call(this);
    return text.replace("Rectangle","Square");
};

var rect=new Rectangle(10,5);
console.log(rect.area());
var square= new Square(10);
console.log(square.area());
console.log(rect.toString());
console.log(square.toString());
//types
console.log(rect instanceof Rectangle);
console.log(rect instanceof Object);
console.log(square instanceof Square);
console.log(square instanceof Rectangle);
console.log(square instanceof Object);