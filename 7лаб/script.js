var button = document.getElementById("button");
var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");
var array = [];

button.onclick=()=>{
    first(text1.value, text2.value);
}

function first(text1, text2){
    var numb = parseInt(text2);
    array = text1.split(" ");
    alert(array[numb-1]);
}


var timebutton = document.getElementById("timebutton");

timebutton.onclick=()=>{
    alert("Пройшло - " + Date.now()/60000 + " хвилин з 1 січня 1970 року");   
}

var trianglebutton = document.getElementById("trianglebutton");
var trtext = document.getElementById("triangletext");
var trarray = [];

trianglebutton.onclick=()=>{
    alert(solution(trtext.value));
}

function solution(text){
    trarray = text.split(",");
    var hypotenuse = (trarray[0] * trarray[0]) + (trarray[1] * trarray[1]);
    return Math.sqrt(hypotenuse);
}
