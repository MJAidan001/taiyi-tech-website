// 初始化 Framer Motion - 已删除framer-motion.js，注释掉相关代码
// const { motion } = window.Motion;

// 主要的DOMContentLoaded事件监听器
document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有功能
    initMarketChart();
    initScrollProgress();
    initProductCards();
    initProductGallery();
    initProductButtons();
    initBackToTop();
    initScrollAnimations();
    initSmoothScroll();
    initMobileMenu();
    initFormValidation();
    initImageLazyLoading();
    initTypingEffect();
    
    // 用户登录状态管理
    initUserAuth();
    
    // 产品功能初始化
    initProductClickHandlers();
    initViewAllProductsButton();
    initProductCategoryFilter();
    initProductHoverEffects();
    
    // 产品详情页特定功能
    if (window.location.pathname.includes('product-detail')) {
        initProductImageGallery();
        initQuantitySelector();
        initAddToCart();
        initProductDetailPage();
    }
    
    // 其他功能
    updateCartIcon();
    initProductSearch();
    initProductSort();
    
    // 页面加载完成后移除加载屏幕
    window.addEventListener('load', function() {
        const loadingScreen = document.querySelector('.loading-screen');
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    });
});

// 市场增长图表
function initMarketChart() {
    const chartElement = document.getElementById('marketChart');
    if (!chartElement) {
        // 如果页面没有marketChart元素，直接返回，避免报错
        return;
    }
    
    const ctx = chartElement.getContext('2d');
    
    const data = {
        labels: ['2024', '2025', '2026', '2027', '2028', '2029', '2030'],
        datasets: [{
            label: '情感计算市场规模（亿美元）',
            data: [100, 137.42, 188.64, 258.95, 355.53, 488.03, 686.86],
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            tension: 0.4,
            fill: true
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: '#fff'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#fff'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#fff'
                    }
                }
            }
        }
    };

    new Chart(ctx, config);
}

// 滚动进度条
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = scrollProgress + '%';
    });
}

