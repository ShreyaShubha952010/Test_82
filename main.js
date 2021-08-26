var mouseEvent="empty";
var last_position_of_x, last_position_of_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width_of_line=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
 current_position_of_mouse_x=e.clientX-canvas.offsetleft;
 current_position_of_mouse_y=e.clientY-canvas.offsetTop;
 if(mouseEvent=="mouseDown"){
     ctx.beginPath();
     ctx.StrokeStyle=color;
     ctx.lineWidth=width_of_line;
     console.log("last_position_of_x_and_y=");
     console.log("x="+last_position_of_x+"y="+last_position_of_y);

     ctx.moveTo(last_position_of_x_,last_postion_of_y);
console.log("current_position_of_x_and_y=");
     console.log("x="+current_position_of_mouse_x+"y="+current_position_of_mouse_y);
ctx.lineTo(last_position_of_x_,last_postion_of_y);
ctx.stroke();

 }
 last_position_of_x=current_position_of_mouse_x;
last_position_of_y=current_position_of_mouse_y;

}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave",my_mousedleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}