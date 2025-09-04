// 获取小球元素
const ball = document.getElementById('ball');

// 定义小球的移动范围 (以距离视窗底部的像素为单位)
// 这些值现在是「距离底部」的距离
const bottomMinDistance = 30;  // 距离视窗底部最近 50px
const bottomMaxDistance = 50; // 距离视窗底部最远 100px

// 定义小球的初始位置和速度
// 初始位置设定在范围内的某个点
// 这里的 position 是「距离视窗顶部的距离」，需要从底部距离转换
let position = window.innerHeight - bottomMaxDistance;
let direction = 1; // 1 表示向下移动，-1 表示向上移动
const speed = 1; // 每次移动的像素数

// 声明一个变量来存储定时器 ID，以便后面可以清除它
let intervalId = null;

// 小球动画函数
function animateBall() {
    // 更新小球的位置
    position += speed * direction;

    // 获取小球的底部位置，用于碰撞检测
    // currentBallBottom = currentBallTop + ballHeight
    const currentBallBottom = position + ball.clientHeight;

    // 获取视窗的底部位置
    const viewportBottom = window.innerHeight;

    // 检查是否碰到范围的边界
    // 这里的碰撞检测现在是基于「距离底部」来计算的

    // 如果小球底部距离视窗底部小于 bottomMinDistance
    if (viewportBottom - currentBallBottom <= bottomMinDistance) {
        // 反转方向，开始向上移动
        direction = -1;
    }
    // 或者如果小球底部距离视窗底部大于 bottomMaxDistance
    else if (viewportBottom - currentBallBottom >= bottomMaxDistance) {
        // 反转方向，开始向下移动
        direction = 1;
    }

    // 应用新的位置
    ball.style.top = position + 'px';
}

// 检查是否滚动到页面底部的函数
function checkScrollPosition() {
    const documentHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    const scrollTop = window.scrollY;

    if (scrollTop + viewportHeight >= documentHeight - 100) {
        if (intervalId === null) {
            intervalId = setInterval(animateBall, 25);
        }
    } else {
        if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }
}

// 监听滚动事件和加载事件
window.addEventListener('scroll', checkScrollPosition);
window.addEventListener('load', checkScrollPosition);