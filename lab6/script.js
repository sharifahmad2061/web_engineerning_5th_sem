var left_array = [];
var right_array = [];
var left_stop, right_stop;

function assign_left_stop() {
    var src = document.createAttribute("src");
    src.value = "sprites.png";
    left_stop = document.createElement("img");
    left_stop.style.width= 100 + "px";
    left_stop.style.height = 150 + "px";
    left_stop.style.objectFit = "none";
    left_stop.style.objectPosition = "0px -301px";
    
    left_stop.setAttributeNode(src);
}
function assign_right_stop() {
    var src = document.createAttribute("src");
    src.value = "sprites.png";
    right_stop = document.createElement("img");
    right_stop.style.width= 100 + "px";
    right_stop.style.height = 150 + "px";
    right_stop.style.objectFit = "none";
    right_stop.style.objectPosition = "100px -301px";
    
    right_stop.setAttributeNode(src);
}

function assign_left_array() {
    for (var index = 0; index < 6; ++index) {
        var src = document.createAttribute("src");
        src.value = "sprites.png";
        
        var temp = document.createElement("img");
        temp.style.width= 100 + "px";
        temp.style.height = 150 + "px";
        temp.style.objectFit = "none";
    
        var x = 100 * index;
        x = x.toString();
        x += "px 0px";
        if (index == 5) temp.style.width = 124 + "px";
    
        temp.style.objectPosition = x;
        temp.setAttributeNode(src);
        left_array.push(temp);
    }
}

function assign_right_array() {
    for (var index = 0; index < 6; ++index) {
        var src = document.createAttribute("src");
        src.value = "sprites.png";
    
        var temp = document.createElement("img");
        temp.style.width= 100 + "px";
        temp.style.height = 150 + "px";
        temp.style.objectFit = "none";
    
        var x = 100 * index;
        x = x.toString();
        x += "px 101px";
        if (index == 5) temp.style.width = 124 + "px";
    
        temp.style.objectPosition = x;
        temp.setAttributeNode(src);
        right_array.push(temp);
    }
}


assign_left_stop();
assign_right_stop();
assign_left_array();
assign_right_array();
// for (var index = 0; index < 6; index++) {
//     var tar = document.getElementById("trail");
//     tar.parentNode.insertBefore(left_array[index], tar.nextSibling);
// }
