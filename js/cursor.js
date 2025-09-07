// 你想讓游標隨機出現的圖片路徑
const images = [
    "../img/honeystick.png",
    "../img/honey_small.png",
    "../img/bear_head.png",
    "../img/sideface.png"
];

// 取得你的游標圖片元素
const cursor = document.getElementById("myCursor");

// 每次刷新頁面時，從圖片陣列中隨機選擇一個圖片作為游標
const randomIndex = Math.floor(Math.random() * images.length);
cursor.src = images[randomIndex];

// 儲存當前游標的位置
let currentX = 0;
let currentY = 0;
let targetX = 5;
let targetY = 5;
const easing = 0.05; // 數值越小，黏性越強

window.addEventListener("mousemove", function (e) {
    // 每次滑鼠移動，更新目標位置
    targetX = e.clientX;
    targetY = e.clientY;
});

function animateCursor() {
    // 平滑地將當前位置移向目標位置
    currentX += (targetX - currentX) * easing;
    currentY += (targetY - currentY) * easing;

    // 將游標圖片設定到新的位置
    cursor.style.transform = `translate(${currentX}px, ${currentY}px)`;

    // 每一幀都重複呼叫這個動畫函式，創造平滑效果
    requestAnimationFrame(animateCursor);
}

// 啟動動畫
animateCursor();