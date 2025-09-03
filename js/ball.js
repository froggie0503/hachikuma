

// 获取小球元素
const ball = document.getElementById('ball');
window.addEventListener('scroll', checkScrollPosition)
// 首次加载时也检查一次，以防页面一开始就在底部
window.addEventListener('load', checkScrollPosition);

const minPosition = 2300; // 小球移動的最低點，例如距離視窗頂部 500px
const maxPosition = 2350; // 小球移動的最高點，例如距離視窗頂部 800px


var position = minPosition;
var direction = 1; // 1表示向下移动，-1表示向上移动
const speed = 1; // 每次移动的像素数

var intervalId = null;

function checkScrollPosition(){
    
    // 获取页面总高度
    const documentHeight = document.documentElement.scrollHeight;
    // 获取视窗高度
    const viewportHeight = window.innerHeight;
    // 获取当前滚动条的位置
    const scrollTop = window.scrollY;
    if (scrollTop + viewportHeight >= documentHeight - 100) {
        // 如果动画还没有启动，就启动它
        if (intervalId === null) {
            intervalId = setInterval(animateBall, 50);
        }
    } else {
        // 如果离开了底部，就停止动画
        if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }
}


// 定义小球的初始位置和速度
function animateBall(){
    // 更新小球的位置
    position += speed * direction;
    if (position >= maxPosition) {
        // 反轉方向，開始向上移動
        direction = -1;
    }
    // 或者如果小球的位置低於了最低點
    else if (position <= minPosition) {
        // 反轉方向，開始向下移動
        direction = 1;
    }
    ball.style.top = position + 'px';
}


    

   