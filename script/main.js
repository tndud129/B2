$(function(){
    $(".head_list > li , .sub_bg").hover(function(){
        $(".sub , .sub_bg").stop().slideDown();
    }, function(){
        $(".sub , .sub_bg").stop().slideUp();
    }) //hover

    setInterval(function(){
        $(".top_move").animate({top:"-300px"},500,
            function(){
                $(".top_move").append($(".top_move li").eq(0))
                $(".top_move").css({top:"0"})
            }
        )
    },2500) //setInterval



    $(".click").click(function(){
        $(".pop , .modal").show();
    })
    $(".close").click(function(){
        $(".pop , .modal").hide();
    }) //click







}) //jQuery