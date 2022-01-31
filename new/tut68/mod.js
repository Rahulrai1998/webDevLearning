console.log("This is my custom module");
function average(arr){
    sum=0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}
// In node.js we have to explicitly mention the methods or classes that we want to export to other files
module.exports = average;