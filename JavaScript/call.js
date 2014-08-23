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
getName.call(this,"global");
getName.call(person1,"person1");
getName.call(person2,"person2");

