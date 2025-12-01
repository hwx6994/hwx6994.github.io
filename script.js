// script.js

document.addEventListener('DOMContentLoaded', function() {

    // 为所有带有 .nav-btn 类的按钮添加点击事件
    document.querySelectorAll('.nav-btn').forEach(button => {
        button.addEventListener('click', function() {
            // 获取按钮的 data-target 属性值（目标页面的URL）
            const targetPage = this.dataset.target;

            // 检查是否成功获取到目标页面
            if (targetPage) {
                // 使用 window.location.href 跳转到目标页面
                window.location.href = targetPage;
            }
        });
    });

});