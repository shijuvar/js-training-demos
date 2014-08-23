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
getName.apply(this,["global"]);
getName.apply(person1,["person1"]);
getName.apply(person2,["person2"]);


