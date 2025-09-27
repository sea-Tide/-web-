// 百度搜索页面交互脚本
// 搜索按钮点击事件
const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input');
if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', function() {
        const query = searchInput.value.trim();
        if (query) {
            alert('你搜索了：' + query);
            // 这里可以跳转到百度搜索结果页
            // window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(query));
        } else {
            alert('请输入搜索内容');
        }
    });
}
// AI按钮点击事件
const aiBtn = document.querySelector('.ai-btn');
if (aiBtn) {
    aiBtn.addEventListener('click', function() {
        alert('AI功能暂未开放');
    });
}
// 附件按钮点击事件
const attachBtn = document.querySelector('.attach-btn');
if (attachBtn) {
    attachBtn.addEventListener('click', function() {
        alert('上传文件功能暂未开放');
    });
}
// 图片按钮点击事件
const imgBtn = document.querySelector('.img-btn');
if (imgBtn) {
    imgBtn.addEventListener('click', function() {
        alert('上传图片功能暂未开放');
    });
}
