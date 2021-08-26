let second10 = document.getElementById('aaa');
let second = document.getElementById('bbb');
let minute = document.getElementById('ccc');
let hour = document.getElementById('ddd');
let second10Time = 0;
let secondTime = 0;
let minuteTime = 0;
let hourTime = 0;
let timeCount;

function start_click(){
  timeCount = setInterval(timer,100);
  startButton.disabled = true;
  resetButton.disabled = true;
}

function stop_click(){
  clearInterval(timeCount);
  startButton.disabled = false;
  resetButton.disabled=false;
}

function reset_click(){
  second10.innerHTML = 0;
  second.innerHTML = 0;
  minute.innerHTML = 0;
  hour.innerHTML = 0;
  second10Time = 0;
  secondTime = 0;
  minuteTime = 0;
  hourTime = 0;
}
  
function timer(){
  second10Time++;
  if(second10Time<=9){
    second10.innerHTML = second10Time;
  }else if(second10Time==10){
    second10.innerHTML = 0;
    second10Time = 0;
    secondTime++;
    second.innerHTML = secondTime;
    if(secondTime==10){
      second.innerHTML = 0;
      secondTime = 0;
      minuteTime++;
      minute.innerHTML = minuteTime;
      if(minuteTime==10){
        minute.innerHTML = 0;
        minuteTime = 0;
        hourTime++;
        hour.innerHTML = hourTime;
      }
    }
  }
}




