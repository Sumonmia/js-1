//text change
function textChange(){
    document.getElementById('h2').innerHTML="Hello World";
}
function textWelcome(){
    document.getElementById('p').innerHTML="Welcome to JS";
}
function alertMessage(){
    alert ('This is an alert message on window');
}

function happy(){
    document.getElementById('h3').innerHTML="Hope You are Doing Well";
}

function showDate(){
    document.getElementById("d_h2").innerHTML=Date();
}
//date show
function end(){
    document.getElementById('h4').innerHTML="TATA Bye Bye, See you soon";
}
//bulb on off
function bulbOn(){
    document.getElementById("img").src ="img/pic_bulbon.gif";
}

function bulbOff(){
    document.getElementById("img").src ="img/pic_bulboff.gif";
}
//font style change

function fontChange(){
    document.getElementById("f_h2").style.fontSize ="80px";
}