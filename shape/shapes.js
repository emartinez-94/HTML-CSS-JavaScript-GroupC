function check(value){
    var x = document.getElementById("x").value
    var y = document.getElementById("y").value

    var inp = document.getElementById("shape").value
    if (inp === "circle")
        drawCircle(x,y);
    else if (inp === "square")
        drawSquare(x,y);
    else if (inp === "rectangle")
        drawRectangle(x,y);

}
function drawCircle(x,y){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, 60, 0, 2 * Math.PI);
    ctx.stroke();    
}
function drawSquare(x,y){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.strokeRect(x, y, 30, 30);
}
function drawRectangle(x,y){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.strokeRect(x, y, 35, 55);


}
function clearCanvas(){
    console.log("Clear")
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
}