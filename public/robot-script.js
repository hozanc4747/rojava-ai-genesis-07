
// 🔹 بيانات الأقسام والصفحات
const sectionsData = {
    'head': {
        title: 'القائمة الرئيسية والفهرس',
        pages: [
            { title: 'الصفحة الرئيسية', desc: 'العودة إلى الصفحة الرئيسية للمدونة', url: '/' },
            { title: 'حول الموقع', desc: 'معلومات عن المدونة ومؤسسها', url: '/about' },
            { title: 'خريطة الموقع', desc: 'دليل شامل لجميع صفحات الموقع', url: '/sitemap' },
            { title: 'سياسة الخصوصية', desc: 'شروط الاستخدام وحماية البيانات', url: '/privacy' },
            { title: 'تواصل معنا', desc: 'طرق التواصل والدعم الفني', url: '/contact' }
        ]
    },
    'body': {
        title: 'المقالات الرئيسية',
        pages: [
            { title: 'أحدث المقالات', desc: 'آخر المنشورات والمحتوى الجديد', url: '/latest' },
            { title: 'الأكثر قراءة', desc: 'المقالات الأكثر شعبية ومشاهدة', url: '/popular' },
            { title: 'مقالات مميزة', desc: 'مجموعة مختارة من أفضل المحتوى', url: '/featured' },
            { title: 'أرشيف المقالات', desc: 'جميع المقالات مرتبة حسب التاريخ', url: '/archive' }
        ]
    },
    'leftArm': {
        title: 'التقنية والبرمجة',
        pages: [
            { title: 'تطوير الويب', desc: 'HTML, CSS, JavaScript وأحدث التقنيات', url: '/web-dev' },
            { title: 'البرمجة بـ Python', desc: 'دروس ومشاريع بلغة البايثون', url: '/python' },
            { title: 'الذكاء الاصطناعي', desc: 'مقدمة في الذكاء الاصطناعي والتعلم الآلي', url: '/ai' },
            { title: 'أمن المعلومات', desc: 'حماية البيانات والأمان السيبراني', url: '/security' },
            { title: 'قواعد البيانات', desc: 'SQL, NoSQL وإدارة البيانات', url: '/database' }
        ]
    },
    'rightArm': {
        title: 'التصميم والإبداع',
        pages: [
            { title: 'تصميم الجرافيك', desc: 'أساسيات التصميم والألوان والتكوين', url: '/graphic-design' },
            { title: 'تصميم المواقع', desc: 'UI/UX وتجربة المستخدم', url: '/web-design' },
            { title: 'التصوير الفوتوغرافي', desc: 'تقنيات التصوير والإضاءة', url: '/photography' },
            { title: 'الفيديو والمونتاج', desc: 'إنتاج وتحرير الفيديوهات', url: '/video-editing' },
            { title: 'الرسم الرقمي', desc: 'أدوات الرسم الرقمي والإبداع', url: '/digital-art' }
        ]
    },
    'leftForearm': {
        title: 'دروس تعليمية',
        pages: [
            { title: 'دروس للمبتدئين', desc: 'أساسيات البرمجة والتقنية', url: '/beginner-tutorials' },
            { title: 'دروس متقدمة', desc: 'مواضيع متقدمة للمحترفين', url: '/advanced-tutorials' },
            { title: 'ورش العمل', desc: 'جلسات تدريبية تفاعلية', url: '/workshops' },
            { title: 'شهادات ودورات', desc: 'برامج تعليمية معتمدة', url: '/courses' }
        ]
    },
    'rightForearm': {
        title: 'مشاريع ونماذج',
        pages: [
            { title: 'مشاريع مفتوحة المصدر', desc: 'مشاريع يمكن المساهمة فيها', url: '/open-source' },
            { title: 'نماذج تطبيقات', desc: 'أمثلة عملية وقوالب جاهزة', url: '/app-templates' },
            { title: 'حلول برمجية', desc: 'حلول لمشاكل برمجية شائعة', url: '/solutions' },
            { title: 'مكتبة الأكواد', desc: 'مقاطع كود مفيدة وقابلة للإعادة استخدام', url: '/code-library' }
        ]
    },
    'leftLeg': {
        title: 'أخبار التقنية',
        pages: [
            { title: 'آخر الأخبار', desc: 'أحدث التطورات في عالم التقنية', url: '/tech-news' },
            { title: 'إطلاقات جديدة', desc: 'منتجات وخدمات تقنية جديدة', url: '/releases' },
            { title: 'تحديثات البرامج', desc: 'آخر تحديثات التطبيقات والأنظمة', url: '/updates' },
            { title: 'مؤتمرات وفعاليات', desc: 'أهم المؤتمرات التقنية العالمية', url: '/events' }
        ]
    },
    'rightLeg': {
        title: 'مراجعات وتقييمات',
        pages: [
            { title: 'مراجعة الأجهزة', desc: 'تقييم أحدث الأجهزة التقنية', url: '/hardware-reviews' },
            { title: 'مراجعة البرامج', desc: 'تقييم التطبيقات والبرامج', url: '/software-reviews' },
            { title: 'مقارنات', desc: 'مقارنات شاملة بين المنتجات', url: '/comparisons' },
            { title: 'توصيات', desc: 'ترشيحات لأفضل المنتجات', url: '/recommendations' }
        ]
    },
    'leftFoot': {
        title: 'موارد مفيدة',
        pages: [
            { title: 'أدوات المطورين', desc: 'أدوات مفيدة للمبرمجين والمطورين', url: '/dev-tools' },
            { title: 'مواقع مفيدة', desc: 'مجموعة من المواقع التعليمية والمفيدة', url: '/useful-sites' },
            { title: 'كتب ومراجع', desc: 'كتب تقنية وموارد تعليمية', url: '/books' },
            { title: 'قنوات يوتيوب', desc: 'قنوات تعليمية مفيدة', url: '/youtube-channels' }
        ]
    },
    'rightFoot': {
        title: 'اتصل بنا',
        pages: [
            { title: 'نموذج الاتصال', desc: 'راسلنا مباشرة من خلال النموذج', url: '/contact-form' },
            { title: 'البريد الإلكتروني', desc: 'تواصل معنا عبر البريد الإلكتروني', url: 'mailto:info@example.com' },
            { title: 'وسائل التواصل', desc: 'تابعنا على منصات التواصل الاجتماعي', url: '/social-media' },
            { title: 'الدعم الفني', desc: 'احصل على مساعدة فنية', url: '/support' }
        ]
    }
};

