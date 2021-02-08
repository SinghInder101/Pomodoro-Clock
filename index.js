var mm=00;
var ss=0;
var sm=0;
var bm=0;
var flag=1;
var count=0;

function sessionadd(){
    sm=sm+1;
    document.getElementById("sessiontime").innerHTML=sm+" min";
    
}
function sessionsubtract(){
    if(sm>0){
        sm=sm-1;
    }
    document.getElementById("sessiontime").innerHTML=sm+" min";
}
function breakadd(){
    if(sm>0){
    bm=bm+1;
    document.getElementById("breaktime").innerHTML=bm+" min";
    }
}
function breaksubtract(){
    if(bm>0)
    {
        bm=bm-1;
    }
    document.getElementById("breaktime").innerHTML=bm+" min";
};

function startclock(){
    if(sm>0 && bm>0){
    document.getElementsByClassName("add")[0].setAttribute("disabled","true");
    document.getElementsByClassName("add")[1].setAttribute("disabled","true");
    document.getElementsByClassName("subtract")[0].setAttribute("disabled","true");
    document.getElementsByClassName("subtract")[1].setAttribute("disabled","true");
    mm=sm-1;
    ss=60;
    flag=0;
    document.getElementById("start").setAttribute("onclick","pause()")
    document.getElementById("start").innerHTML="Pause";

    }


}
var start= setInterval(function(){
if(flag==0){
    if(ss>0){
    ss=ss-1;
    }

    if(ss==0 && mm>1){
        mm=mm-1;
        ss=60;
    }
    if(ss==0 && mm==0 && count%2==0){
        mm=bm-1;
        ss=59;
        count++;
    }
    if(ss==0 && mm==0 && count%2!=0){
        mm= sm-1;
        ss=59;
        count++;
    }
    
    var flagmm=0;
    var flagss=0;
    if(ss>=0 && ss<10){
        ss='0'+ss;
        flagss=1;
    }
    if(mm>=0 && mm<10){
        mm='0'+mm;
        flagmm=1;
    }
    document.getElementById("time").innerHTML=mm+":"+ss;
    if(flagmm==1){
        mm=mm-'0';
    }
    if(flagss==1){
        ss=ss-'0';
    }

  
}
},1000)

function pause(){
    flag=1;
    document.getElementById("start").setAttribute("onclick","resume()");
    document.getElementById("start").innerHTML="Start";
}
function resume(){
    flag=0;
    document.getElementById("start").setAttribute("onclick","pause()");
    document.getElementById("start").innerHTML="Pause";
}
function reset(){
    bm=0;
    sm=0;
    ss=0;
    mm=0;
    flag=1;
    document.getElementById("time").innerHTML="00:00";
    document.getElementsByClassName("add")[0].removeAttribute("disabled");
    document.getElementsByClassName("add")[1].removeAttribute("disabled");
    document.getElementsByClassName("subtract")[0].removeAttribute("disabled");
    document.getElementsByClassName("subtract")[1].removeAttribute("disabled");
    document.getElementById("sessiontime").innerHTML="0 min"
    document.getElementById("breaktime").innerHTML="0 min";
    document.getElementById("start").setAttribute("onclick","startclock()");
    document.getElementById("start").innerHTML="Start";
}