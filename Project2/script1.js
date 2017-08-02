$(document).ready(function(){

   var bodyHeight = $('.column1').height();
   var footerOffsetTop = $('.a').offset().top;
   var topToBottom = bodyHeight - footerOffsetTop;

   var alphabetLoop = [[".a", 0,'0px'], [".giraffeg", 2000, '-18px'], [".giraffei", 4000, '-18px'],
                     [".giraffer", 6000, '16px'], [".giraffea", 8000, '0px'], [".giraffef", 10000, '25px'],
                     [".giraffef1", 12000, '25px'], [".giraffee", 14000, '-36px'], [".canc", 16000, '-313px'],
                     [".cana", 18000, '0px'], [".cann", 20000, '-18px'], [".cleanc", 22000, '-225px'],
                     [".cleanl", 24000, '104px'], [".cleane", 26000, '51px'], [".cleana", 28000, '88px'],
                     [".cleann", 30000, '71px'], [".itsi1", 32000, '70px'], [".itst1", 34000, '-231px'], 
                     [".itss1", 36000, '111px'], [".owno", 38000, '142px'], [".ownw", 40000, '159px'],
                     [".ownn", 42000, '159px'], [".earse", 44000, '140px'], [".earsa", 46000, '176px'],
                     [".earsr", 48000, '193px'], [".earss", 50000, '198px'], [".withw", 52000, '160px'], 
                     [".withi", 54000, '160px'], [".witht", 56000, '-142px'], [".withh", 58000, '160px'], 
                     [".itsi", 60000, '254px'], [".itst", 62000, '-48px'], [".itss", 64000, '293px'],
                     [".longl",66000, '287px'], [".longo", 68000, '237px'],[".longn", 70000, '254px'],
                     [".longg", 72000, '254px'], [".tonguet", 74000, '53px'], [".tongueo", 76000, '338px'], 
                     [".tonguen", 78000, '355px'], [".tongueg", 80000, '355px'], [".tongueu", 82000, '278px'], 
                     [".tonguee", 84000, '336px']
                        ]
                     
    
    for(var i = 0; i < alphabetLoop.length; i++) {
      console.log("loop: " + alphabetLoop[i][0] + " " + alphabetLoop[i][1] + " " + alphabetLoop[i][2]);
      $(alphabetLoop[i][0]).css({top:'auto',bottom:topToBottom});
      $(alphabetLoop[i][0]).delay(alphabetLoop[i][1]).animate({
        bottom: alphabetLoop[i][2],
      }, 5000);  
}
});