// 产品卡片动画
function initProductCards() {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 100}ms`;
    });

    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // 如果点击的是按钮，不触发卡片点击事件
            if (e.target.closest('.product-btn')) {
                return;
            }
            
            const productId = card.dataset.productId;
            if (productId) {
                // 跳转到商品详情页，并传递商品ID
                window.location.href = `product-detail.html?id=${productId}`;
            }
        });
    });
}

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 导航栏滚动效果
let lastScroll = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        nav.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !nav.classList.contains('scroll-down')) {
        nav.classList.remove('scroll-up');
        nav.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && nav.classList.contains('scroll-down')) {
        nav.classList.remove('scroll-down');
        nav.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// 添加视差滚动效果
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    document.querySelectorAll('.parallax').forEach(element => {
        const speed = element.dataset.speed || 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// 表单提交处理 - 只针对联系表单
const contactForm = document.querySelector('#contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        // 这里可以添加表单验证逻辑
        
        alert('感谢您的留言，我们会尽快与您联系！');
        e.target.reset();
    });
}

// 产品详情页面图片切换
function initProductGallery() {
    const mainImage = document.querySelector('.aspect-w-16.aspect-h-9 img');
    const thumbnails = document.querySelectorAll('.grid.grid-cols-4 img');
    
    if (mainImage && thumbnails.length > 0) {
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', () => {
                mainImage.src = thumb.src;
                thumbnails.forEach(t => t.classList.remove('ring-2', 'ring-blue-500'));
                thumb.classList.add('ring-2', 'ring-blue-500');
            });
        });
    }
}

// 产品详情页面购买按钮
function initProductButtons() {
    const buyButton = Array.from(document.querySelectorAll('button')).find(btn => btn.textContent.includes('立即购买'));
    const contactButton = Array.from(document.querySelectorAll('button')).find(btn => btn.textContent.includes('联系销售'));
    
    // if (buyButton) {
    //     buyButton.addEventListener('click', (e) => {
    //         e.preventDefault();
    //         alert('感谢您的购买意向！我们的销售团队将尽快与您联系。');
    //     });
    // }
    
    if (contactButton) {
        contactButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'index.html#contact';
        });
    }
}

// 回到顶部按钮
function initBackToTop() {
    const backToTopButton = document.createElement('a');
    backToTopButton.href = '#';
    backToTopButton.className = 'back-to-top';
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTopButton);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 500) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
    
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 滚动触发动画
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // 为延迟动画添加特殊处理
                if (entry.target.classList.contains('delay-100')) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, 100);
                } else if (entry.target.classList.contains('delay-200')) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, 200);
                } else if (entry.target.classList.contains('delay-300')) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, 300);
                }
            }
        });
    }, observerOptions);
    
    // 观察所有fade-in元素
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// 平滑滚动
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 移动端菜单
function initMobileMenu() {
    const mobileMenuButton = document.querySelector('.md\\:hidden button');
    const navMenu = document.querySelector('nav .hidden.md\\:flex');
    
    if (mobileMenuButton && navMenu) {
        let isMenuOpen = false;
        
        mobileMenuButton.addEventListener('click', function() {
            isMenuOpen = !isMenuOpen;
            
            if (isMenuOpen) {
                navMenu.classList.remove('hidden');
                navMenu.classList.add('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'w-full', 'bg-black/95', 'backdrop-blur-md', 'border-t', 'border-gray-800', 'py-4');
                mobileMenuButton.innerHTML = '<i class="fas fa-times text-xl"></i>';
            } else {
                navMenu.classList.add('hidden');
                navMenu.classList.remove('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'w-full', 'bg-black/95', 'backdrop-blur-md', 'border-t', 'border-gray-800', 'py-4');
                mobileMenuButton.innerHTML = '<i class="fas fa-bars text-xl"></i>';
            }
        });
        
        // 点击链接后关闭菜单
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                isMenuOpen = false;
                navMenu.classList.add('hidden');
                navMenu.classList.remove('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'w-full', 'bg-black/95', 'backdrop-blur-md', 'border-t', 'border-gray-800', 'py-4');
                mobileMenuButton.innerHTML = '<i class="fas fa-bars text-xl"></i>';
            });
        });
    }
}

// 表单验证
function initFormValidation() {
    const contactForm = document.querySelector('#contact form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // 简单验证
        if (!name || !email || !message) {
            showNotification('请填写所有必填项！', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('请输入有效的邮箱地址！', 'error');
            return;
        }
        
        // 模拟发送
        showNotification('正在发送消息...', 'info');
        
        setTimeout(() => {
            showNotification('消息发送成功！我们会尽快回复您。', 'success');
            this.reset();
        }, 2000);
    });
}

// 图片懒加载
function initImageLazyLoading() {
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('loading');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// 打字机效果
function initTypingEffect() {
    const heroTitle = document.querySelector('section h1 span:first-child');
    if (!heroTitle) return;
    
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.style.borderRight = '2px solid #3b82f6';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            setTimeout(() => {
                heroTitle.style.borderRight = 'none';
            }, 1000);
        }
    };
    
    // 延迟开始打字效果
    setTimeout(typeWriter, 1000);
}

// 工具函数
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 px-6 py-4 rounded-lg text-white z-50 transform translate-x-full transition-transform duration-300`;
    
    // 根据类型设置样式
    switch(type) {
        case 'success':
            notification.classList.add('bg-green-500');
            notification.innerHTML = `<i class="fas fa-check-circle mr-2"></i>${message}`;
            break;
        case 'error':
            notification.classList.add('bg-red-500');
            notification.innerHTML = `<i class="fas fa-exclamation-circle mr-2"></i>${message}`;
            break;
        case 'info':
            notification.classList.add('bg-blue-500');
            notification.innerHTML = `<i class="fas fa-info-circle mr-2"></i>${message}`;
            break;
    }
    
    document.body.appendChild(notification);
    
    // 显示通知
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // 自动隐藏
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// 产品详情页功能
function initProductDetailPage() {
    // 图片切换功能
    initImageGallery();
    
    // 颜色选择功能
    initColorSelector();
    
    // 数量选择器
    initQuantitySelector();
    
    // 购买按钮功能
    initPurchaseButtons();
    
    // 添加到收藏夹功能
    initFavorites();
}

