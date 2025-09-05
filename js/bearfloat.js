// 获取小球元素
const bear = document.getElementById('bearfloat-img');

// 定义小球的移动范围 (以距离视窗底部的像素为单位)
// 这些值现在是「距离底部」的距离
const bottomMinDistance = 30;  // 距离视窗底部最近 50px
const bottomMaxDistance = 55; // 距离视窗底部最远 100px

// 定义小球的初始位置和速度
// 初始位置设定在范围内的某个点
// 这里的 position 是「距离视窗顶部的距离」，需要从底部距离转换
let position = bottomMinDistance;
let direction = 0.05; // 1 表示向下移动，-1 表示向上移动



// 小球动画函数
function animateBear() {
    // 更新小球的位置
    position +=  direction;

    
    if (position > bottomMaxDistance) {
        // 向下移动
        direction = -0.05;
    }
    
    else if (position < bottomMinDistance) {
        // 向上移動
        direction = 0.05;
    }
   

    // 应用新的位置
    bear.style.bottom = position + 'px';

    
}


setInterval(animateBear,10)
