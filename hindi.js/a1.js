const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function drawBulb(x, y, radius, color, glowColor) {
    // Draw bulb
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();

    // Draw glow
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
    gradient.addColorStop(0, glowColor);
    gradient.addColorStop(1, 'transparent');
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();
}

function animate() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw glowing bulb
    drawBulb(100, 100, 50, 'yellow', 'rgba(255, 255, 0, 0.5)');

    requestAnimationFrame(animate);
}

animate();