// 图片画廊功能
function initImageGallery() {
    window.changeMainImage = function(src) {
        const mainImage = document.getElementById('mainProductImage');
        const thumbnails = document.querySelectorAll('.thumbnail-image');
        
        if (mainImage) {
            // 添加切换动画
            mainImage.classList.add('changing');
            
            setTimeout(() => {
                mainImage.src = src.replace('w=150', 'w=600'); // 使用更高分辨率
                mainImage.classList.remove('changing');
            }, 150);
            
            // 更新缩略图边框状态
            thumbnails.forEach(thumb => {
                if (thumb.src === src) {
                    thumb.classList.remove('border-gray-300');
                    thumb.classList.add('border-blue-500');
                } else {
                    thumb.classList.remove('border-blue-500');
                    thumb.classList.add('border-gray-300');
                }
            });
        }
    };
}

// 颜色选择器功能
function initColorSelector() {
    const colorOptions = document.querySelectorAll('.color-option');
    
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            // 移除所有active状态
            colorOptions.forEach(opt => opt.classList.remove('active'));
            
            // 添加当前选中状态
            this.classList.add('active');
            
            const color = this.getAttribute('data-color');
            
            // 显示选择反馈
            showNotification(`已选择${this.querySelector('span:last-child').textContent}`, 'success');
            
            // 可以在这里根据颜色切换产品图片
            updateProductImageByColor(color);
        });
    });
}

// 根据颜色更新产品图片
function updateProductImageByColor(color) {
    const mainImage = document.getElementById('mainProductImage');
    const colorImageMap = {
        'blue': 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80',
        'black': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=600&q=80',
        'white': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80'
    };
    
    if (mainImage && colorImageMap[color]) {
        mainImage.classList.add('changing');
        setTimeout(() => {
            mainImage.src = colorImageMap[color];
            mainImage.classList.remove('changing');
        }, 150);
    }
}

// 数量选择器功能
function initQuantitySelector() {
    const decreaseBtn = document.getElementById('decrease-quantity');
    const increaseBtn = document.getElementById('increase-quantity');
    const quantityInput = document.getElementById('quantity');
    
    if (decreaseBtn && increaseBtn && quantityInput) {
        decreaseBtn.addEventListener('click', function() {
            let currentValue = parseInt(quantityInput.value) || 1;
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
                updateTotalPrice();
            }
        });
        
        increaseBtn.addEventListener('click', function() {
            let currentValue = parseInt(quantityInput.value) || 1;
            if (currentValue < 999) {
                quantityInput.value = currentValue + 1;
                updateTotalPrice();
            }
        });
        
        quantityInput.addEventListener('change', function() {
            let value = parseInt(this.value) || 1;
            if (value < 1) value = 1;
            if (value > 999) value = 999;
            this.value = value;
            updateTotalPrice();
        });
    }
}

// 更新总价格
function updateTotalPrice() {
    const quantity = parseInt(document.getElementById('quantity')?.value) || 1;
    const unitPrice = 12.00; // 单价
    const totalPrice = (unitPrice * quantity).toFixed(2);
    
    // 如果有总价显示元素，更新它
    const totalPriceElement = document.querySelector('.total-price');
    if (totalPriceElement) {
        totalPriceElement.textContent = `¥ ${totalPrice}`;
    }
}

// 购买按钮功能
function initPurchaseButtons() {
    const buyNowBtn = document.getElementById('buy-now');
    const addToCartBtn = document.getElementById('add-to-cart');
    
    if (buyNowBtn) {
        buyNowBtn.addEventListener('click', function() {
            const quantity = document.getElementById('quantity')?.value || 1;
            const selectedColor = document.querySelector('.color-option.active')?.getAttribute('data-color') || 'blue';
            const productName = document.querySelector('h1')?.textContent || '本源核';
            const productPrice = 12.00; // 从页面获取价格
            const productImage = document.getElementById('mainProductImage')?.src || '';
            
            // 构建跳转URL，携带商品信息
            const checkoutParams = new URLSearchParams({
                name: productName,
                price: productPrice,
                quantity: quantity,
                color: getColorName(selectedColor),
                image: productImage
            });
            
            // 跳转到结算页面
            window.location.href = `checkout.html?${checkoutParams.toString()}`;
        });
    }
    
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            const quantity = parseInt(document.getElementById('quantity')?.value) || 1;
            const selectedColor = document.querySelector('.color-option.active')?.getAttribute('data-color') || 'blue';
            
            // 添加到购物车逻辑
            addToCart('本源核', quantity, selectedColor);
            
            // 按钮反馈动画
            this.classList.add('scale-95');
            setTimeout(() => {
                this.classList.remove('scale-95');
            }, 150);
        });
    }
}

