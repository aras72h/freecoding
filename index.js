const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
ctx.canvas.width = 600;
ctx.canvas.height = 400;
ctx.rect(0, 0, 600, 400)
ctx.stroke();

for (let i = 0; i < ctx.canvas.height / 10; i++) {
    ctx.beginPath();
    ctx.moveTo(0, i * 10);
    ctx.lineTo(600, i * 100);
    ctx.stroke();
}