/*global $, alert, console*/
$(document).ready(function () {
    'use strict';
    
    
    $('.down').click(function () {
        $('html, body').animate({
            scrollTop: 1000
        }, 1000);
        
    });
    
    $('.show-more').click(function () {
        $('.imgs').animate({
            height: 1200,
            scrollTop: $('.imgs').offset().top + 600
        }, 1000);
        
    });
   
    /* this client say plugin*/
    function clientSlider() {
        
        var leftArrow = $('.fa-chevron-left'),
            rightArrow = $('.fa-chevron-right');
        
        /* if collective statment not apllied by brackts 
        $('.client:first').hasClass('selected') ? leftArrow.fadeOut() : leftArrow.fadeIn();
        $('.client:last').hasClass('selected') ? rightArrow.fadeOut() : rightArrow.fadeIn();
        */
        
        if ($('.client:first').hasClass('selected')) {
            leftArrow.fadeOut();
        } else {
            leftArrow.fadeIn();
        }
        
        if ($('.client:last').hasClass('selected')) {
            rightArrow.fadeOut();
        } else {
            rightArrow.fadeIn();
        }
        
    }
    
    clientSlider();
    
    $('.testi i').click(function () {
        
        
        
        if ($(this).hasClass('fa-chevron-right')) {
           
           /* this my way to come from left  $('.selected').removeClass('selected').addClass('hidden').fadeOut().next('.client').removeClass('hidden').addClass('selected');
            
            */
            $('.selected').fadeOut(400, function () {
                $(this).removeClass('selected').next('.client').addClass('selected').fadeIn();
                clientSlider();
            });
            
            
            
        }
        
        if ($(this).hasClass('fa-chevron-left')) {
           
           /* this my way to come from left   $('.selected').removeClass('selected').addClass('hidden').fadeOut().prev('.client').removeClass('hidden').addClass('selected').fadeIn();
           */
            $('.selected').fadeOut(400, function () {
                $(this).removeClass('selected').prev('.client').addClass('selected').fadeIn();
                clientSlider();
            });
            
            
            
        }
        
        
    });
        
    
    
});
