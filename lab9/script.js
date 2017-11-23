$(document).ready(function(){
    
      $("#Isd").change(function(){
        if($(this).prop("checked") == true){
            $(" img[name |= 'Lahore'] ").hide();
        }else{
            $(" img[name |= 'Lahore'] ").show();
        }
      });
    
      $("#Lhr").change(function(){
          if($(this).prop("checked") == true){
            $(" img[name |= 'Islamabad'] ").hide();
        }else{
            $(" img[name |= 'Islamabad'] ").show();
        }
      });
    
    });	/*----ready function------*/
    