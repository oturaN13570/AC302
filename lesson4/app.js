console.log("test....");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//create image
var randomimage = new Image();
//set source
randomimage.src = "randomimage.jpg";

randomimage.onload = function(){
	ctx2.drawImage(randomimage,200,200,150,150);
}


var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext("2d");

ctx2.fillStyle = "cyan";
ctx2.fillRect(0,0,800,350);

ctx2.fillStyle = "green";
ctx2.fillRect(0,150,800,500);

var castle = new Image();
castle.src = "castle.jpg";
castle.onload = function(){
	ctx2.drawImage(castle,550,200,150,150);
}
