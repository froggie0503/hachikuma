document.addEventListener('DOMContentLoaded', function() {
    const sliderTrack = document.querySelector('.slider-track');

    // 克隆一份圖片列表
    const sliderContent = Array.from(sliderTrack.children);
    sliderContent.forEach(item => {
        const duplicate = item.cloneNode(true);
        sliderTrack.appendChild(duplicate);
    });
});