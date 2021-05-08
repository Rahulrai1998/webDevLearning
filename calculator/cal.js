var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');
var forma = document.getElementById("xIsWhatPercentOfy");

forma.addEventListener('submit',function(e){
    if(!numField1.value || !numField2.value)
    {
        alert("Please enter the values");
    }
    else{
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);
        var percent = (x/y)*100;
        resultField.innerText = "Answer: " + percent +"%"; 
        e.preventDefault();
    }
   
});