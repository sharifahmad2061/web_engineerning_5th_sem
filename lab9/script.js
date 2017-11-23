$(document).ready(function(){
    
    $("#Isd").change(function(){
        $("#cards > div").show();
        if($(this).prop("checked") == true){
            $(" img[name |= 'Lahore'] ").hide();
        }else{
            $(" img[name |= 'Lahore'] ").show();
        }
    });
    
    $("#Lhr").change(function(){
        $("#cards > div").show();
        if($(this).prop("checked") == true){
            $(" img[name |= 'Islamabad'] ").hide();
        }else{
            $(" img[name |= 'Islamabad'] ").show();
        }
    });
      
    $("div").click(function(){
        $(this).toggle("slow");
    });
    
});	/*----ready function------*/
    