const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.canvas.width = 600;
ctx.canvas.height = 400;

const rectangle = {
    width: 50,
    height: 50,
    x: 0,
    y: 175,
}

const loop = function() {
    ctx.fillStyle = '#ffc';
    ctx.fillRect(0, 0, 600, 400)
    ctx.fillStyle = '#f55'
    ctx.beginPath();
    ctx.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    ctx.fill();
    rectangle.x++;

    if (rectangle.x > 600) {
        rectangle.x = -rectangle.width;
    }

    window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);