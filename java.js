


//set global variable pic one as image object
let pic1 = new Image();
pic1.src="img/llama.jpg";

function drawShapes()//draws shapes of picture then call helpers
{
    //Order of functions matter
    //first func called is in the back
    //last func called is most recent and on top
    drawCircle(250,250,75,12,"#aa5279","#a66c35",0,2*Math.PI);
    drawLine(0,0,15,"#9b63aa",250,250);
    drawImage(pic1,300, 20, 200, 200);                                                                     //layer3
    drawText(300,40,"#00aaa6","HELLO" , "30px TimesNewRoman"); //overlaps draw image            layer2
    drawRectangle(10,50,100, 100,"#e6ed7e");//layer1



}



//helper func to how to draw images, tools
function drawImage(source,xPos, yPos, wDim, hDim)//<- () is called parameters
{
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");//do every time, standard way of getting 2d tools

    ctx.drawImage(source, xPos, yPos, wDim, hDim); //only ever draw image
}


function drawText(xPos,yPos,color, message,sizeAndFont)
{
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");//do every time, standard way of getting 2d tools

    ctx.fillStyle = color;
    ctx.font= sizeAndFont;
    ctx.fillText(message,xPos,yPos)
}

function drawRectangle(xPos,yPos,width, height, color)
{
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");//do every time, standard way of getting 2d tools

    ctx.fillStyle = color;
    ctx.fillRect(xPos,yPos,width, height)

}

function drawCircle(xPos,yPos,radius,lineWidth,borderColor,fillColor, startAngle, endAngle)
{
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");//do every time, standard way of getting 2d tools

    ctx.lineWidth=lineWidth; // thickness
    ctx.strokeStyle=borderColor; //color of border
    ctx.beginPath(); //need to start circle
    ctx.arc(xPos,yPos,radius,startAngle,endAngle); //x and y pos is center of circle
    ctx.fillStyle=fillColor;
    ctx.fill();
    ctx.stroke();

}


function drawLine(xStart, yStart, lineWidth, color, xEnd, yEnd)
{
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d"); //standard way of invoking 2D tools

    ctx.beginPath(); //invoke the drawLine tool
    ctx.moveTo(xStart, yStart); //these are the coordinates where the pencil first touches the canvas
    ctx.lineWidth = lineWidth;
    ctx.lineTo(xEnd, yEnd); //stop drawing at these coords
    ctx.strokeStyle = color; //color of the line
    ctx.stroke();
}























