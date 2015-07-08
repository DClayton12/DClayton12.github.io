$(document).ready(function(){
    $("#hey").mouseenter(function(){
        $("#hey").fadeTo("fast",1);
        });
    $("#hey").mouseleave(function(){
        $("#hey").fadeTo("fast",0.5);
        });
    });