$(document).ready(function(){

   var bodyHeight = $('.column1').height();
   var footerOffsetTop = $('.handsh').offset().top;
   var topToBottom = bodyHeight - footerOffsetTop;

   var alphabetLoop = [[".handsh", 0,'0px'],[".handsa", 2000,'18px'], ['.handsn', 4000,'0px'], 
                        ['.handsd', 6000, '-97px'], ['.handss', 8000, '39px'], ['.anda', 10000, '17px'],
                        ['.andn', 12000, '0px'], ['.andd', 14000, '-97px'], ['.feetf', 16000, '41px'],
                        ['.feete1', 18000, '-20px'], ['.feete2', 20000,'-20px'], ['.feett', 22000, '-303px'],
                        ['.haveh', 24000, '77px'],['.havea', 26000, '94px'], ['.havev', 28000, '111px'], 
                        ['.havee', 30000, '58px'],['.morem', 32000, '77px'], ['.moreo', 34000, '60px'],
                        ['.morer', 36000, '111px'], ['.moree', 38000, '58px'],  ['.thant', 40000, '-250px'], 
                        ['.thanh', 42000, '171px'],
                        ['.thana', 44000, '172px'], ['.thann', 46000, '155px'], ['.halfh',48000, '155px'], 
                        ['.halfa', 50000, '172px'], ['.halfl', 52000, '189px'], ['.halff', 54000, '197px'],
                        ['.ofo', 56000, '138px'], ['.off', 58000, '197px'], ['.thet', 60000, '-69px'],
                        ['.theh', 62000, '233px'], ['.thee', 64000, '214px'],['.bonesb', 66000, '-448px'],
                        ['.boneso', 68000, '-312px'], ['.bonesn', 70000, '-176px'], ['.bonese', 72000, '-59px'],
                        ['.boness', 74000, '84px'], 
                        ['.ini', 76000, '315px'], ['.inn', 78000, '315px'], ['.thet1', 80000, '15px'],
                        ['.theh1', 82000, '317px'], ['.thee1',84000, '298px'], ['.humanh', 86000, '397px'],
                        ['.humanu', 88000, '320px'], ['.humanm', 90000, '397px'], ['.humana', 92000, '414px'],
                        ['.humann', 94000, '397px'], ['.bodyb', 96000, '380px'], ['.bodyo', 98000, '379px'],
                        ['.bodyd', 100000, '299px'], ['.bodyy', 102000, '381px']
                        ]
    
    for(var i = 0; i < alphabetLoop.length; i++) {
      console.log("loop: " + alphabetLoop[i][0] + " " + alphabetLoop[i][1] + " " + alphabetLoop[i][2]);
      $(alphabetLoop[i][0]).css({top:'auto',bottom:topToBottom});
      $(alphabetLoop[i][0]).delay(alphabetLoop[i][1]).animate({
        bottom: alphabetLoop[i][2],
      }, 5000);  
      if (i === alphabetLoop.length - 1){
        //this is the last letter
        $('.button').show();
      
      }
    }
});