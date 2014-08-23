function getName(){
    console.log(this.name);
}
var person1= {
    name: "Shiju",
    sayName: getName
};
var person2= {
    name: "John",
    sayName: getName
};
var name="Joel";
person1.sayName();
person2.sayName();
getName();
