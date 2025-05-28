// 智能硬件产品数据
const smartHardwareProducts = [
    {
        id: 'ring-001',
        name: '太一智能戒指',
        price: 2999,
        originalPrice: 3499,
        image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=600&q=80',
        category: ['wearable', 'health'],
        tags: ['情感感知', '健康监测'],
        badge: 'new',
        badgeText: '新品',
        description: '微型情感传感器，实时监测心率变异性和皮肤电导，AI分析情绪状态，提供个性化情感建议。',
        features: ['情感识别', '7天续航', '防水IPX7', '无线充电'],
        specs: {
            battery: '7天',
            waterproof: 'IPX7',
            connectivity: 'Bluetooth 5.2',
            sensors: '心率、皮肤电导、温度'
        },
        popular: true
    },
    {
        id: 'band-001',
        name: '太一智能手环Pro',
        price: 1599,
        originalPrice: 1999,
        image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=600&q=80',
        category: ['wearable', 'health'],
        tags: ['运动追踪', '情感陪伴'],
        badge: 'hot',
        badgeText: '热销',
        description: '全天候情感状态监测，智能运动指导，压力管理提醒，让AI成为您的贴心健康管家。',
        features: ['运动模式', '防水50米', '彩色屏幕', '智能提醒'],
        specs: {
            battery: '14天',
            waterproof: '50米',
            display: '1.47英寸AMOLED',
            sensors: '心率、血氧、GPS'
        },
        popular: true
    },
    {
        id: 'watch-001',
        name: '太一智能手表X1',
        price: 4999,
        originalPrice: null,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
        category: ['wearable', 'professional'],
        tags: ['全功能', 'AI助手'],
        badge: 'premium',
        badgeText: '旗舰版',
        description: '旗舰级情感计算芯片，语音AI助手，全面健康监测，智能场景识别，您的专属AI伙伴。',
        features: ['语音助手', '独立通话', 'eSIM支持', '无线充电'],
        specs: {
            battery: '3天',
            display: '1.9英寸视网膜屏',
            storage: '32GB',
            connectivity: 'WiFi + 蜂窝网络'
        },
        popular: true
    },
    {
        id: 'earphone-001',
        name: '太一智能耳机S3',
        price: 1299,
        originalPrice: null,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
        category: ['entertainment', 'wearable'],
        tags: ['情感音乐', '降噪通话'],
        badge: 'limited',
        badgeText: '限量版',
        description: 'AI情感音频技术，根据心情推荐音乐，智能降噪，情感语音交互，音乐也能懂你的心。',
        features: ['情感音乐', '主动降噪', '无线充电', '触控操作'],
        specs: {
            battery: '8小时+24小时充电盒',
            noise_cancellation: 'ANC主动降噪',
            driver: '10mm动圈单元',
            connectivity: 'Bluetooth 5.3'
        },
        popular: false
    },
    {
        id: 'necklace-001',
        name: '太一智能项链',
        price: 3599,
        originalPrice: null,
        image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80',
        category: ['fashion', 'wearable'],
        tags: ['时尚科技', '情感珠宝'],
        badge: 'elegant',
        badgeText: '优雅款',
        description: '隐藏式传感器设计，时尚与科技完美融合，通过微振动传递情感信息，让爱更有温度。',
        features: ['时尚设计', '情感共鸣', '无线充电', '防水设计'],
        specs: {
            material: '316L不锈钢+蓝宝石玻璃',
            battery: '30天',
            waterproof: 'IPX8',
            weight: '15g'
        },
        popular: false
    },
    {
        id: 'glasses-001',
        name: '太一智能眼镜AR',
        price: 8999,
        originalPrice: null,
        image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=600&q=80',
        category: ['professional', 'entertainment'],
        tags: ['AR显示', '眼动追踪'],
        badge: 'future',
        badgeText: '未来科技',
        description: '增强现实显示，眼动追踪技术，情感状态可视化，将数字世界与情感世界无缝连接。',
        features: ['AR显示', '智能拍摄', '眼动追踪', '语音控制'],
        specs: {
            display: 'Micro-OLED双屏',
            camera: '1200万像素',
            battery: '6小时',
            weight: '45g'
        },
        popular: false
    },
    {
        id: 'glove-001',
        name: '太一智能手套VR',
        price: 5999,
        originalPrice: null,
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80',
        category: ['professional', 'entertainment'],
        tags: ['触觉反馈', '手势识别'],
        badge: 'pro',
        badgeText: '专业版',
        description: '精密手势识别，触觉反馈技术，让您在虚拟世界中也能感受真实的情感触碰体验。',
        features: ['手势控制', 'VR交互', '触觉反馈', '无线连接'],
        specs: {
            sensors: '15个传感器',
            battery: '8小时',
            connectivity: 'WiFi + Bluetooth',
            compatibility: 'VR/AR设备'
        },
        popular: false
    },
    {
        id: 'headband-001',
        name: '太一智能头环',
        price: 2199,
        originalPrice: 2699,
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80',
        category: ['health', 'professional'],
        tags: ['脑波监测', '冥想辅助'],
        badge: 'wellness',
        badgeText: '健康款',
        description: '脑电波监测技术，实时分析大脑活动状态，提供个性化冥想和放松指导，改善睡眠质量。',
        features: ['脑波监测', '冥想指导', '睡眠分析', '压力管理'],
        specs: {
            sensors: 'EEG脑电传感器',
            battery: '12小时',
            material: '医用级硅胶',
            app: 'iOS/Android'
        },
        popular: false
    },
    {
        id: 'patch-001',
        name: '太一智能贴片',
        price: 899,
        originalPrice: 1199,
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80',
        category: ['health', 'wearable'],
        tags: ['生理监测', '健康预警'],
        badge: 'medical',
        badgeText: '医疗级',
        description: '超薄柔性传感器，24小时连续监测生理指标，AI算法分析健康趋势，提供早期预警。',
        features: ['连续监测', '健康预警', '超薄设计', '医疗级精度'],
        specs: {
            thickness: '0.5mm',
            battery: '7天',
            sensors: '体温、心率、血氧',
            certification: 'FDA认证'
        },
        popular: false
    },
    {
        id: 'shoe-001',
        name: '太一智能运动鞋',
        price: 1899,
        originalPrice: null,
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80',
        category: ['wearable', 'health'],
        tags: ['运动分析', '步态矫正'],
        badge: 'sport',
        badgeText: '运动款',
        description: '内置压力传感器和加速度计，实时分析步态和运动姿势，提供专业运动指导和伤病预防。',
        features: ['步态分析', '运动指导', '伤病预防', '智能鞋垫'],
        specs: {
            sensors: '压力传感器阵列',
            battery: '30天',
            material: '透气网面+碳纤维',
            size: '36-46码'
        },
        popular: false
    },
    {
        id: 'mirror-001',
        name: '太一智能魔镜',
        price: 12999,
        originalPrice: null,
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80',
        category: ['professional', 'health'],
        tags: ['健康检测', '美容分析'],
        badge: 'luxury',
        badgeText: '奢华版',
        description: '高清显示屏结合AI视觉分析，提供全面的健康和美容检测，个性化护理建议，智能家居控制中心。',
        features: ['健康检测', '美容分析', '智能家居', '语音助手'],
        specs: {
            display: '32英寸4K触控屏',
            camera: '4K广角摄像头',
            ai: '边缘计算芯片',
            connectivity: 'WiFi 6 + 蓝牙5.2'
        },
        popular: false
    },
    {
        id: 'pillow-001',
        name: '太一智能枕头',
        price: 1599,
        originalPrice: 1999,
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80',
        category: ['health', 'wearable'],
        tags: ['睡眠监测', '智能调节'],
        badge: 'comfort',
        badgeText: '舒适款',
        description: '内置传感器监测睡眠质量，智能调节枕头高度和硬度，播放助眠音乐，改善睡眠体验。',
        features: ['睡眠监测', '智能调节', '助眠音乐', '温度控制'],
        specs: {
            material: '记忆棉+凝胶层',
            sensors: '压力、温度、湿度',
            adjustment: '电动高度调节',
            battery: '30天'
        },
        popular: false
    }
];