// 🔹 متغيرات التحكم في الحركة
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };
let rotationX = 0;
let rotationY = 0;
let currentSection = null;

// 🔹 إعداد النجوم المتحركة
function createStars() {
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// 🔹 إعداد الجسيمات المتحركة
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particlesContainer.appendChild(particle);
    }
}

// 🔹 التحكم في حركة الروبوت
function setupRobotControls() {
    const robot = document.getElementById('robot');

    // أحداث الماوس
    robot.addEventListener('mousedown', (e) => {
        isDragging = true;
        previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        rotationY += deltaX * 0.5;
        rotationX -= deltaY * 0.5;

        // تحديد زوايا الدوران
        rotationX = Math.max(-30, Math.min(30, rotationX));

        robot.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

        previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });

    // أحداث اللمس للأجهزة المحمولة
    robot.addEventListener('touchstart', (e) => {
        isDragging = true;
        const touch = e.touches[0];
        previousMousePosition = { x: touch.clientX, y: touch.clientY };
    });

    document.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        e.preventDefault();

        const touch = e.touches[0];
        const deltaX = touch.clientX - previousMousePosition.x;
        const deltaY = touch.clientY - previousMousePosition.y;

        rotationY += deltaX * 0.5;
        rotationX -= deltaY * 0.5;

        rotationX = Math.max(-30, Math.min(30, rotationX));

        robot.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

        previousMousePosition = { x: touch.clientX, y: touch.clientY };
    });

    document.addEventListener('touchend', () => {
        isDragging = false;
    });
}

