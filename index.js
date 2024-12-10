const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
ctx.canvas.width = 600;
ctx.canvas.height = 400;

ctx.fillStyle = 'blue';
ctx.beginPath();
ctx.moveTo(300, 200);
ctx.lineTo(300,100);
ctx.lineTo(200, 200);
ctx.lineTo(300, 300);
ctx.closePath();

ctx.fill();