// 当前显示的产品
let currentProducts = [...smartHardwareProducts];
let currentPage = 1;
const productsPerPage = 8;

// DOM元素
const productsGrid = document.getElementById('productsGrid');
const productCount = document.getElementById('productCount');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const filterBtns = document.querySelectorAll('.filter-btn');
const clearFiltersBtn = document.getElementById('clearFilters');
const loadMoreBtn = document.getElementById('loadMore');
const gridViewBtn = document.getElementById('gridView');
const listViewBtn = document.getElementById('listView');

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    setupEventListeners();
});

// 设置事件监听器
function setupEventListeners() {
    // 搜索功能
    searchInput.addEventListener('input', debounce(handleSearch, 300));
    
    // 排序功能
    sortSelect.addEventListener('change', handleSort);
    
    // 筛选功能
    filterBtns.forEach(btn => {
        btn.addEventListener('click', handleFilter);
    });
    
    // 清除筛选
    clearFiltersBtn.addEventListener('click', clearFilters);
    
    // 加载更多
    loadMoreBtn.addEventListener('click', loadMore);
    
    // 视图切换
    gridViewBtn.addEventListener('click', () => switchView('grid'));
    listViewBtn.addEventListener('click', () => switchView('list'));
}

// 渲染产品
function renderProducts() {
    const startIndex = 0;
    const endIndex = currentPage * productsPerPage;
    const productsToShow = currentProducts.slice(startIndex, endIndex);
    
    productsGrid.innerHTML = '';
    
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
    
    // 更新产品数量
    productCount.textContent = currentProducts.length;
    
    // 更新加载更多按钮
    if (endIndex >= currentProducts.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
    
    // 添加动画
    animateProducts();
}

// 创建产品卡片
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card fade-in cursor-pointer';
    card.setAttribute('data-product-id', product.id);
    
    const badgeClass = getBadgeClass(product.badge);
    const originalPriceHtml = product.originalPrice ? 
        `<span class="text-gray-500 line-through text-sm ml-2">¥${product.originalPrice.toLocaleString()}</span>` : '';
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" 
                 alt="${product.name}" 
                 class="w-full h-48 object-cover"
                 loading="lazy">
            <div class="product-overlay">
                <div class="product-badge ${badgeClass}">${product.badgeText}</div>
            </div>
        </div>
        <div class="product-content">
            <div class="product-tags">
                ${product.tags.map(tag => `<span class="product-tag">${tag}</span>`).join('')}
            </div>
            <h3 class="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">${product.name}</h3>
            <p class="text-gray-300 mb-4 text-sm leading-relaxed">${product.description}</p>
            <div class="product-features mb-4">
                ${product.features.slice(0, 2).map(feature => `
                    <div class="feature-badge text-xs">
                        <i class="fas fa-check mr-1"></i>
                        <span>${feature}</span>
                    </div>
                `).join('')}
            </div>
            <div class="flex justify-between items-center">
                <div class="product-price">
                    <span class="text-2xl font-bold text-blue-400">¥${product.price.toLocaleString()}</span>
                    ${originalPriceHtml}
                </div>
                <button class="product-btn bg-gradient-to-r from-blue-500 to-cyan-600 text-sm px-4 py-2">
                    <span>查看详情</span>
                </button>
            </div>
        </div>
    `;
    
    // 添加点击事件
    card.addEventListener('click', () => {
        window.location.href = `product-detail.html?id=${product.id}`;
    });
    
    return card;
}

// 获取徽章样式类
function getBadgeClass(badge) {
    const badgeClasses = {
        'new': 'new',
        'hot': 'hot',
        'premium': 'premium',
        'limited': 'limited',
        'elegant': 'elegant',
        'future': 'future',
        'pro': 'pro',
        'wellness': 'wellness',
        'medical': 'medical',
        'sport': 'sport',
        'luxury': 'luxury',
        'comfort': 'comfort'
    };
    return badgeClasses[badge] || 'default';
}

// 搜索功能
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        currentProducts = [...smartHardwareProducts];
    } else {
        currentProducts = smartHardwareProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
            product.features.some(feature => feature.toLowerCase().includes(searchTerm))
        );
    }
    
    currentPage = 1;
    renderProducts();
}

// 排序功能
function handleSort(e) {
    const sortType = e.target.value;
    
    switch (sortType) {
        case 'price-low':
            currentProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            currentProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            currentProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'popular':
            currentProducts.sort((a, b) => b.popular - a.popular);
            break;
        default:
            currentProducts = [...smartHardwareProducts];
            break;
    }
    
    currentPage = 1;
    renderProducts();
}

// 筛选功能
function handleFilter(e) {
    const category = e.target.getAttribute('data-category');
    
    // 更新按钮状态
    filterBtns.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    if (category === 'all') {
        currentProducts = [...smartHardwareProducts];
    } else {
        currentProducts = smartHardwareProducts.filter(product => 
            product.category.includes(category)
        );
    }
    
    currentPage = 1;
    renderProducts();
}

// 清除筛选
function clearFilters() {
    // 重置搜索框
    searchInput.value = '';
    
    // 重置排序
    sortSelect.value = 'default';
    
    // 重置筛选按钮
    filterBtns.forEach(btn => btn.classList.remove('active'));
    document.querySelector('[data-category="all"]').classList.add('active');
    
    // 重置产品列表
    currentProducts = [...smartHardwareProducts];
    currentPage = 1;
    renderProducts();
}

// 加载更多
function loadMore() {
    currentPage++;
    renderProducts();
}

// 视图切换
function switchView(viewType) {
    if (viewType === 'grid') {
        gridViewBtn.classList.add('active');
        listViewBtn.classList.remove('active');
        productsGrid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8';
    } else {
        listViewBtn.classList.add('active');
        gridViewBtn.classList.remove('active');
        productsGrid.className = 'grid grid-cols-1 gap-6';
    }
}

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 产品动画
function animateProducts() {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// 导出产品数据供其他页面使用
window.smartHardwareProducts = smartHardwareProducts; 