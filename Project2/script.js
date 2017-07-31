$(document).ready(function(){

   var bodyHeight = $('.column1').height();
   var footerOffsetTop = $('.handsh').offset().top;
   var topToBottom = bodyHeight - footerOffsetTop;

   var alphabetLoop = [[".handsh", 0,'0px'],[".handsa", 5000,'18px'], ['.handsn', 10000,'0px'], 
                        ['.handsd', 0, '-97px'], ['.handss', 0, '39px'], ['.anda', 0, '17px'],
                        ['.andn', 0, '0px'], ['.andd', 0, '-97px'], ['.feetf', 0, '41px'],
                        ['.feete1', 0, '-20px'], ['.feete2', 0,'-20px'], ['.feett', 0, '-303px']]
    
    for(var i = 0; i< alphabetLoop.length; i++) {
      console.log("loop: " + alphabetLoop[i][0] + " " + alphabetLoop[i][1] + " " + alphabetLoop[i][2]);
      $(alphabetLoop[i][0]).css({top:'auto',bottom:topToBottom});
      $(alphabetLoop[i][0]).delay(alphabetLoop[i][1]).animate({
        bottom: alphabetLoop[i][2],
      }, 5000);  
    }
});