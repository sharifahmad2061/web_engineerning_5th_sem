var left_array = [];
var right_array = [];
var left_stop, right_stop;
var left_count=0,right_count=0;
var init = 450;

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
    right_stop.style.objectPosition = "-100px -301px";
    
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
    
        var x = -100 * index;
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
        temp.setAttributeNode(src);

        temp.style.width= 100 + "px";
        temp.style.height = 150 + "px";
        temp.style.objectFit = "none";
    
        var x = -100 * index;
        x = x.toString();
        x += "px -151px";
        if (index == 5) temp.style.width = 124 + "px";
    
        temp.style.objectPosition = x;
        right_array.push(temp);
    }
}

function move_right() {
    var tar = document.getElementById("pic_dest");
    if(left_count==0){
        tar.replaceChild(left_array[left_count],left_stop);
    }
    else if(left_count == 6){
        left_count = 0;
        tar.replaceChild(left_array[left_count],left_array[5]);
    }
    else{
        tar.replaceChild(left_array[left_count],left_array[left_count-1]);
    }
    init += 10;
    tar.style.left = init.toString() + "px";
    ++left_count;
}

function move_left() {
    var tar = document.getElementById("pic_dest");
    if(right_count==0){
        tar.replaceChild(right_array[right_count],left_array[left_count-1]);
    }
    else if(right_count == 6){
        right_count = 0;
        tar.replaceChild(right_array[right_count],right_array[5]);
    }
    else{
        tar.replaceChild(right_array[right_count],right_array[right_count-1]);
    }
    init -= 10;
    tar.style.left = init.toString() + "px";
    ++right_count;
}

assign_left_stop();
assign_right_stop();
assign_left_array();
assign_right_array();
var tar = document.getElementById("pic_dest");
tar.appendChild(left_stop);

// for (var index = 0; index < 6; index++) {
//     var tar = document.getElementById("trail");
//     tar.parentNode.insertBefore(left_array[index], tar.nextSibling);
// }
document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            move_left();
            break;
        case 39:
            move_right();
            break;
    }
};