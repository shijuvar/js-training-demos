function message(message){
    console.log(message);
}
var message=function(){
    console.log("Hi Welcome");
};
message("hello");

function sayMessage(message){
    if(arguments.length===0){
        console.log("Hello");
    }
    console.log(message);
}
sayMessage("Hi Shiju");