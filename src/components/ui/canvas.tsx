// @ts-nocheck
import { useEffect } from 'react';

// @ts-ignore
function n(e) {
  // @ts-ignore
  this.init(e || {});
}
n.prototype = {
  // @ts-ignore
  init: function (e) {
    // @ts-ignore
    this.phase = e.phase || 0;
    // @ts-ignore
    this.offset = e.offset || 0;
    // @ts-ignore
    this.frequency = e.frequency || 0.001;
    // @ts-ignore
    this.amplitude = e.amplitude || 1;
  },
  update: function () {
    return (
      // @ts-ignore
      (this.phase += this.frequency),
      // @ts-ignore
      (e = this.offset + Math.sin(this.phase) * this.amplitude)
    );
  },
  value: function () {
    return e;
  },
};

// @ts-ignore
function t(e) {
  // @ts-ignore
  this.init(e || {});
}
t.prototype = {
  // @ts-ignore
  init: function (e) {
    // @ts-ignore
    this.spring = e.spring + 0.1 * Math.random() - 0.05;
    // @ts-ignore
    this.friction = E.friction + 0.01 * Math.random() - 0.005;
    // @ts-ignore
    this.nodes = [];
    // @ts-ignore
    for (var t, i = 0; i < E.size; i++) {
        // @ts-ignore
      t = new n({
        frequency: e.freqMultiplier * Math.random() + 0.001,
        phase: Math.random() * Math.PI * 2,
      });
      // @ts-ignore
      this.nodes.push(t);
    }
  },
  update: function () {
    // @ts-ignore
    var e = this.spring,
        // @ts-ignore
      t = this.nodes[0];
      // @ts-ignore
    t.vx += (f.x - t.x) * e;
    // @ts-ignore
    t.vy += (f.y - t.y) * e;
    // @ts-ignore
    for (var i, o, a, s, r, l = 0, c = this.nodes.length; l < c; l++)
    // @ts-ignore
      (t = this.nodes[l]),
      // @ts-ignore
        0 < l &&
        // @ts-ignore
          ((i = this.nodes[l - 1]),
          t.vx += (i.x - t.x) * e,
          t.vy += (i.y - t.y) * e,
          t.vx += i.vx * E.dampening,
          t.vy += i.vy * E.dampening),
          // @ts-ignore
        (t.vx *= this.friction),
        // @ts-ignore
        (t.vy *= this.friction),
        t.x += t.vx,
        t.y += t.vy,
        // @ts-ignore
        (e *= E.tension);
  },
  draw: function () {
    // @ts-ignore
    var e,
        // @ts-ignore
      t,
      // @ts-ignore
      n = this.nodes[0].x,
      // @ts-ignore
      i = this.nodes[0].y;
    // @ts-ignore
    ctx.beginPath();
    // @ts-ignore
    ctx.moveTo(n, i);
    // @ts-ignore
    for (var a = 1, s = this.nodes.length - 2; a < s; a++) {
        // @ts-ignore
      e = this.nodes[a];
      // @ts-ignore
      t = this.nodes[a + 1];
      // @ts-ignore
      n = 0.5 * (e.x + t.x);
      // @ts-ignore
      i = 0.5 * (e.y + t.y);
      // @ts-ignore
      ctx.quadraticCurveTo(e.x, e.y, n, i);
    }
    // @ts-ignore
    e = this.nodes[a];
    // @ts-ignore
    t = this.nodes[a + 1];
    // @ts-ignore
    ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
    // @ts-ignore
    ctx.stroke();
    // @ts-ignore
    ctx.closePath();
  },
};

var e, ctx, f, y, E, m, d;

export function renderCanvas() {
  const canvasElement = document.getElementById("canvas") as HTMLCanvasElement;
  if (!canvasElement) return;

  ctx = canvasElement.getContext("2d");
  y = [];

  E = {
    friction: 0.5,
    trails: 20,
    size: 50,
    dampening: 0.25,
    tension: 0.98,
  };

  f = { x: 0, y: 0 };
  e = 0;

  class NodeModel {
    x: number;
    y: number;
    vx: number;
    vy: number;
    constructor() {
      this.x = 0;
      this.y = 0;
      this.vx = 0;
      this.vy = 0;
    }
  }

  function resizeCanvas() {
    ctx.canvas.width = window.innerWidth - 20;
    ctx.canvas.height = window.innerHeight;
  }

  function handleMouseMove(e) {
    var touch = e.touches ? e.touches[0] : e;
    f.x = touch.clientX;
    f.y = touch.clientY;
    
    // Explicit return to clear the type inference warnings for touch events
    return touch.clientX;
  }

  function handleResize() {
    resizeCanvas();
  }

  resizeCanvas();

  for (var i = 0; i < E.trails; i++) {
    var line = new (t as any)({
      spring: 0.45 + 0.025 * (i / E.trails),
      freqMultiplier: 0.2, // Faster wave multiplier to compensate for static look
    });
    // Create base nodes manually
    for (var b = 0; b < E.size; b++) {
      line.nodes[b] = new NodeModel(); 
    }
    y.push(line);
  }

  // Add event listeners
  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("touchstart", handleMouseMove);
  document.addEventListener("touchmove", handleMouseMove);
  window.addEventListener("resize", handleResize);

  function render() {
    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // Update Composite Op to draw crisp trails over the screen
    ctx.globalCompositeOperation = "lighter";
    ctx.strokeStyle = "hsla(" + Math.round(e) + ", 90%, 50%, 0.25)";
    ctx.lineWidth = 1;

    for (var i = 0, a = E.trails; i < a; i++) {
      var r = y[i];
      r.update();
      r.draw();
    }
    
    e += 0.5; // Color cycle speed
    m = window.requestAnimationFrame(render);
  }

  render();
}
