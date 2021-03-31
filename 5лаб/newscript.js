let makeArray= document.getElementById('arBut');
let inputs= document.getElementsByClassName('textbl')
let blocks=document.getElementsByClassName('glbl');
let enteredVal=[];


makeArray.onclick=()=>{
    findMistakes();
    makeArrayFromInputs();
}

findMistakes=()=>{
    for (let block of inputs) {
        let values=block.value.split(',');
        enteredVal=enteredVal.concat(values);
    }

    let numbers= enteredVal.filter((v)=> v == +v);
    if(numbers.length!=enteredVal.length){
        alert('Можна вводити тільки числа')
    }
}
makeArrayFromInputs=()=>{
    let newArray=[];
    for (let block of blocks) {
        if(block.children[1].checked===true){
            newArray= newArray.concat(block.children[0].value.split(','));
        }

    }
    newArray=newArray.filter((v)=> v == +v).map(value => value/2);
    document.getElementById('result4').textContent = newArray;

}

// ДРУГЕ --------------------------------------------------------------------------------------------------------------------------------------
// ДРУГЕ --------------------------------------------------------------------------------------------------------------------------------------
// ДРУГЕ --------------------------------------------------------------------------------------------------------------------------------------

let array=[];
let secondButton= document.getElementById('secondButton');

var newH = document.createElement("secondText");


secondButton.onclick=()=>{
    task2();
}

function task2(){
    var I = document.getElementById('secondText');
    var K = I.value;
    array = K.split(',');
    shuffle(array);
    document.getElementById('secondResult').textContent = array;

}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

// ТРЕТЄ --------------------------------------------------------------------------------------------------------------------------------------
// ТРЕТЄ --------------------------------------------------------------------------------------------------------------------------------------
// ТРЕТЄ --------------------------------------------------------------------------------------------------------------------------------------
let thirdArray=[];
let thirdButton= document.getElementById('thirdButton');
let mnarray = new Array(2);



thirdButton.onclick=()=>{
    task3();
}

function task3(){
    var I = document.getElementById('thirdText');
    var zeb = I.value;
    thirdArray = zeb.split(',');
    var odd = thirdArray.length;
    if((odd % 2) === 0){
        alert("парне")
    }
    else{
        alert("непарне")
    }
    for(var i =0; i<mnarray.length;i++){
        mnarray[i] = new Array(2);
    }
    var j = parseInt(thirdArray[0]) + parseInt(thirdArray[1]);
    mnarray[0][0] = j;
    mnarray[0][1] = parseInt(thirdArray[2]) + parseInt(thirdArray[3]);
    mnarray[1][0] = parseInt(thirdArray[4]) + parseInt(thirdArray[5]);
    mnarray[1][1] = parseInt(thirdArray[6]) + parseInt(thirdArray[7]);
     let table = document.getElementById("thirdTable");
 
        for (let i = 0; i < 2; i++) {
            let tr = document.createElement("tr");
            for (let j = 0; j < 2; j++) {
                let td = document.createElement("td");
                td.textContent = mnarray[i][j];
                tr.append(td);
            }
            table.append(tr);
        }
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}




// ЧЕТВЕРТЕ ---------------------------------------------------------------------------------------------------------
// ЧЕТВЕРТЕ ---------------------------------------------------------------------------------------------------------
// ЧЕТВЕРТЕ ---------------------------------------------------------------------------------------------------------
// ЧЕТВЕРТЕ ---------------------------------------------------------------------------------------------------------

let fourthArray=[];
let fourthButton= document.getElementById('fourthButton');
let res=document.getElementById('fourthResult');

fourthButton.onclick=()=>{
    task4();
}

function task4(){
    var I = document.getElementById('fourthText');
    var jut = I.value;
    fourthArray = jut.split(',');
    var newarr = [];
    var count = 0;
    for(var i = 0; i< fourthArray.length;i++){
        if(fourthArray[i] > 10){
            newarr[count++] = fourthArray[i];
        }
    }
    if(newarr.length){
        res.textContent = newarr;
    }
    else{
        res.textContent='таких елементів немає';
    }
}

// П'ЯТЕ ---------------------------------------------------------------------------------------------------------
// П'ЯТЕ ---------------------------------------------------------------------------------------------------------
// П'ЯТЕ ---------------------------------------------------------------------------------------------------------

let fifthArray=[];
let fifthbutton= document.getElementById('fifthbutton');

fifthbutton.onclick=()=>{
    task5();
}

function task5(){
    var I = document.getElementById('fifthText');
    var jet = I.value;
    fifthArray = jet.split(',');
    var count = 0;
    let table = document.getElementById("fifthtable");
    for(var i = 0; i < fifthArray.length; i++){
        let tr = document.createElement("tr");
        for(var j = 2; j<fifthArray[i]; j++){
            let td = document.createElement("td");
            var k = fifthArray[i];
            if(k%j == 0){
                td.textContent = fifthArray[i] + " - не просте число";
                tr.append(td);
                count++;
                break;
            }
            if((fifthArray[i] - j) === 1){
                td.textContent = fifthArray[i] + " - просте число";
                tr.append(td);
            }
        }

        table.append(tr);
    }
}