// 🔹 عرض قسم معين
function showSection(title, sectionKey) {
    if (isDragging) return; // تجنب فتح القسم أثناء السحب

    currentSection = sectionKey;
    const popup = document.getElementById('sectionPopup');
    const popupTitle = document.getElementById('popupTitle');
    const pagesList = document.getElementById('pagesList');

    popupTitle.textContent = sectionsData[sectionKey].title;
    
    // ملء قائمة الصفحات
    pagesList.innerHTML = '';
    sectionsData[sectionKey].pages.forEach(page => {
        const pageItem = document.createElement('div');
        pageItem.className = 'page-item';
        pageItem.innerHTML = `
            <div class="page-title">${page.title}</div>
            <div class="page-desc">${page.desc}</div>
        `;
        pageItem.onclick = () => {
            // هنا يمكن إضافة كود للانتقال إلى الصفحة
            window.open(page.url, '_blank');
        };
        pagesList.appendChild(pageItem);
    });

    // إظهار النافذة مع تأثير التكبير
    popup.classList.add('show');

    // تأثير التقريب على الروبوت
    const robot = document.getElementById('robot');
    robot.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg) scale(1.2)`;
}

// 🔹 إغلاق نافذة القسم
function closeSection() {
    const popup = document.getElementById('sectionPopup');
    popup.classList.remove('show');
    
    // إعادة الروبوت لحالته الطبيعية
    const robot = document.getElementById('robot');
    robot.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg) scale(1)`;
    
    currentSection = null;
}

// 🔹 عرض حالة الاتصال
function showStatus(status) {
    alert(status === 'online' ? 'الموقع متصل بالإنترنت!' : 'الموقع غير متصل حالياً');
}

// 🔹 تغيير النمط (يمكن تطويره لاحقاً)
function toggleTheme() {
    // إضافة تأثير دوران إضافي للشمس
    const sun = document.querySelector('.sun-icon');
    sun.style.animationDuration = '2s';
    setTimeout(() => {
        sun.style.animationDuration = '10s';
    }, 2000);
    
    alert('سيتم إضافة ميزة تغيير النمط قريباً!');
}

// 🔹 إغلاق النافذة عند الضغط خارجها
document.addEventListener('click', (e) => {
    const popup = document.getElementById('sectionPopup');
    if (e.target === popup) {
        closeSection();
    }
});

// 🔹 التحكم بلوحة المفاتيح
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && currentSection) {
        closeSection();
    }
});

// 🔹 تهيئة الصفحة
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    createParticles();
    setupRobotControls();
    
    // إضافة ترحيب تفاعلي
    setTimeout(() => {
        const robot = document.getElementById('robot');
        robot.style.animation = 'bounce 2s ease-in-out';
    }, 1000);
});

// 🔹 تأثير الارتداد
const style = document.createElement('style');
style.textContent = `
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0) rotateX(${rotationX}deg) rotateY(${rotationY}deg);
        }
        40% {
            transform: translateY(-30px) rotateX(${rotationX}deg) rotateY(${rotationY}deg);
        }
        60% {
            transform: translateY(-15px) rotateX(${rotationX}deg) rotateY(${rotationY}deg);
        }
    }
`;
document.head.appendChild(style);

// 🔹 تحسين الأداء - إيقاف الرسوم المتحركة عند عدم النشاط
let inactivityTimer;
function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
        document.querySelectorAll('.particle, .star').forEach(el => {
            el.style.animationPlayState = 'paused';
        });
    }, 30000); // إيقاف بعد 30 ثانية من عدم النشاط
}

document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('touchstart', resetInactivityTimer);
resetInactivityTimer();
