var canvas=document.getElementById("myCanvas");		
var cts=canvas.getContext("2d");
var color="red";
canvas.addEventListener("mousedown",drawfunc);



function drawfunc(e){
    color=document.getElementById("color").value;
    x=e.clientX-canvas.offsetLeft;
    y=e.clientY-canvas.offsetTop;
    circle(x,y);
}
function circle(x,y){
    cts.beginPath();
    cts.strokeStyle=color;
    cts.lineWidth=2;
    cts.arc(x,y,50,0,2*Math.PI);
    cts.stroke();
}
function clearscreen() { 
    cts.clearRect(0, 0, canvas.width, canvas.height);
 }