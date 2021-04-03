$(document).ready(function() {
let r = Math.floor(Math.random() * 36);
let currentNum = 1;
let mis = 0;
let end, start, endTime, resTime;
function timerRepeat(){
  endTime = new Date();
  resTime = endTime - start;
  resTime = resTime / 1000;
  resTime = resTime.toFixed(2);
  $('.sek').text(resTime);
  if(resTime >= 20){
    $('#secondStat').css('border-color', 'red');
  }
    setTimeout(function() {
      timerRepeat();
    }, 10);    

}
function changeTarget(){
  $('#slot-' + r).addClass('mistake');
  $('.mistake').unbind("click");
  $('#slot-' + r).removeClass('target');
  $('#slot-' + r).text("");
  $('#slot-' + r).unbind("click");
  r = Math.floor(Math.random() * (36 - 1)) + 1;
  $('#slot-' + r).addClass('target');
  $('#slot-' + r).text(currentNum);
  $('#slot-' + r).removeClass('mistake'); 
  mistake();
        $('.target').click(function(){
            currentNum++;
            changeTarget();
            if(currentNum == 11){
              $('#sekMean').removeClass('sek');
              $('#slot-' + r).text('');
              $('#slot-' + r).removeClass('target');
              $('#slot-' + r).unbind("click");
              currentNum = 0;
              end = new Date();
              let res =  end - start;
              res = res / 1000;
              resTime = 0;
              res = res.toFixed(2);
              $('#sekMean').text(res);
              $('#mistakeMean').text(mis);
              $('#print').text('Вы собрали 10 квардртиков за: ' + res + ' С.'); 
              timeMean = 0;
              }
              else{
                $('#print').text('') 
              }
        });
}
function mistake(){
  $('.mistake').click(function(){
    mis = mis + 1;
    if(mis >= 3){
      $('#mistakeStat').css('border-color', 'red');
    }
    $('#mistakeMean').text(mis);
  });
}
        $('#btnReset').click(function(){
          currentNum = 0;
          mis = 0;
          $('#sekMean').addClass('sek');
          $('#mistakeMean').text(mis);
          $('#mistakeStat').css('border-color', 'blue');
          $('#secondStat').css('border-color', 'blue');
          $('#print').text('')
          start = new Date();
          timerRepeat();
          changeTarget();
        });
});