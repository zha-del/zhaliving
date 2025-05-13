// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 头像添加鼠标悬停效果
    const avatar = document.querySelector('#header img');
    if (avatar) {
        avatar.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        avatar.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
            this.style.transition = 'transform 0.3s ease';
        });
    }
    
    // 友情链接数据 - 可以根据需要修改或从API获取
    const links = [
        { name: '我的博客', url: '#' },
        { name: '我的GitHub', url: '#' },
        { name: '我的项目', url: '#' }
    ];
    
    // 动态添加友情链接
    const footerLinks = document.getElementById('footer-links');
    if (footerLinks) {
        links.forEach(link => {
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.textContent = link.name;
            linkElement.style.color = '#555';
            linkElement.style.textDecoration = 'none';
            linkElement.style.padding = '5px 10px';
            linkElement.style.borderRadius = '4px';
            linkElement.style.background = '#eee';
            
            // 鼠标悬停效果
            linkElement.addEventListener('mouseover', function() {
                this.style.background = '#ddd';
                this.style.transition = 'background 0.3s ease';
            });
            
            linkElement.addEventListener('mouseout', function() {
                this.style.background = '#eee';
                this.style.transition = 'background 0.3s ease';
            });
            
            footerLinks.appendChild(linkElement);
        });
    }
    
    // 添加一个简单的打字效果
    const introText = document.querySelector('#content p');
    if (introText) {
        const originalText = introText.textContent;
        introText.textContent = '';
        
        let index = 0;
        const typeEffect = setInterval(() => {
            if (index < originalText.length) {
                introText.textContent += originalText.charAt(index);
                index++;
            } else {
                clearInterval(typeEffect);
            }
        }, 100);
    }
}); 