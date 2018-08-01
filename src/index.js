import { Point } from 'jcc2d';
/**
 * 坐标系
 * @param {object} options 初始化配置
 */
function Axes(options) {
  options = options || {};
  this.segment = options.segment || 20;
  this.size = options.size || 400;
  this.jutting = options.jutting || 50;
  this.gridWeight = options.gridWeight || 0.2;
  this.axesWeight = options.axesWeight || 1;

  const c = this.segment >> 1;
  this.origin = options.origin || new Point(c, c);
  this.gridColor = options.gridColor || '#444a61';
  this.axisColor = options.axisColor || '#646794';
}

Axes.prototype.render = function(ctx) {
  this._renderGrid(ctx);
  this._renderAxes(ctx);
};

Axes.prototype._renderAxes = function(ctx) {
  const s = this.jutting;
  const l = this.size;
  const e = s + l;
  const ax = 6;
  const ay = 12;
  const ox = l * this.origin.x / this.segment;
  const oy = l * this.origin.y / this.segment;

  ctx.beginPath();
  ctx.moveTo(0, s + oy);
  ctx.lineTo(0, -e + oy);
  ctx.moveTo(-ax, -e + ay + oy);
  ctx.lineTo(0, -e + oy);
  ctx.lineTo(ax, -e + ay + oy);

  ctx.moveTo(-s - ox, 0);
  ctx.lineTo(e - ox, 0);
  ctx.moveTo(e - ay - ox, ax);
  ctx.lineTo(e - ox, 0);
  ctx.lineTo(e - ay - ox, -ax);

  ctx.strokeStyle = this.axisColor;
  ctx.lineWidth = this.axesWeight;
  ctx.stroke();
};

Axes.prototype._renderGrid = function(ctx) {
  const size = this.size;
  const seg = this.segment;
  const ox = size * this.origin.x / this.segment;
  const oy = size * this.origin.y / this.segment;

  ctx.beginPath();
  ctx.lineWidth = this.gridWeight;
  for (let i = 0; i <= this.segment; i++) {
    const step = i * size / seg;
    ctx.moveTo(step - ox, 0 + oy);
    ctx.lineTo(step - ox, -size + oy);
    ctx.moveTo(0 - ox, -step + oy);
    ctx.lineTo(size - ox, -step + oy);
  }
  ctx.strokeStyle = this.gridColor;
  ctx.stroke();
};

export { Axes };
