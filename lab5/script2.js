var res = "";
var temp = 0;
var pass = document.getElementById("pass");
var p = document.getElementById("label");
var small =new RegExp(/[a-z]/);
var capital = new RegExp(/[A-Z]/);
var digit = new RegExp(/[0-9]/);
var punctuation = new RegExp(/[.,\/#!$%\^&\*;:{}=\-_`~()]/);

function strength(){
    var dest = pass.value;
    temp = 0;
    if (dest.length > 7) temp += 1;
    res = small.exec(dest);
    temp += ((res === null) ? 0 : 1);
    res = "";
    res = capital.exec(dest);
    temp += ((res === null) ? 0 : 1);
    res = "";
    res = digit.exec(dest);
    temp += ((res === null) ? 0 : 1);
    res = "";
    res = punctuation.exec(dest);
    temp += ((res === null) ? 0 : 1);
    p.innerHTML = (temp <= 2) ? "poor" : (temp == 3) ? "bad" : (temp == 4) ? "good" : "strong";
    switch (p.innerHTML) {
        case "poor":
            pass.style.backgroundColor = "#bdbdbd";
            break;
        case "bad":
            pass.style.backgroundColor = "#ffeb3b";
            break;
        case "good":
            pass.style.backgroundColor = "#c6ff00";
            break;
        case "strong":
            pass.style.backgroundColor = "#69f0ae";
            break;
    }
}

pass.addEventListener("keypress",function(code){
    if(code.keyCode === 13)strength();
});

