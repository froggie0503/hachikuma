
document.addEventListener('DOMContentLoaded', function() {
  const hash = window.location.hash;

  if (hash) {
    // 建立一個錨點和所屬 Tab 的對應關係
    const tabMap = {
      '#Canele': '#snacks',
      // 如果未來有其他子區塊，可以繼續在這裡新增
      // 例如: '#sub_section_id': '#main_tab_id'
    };

    // 檢查 URL 錨點是否在我們的對應表中
    const targetTabHash = tabMap[hash];

    // 如果找到對應的 Tab 錨點
    if (targetTabHash) {
      // 找到對應的 Tab 按鈕
      const targetTabLink = document.querySelector(`a[href="${targetTabHash}"]`);

      if (targetTabLink) {
        // 先切換 Tab
        const tab = new bootstrap.Tab(targetTabLink);
        tab.show();

        // 監聽 Tab 顯示事件，確保內容已可見
        targetTabLink.addEventListener('shown.bs.tab', function () {
          // 找到子區塊並下捲
          const targetElement = document.getElementById(hash.substring(1));
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, { once: true }); // 使用 { once: true } 確保事件只執行一次
      }
    } else {
      // 如果 URL 錨點就是 Tab 本身 (例如 #snacks)
      const targetTabLink = document.querySelector(`a[href="${hash}"]`);
      if (targetTabLink && targetTabLink.getAttribute('data-bs-toggle') === 'pill') {
        const tab = new bootstrap.Tab(targetTabLink);
        tab.show();
      }
    }
  }
});
