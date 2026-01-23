let isDrawing = false;
let canvas, ctx;

// 1. 初始化 (頁面載入後呼叫)
function initCanvas() {
  canvas = document.getElementById('transmutation-circle');
  ctx = canvas.getContext('2d');
  
  // 設定基本樣式
  ctx.lineWidth = 3;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  // TODO: 綁定 mousedown, mousemove, mouseup 事件
  // canvas.addEventListener('mousedown', startDrawing);
  // ...
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mousedown', startDrawing);
}

// 2. 開始繪製 (Mousedown)
function startDrawing(e) {
  // TODO: 開始路徑 (beginPath) 並移動到滑鼠位置 (moveTo)
  // 提示: 使用 e.offsetX, e.offsetY 取得座標
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
}

// 3. 繪製中 (Mousemove)
function draw(e) {
  // TODO: 畫線到目前位置 (lineTo) 並著色 (stroke)
    if (!isDrawing) return;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
}

// 4. 停止繪製 (Mouseup)
function stopDrawing() {
  // TODO: 更改Flag使停止繪製
    isDrawing = false;
}

// 5. 切換顏色
function setColor(newColor) {
  // TODO: 修改 ctx.strokeStyle
    ctx.strokeStyle = newColor;
}

// 6. 清除畫布
function clearBoard() {
  // TODO: 使用 ctx.clearRect 清空整個畫布
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}