// 添加到购物车功能
function addToCart(productName, quantity, color) {
    // 获取当前购物车
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // 创建商品项
    const item = {
        id: 'product-' + Date.now(),
        name: productName,
        color: getColorName(color),
        quantity: quantity,
        price: 12.00,
        image: document.getElementById('mainProductImage')?.src || '',
        addedAt: new Date().toISOString()
    };
    
    // 检查是否已存在相同商品
    const existingIndex = cart.findIndex(cartItem => 
        cartItem.name === item.name && cartItem.color === item.color
    );
    
    if (existingIndex > -1) {
        // 更新数量
        cart[existingIndex].quantity += quantity;
        showNotification(`已将商品数量更新为 ${cart[existingIndex].quantity}`, 'success');
    } else {
        // 添加新商品
        cart.push(item);
        showNotification(`已添加 ${quantity} 个${productName}（${item.color}）到购物车`, 'success');
    }
    
    // 保存到本地存储
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // 更新购物车图标
    updateCartIcon();
}

// 更新购物车图标
function updateCartIcon() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    // 查找购物车图标
    const cartIcons = document.querySelectorAll('.cart-icon, [data-cart-count]');
    cartIcons.forEach(icon => {
        // 添加徽章显示数量
        let badge = icon.querySelector('.cart-badge');
        if (!badge && totalItems > 0) {
            badge = document.createElement('span');
            badge.className = 'cart-badge absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center';
            icon.style.position = 'relative';
            icon.appendChild(badge);
        }
        
        if (badge) {
            if (totalItems > 0) {
                badge.textContent = totalItems > 99 ? '99+' : totalItems;
                badge.style.display = 'flex';
            } else {
                badge.style.display = 'none';
            }
        }
    });
}

// 收藏功能
function initFavorites() {
    const favBtn = document.getElementById('add-to-favorites');
    
    if (favBtn) {
        // 检查是否已收藏
        const productId = 'uton-sensor';
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const isFavorited = favorites.includes(productId);
        
        // 更新按钮状态
        updateFavoriteButton(favBtn, isFavorited);
        
        favBtn.addEventListener('click', function() {
            const currentFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
            const index = currentFavorites.indexOf(productId);
            
            if (index > -1) {
                // 取消收藏
                currentFavorites.splice(index, 1);
                updateFavoriteButton(this, false);
                showNotification('已取消收藏', 'info');
            } else {
                // 添加收藏
                currentFavorites.push(productId);
                updateFavoriteButton(this, true);
                showNotification('已添加到收藏夹', 'success');
            }
            
            localStorage.setItem('favorites', JSON.stringify(currentFavorites));
        });
    }
}

// 更新收藏按钮状态
function updateFavoriteButton(button, isFavorited) {
    const icon = button.querySelector('i');
    if (isFavorited) {
        button.classList.add('bg-red-600', 'hover:bg-red-700');
        button.classList.remove('bg-gray-700', 'hover:bg-gray-600');
        if (icon) {
            icon.classList.remove('far');
            icon.classList.add('fas');
        }
    } else {
        button.classList.remove('bg-red-600', 'hover:bg-red-700');
        button.classList.add('bg-gray-700', 'hover:bg-gray-600');
        if (icon) {
            icon.classList.remove('fas');
            icon.classList.add('far');
        }
    }
}

// 获取颜色中文名
function getColorName(color) {
    const colorNames = {
        'blue': '蓝色',
        'black': '黑色',
        'white': '白色'
    };
    return colorNames[color] || color;
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 检查是否是产品详情页
    if (window.location.pathname.includes('product-detail') || document.getElementById('mainProductImage')) {
        initProductDetailPage();
    }
});

