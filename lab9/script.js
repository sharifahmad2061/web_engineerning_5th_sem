$(document).ready(function(){
    
    $("#Isd").change(function(){
        $("#cards > div").show();
        if($(this).prop("checked") == true){
            $(" img[name |= 'Lahore'] ").toggle("slow");
        }else{
            $(" img[name |= 'Lahore'] ").toggle("slow");
        }
    });
    
    $("#Lhr").change(function(){
        $("#cards > div").show();
        if($(this).prop("checked") == true){
            $(" img[name |= 'Islamabad'] ").toggle("slow");
        }else{
            $(" img[name |= 'Islamabad'] ").toggle("slow");
        }
    });
      
    $("#cards > div").click(function(){
        $(this).toggle("slow");
    });
    
});	/*----ready function------*/
    