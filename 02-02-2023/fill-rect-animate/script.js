const canvas = document.querySelector('#canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

const block_size = 30;
window.addEventListener('load', () => {
    for (let i = 0; i <= 10; i++) {
        const generateNumber = (e) => Math.floor(Math.random() * e)
        setTimeout(() => {
            ctx.fillStyle = `rgb(${generateNumber(255)},${generateNumber(255)},${generateNumber(255)})`
            ctx.fillRect(block_size * i, block_size * i, 30, 30);
        }, 200 * i)
    }

})
