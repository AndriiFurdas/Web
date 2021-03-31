var text = document.getElementById("text");
var button = document.getElementById("button");
var select = document.getElementById("select");

button.onclick=()=>{
    findcity(text.value);
}

function findcity(text){
    var count = 0;
    for(var i = 0; i < 9; i++){
        if(text === cities.select.options[i].text){
            alert("Шукане місто має "+ cities.select.options[i].value+" номер у списку шуканих елементів");
            count++;
            cities.select.options[i].selected = "selected";
            break;
        }
    }
    if(count === 0)
        alert(text +" немає в списку");
}