// 产品搜索功能
function initProductSearch() {
    const searchInput = document.querySelector('#product-search');
    const productCards = document.querySelectorAll('.product-card');
    
    if (!searchInput || !productCards.length) return;
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        productCards.forEach(card => {
            const productTitle = card.querySelector('h3')?.textContent.toLowerCase() || '';
            const productDescription = card.querySelector('p')?.textContent.toLowerCase() || '';
            const productTags = Array.from(card.querySelectorAll('.product-tag')).map(tag => tag.textContent.toLowerCase()).join(' ');
            
            const isMatch = productTitle.includes(searchTerm) || 
                           productDescription.includes(searchTerm) || 
                           productTags.includes(searchTerm);
            
            if (isMatch) {
                card.style.display = 'block';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(-20px)';
                setTimeout(() => {
                    if (card.style.opacity === '0') {
                        card.style.display = 'none';
                    }
                }, 300);
            }
        });
    });
}

// 产品排序功能
function initProductSort() {
    const sortSelect = document.querySelector('#product-sort');
    const productContainer = document.querySelector('.grid');
    
    if (!sortSelect || !productContainer) return;
    
    sortSelect.addEventListener('change', function() {
        const sortBy = this.value;
        const productCards = Array.from(productContainer.querySelectorAll('.product-card'));
        
        productCards.sort((a, b) => {
            const priceA = parseInt(a.querySelector('.product-price span').textContent.replace(/[^\d]/g, ''));
            const priceB = parseInt(b.querySelector('.product-price span').textContent.replace(/[^\d]/g, ''));
            const nameA = a.querySelector('h3').textContent;
            const nameB = b.querySelector('h3').textContent;
            
            switch(sortBy) {
                case 'price-low':
                    return priceA - priceB;
                case 'price-high':
                    return priceB - priceA;
                case 'name-asc':
                    return nameA.localeCompare(nameB);
                case 'name-desc':
                    return nameB.localeCompare(nameA);
                default:
                    return 0;
            }
        });
        
        // 重新排列DOM元素
        productCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(-20px)';
        });
        
        setTimeout(() => {
            productCards.forEach((card, index) => {
                productContainer.appendChild(card);
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                    card.style.transition = 'all 0.3s ease';
                }, index * 50);
            });
        }, 300);
    });
}

// 智能硬件产品功能 - 这些功能已经在主DOMContentLoaded中初始化

// 初始化用户认证状态
function initUserAuth() {
    const userNotLoggedIn = document.getElementById('userNotLoggedIn');
    const userLoggedIn = document.getElementById('userLoggedIn');
    const userName = document.getElementById('userName');
    const logoutBtn = document.getElementById('logoutBtn');
    const mobileUserMenu = document.getElementById('mobileUserMenu');
    
    // 设置默认登录状态和账号
    const defaultAccount = '123@qq.com';
    const defaultUserName = '123';
    
    // 强制设置默认登录状态（除非用户已经手动退出）
    const hasManuallyLoggedOut = localStorage.getItem('hasManuallyLoggedOut') === 'true';
    if (!hasManuallyLoggedOut) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userName', defaultUserName);
        localStorage.setItem('userEmail', defaultAccount);
    }
    
    // 检查登录状态
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const savedUserName = localStorage.getItem('userName') || defaultUserName;
    
    console.log('用户登录状态:', isLoggedIn, '用户名:', savedUserName); // 调试日志
    
    if (isLoggedIn && userLoggedIn && userNotLoggedIn) {
        // 确保移除隐藏类并添加显示类
        userNotLoggedIn.classList.add('hidden');
        userNotLoggedIn.classList.remove('flex');
        userLoggedIn.classList.remove('hidden');
        userLoggedIn.classList.add('flex');
        
        // 设置用户名
        if (userName) userName.textContent = savedUserName;
        
        console.log('已设置登录状态显示'); // 调试日志
        
        // 更新移动端菜单
        if (mobileUserMenu) {
            mobileUserMenu.innerHTML = `
                <a href="profile.html" class="text-white hover:text-blue-400 transition-colors py-2 flex items-center">
                    <i class="fas fa-user mr-2"></i>个人中心
                </a>
                <a href="orders.html" class="text-white hover:text-blue-400 transition-colors py-2 flex items-center">
                    <i class="fas fa-shopping-cart mr-2"></i>我的订单
                </a>
                <a href="#" class="text-white hover:text-blue-400 transition-colors py-2 flex items-center">
                    <i class="fas fa-heart mr-2"></i>收藏夹
                </a>
                <a href="#" class="mobile-logout-btn text-white hover:text-blue-400 transition-colors py-2 flex items-center">
                    <i class="fas fa-sign-out-alt mr-2"></i>退出登录
                </a>
            `;
            
            // 移动端退出登录
            const mobileLogoutBtn = mobileUserMenu.querySelector('.mobile-logout-btn');
            if (mobileLogoutBtn) {
                mobileLogoutBtn.addEventListener('click', handleLogout);
            }
        }
    } else {
        if (userNotLoggedIn && userLoggedIn) {
            userNotLoggedIn.classList.remove('hidden');
            userNotLoggedIn.classList.add('flex');
            userLoggedIn.classList.add('hidden');
            userLoggedIn.classList.remove('flex');
        }
        
        console.log('已设置未登录状态显示'); // 调试日志
        
        // 更新移动端菜单
        if (mobileUserMenu) {
            mobileUserMenu.innerHTML = `
                <a href="login.html" class="text-white hover:text-blue-400 transition-colors py-2 flex items-center">
                    <i class="fas fa-sign-in-alt mr-2"></i>登录
                </a>
                <a href="register.html" class="text-white hover:text-blue-400 transition-colors py-2 flex items-center">
                    <i class="fas fa-user-plus mr-2"></i>注册
                </a>
            `;
        }
    }
    
    // 退出登录功能
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
}

