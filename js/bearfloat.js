
const bear = document.getElementById('bearfloat-img');


const bottomMin = 30;  // 最近 50px
const bottomMax = 55; // 最遠100px

// 小球初始位置和速度
let position = bottomMin;
let direction = 0.05; // 1 表示向下，-1 表示向上




function animateBear() {
  
    position +=  direction;

    
    if (position > bottomMax) {
        
        direction = -0.05;
    }
    
    else if (position < bottomMin) {
        
        direction = 0.05;
    }
   

    // 新位置
    bear.style.bottom = position + 'px';
    requestAnimationFrame(animateBear);

    
}


requestAnimationFrame(animateBear)
