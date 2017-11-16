$(function () {
    var onOff=true;
    $(".more").click(function () {

        $("#div-h").fadeToggle(500);

        
        if(onOff){
            $(".sj").css("borderColor","transparent transparent #f43499 transparent");
            $(".sj").css("verticalAlign","2px")
            $(".sj").css("border-style","dashed dashed solid dashed")   
        }else{
            $(".sj").css("borderColor","#f43499 transparent transparent transparent");
            $(".sj").css("verticalAlign","-2px")
            $(".sj").css("border-style","solid dashed dashed dashed")
        }
        onOff=!onOff;
    })
})


$(function(){
    $(".more>a").mouseenter(function () {
        $(this).css("color","#f43499");
        $(".sj").css("borderColor","#f43499 transparent transparent transparent");
        $(".sj").css("verticalAlign","-2px");
        $(".sj").css("border-style","dashed dashed solid dashed");
    });
    $(".more>a").mouseleave(function () {
        $(this).css("color","");
        $(".sj").css("borderColor","#666 transparent transparent transparent");
        $(".sj").css("verticalAlign","-2px");
        $(".sj").css("border-style","solid dashed dashed  dashed");
    })
})

