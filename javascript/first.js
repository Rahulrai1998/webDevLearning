/*var first_name = "Rahul";
var last_name = "Kumar";
var age = 45;
var message = "Myself " + first_name + " " + last_name + " and I am " + age + " years old . ";

var students = ["Rahul","Rohit","Florida"];
students.splice(0,1);
console.log(students);

var elem4 = window.prompt("Enter = ");
students.push(elem4);
console.log(students)*/

function justLikeThat(x){
    var employee = {firstName:"Ramesh",lastName:"Prasad",age:45};
    console.log(employee[x]);


}
var obj = new justLikeThat("age");
console.log(obj);

