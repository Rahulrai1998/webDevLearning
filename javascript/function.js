// we are gonna create a constructor/function to create objects . 

function Student(first,last,age)
{
    //down below , we are creating keys/properties explicitly and we are adding their values by parameters
    this.firstName = first;
    this.lastName = last ; 
    this.Age = age ;
    this.greeting = function(){
        return "Hello everyone  , this is " + this.firstName +" " + this.lastName + " and I am " + this.Age + " years old . " ; 
    } 
}

var classMembers = [];
classMembers.push(new Student("Rahul","Kumar",12));
classMembers.push(new Student("Ram","Prasad",98));
for(var i = 0 ; i < classMembers.length ; i++){
    var eachStudent = classMembers[i];
    console.log(eachStudent.greeting());
}