// 处理退出登录
function handleLogout(e) {
    e.preventDefault();
    
    // 显示确认对话框
    if (confirm('确定要退出登录吗？')) {
        // 清除登录状态并标记为手动退出
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userName');
        localStorage.removeItem('userEmail');
        localStorage.setItem('hasManuallyLoggedOut', 'true');
        
        console.log('用户手动退出登录'); // 调试日志
        
        // 显示退出成功提示
        if (typeof showNotification === 'function') {
            showNotification('已成功退出登录', 'success');
        }
        
        // 延迟刷新页面，让用户看到提示
        setTimeout(() => {
            location.reload();
        }, 1000);
    }
}

// 登录成功处理函数（供登录页面调用）
function handleLoginSuccess(username, rememberMe = false) {
    // 保存登录状态
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userName', username.split('@')[0] || username.substring(0, 10));
    localStorage.setItem('userEmail', username);
    
    // 清除手动退出标记
    localStorage.removeItem('hasManuallyLoggedOut');
    
    // 如果选择记住我，保存用户名
    if (rememberMe) {
        localStorage.setItem('rememberMe', 'true');
        localStorage.setItem('username', username);
    } else {
        localStorage.removeItem('rememberMe');
        localStorage.removeItem('username');
    }
    
    console.log('用户登录成功:', username); // 调试日志
    
    // 显示登录成功提示
    if (typeof showNotification === 'function') {
        showNotification('登录成功！正在跳转...', 'success');
    }
    
    // 跳转到首页
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1500);
}

// 检查用户是否已登录（供其他页面使用）
function isUserLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

// 获取当前用户名（供其他页面使用）
function getCurrentUserName() {
    return localStorage.getItem('userName') || '123';
}

// 导出用户认证相关函数
if (typeof window !== 'undefined') {
    window.TaiyiAuth = {
        handleLoginSuccess,
        handleLogout,
        isUserLoggedIn,
        getCurrentUserName
    };
}

// 修复商品卡片点击跳转问题，采用事件委托
function initProductClickHandlers() {
    ['featuredProducts', 'moreProducts'].forEach(containerId => {
        const container = document.getElementById(containerId);
        if (container) {
            container.addEventListener('click', function(e) {
                const card = e.target.closest('.product-card[data-product-id]');
                if (card && container.contains(card)) {
                    const productId = card.getAttribute('data-product-id');
                    if (productId) {
                        window.location.href = `product-detail.html?id=${productId}`;
                    }
                }
            });
        }
    });
}

// 初始化查看全部商品按钮
function initViewAllProductsButton() {
    const viewAllProductsBtn = document.getElementById('viewAllProducts');
    if (viewAllProductsBtn) {
        viewAllProductsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'products.html';
        });
    }
}

