const canvas = document.querySelector('#canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

const block_size = 15;
const cHeight = canvas.height / block_size, cWidth = canvas.width / block_size;
window.addEventListener('load', () => {
    const generateNumber = () => Math.floor(Math.random() * 255)
    const cHeight = Math.round(canvas.height / block_size), cWidth = Math.round(canvas.width / block_size);
    for (let i = 0; i <= cWidth; i++) {
        for (let j = 0; j <= cHeight; j++) {
            ctx.beginPath();
            ctx.strokeStyle = `rgb(${generateNumber()},${generateNumber()},${generateNumber()})`
            ctx.arc(block_size * i, block_size * j, 5, 0, Math.PI*2, true);
            // ctx.arc(100, 100, 50, Math.PI, Math.PI*3/2)
            ctx.closePath();
            ctx.stroke();
        }
    }
})
