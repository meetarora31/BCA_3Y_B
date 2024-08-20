// //Save file with name file1.js
// document.write("CALC","<br>");



// var x = 12;
// var y = 13;

// document.write("Addition=",x+y,"<br>")
// document.write("Subtraction=",x-y,"<br>")
// document.write("Multiplication=",x*y,"<br>")
// document.write("Division=",x/y,"<br>")

// -------------------------------

// console.log("Hello, this is console");

// -------------------------------

// var x = 120;
// function xyz{
//     var y = 30;
// }
// console.log(x,y);

// ---------------

// let x = 12;
// {
//     let y = 30
// }
// console.log(x,y);

// ------------------

// const x = 12;
// {
//     const y = 30
//     y = 45
// }
// console.log(x,y);

// --------------------------------------------------------

// let a = 10;  
// document.write(a,"<br>")
// let b = 5;
// document.write(b,"<br>")
// let sum = a+b; 
// document.write(sum,"<br>")
// let difference = a-b; 
// document.write(difference,"<br>")
// let product = a*b;
// document.write(product,"<br>")
// let Quotient= a/b;
// document.write(Quotient,"<br>")
// let reminder = a%b ;
// document.write(reminder,"<br>")
// let isequal = (a==b) ;
// document.write(isequal,"<br>")
// let isnotequal = (a!=b) ;
// document.write(isnotequal,"<br>")
// let IsGreater = (a>b) ;
// document.write(IsGreater,"<br>")
// let LogicalAnd  = (a>b && b<10) ;
// document.write(LogicalAnd,"<br>")


// ------------------------------------------------------


// let fname = "John";
// document.write("Hello ",fname,"<br>")
// let age = 30;
// document.write('Age - ',age,"<br>")
// let isStudent = true;
// document.write(`Student -${isStudent? "Yes":"No"},<br>`)
// let emptyValue = "I'm Meet Arora";
// document.write(`About us - ${emptyValue ||"write Something"} <br>`)
// let uninitialized;
// document.write(!uninitialized && "Fill detail completely")


// ---------------------------------------------------------


// let age = 18;
// if(age>17){
//     document.write("Eligible for vote")
// } else{
//     document.write("NOt Eligible for vote")
// }
// document.write("<br>")


//  or


// document.write(age> 17 ? "Eligible for vote": "NOt Eligible for vote")


// -----------------------------------------------------------


// let number = prompt("Enter number")

// if(number > 0) {
//     console.log("The number is positive");
// } else if(number < 0) {
//     console.log("The number is negative");
//  } else {
//     console.log("The number is zero");
//  }


//-------------------------------------------------------------


// let fruit = prompt("Enter fruit name")

// switch (fruit) {
//     case "apple":
//         console.log("apple");
//     break;
//     case "mango":
//         console.log("mango");
//     break;
//     default:
//         console.log("unavailable");
//     break;
// }


//------------------------------------------------------------


// Simple function

// function greeting(){
//     document.write("Happy Independance Day<br>")
// }
// greeting() // function calling 

// //------------------------------

// // function Expression

// let day = function(){
//     document.write("Have a nice day<br>")
// }
// day()

// //---------------------------------

// // arrow function

// let msg = () =>{
//     document.write("Happy Birthday<br>")
// } 
// msg()

// //----------------------------------

// // iife (automatically calling function)

// (function(){
//     document.write("This is IIFE function")
// }());

//----------------------------------

// function greeting() {
//     document.write("Meet Arora");
// }

//-------------------------------------------------------------------


// function greeting(){
//     document.getElementById("demo").innerHTML = "Have a Nice day"
// }
// function morning(){
//     document.getElementById("demo").innerHTML = "Good Morning"
//     document.getElementById("mode").style.background = "skyblue"
//     document.getElementById("mode").style.color = "black"
// }
// function afternoon(){
//     document.getElementById("demo").innerHTML = "Good Afternoon"
//      document.getElementById("mode").style.background = "#f9f5a2"
//     document.getElementById("mode").style.color = "black"
// }
// function evening(){
//     document.getElementById("demo").innerHTML = "Good Evening"
//      document.getElementById("mode").style.background = "goldenrod"
//     document.getElementById("mode").style.color = "black"
// }
// function night(){
//     document.getElementById("demo").innerHTML = "Good Night"
//      document.getElementById("mode").style.background = "black"
//     document.getElementById("mode").style.color = "white"
// }

//--------------------------------------------------------------------------


// let Student = {
//     id: 101,    // Number
//     sname: "Lucky",  // String
//     isStudent: true, //Boolean
// }

// let {id,sname,isStudent} = Student

// console.log(id);
// console.log(sname);
// console.log(isStudent);


//-------------------------------------------------------------------------------------------


// let Student = {
//     id: 101,    // Number
//     sname: "Lucky",  // String
//     isStudent: true, //Boolean
// }
// console.log(Student['id']);

// Student.id = 102
// console.log(Student["id"])

// Student["age"] = 22
// console.log(Student);

// Student.isStudent = false
// console.log(Student);


// Delete Object

let Student = {
    id: 101,    // Number
    sname: "Lucky",  // String
    isStudent: true, //Boolean
}
console.log(Student);

delete Student.isStudent
console.log(Student);