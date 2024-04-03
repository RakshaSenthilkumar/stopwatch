const startButton=document.getElementsByClassName("start")[0];
const lapButton=document.getElementsByClassName("lap")[0];
const resetButton=document.getElementsByClassName("reset")[0];
const clearButton=document.getElementsByClassName("lap-clear-button")[0];
const minute=document.getElementsByClassName("min")[0];
const second=document.getElementsByClassName("sec")[0];
const centiSecond=document.getElementsByClassName("msec")[0];
const lapss=document.getElementsByClassName("lap")[0];
let isstart=false;
let minCounter=0;
let secCounter=0;
let centiCounter=0;
let sec;
let centiSec;
let min;
let lapitems=0;
const toggleButton=()=>{
    lapButton.classList.remove("display-none");
    resetButton.classList.remove("display-none");
}
const start=()=>{
    if(!isstart){
        startButton.innerHTML='pause';
        /*min=setInterval(()=>{
          minute.innerText=`${++minCounter}:`;
         },60*1000);
        sec=setInterval(()=>{
            if(secCounter===60){
             secCounter=0;
          }
          second.innerText=`${++secCounter}:`;
         },1000);
        centiSec=setInterval(()=>{
          if(centiCounter===100){
            centiCounter=0;
          }
          centiSecond.innerText=`${++centiCounter}`;
         },10);*/
         centiSec = setInterval(() => {
centiCounter++;
if (centiCounter == 100) {
    centiCounter = 0;
    secCounter++;
}
if (secCounter == 60) {
    secCounter = 0;
    minCounter++;
}
// Update the timer display
minute.innerText = `${minCounter < 10 ? '0' + minCounter : minCounter}:`;
second.innerText = `${secCounter < 10 ? '0' + secCounter : secCounter}:`;
centiSecond.innerText = `${centiCounter < 10 ? '0' + centiCounter : centiCounter}`;
}, 10);
        isstart=true;
    }
    else{
       startButton.innerHTML='start';
       clearInterval(min);
       clearInterval(sec);
       clearInterval(centiSec);
        isstart=false;
    }
    toggleButton();
}
const reset=()=>{
    resetButton.classList.add("display-none");
    lapButton.classList.add("display-none");
    minute.innerHTML=`0:`;
    second.innerHTML=`0:`;
    centiSecond.innerHTML=`0`;
}

const lap=()=>{
    const li=document.createElement("li");
    const number=document.createElement("sapn");
    const timestamp=document.createElement("span");

    li.setAttribute("class","lap-items");
    number.setAttribute("class","number");
    timestamp.setAttribute("class","time-stamp");
    
    number.innerText=`#${++lapitems}`;
    timestamp.innerHTML=`${minCounter}:${secCounter}:${centiCounter}`;

    li.append(number,timestamp);
    lapss.append(li);

    clearButton.classList.remove("display-none");
}
const ClearAll=()=>{
    lapss.innerHTML='';
    lapss.append(clearButton);
    clearButton.classList.add("display-none");
    lapButton.classList.add("display-none");
}

startButton.addEventListener("click",start);
resetButton.addEventListener("click",reset);
lapButton.addEventListener("click",lap);
clearButton.addEventListener("click",ClearAll);