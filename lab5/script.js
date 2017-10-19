var conv_rate_GB = 0.0072;
var conv_rate_EURO = 0.008;
var conv_rate_USDOLLAR = 0.0095;
var tempo;
var src = document.getElementById('src');
var dest = document.getElementById('result');
tempo = document.getElementById('checkbox');
var dest_currency = tempo.options[tempo.selectedIndex].value;

function change(){
    dest.value = (dest_currency == "GB") ? (src.value * conv_rate_GB) : (dest_currency == "EURO") ? (src.value * conv_rate_EURO) : (src.value * conv_rate_USDOLLAR);
}

function sel(){
    dest_currency = tempo.options[tempo.selectedIndex].value;
}