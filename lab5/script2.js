var res = "";
var temp = 0;
var pass = document.getElementById("pass");
var p = document.getElementById("label");
var small =new RegExp(/[a-z]/);
var capital = new RegExp(/[A-Z]/);
var digit = new RegExp(/[0-9]/);
var punctuation = new RegExp(/[.,\/#!$%\^&\*;:{}=\-_`~()]/);

function strength(){
    // p.innerHTML = pass.value;
    var dest = pass.value;
    temp = 0;
    res = small.exec(dest);
    temp += (res != "") ? 1 : 0;
    res = "";
    res = capital.exec(dest);
    temp += (res != "") ? 1 : 0;
    res = "";
    res = digit.exec(dest);
    temp += (res != "") ? 1 : 0;
    res = "";
    res = punctuation.exec(dest);
    temp += (res != "") ? 1 : 0;
    res = "";
    if (pass.value.length > 7) temp += 1;
    p.innerHTML = (temp <= 2) ? "poor" : (temp == 3) ? "bad" : (temp == 4) ? "good" : "strong";
}

pass.addEventListener("keypress",function(code){
    if(code.keyCode === 13)strength();
});

