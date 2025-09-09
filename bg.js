const c = document.getElementById('bg'), ctx = c.getContext('2d');
let W, H, DPR = Math.min(2, devicePixelRatio || 1), pts = [];
const COUNT = 80, SPEED = .25, LINK_DIST = 140;
function resize() { W = c.width = innerWidth * DPR; H = c.height = innerHeight * DPR; c.style.width = innerWidth + 'px'; c.style.height = innerHeight + 'px'; ctx.setTransform(DPR, 0, 0, DPR, 0, 0); }
resize(); addEventListener('resize', resize);
for (let i = 0; i < COUNT; i++) { pts.push({ x: Math.random() * innerWidth, y: Math.random() * innerHeight, vx: (Math.random() - .5) * SPEED * 2, vy: (Math.random() - .5) * SPEED * 2 }); }
function step() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (let p of pts) { p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > innerWidth) p.vx *= -1; if (p.y < 0 || p.y > innerHeight) p.vy *= -1; }
    ctx.strokeStyle = 'rgba(104, 104, 104, 0.55)';
    for (let i = 0; i < pts.length; i++) { for (let j = i + 1; j < pts.length; j++) { let a = pts[i], b = pts[j]; let dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy; if (d2 < LINK_DIST * LINK_DIST) { ctx.globalAlpha = 1 - Math.sqrt(d2) / LINK_DIST; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); } } }
    ctx.globalAlpha = 1; ctx.fillStyle = '#afafafff'; for (let p of pts) { ctx.beginPath(); ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2); ctx.fill(); }
    requestAnimationFrame(step);
}
step();