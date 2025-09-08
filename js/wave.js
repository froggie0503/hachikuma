window.addEventListener('scroll', function() {
    const animateDiv = document.querySelector('.animate');
    const footerDiv = document.querySelector('.footer');

    // 取得 footer 區塊相對於視窗頂部的位置
    const footerTop = footerDiv.getBoundingClientRect().bottom;

    // 取得視窗的高度
    const windowHeight = window.innerHeight;

    // 當 footer 的頂部進入可見視窗時
    if (footerTop <= windowHeight) {
        // 如果 footer 出現，新增 .is-pushed-up 類別
        animateDiv.classList.add('is-pushed-up');
    } else {
        // 如果 footer 離開，則移除 .is-pushed-up 類別
        animateDiv.classList.remove('is-pushed-up');
    }
});