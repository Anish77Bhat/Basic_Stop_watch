const number = document.getElementById('num');
const Start = document.getElementById('StartBtn');
const Stop = document.getElementById('StopBtn');
const Reset = document.getElementById('ResetBtn');
const CountHour = document.getElementById('sethour');
let count = 0,minute=0,hour=0;
let Interval;
function SW(){
        count++;
        if(count%60==0){
            number.style.color="blue";
            count=0;
            number.innerHTML=count;
            minute++;
            min.innerHTML=minute;
            if(minute%60==0){
                min.style.color="blue";
                minute=0;
                min.innerHTML=minute;
                hour++;
                CountHour.style.color="blue";
                CountHour.innerHTML=hour;
            }
        }
        else{
            number.style.color="black";
            number.innerHTML=count;
            min.style.color="black";
            min.innerHTML=minute;
            CountHour.style.color="black";
            CountHour.innerHTML=hour;
        }
}
Start.onclick=function startCount(){
    Interval=setInterval(SW , 1000);
}
Stop.onclick=function stopCount(){
    clearInterval(Interval);
}
Reset.onclick=function resetCount(){
    count=0;
    number.innerHTML=count;
    clearInterval(Interval);
}
const CDT = document.getElementById('CurrentTime');
function CurrentDateTime(){
    let date = new Date();
    CDT.textContent = date;
}
setInterval(CurrentDateTime,1000)