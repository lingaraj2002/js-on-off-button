let btn = document.getElementById("btn");
let icon = document.getElementById("icon");
let display = document.getElementById("display");
let on = true;

function onoff(){
    if( on ){
        display.innerHTML="ON";
        icon.style.paddingRight= 0;
        icon.style.paddingLeft = "30px";
        on = false;
    }
    else{
        display.innerHTML="OFF";
        icon.style.paddingLeft=0;
        icon.style.paddingRight="30px";
        on = true;
    }
    if(display.innerHTML=="ON"){
        btn.style.backgroundColor="#3399ff";
        icon.style.color="white";
    }
    else{
        btn.style.backgroundColor="#8080802e";
        icon.style.color="black";
    }
}