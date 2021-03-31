
function test(evt){
let elem = document.getElementById("square");
    elem.style.top = evt.clientY - 50 + "px";
    elem.style.left = evt.clientX - 9 + "px";
}
