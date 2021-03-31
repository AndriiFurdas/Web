
function first() {
      let params = `scrollbars=yes,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=600,height=500,left=-1000,top=-1000`;
   first = window.open("about:blank", "hello",params);
   first.document.write("Ви вибрали перший варіант");
}

function second(){
    first.window.close();
    win = window.open("http://lpnu.ua");
}
