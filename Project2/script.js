$(document).ready(function(){

   var bodyHeight = $('.column1').height();
   var footerOffsetTop = $('.handsh').offset().top;
   var topToBottom = bodyHeight -footerOffsetTop;
    
  $('.handsh').css({top:'auto',bottom:topToBottom});
  $(".handsh").delay(0).animate({
    bottom: '0px',
    }, 5000);  

   var bodyHeight = $('.column1').height();
   var footerOffsetTop = $('.handsa').offset().top;
   var topToBottom = bodyHeight -footerOffsetTop;
    
  $('.handsa').css({top:'auto',bottom:topToBottom});
  $(".handsa").delay(5000).animate({
    bottom: '18px',
    }, 5000);  

   var bodyHeight = $('.column1').height();
   var footerOffsetTop = $('.handsn').offset().top;
   var topToBottom = bodyHeight -footerOffsetTop;
    
  $('.handsn').css({top:'auto',bottom:topToBottom});
  $(".handsn").delay(10000).animate({
    bottom: '0px',
    }, 5000);  

   var bodyHeight = $('.column1').height();
   var footerOffsetTop = $('.handsd').offset().top;
   var topToBottom = bodyHeight -footerOffsetTop;
    
  $('.handsd').css({top:'auto',bottom:topToBottom});
  $(".handsd").delay(15000).animate({
    bottom: '-97px',
    }, 5000);  

   var bodyHeight = $('.column1').height();
   var footerOffsetTop = $('.handss').offset().top;
   var topToBottom = bodyHeight -footerOffsetTop;
    
  $('.handss').css({top:'auto',bottom:topToBottom});
  $(".handss").delay(20000).animate({
    bottom: '39px',
    }, 5000); 

   var bodyHeight = $('.column1').height();
   var footerOffsetTop = $('.anda').offset().top;
   var topToBottom = bodyHeight -footerOffsetTop;
    
  $('.anda').css({top:'auto',bottom:topToBottom});
  $(".anda").delay(25000).animate({
    bottom: '17px',
    }, 5000); 

   var bodyHeight = $('.column1').height();
   var footerOffsetTop = $('.andn').offset().top;
   var topToBottom = bodyHeight -footerOffsetTop;
    
  $('.andn').css({top:'auto',bottom:topToBottom});
  $(".andn").delay(30000).animate({
    bottom: '0px',
    }, 5000); 

var bodyHeight = $('.column1').height();
   var footerOffsetTop = $('.andd').offset().top;
   var topToBottom = bodyHeight -footerOffsetTop;
    
  $('.andd').css({top:'auto',bottom:topToBottom});
  $(".andd").delay(35000).animate({
    bottom: '-97px',
    }, 5000); 
});