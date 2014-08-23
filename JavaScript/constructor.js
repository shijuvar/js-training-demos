function Employee(name, title) {
    this.name=name;
    this.title=title;
    this.getDetails=function() {
        console.log(this.name + ":" + this.title);
    };
}
var shiju=new Employee("Shiju","Architect");
var john=new Employee("John","CTO");
shiju.getDetails();
john.getDetails();

