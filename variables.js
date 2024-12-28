
function cat(){
    if(true)
    {
        var a=5;
        console.log(a);
    }
    console.log(a);
}
cat();

console.log(a)
var a=5

//const a=5;
//console.log(a) error

if(true)
{
    console.log("hi")
}

if(false)
{
    console.log("hi")
}

if(30>5)
{
    console.log("hi")
}
//data types in javascript
//number
//Boolean
//string

//let a=6756453422222233455n big integer representation lastly include n
//let a=BigInt(12345) another way of representing bigint

//object declaration types 
let student1={
    name : ["Harshini","Gunasekar"],
    age : 20,
    isStudent : true,
    address : {
        state:"tamilnadu",
        city:"perundurai"
    },
    hello : function()
    {
        console.log("hi students")
        console.log("hi teachers")
    }
}
console.log(student1.address.state)
console.log(student1.hello())
student1.hello()
console.log(student1.name)
console.log(student1.name[0])
console.log(student1.name[1])

let student2=new Object();
student2.name="abi";
student2.age=20;
console.log(student2.name)
student2.hel=function(){
    console.log("gdfheg");
}
student2.hel()
console.log(student2)

//basic operators
//arithmetic (=,-,*,%,/)
//comparison operators 
//logical operators

//short circuit operators(logical and ,logical or)
let c=(30>4) && (9<5);
console.log(c)

let d=(30>4) || (9<5);
console.log(d)

let a1=5
++a1;
console.log(a1)

let a2=5
a2++;
console.log(a2)

let a0=5
console.log(++a0)

let b0=5
console.log(b0++)
console.log(b0)

//post increment will print the vaue before incrementing

let a8=5
let b8=a8++ + --a8;
let c8=++b8 + b8++
a8++;
console.log(a8)
console.log(b8)
console.log(c8)

let a9=true
!!!!!!a9;
console.log(a9);

let a6=true
!!!!!a6; //value is not stored in a7 it is just made !!!!!!
console.log(a6); 







