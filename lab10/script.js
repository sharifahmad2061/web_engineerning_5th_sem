$("#secondary").hide();

let pk;
let ind;
let us;
$.ajax("pk_states.json").done(function(data){
    pk = data;
});
$.ajax("in_states.json").done(function(data){
    ind = data;
});
$.ajax("us_states.json").done(function(data){
    us = data;
});


$("document").ready(function(){
    $("#primary").change(function(){
        $("#secondary").show();
        if($("#primary option:selected").val()  == "pk"){
            $("#secondary").empty();
            pk.forEach(element => {
                $("#secondary").append($('<option>',{text : element}));
            });
            
        }
        else if($("#primary option:selected").val()  == "ind"){
            $("#secondary").empty();
            ind.forEach(element => {
                $("#secondary").append($('<option>',{text : element}));
            });
        }
        else {
            $("#secondary").empty();
            us.forEach(element => {
                $("#secondary").append($('<option>',{text : element}));
            });
        }
    });
});

