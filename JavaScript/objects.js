var man={
    hand: 2,
    legs: 2,
    heads:1
};
for(var i in man)
{
    if(man.hasOwnProperty(i)){
        console.log(i,":",man[i]);
    }
}
var man1=new Object();
man1.hands=2;
man1.legs=2;
man1.heads=1;
for(var i in man1)
{
    if(man1.hasOwnProperty(i)){
        console.log(i,":",man1[i]);
    }
}
//deleting a property
delete man1.legs;
console.log("legs" in man1);