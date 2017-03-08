//alert("Hola caracola ...");
//console.log("Hola caracola ....");

$(document).ready(function($){
    $(".botones").click(function() {
        $("#grande li").fadeOut("slow");
        $("#"+this.id+"G").fadeIn("slow");
    });
 
    
});




