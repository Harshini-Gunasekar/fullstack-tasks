//if
//if else
//else
//nested if

//3 -> hi
//5 -> hello
//3 & 5 -> hi hello

/*let a=6;
if(a%3==0){
    console.log("hi")
}

let b=10;
if(b%5==0){
    console.log("hello")
}

let c=15
if(c%3==0 && c%5==0){
    console.log("hi hello")
}
*/

//have to use only console

/*let d=15
if(d%3==0){
    console.log("hi")
}
if(d%5==0){
    console.log("hello")
}

//switch cases

let choice="welcome";
switch(choice)
{
    case 'hi':
        console.log("hi everyone");
        break;
    case "hello":
        console.log("hello everyone");
        break;
    case "welcome":
        console.log("welcome everyone");
        break;
    default:
        console.log("ok");
        break;
}

//array also possible to work in switch
let ch=[1,2,3];
switch(ch)
{
    case [2,3,4]:
        console.log("hi everyone");
        break;
    case [1,2,3]:
        console.log("hello everyone");
        break;
    case [4,5,6]:
        console.log("welcome everyone");
        break;
    default:
        console.log("ok");
        break;
}

let choic=2;
switch(choic){
    case 1:
        console.log("one"); //without break

    case 2:
        console.log("two");
        break;
    case 3:
        console.log("three");
        break;
    default:
        console.log("enter numbers between 1 and 3");
        break;
}

let choi=2;
switch(choi){
    case 1:
        console.log("one");
        break; //without break

    case 2:
        console.log("two");

    case 3:
        console.log("three");
    default:
        console.log("enter numbers between 1 and 3");

}

//inside if ,break should not be given

if(false){
    console.log("hi");
    console.log("hello");
} //blank output

if(false)
    console.log("hi");
    console.log("hello"); //hello will be printed next of if will be printed others are considered outside the loop


/*if(false)
    console.log("hi");
    console.log("hello");
else
    console.log("welcome");*/

//for(initialisatio;condition;inc/dre)
//{
  //  statements;
//}

/*for(;;)
{
    console.log("hi");
}*/  //infinite times hi will print

/*let a=1;
for(console.log('a');a<=3;console.log('b')){
    console.log('c');
    a++;
}


//execution 1st initialisation 2nd condition 3rd statement 4th inc/decre 5th condition 6th statement 7th inc/dec
*/

/*for(a=1;a<100;a++); // semicolon terminates at 1 times
console.log("hi");
console.log(a); // hi 100 increment and then become false
*/

/*for(a=1;a<100;a++)
console.log("hi")
console.log(a); //hi 99 times a 100*/

/*for(var a=1;a<100;a++)
console.log("hi")
console.log(a);  //using var outside of the loop a can be accessed hi 99 times a 100*/

/*for(let a=1;a<100;a++)
    console.log("hi")
    console.log(a);*/  //using let a can be accessed outside the loop hi 99 times a becomes error

//in while if condition is not given it becomes error

//in while condition fails blank output but in do while it executs one time

/*let a=100;
do{
    console.log(a);
    a++;
}while(a<=10);
 // for and while are entry check loop(condition check at entry and then go in inside),do while is exit check loop(first go inside and then check the loop)
*/
/*
 function apple(){
    console.log("apple");
 }
 apple();*/

 //non parameterized+without return

 /*function apple(){

 }
 apple();

 //non parameterised+with return

 function orange(){
    let a="orange";
    return a;
 }
 let b=orange();
 console.log(b);
*/
 //paramterised +without return

 /*function apple(a,b){
    console.log(a+b);
 }
 apple(1,2);*/

//arrow function
/*let apple=() => console.log("hello");
apple()

let orange=() => "orange";
console.log(orange())

let banana = () => {
    console.log("Nandhini");
    return 3+3;
}
banana()
console.log(banana());*/

//spread operator(...)
/*let a=[1,2,3,4,5]
let b=a;
b[2]=10;
console.log(a);
console.log(b)*/

