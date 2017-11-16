function initMap(uluru) {
    console.log("called");
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

obj1 = {lat: 0,lng: 0};
obj2 = {lat: 0,lng: 0};
obj3 = {lat: 0,lng: 0};

httpRequest = new XMLHttpRequest();

httpRequest.onreadystatechange = function() {

    if (httpRequest.status === 200 && httpRequest.readyState === 4) {

        children = httpRequest.responseXML.documentElement.children;

        for (let index = 0; index < children.length; ++index) {
            if(index == 0){
                obj1.lat = parseFloat(children[0].children[1].children[0].childNodes[0].nodeValue);
                obj1.lng = parseFloat(children[0].children[1].children[1].childNodes[0].nodeValue);
                console.log(obj1);
            }
            else if(index == 1){
                obj2.lat = parseFloat(children[1].children[1].children[0].childNodes[0].nodeValue);
                obj2.lng = parseFloat(children[1].children[1].children[1].childNodes[0].nodeValue);
                console.log(obj2);                
            }
            else if(index == 2){
                obj3.lat = parseFloat(children[2].children[1].children[0].childNodes[0].nodeValue);
                obj3.lng = parseFloat(children[2].children[1].children[1].childNodes[0].nodeValue);
                console.log(obj3);
            }
        }
        console.log("xml data loaded");
    }
}

httpRequest.open('GET', 'http://127.0.0.1:8000/data.xml', true);
httpRequest.send();



var first = document.getElementById("first");
first.addEventListener("click",function() {
    initMap(obj1);
});
var second = document.getElementById("second");
second.addEventListener("click",function(){
    initMap(obj2);
});
var third = document.getElementById("third");
third.addEventListener("click",function(){
    initMap(obj3);
});