// 初始化产品悬浮效果
function initProductHoverEffects() {
    const allProductCards = document.querySelectorAll('.product-card');
    allProductCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
            this.style.transition = 'all 0.3s ease';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
            this.style.transition = 'all 0.3s ease';
        });
    });
}

// 智能硬件筛选功能
function initProductCategoryFilter() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    if (!categoryBtns.length || !productCards.length) return;
    
    // 为每个产品卡片设置分类数据
    const productCategories = {
        '太一智能戒指': ['wearable', 'health'],
        '太一智能手环Pro': ['wearable', 'health'],
        '太一智能手表X1': ['wearable', 'health', 'professional'],
        '太一智能耳机S3': ['wearable', 'entertainment'],
        '太一智能项链': ['wearable', 'health'],
        '太一智能眼镜AR': ['wearable', 'entertainment', 'professional'],
        '太一智能手套VR': ['wearable', 'entertainment', 'professional']
    };
    
    categoryBtns.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.dataset.category;
            
            // 更新按钮状态
            categoryBtns.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // 筛选产品
            productCards.forEach(card => {
                const productTitle = card.querySelector('h3')?.textContent;
                const cardCategories = productCategories[productTitle] || [];
                
                if (category === 'all' || cardCategories.includes(category)) {
                    card.style.display = 'block';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    
                    // 添加淡入动画
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                        card.style.transition = 'all 0.3s ease';
                    }, 50);
                } else {
                    card.style.transition = 'all 0.3s ease';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(-20px)';
                    
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// 产品数据映射（用于详情页跳转）
const productDataMap = {
    'ring-001': {
        name: '太一智能戒指',
        price: 2999,
        originalPrice: 3499,
        category: ['wearable', 'health'],
        tags: ['情感感知', '健康监测'],
        description: '微型情感传感器，实时监测心率变异性和皮肤电导，AI分析情绪状态，提供个性化情感建议。'
    },
    'band-001': {
        name: '太一智能手环Pro',
        price: 1599,
        originalPrice: 1999,
        category: ['wearable', 'health'],
        tags: ['运动追踪', '情感陪伴'],
        description: '全天候情感状态监测，智能运动指导，压力管理提醒，让AI成为您的贴心健康管家。'
    },
    'watch-001': {
        name: '太一智能手表X1',
        price: 4999,
        originalPrice: null,
        category: ['wearable', 'professional'],
        tags: ['全功能', 'AI助手'],
        description: '旗舰级情感计算芯片，语音AI助手，全面健康监测，智能场景识别，您的专属AI伙伴。'
    },
    'earphone-001': {
        name: '太一智能耳机S3',
        price: 1299,
        originalPrice: null,
        category: ['entertainment', 'wearable'],
        tags: ['情感音乐', '降噪通话'],
        description: 'AI情感音频技术，根据心情推荐音乐，智能降噪，情感语音交互，音乐也能懂你的心。'
    },
    'necklace-001': {
        name: '太一智能项链',
        price: 3599,
        originalPrice: null,
        category: ['fashion', 'wearable'],
        tags: ['时尚科技', '情感珠宝'],
        description: '隐藏式传感器设计，时尚与科技完美融合，通过微振动传递情感信息，让爱更有温度。'
    },
    'glasses-001': {
        name: '太一智能眼镜AR',
        price: 8999,
        originalPrice: null,
        category: ['professional', 'entertainment'],
        tags: ['AR显示', '眼动追踪'],
        description: '增强现实显示，眼动追踪技术，情感状态可视化，将数字世界与情感世界无缝连接。'
    },
    'glove-001': {
        name: '太一智能手套VR',
        price: 5999,
        originalPrice: null,
        category: ['professional', 'entertainment'],
        tags: ['触觉反馈', '手势识别'],
        description: '精密手势识别，触觉反馈技术，让您在虚拟世界中也能感受真实的情感触碰体验。'
    }
};

// 导出产品数据供其他页面使用
if (typeof window !== 'undefined') {
    window.productDataMap = productDataMap;
}

// 获取URL参数
function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function isValidPhone(phone) {
    // 简单中国手机号校验
    return /^1[3-9]\d{9}$/.test(phone);
} 