/*let a=10;
function x(){
    a=20;
    console.log(a);
}
x();
console.log(a); //here values are passed but in array address are passed*/
/*let a=[1,2,3,4,5]
let b=[...a]
b[2]=10
console.log(a)
console.log(b)*/

//spread operator
/*let a=[1,2,3,4,5]
let x=[6,7,8,9]
let b=[...a,...x]
console.log(b);

function spreadExample(...values){
    console.log(values);
}
spreadExample(1,2,3,4,5)

function spreadExample(...values){
    console.log(values);
}
spreadExample(1,2,3,4,5)*/

//rest operator combines the value into a array or object
/*function spreadExample(x,...values){
    console.log(x);
    console.log(values);

}
spreadExample(1,2,3,4,5)*/

/*let x=[1,2,3,4,5]
function spreadExample(...values,x){
    console.log(x);
    console.log(values);

}
spreadExample(1,2,3,4,5) // it gives error rest parameter should ne last formal operator*/

/*let a= {
    name : "harshini",
    age: 20
}
let b= {...a};
console.log(b);*/

//Destructuring operator
/*let a=[1,5,7,8,9]
let [b,c,x,y,z]=a;
console.log(b)
console.log(c)*/
/*
let a=[1,5,7,8,9]
let [b,c,x,...y]=a; //rest operator (combines the values into an array or objects)
console.log(y)*/


/*let a= {
    name : "harshini",
    age: 20
}
let {name,age}=a;
console.log(name);
console.log(age)
let {...d}=a; //spread operator
console.log(d)*/

//callback
/*function dog(){
    console.log("JACK the dog")
}
function cat(){
    console.log("ROSE the cat")
}
dog()
cat()

function dog(){
    setTimeout(()=>{
        console.log("JACK the dog")

    },2000);
    
}
function cat(){
    console.log("ROSE the cat")
}
dog()
cat()*/
//callback
/*function dog(cat){
    setTimeout(()=>{
        console.log("JACK the dog");
        cat();
    },2000);
}
function cat(){
    console.log("ROSE the cat")
}
dog(cat)*/
/*
function attendance(callback){
    setTimeout(()=>{
        console.log("Mark the attendance");
        callback();
    },2000);

}
function lunch(callback){
    setTimeout(()=>{
        console.log("Eat your lunch");
        callback();
    },2000);
}

function goingtohome(callback){
    console.log("Boarded the house");
    callback();
}

//call back hell passing function as a parameter to another function
attendance(()=>{
    lunch(()=>{
        goingtohome(()=>{
            console.log("Day completed")
        })
    })
})

//using promise to avoid callback (Promise means confirm it will return the output)
*/

/*function brain(){
    return new Promise((success,failure)=>{
        //success("brain active")
        failure("brain dead")

    })
}

brain().then(output=>console.log(output))
       .catch(output=>console.error(output))
*/
/*async function a(){
    await let db=connectionstring
    await let mark=connectionstring

}

function b(){

}

function c(){

}*/

/*function attendance(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("attendance");
        },2000);
    })
}


function lunch(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("lunch");
        },2000);
    })
}


function goingtohome(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("going to home");
        },2000);
    })
}

attendance().then((result)=>{
    console.log(result);
    return lunch();
}).then((result)=>{
    console.log(result);
    return goingtohome();
}).then((result)=>{
    console.log(result);
    console.log("end");
}).catch((error=> {
     console.error(error);
}));*/

f/*unction processing(callback,filename)
{
    console.log("file ${filename} is processing");
    callback();
}

function downloading(callback,filename)
{
    console.log("file ${filename} is downloading");
    callback();
}

const filename="abc"*/

//ternary operator ?:
// if(condition)
//  true statement
//else
//  false statement
//(condition) ? true statement: false statement

//31/04/2024 - invalid
//29/02/2000 - is leap year(invalid)