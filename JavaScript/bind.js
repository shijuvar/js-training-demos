function getName(label){
    console.log(label + ":" + this.name);
}
var person1= {
    name: "Shiju"
};
var person2= {
    name: "John"
};
var name="Joel";
var sayNamePerson1=getName.bind(person1);
sayNamePerson1("person1");

var sayNamePerson2=getName.bind(person2);
sayNamePerson2("person2");

person2.sayName=sayNamePerson1;
person2.sayName("person2");
