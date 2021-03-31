 var ccNum = document.getElementById("cardNum");


button.onclick=()=>{
    alert(validateCardNumber(ccNum.value));
}
    
    function validateCardNumber(number) {
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number))
        return "номер не правильний";
    return "номер правильний";
}
 var domenbutton = document.getElementById("dbutton");
 var domen = document.getElementById("domen");


domenbutton.onclick=()=>{
    domenfunc(domen.value);
}

function domenfunc(text){
   var newtext;
    newtext = text.replace(/http:/ig, "<a href= \"http: ");
    alert(newtext.replace(/.com/ig, ".com \"</a>"));
}


var postbutton = document.getElementById("pbutton");
var post = document.getElementById("post");

postbutton.onclick=()=>{
    alert(findpost(post.value));
}

function findpost(text){
    var regexp = new RegExp("^[7][9]{1}[0-9]{3}|[7][9]{4}$");
    if(regexp.test(text)){
        return "Знайдено львівський поштовий індекс";
    }
    else return "Не знайдено львіський поштовий індекс";
}

var areabutton = document.getElementById("areabutton");
var area = document.getElementById("textarea");

areabutton.onclick=()=>{
    alert(clean(area.value));
}
function clean(text){
    return text.replace(/<!--(?!>)[\S\s]*?-->/g, '')
}


let input1=document.getElementById("fifth");
let button1=document.getElementById("fifthbutton");
let patt = new RegExp("([a-zA-Z0-9\\s_\\\\.\\-\\(\\):])+(.txt|.html|.php)");

button1.onclick=()=>{
    task1();
}

function task1(){
    let res = patt.test(input1.value);
    if(res){
        alert('Введено правильне розширення')
    }else{
        alert('Введено помилкове розширення')
    }
}