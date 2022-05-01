var mouseevent= "empty";
var lastpositionofx, lastpositionofy
 canvas = document.getElementById ("myCanvas").value;
 ctx= canvas.getContext("2d");
color = "teal";
lineWidth = "21"; 
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
mouseevent= "mouseDown";

}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e)
{
mouseevent= "mouseleave";
}

canvas.addEventListener("mouseUP", my_mouseUP);

function my_mouseUP(e)
{
mouseevent= "mouseUP";
}



canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{

    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
ctx.beginPath();
ctx.stroke = color;
ctx.lineWidth = lineWidth;

console.log("Last position of x and y coordinates = ");
console.log("x =" + lastpositionofx + "y = " + lastpositionofy);
ctx.moveTo(lastpositionofx, lastpositionofy);


console.log("Current position of x and y coordinates = ");
console.log("x =" + current_position_of_x + "y = " + current_position_of_y);
ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
ctx.stroke();
}

lastpositionofx = current_position_of_mouse_x;
lastpositionofy = current_position_of_mouse_y;
}