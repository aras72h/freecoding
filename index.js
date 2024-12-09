const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.canvas.width = 600;
ctx.canvas.height = 400;

const rectangle = {
    width: 50,
    height: 50,
    x: 275,
    y: 175,
}

const draw = function () {
    drawBg();
    flash(5)
};


const flash = function (count) {
    if (count === 0) return;

    setTimeout(function () {
        drawRectangle();
        setTimeout(function () {
            drawBg();
            flash(count - 1);
        }, 500)
    }, 500)
}


const drawBg = function () {
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, 600, 400);
}


const drawRectangle = function () {
    ctx.beginPath();
    ctx.fillStyle = '#000';
    ctx.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    ctx.fill();
}

draw();

// const loop = async function() {
//     ctx.fillStyle = '#fff';
//     ctx.fillRect(0, 0, 600, 400);
//     ctx.beginPath();
//     ctx.fillStyle = `rgb(0, 0, 0)`;
//     ctx.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
//     ctx.fill();
//
//     setTimeout(() => {
//         ctx.clearRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
//     }, 50);
//
//     window.requestAnimationFrame(loop);
// }
//
// window.requestAnimationFrame(loop);