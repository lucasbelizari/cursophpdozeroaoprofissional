var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

ctx.moveTo(100, 100);
ctx.lineTo(300, 100);

ctx.moveTo(100, 300);
ctx.lineTo(300, 300);

ctx.moveTo(100, 100);
ctx.lineTo(100, 300);

ctx.moveTo(300, 100);
ctx.lineTo(300, 300);


ctx.moveTo(100, 100);
ctx.lineTo(300, 300);

ctx.moveTo(100, 300);
ctx.lineTo(300, 100);

ctx.moveTo(110, 190);
ctx.lineTo(120, 170);

ctx.moveTo(160, 270);
ctx.lineTo(300, 300);

ctx.moveTo(100, 100);
ctx.lineTo(100, 300);

ctx.moveTo(300, 100);
ctx.lineTo(280, 150);


ctx.moveTo(180, 150);
ctx.lineTo(350, 340);

ctx.moveTo(170, 250);
ctx.lineTo(112, 164);
ctx.stroke();
