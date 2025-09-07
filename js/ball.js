
const ball = document.getElementById('ball');


const bottomMinDistance = 30;  // 最近 50px
const bottomMaxDistance = 55; // 最遠 100px


let position = window.innerHeight - bottomMaxDistance;
let direction = 1; 
const speed = 1; 


let intervalId = null;


function animateBall() {
    // 更新位置
    position += speed * direction;

  
    const currentBallBottom = position + ball.clientHeight;

    // 獲取底部位置
    const viewportBottom = window.innerHeight;



 
    if (viewportBottom - currentBallBottom <= bottomMinDistance) {
        // 向下
        direction = -1;
    }

    else if (viewportBottom - currentBallBottom >= bottomMaxDistance) {
        // 向上
        direction = 1;
    }

    // 新位置
    ball.style.top = position + 'px';
}

// 檢查是否滾動到底部
function checkScrollPosition() {
    const documentHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    const scrollTop = window.scrollY;
    //觸發動畫的數值 (距離底部100px)
    const triggerThreshold = documentHeight - viewportHeight - 100;

    if (scrollTop >= triggerThreshold) {

        // 到達指定位置顯示
        ball.style.opacity = '1';
        ball.style.visibility = 'visible';

        // 動畫還沒開始才開始
        if (intervalId === null) {
            // 動畫開始前確定位置正確
            position = window.innerHeight - bottomMaxDistance - 400;
            ball.style.top = position + 'px';

            intervalId = setInterval(animateBall, 50);
        }


    } else {

        // 離開底部隱藏
        ball.style.opacity = '0';
        // 淡出完成後隱藏
        ball.style.visibility = 'hidden';
       

        // 停止
        if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
        }

    }


}

// 监听滚动事件和加载事件
window.addEventListener('scroll', checkScrollPosition);
window.addEventListener('load', checkScrollPosition);