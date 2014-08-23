function Employee(name, title) {
    this.name = name;
    this.title = title;
}
Employee.prototype.getDetails =function() {
        console.log(this.name + ":" + this.title);
 };
var shiju=new Employee("Shiju","Architect");
var john=new Employee("John","CTO");
shiju.getDetails();
john.getDetails();
console.log(hasPrototypeProperty(shiju,"getDetails"));
console.log(hasPrototypeProperty(shiju,"name"));

function hasPrototypeProperty(object,name){
    return (name in object) && (!object.hasOwnProperty(name));
}
