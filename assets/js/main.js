$(document).ready(function(){

    $(".scroll a").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top-70}, 800);
    });

});

$(window).scroll(function() {
    var height = $(window).scrollTop();    
    if(height  > 50) {
        $("#header-principal").addClass('classFixMenuHeader');
    }
    if(height  < 50) {        
        $("#header-principal").removeClass('classFixMenuHeader'); 
    }        
});