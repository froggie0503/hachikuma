// 獲取您想要觸發的圖片元素，例如小熊圖片
const toastTrigger = document.getElementById('bearfloat-img');

// 獲取 Toast 元素本身
const toastLiveExample = document.getElementById('liveToast');

// 如果圖片元素存在，就設定點擊事件監聽器
if (toastTrigger) {
    toastTrigger.addEventListener('click', () => {
        // 創建一個新的 Toast 實例
        const toast = new bootstrap.Toast(toastLiveExample);
        // 顯示吐司
        toast.show();
    });
}