const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
ctx.canvas.width = 600;
ctx.canvas.height = 400;
ctx.rect(0, 0, 600, 400)
ctx.stroke();

ctx.beginPath();

ctx.arc(300, 200, 200, 0, Math.PI * 2, true);
ctx.moveTo(450, 200);
ctx.arc(300, 200, 150, 0, Math.PI, false);
ctx.moveTo(250, 150);
ctx.arc(225, 150, 25, 0, Math.PI * 2, true);
ctx.moveTo(400, 150);
ctx.arc(375, 150, 25, 0, Math.PI * 2, true);


ctx.stroke();
