const canvas = document.querySelector('#canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

const block_size = 5;
const cHeight = canvas.height / block_size, cWidth = canvas.width / block_size;
window.addEventListener('load', () => {
    const generateNumber = () => Math.floor(Math.random() * 255)
    const cHeight = Math.round(canvas.height / block_size), cWidth = Math.round(canvas.width / block_size);
    for (let i = 0; i <= cWidth; i++) {
        for (let j = 0; j <= cHeight; j++) {
            ctx.fillStyle = `rgb(${generateNumber()},${generateNumber()},${generateNumber()})`
            ctx.fillRect(block_size * i, block_size * j, block_size, block_size);
        }
    }
})
