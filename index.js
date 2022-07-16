$(document).ready(function(){
    
    $(window).scroll(function(){
        if($(window).scrollTop()>56){
            $(".navbar").addClass("bg-light");
            $(".nav-link").addClass("text-dark");
            // console.log('wert')
        }
        else{
            $(".navbar").removeClass("bg-light"); 
            $(".nav-link").removeClass("text-dark");
        }
    });

    $(".navbar-tooggler").click(function(){
        if(!$ (".navbar-collapse").hasClass("show")){
            $ (".navbar").addClass("bg-dark") ;
        }
        else{
            if($(window).scrollTop()<56)
            {
                $(".navbar").removeClass("bg-dark") ;
            }
            else{

            }
        }
    });
})