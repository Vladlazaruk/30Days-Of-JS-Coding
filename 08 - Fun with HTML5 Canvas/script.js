const canvas = document.querySelector('#draw'),
    ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;

let isDrawing = false,
    lastX = 0,
    lastY = 0,
    hue = 0,
    direction = true;

function draw(e) {
    if(!isDrawing){
        return;
    }
    if(hue >= 360){
        hue = 0;
    }
    [lastX, lastY] = [e.offsetX, e.offsetY];
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    hue++;
    if(ctx.lineWidth >= 50 || ctx.lineWidth <= 1){
        direction = !direction;
    }
    if(direction) {
        ctx.lineWidth++;
    } else{
        ctx.lineWidth--;
    }
   
}
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});
canvas.addEventListener('mouseout', () => {
    isDrawing = false;
});

