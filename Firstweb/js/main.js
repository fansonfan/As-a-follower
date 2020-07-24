;$(function(){
    
    'use strict';
    
    
    var sidebar=$('#sidebar'),//选择侧栏
        mask=$('.mask'),
        backButton=$('.back-to-top'),
        sidebar_trigger=$('#sidebar_trigger');
    
    function showSideBar(){
        mask.fadeIn();
        sidebar.css('right',0);
    }
    
    function hideSideBar(){
        mask.fadeOut();  
        sidebar.css('right',-sidebar.width());
    }
    
    sidebar_trigger.on('click',showSideBar)
    mask.on('click',hideSideBar)
    backButton.on('click',function(){
        $('html,body').animate({
            scrollTop:0
        },800)
    })
    
    $(window).on('scroll',function(){
        if($(window).scrollTop()>$(window).height())
            backButton.fadeIn();
        else
            backButton.fadeOut();
    })
   
    $(window).trigger('scoll');
})