function *simpleGenerator(){
  // Every time we 'yield', this function's execution pauses until
  // the generator is restarted by a call to 'next' 
  yield "first";
  yield "second";
  yield "third";
  for (var i = 0; i < 3; i++)
    yield i;
}

var g = simpleGenerator();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());

// Get all Square numbers
/*
function *getAllSquareNumbers() {
    for (var i = 1; ; i++) {        
        yield i * i;
    }
}
 
// Now let's fetch some values
var generator = getAllSquareNumbers();
console.log(generator.next().value); // Outputs '1'
console.log(generator.next().value); // Outputs '4'
console.log(generator.next().value); // Outputs '9'
console.log(generator.next().value); // Outputs '16'
*/