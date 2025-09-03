
    window.addEventListener('scroll', function() {
        const animateDiv = document.querySelector('.animate');
        const footerDiv = document.querySelector('.footer');

        // 取得 animate 和 footer 區塊的相對位置資訊
        const animateRect = animateDiv.getBoundingClientRect();
        const footerRect = footerDiv.getBoundingClientRect();
        
        // 偵測 animate 區塊的底部是否與 footer 區塊的頂部重疊
        if (animateRect.bottom >= footerRect.top) {
            // 如果重疊，將 animate 的定位方式改為 absolute
            // 並將其底部位置設定為 footer 的高度
            animateDiv.style.position = 'relative';
            animateDiv.style.bottom = '200px';
        } else {
            // 如果沒有重疊，則將 animate 區塊恢復為固定在底部
            animateDiv.style.position = 'fixed';
            animateDiv.style.bottom = '0';
        }
    });
