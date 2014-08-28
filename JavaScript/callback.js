//A callback is a function to be executed after another function is executed.
function someFunction( arg1, arg2, callback ){
  console.log( 'do something here' );
 
  var result1 = arg1.replace( 'value', 'result' );
  var   result2 = arg2.replace( 'value', 'result' );
 
  this.data = "Some data with this keyword" ;
  callback.call( this, result1, result2 );
}

var arg1 = "value 1";
var arg2 = "value 2";

someFunction( arg1, arg2, function( result1, result2 ){
    console.log( "Results from someFunction" );
    console.log( "result1:" + result1 );
    console.log( "result2: " + result2 );
    console.log( 'data from someFunction: ' + this.data );
});

/*
 //Self-Invoking Anonymous Function
 ( function(){
 var arg1 = "value 1";
 var arg2 = "value 2";

 someFunction( arg1, arg2, function( result1, result2 ){
 console.log( "Results from someFunction" );
 console.log( "result1:" + result1 );
 console.log( "result2: " + result2 );
 console.log( 'data from someFunction: ' + this.data );
 });
 })();
 */