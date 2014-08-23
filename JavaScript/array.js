var colors=["red","blue","green"];
console.log(colors[0]);

var colors1=new Array("red","blue","green");
console.log(colors1[0]);

var array=[];
array.push(100);

var array1=[];
array1["push"](100);

console.log(array[0]);
console.log(array1[0]);

//identifying types
console.log(colors instanceof Array);
console.log(colors instanceof Object);
console.log(Array.isArray(colors));