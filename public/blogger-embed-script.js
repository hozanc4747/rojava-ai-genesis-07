
// 🔹 سكريبت تضمين مدونة الروبوت في بلوجر
// 🔹 نسخ هذا الكود وإدراجه في قالب بلوجر أو كأداة HTML/JavaScript

(function() {
    'use strict';
    
    // 🔹 إعدادات المدونة
    const BLOG_CONFIG = {
        robotColor: '#00bfff', // لون الروبوت الأساسي
        backgroundColor: '#000000', // لون الخلفية
        logoText: 'BLOG', // نص الشعار على الجبين
        messengerLink: 'https://www.messenger.com/t/hoz37', // رابط الماسنجر
        blogTitle: 'مدونة الروبوت التفاعلي',
        showParticles: true, // إظهار الجسيمات المتحركة
        enableRotation: true // تفعيل دوران الروبوت
    };

    // 🔹 إنشاء عنصر الروبوت
    function createRobotBlog() {
        // إنشاء حاوي رئيسي
        const container = document.createElement('div');
        container.id = 'blogger-robot-container';
        container.innerHTML = `
            <div id="blogger-robot-overlay">
                <div id="blogger-robot-widget">
                    <div class="robot-3d">
                        <!-- رأس الروبوت -->
                        <div class="robot-head" data-section="main-menu">
                            <div class="logo-badge">${BLOG_CONFIG.logoText}</div>
                            <div class="robot-eyes">
                                <div class="eye"></div>
                                <div class="eye"></div>
                            </div>
                            <div class="part-label">القائمة الرئيسية</div>
                        </div>

                        <!-- جسم الروبوت -->
                        <div class="robot-torso" data-section="latest-posts">
                            <div class="part-label">أحدث المقالات</div>
                        </div>

                        <!-- الذراعين -->
                        <div class="robot-arm left" data-section="categories">
                            <div class="part-label">الأقسام</div>
                        </div>
                        <div class="robot-arm right" data-section="archives">
                            <div class="part-label">الأرشيف</div>
                        </div>

                        <!-- الساعدين -->
                        <div class="robot-forearm left" data-section="tutorials">
                            <div class="part-label">الدروس</div>
                        </div>
                        <div class="robot-forearm right" data-section="projects">
                            <div class="part-label">المشاريع</div>
                        </div>

                        <!-- الساقين -->
                        <div class="robot-leg left" data-section="tech-news">
                            <div class="part-label">أخبار التقنية</div>
                        </div>
                        <div class="robot-leg right" data-section="reviews">
                            <div class="part-label">المراجعات</div>
                        </div>

                        <!-- القدمين -->
                        <div class="robot-foot left" data-section="resources">
                            <div class="part-label">الموارد</div>
                        </div>
                        <div class="robot-foot right" data-section="contact">
                            <div class="part-label">اتصل بنا</div>
                        </div>
                    </div>

                    <!-- العناصر السفلية -->
                    <div class="bottom-controls">
                        <div class="status-indicator offline">غير متصل</div>
                        <div class="sun-wheel"></div>
                        <div class="status-indicator online">متصل</div>
                    </div>

                    <!-- زر إغلاق -->
                    <button class="close-robot" onclick="closeBloggerRobot()">×</button>
                </div>

                <!-- نافذة المحتوى -->
                <div id="robot-content-popup">
                    <div class="popup-header">
                        <h3 id="content-title">عنوان القسم</h3>
                        <button onclick="closeContentPopup()">×</button>
                    </div>
                    <div class="popup-body" id="content-body">
                        <!-- سيتم ملؤها ديناميكياً -->
                    </div>
                </div>
            </div>
        `;

        // إضافة الأنماط
        const styles = `
            <style>
                #blogger-robot-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    z-index: 999999;
                    pointer-events: none;
                }

                #blogger-robot-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(135deg, rgba(0,0,0,0.9), rgba(26,26,46,0.9));
                    backdrop-filter: blur(10px);
                    display: none;
                    align-items: center;
                    justify-content: center;
                    pointer-events: all;
                }

                #blogger-robot-overlay.show {
                    display: flex;
                }

                #blogger-robot-widget {
                    position: relative;
                    width: 350px;
                    height: 550px;
                    transform-style: preserve-3d;
                    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
                }

                .robot-3d {
                    position: relative;
                    width: 100%;
                    height: 100%;
                }

                /* أجزاء الروبوت */
                .robot-head {
                    position: absolute;
                    top: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 100px;
                    height: 80px;
                    background: linear-gradient(135deg, ${BLOG_CONFIG.robotColor}, #0080ff);
                    border-radius: 15px;
                    box-shadow: 0 0 20px rgba(0,191,255,0.6);
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .robot-torso {
                    position: absolute;
                    top: 110px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 120px;
                    height: 160px;
                    background: linear-gradient(135deg, ${BLOG_CONFIG.robotColor}, #0066cc);
                    border-radius: 10px;
                    box-shadow: 0 0 20px rgba(0,191,255,0.5);
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .robot-arm {
                    position: absolute;
                    top: 130px;
                    width: 70px;
                    height: 35px;
                    background: linear-gradient(135deg, ${BLOG_CONFIG.robotColor}, #0066cc);
                    border-radius: 17px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 0 15px rgba(0,191,255,0.4);
                }

                .robot-arm.left { left: -80px; }
                .robot-arm.right { right: -80px; }

                .robot-forearm {
                    position: absolute;
                    top: 175px;
                    width: 60px;
                    height: 30px;
                    background: linear-gradient(135deg, #0080ff, #004d99);
                    border-radius: 15px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 0 15px rgba(0,128,255,0.4);
                }

                .robot-forearm.left { left: -70px; }
                .robot-forearm.right { right: -70px; }

                .robot-leg {
                    position: absolute;
                    top: 280px;
                    width: 50px;
                    height: 100px;
                    background: linear-gradient(135deg, ${BLOG_CONFIG.robotColor}, #0066cc);
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 0 15px rgba(0,191,255,0.4);
                }

                .robot-leg.left { left: 70px; }
                .robot-leg.right { right: 70px; }

                .robot-foot {
                    position: absolute;
                    top: 390px;
                    width: 60px;
                    height: 25px;
                    background: linear-gradient(135deg, #0080ff, #004d99);
                    border-radius: 12px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 0 15px rgba(0,128,255,0.4);
                }

                .robot-foot.left { left: 65px; }
                .robot-foot.right { right: 65px; }

                /* تأثيرات التفاعل */
                .robot-head:hover,
                .robot-torso:hover,
                .robot-arm:hover,
                .robot-forearm:hover,
                .robot-leg:hover,
                .robot-foot:hover {
                    transform: scale(1.1);
                    box-shadow: 0 0 30px rgba(0,191,255,0.8);
                }

                /* العيون */
                .robot-eyes {
                    position: absolute;
                    top: 30px;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    gap: 15px;
                }

                .eye {
                    width: 15px;
                    height: 15px;
                    background: radial-gradient(circle, #00ffff, #0080ff);
                    border-radius: 50%;
                    animation: blink 4s infinite;
                }

                @keyframes blink {
                    0%, 90%, 100% { height: 15px; }
                    95% { height: 2px; }
                }

                /* الشعار */
                .logo-badge {
                    position: absolute;
                    top: 8px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: rgba(255,255,255,0.9);
                    color: #0080ff;
                    padding: 2px 8px;
                    border-radius: 8px;
                    font-size: 10px;
                    font-weight: bold;
                }

                /* تسميات الأجزاء */
                .part-label {
                    position: absolute;
                    bottom: -25px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: rgba(0,191,255,0.9);
                    color: white;
                    padding: 2px 6px;
                    border-radius: 10px;
                    font-size: 8px;
                    opacity: 0;
                    transition: all 0.3s ease;
                    white-space: nowrap;
                }

                .robot-head:hover .part-label,
                .robot-torso:hover .part-label,
                .robot-arm:hover .part-label,
                .robot-forearm:hover .part-label,
                .robot-leg:hover .part-label,
                .robot-foot:hover .part-label {
                    opacity: 1;
                    bottom: -30px;
                }

                /* العناصر السفلية */
                .bottom-controls {
                    position: absolute;
                    bottom: 30px;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    align-items: center;
                    gap: 20px;
                }

                .status-indicator {
                    padding: 5px 10px;
                    border-radius: 15px;
                    font-size: 10px;
                    font-weight: bold;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .status-indicator.online {
                    background: linear-gradient(135deg, #44ff44, #00cc00);
                    color: white;
                    box-shadow: 0 0 10px rgba(68,255,68,0.5);
                }

                .status-indicator.offline {
                    background: linear-gradient(135deg, #ff4444, #cc0000);
                    color: white;
                    box-shadow: 0 0 10px rgba(255,68,68,0.5);
                }

                .sun-wheel {
                    width: 50px;
                    height: 50px;
                    background: radial-gradient(circle, #ffff00, #ffaa00);
                    border-radius: 50%;
                    cursor: pointer;
                    animation: rotate 8s linear infinite;
                    box-shadow: 0 0 20px rgba(255,255,0,0.5);
                }

                @keyframes rotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                /* زر الإغلاق */
                .close-robot {
                    position: absolute;
                    top: -15px;
                    right: -15px;
                    width: 30px;
                    height: 30px;
                    background: linear-gradient(135deg, #ff4444, #cc0000);
                    color: white;
                    border: none;
                    border-radius: 50%;
                    cursor: pointer;
                    font-size: 16px;
                    transition: all 0.3s ease;
                }

                .close-robot:hover {
                    transform: scale(1.1);
                    box-shadow: 0 0 15px rgba(255,68,68,0.8);
                }

                /* نافذة المحتوى */
                #robot-content-popup {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%) scale(0);
                    width: 400px;
                    max-height: 500px;
                    background: linear-gradient(135deg, rgba(0,50,100,0.95), rgba(0,30,60,0.95));
                    border-radius: 15px;
                    box-shadow: 0 0 30px rgba(0,191,255,0.8);
                    transition: all 0.4s ease;
                    backdrop-filter: blur(15px);
                }

                #robot-content-popup.show {
                    transform: translate(-50%, -50%) scale(1);
                }

                .popup-header {
                    padding: 15px;
                    border-bottom: 1px solid rgba(0,191,255,0.3);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .popup-header h3 {
                    color: ${BLOG_CONFIG.robotColor};
                    margin: 0;
                    font-size: 16px;
                }

                .popup-header button {
                    background: #ff4444;
                    color: white;
                    border: none;
                    width: 25px;
                    height: 25px;
                    border-radius: 50%;
                    cursor: pointer;
                }

                .popup-body {
                    padding: 15px;
                    max-height: 400px;
                    overflow-y: auto;
                    color: white;
                }

                /* استجابة للأجهزة المحمولة */
                @media (max-width: 768px) {
                    #blogger-robot-widget {
                        width: 280px;
                        height: 450px;
                        transform: scale(0.9);
                    }
                    
                    #robot-content-popup {
                        width: 90%;
                        max-width: 350px;
                    }
                }
            </style>
        `;

        // إضافة الأنماط إلى الرأس
        document.head.insertAdjacentHTML('beforeend', styles);
        
        return container;
    }

    // 🔹 إظهار روبوت المدونة
    function showBloggerRobot() {
        const existingRobot = document.getElementById('blogger-robot-container');
        if (existingRobot) {
            document.getElementById('blogger-robot-overlay').classList.add('show');
            return;
        }

        const robotContainer = createRobotBlog();
        document.body.appendChild(robotContainer);
        
        setTimeout(() => {
            document.getElementById('blogger-robot-overlay').classList.add('show');
        }, 100);

        // إضافة مستمعي الأحداث
        setupRobotEvents();
    }

    // 🔹 إخفاء روبوت المدونة
    window.closeBloggerRobot = function() {
        const overlay = document.getElementById('blogger-robot-overlay');
        if (overlay) {
            overlay.classList.remove('show');
        }
    };

    // 🔹 إغلاق نافذة المحتوى
    window.closeContentPopup = function() {
        const popup = document.getElementById('robot-content-popup');
        if (popup) {
            popup.classList.remove('show');
        }
    };

    // 🔹 إعداد أحداث الروبوت
    function setupRobotEvents() {
        // أحداث النقر على أجزاء الروبوت
        document.querySelectorAll('[data-section]').forEach(part => {
            part.addEventListener('click', function() {
                const section = this.dataset.section;
                showSectionContent(section);
            });
        });

        // دوران الروبوت إذا كان مفعلاً
        if (BLOG_CONFIG.enableRotation) {
            setupRobotRotation();
        }
    }

    // 🔹 إعداد دوران الروبوت
    function setupRobotRotation() {
        const robot = document.getElementById('blogger-robot-widget');
        let isRotating = false;
        let startX, startY, currentX = 0, currentY = 0;

        robot.addEventListener('mousedown', (e) => {
            isRotating = true;
            startX = e.clientX;
            startY = e.clientY;
        });

        document.addEventListener('mousemove', (e) => {
            if (!isRotating) return;
            
            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;
            
            currentX = deltaY * 0.5;
            currentY = deltaX * 0.5;
            
            robot.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;
        });

        document.addEventListener('mouseup', () => {
            isRotating = false;
        });
    }

    // 🔹 عرض محتوى القسم
    function showSectionContent(section) {
        const popup = document.getElementById('robot-content-popup');
        const title = document.getElementById('content-title');
        const body = document.getElementById('content-body');

        // محتوى الأقسام (يمكن تخصيصه حسب المدونة)
        const sectionContent = {
            'main-menu': {
                title: 'القائمة الرئيسية',
                content: generateMenuContent()
            },
            'latest-posts': {
                title: 'أحدث المقالات',
                content: generateLatestPosts()
            },
            'categories': {
                title: 'الأقسام',
                content: generateCategories()
            },
            'archives': {
                title: 'الأرشيف',
                content: generateArchives()
            },
            'tutorials': {
                title: 'الدروس التعليمية',
                content: generateTutorials()
            },
            'projects': {
                title: 'المشاريع',
                content: generateProjects()
            },
            'tech-news': {
                title: 'أخبار التقنية',
                content: generateTechNews()
            },
            'reviews': {
                title: 'المراجعات',
                content: generateReviews()
            },
            'resources': {
                title: 'الموارد المفيدة',
                content: generateResources()
            },
            'contact': {
                title: 'اتصل بنا',
                content: generateContactInfo()
            }
        };

        const sectionData = sectionContent[section] || {
            title: 'قسم غير متوفر',
            content: '<p>عذراً، هذا القسم غير متوفر حالياً.</p>'
        };

        title.textContent = sectionData.title;
        body.innerHTML = sectionData.content;
        popup.classList.add('show');
    }

    // 🔹 توليد محتوى القائمة الرئيسية
    function generateMenuContent() {
        return `
            <div style="text-align: center;">
                <h4>مرحباً بك في ${BLOG_CONFIG.blogTitle}</h4>
                <p>مدونة تقنية تفاعلية بتصميم روبوت ثلاثي الأبعاد</p>
                <div style="margin: 20px 0;">
                    <a href="/" style="color: #00bfff; text-decoration: none;">🏠 الصفحة الرئيسية</a><br><br>
                    <a href="/about" style="color: #00bfff; text-decoration: none;">ℹ️ حول الموقع</a><br><br>
                    <a href="${BLOG_CONFIG.messengerLink}" target="_blank" style="color: #00bfff; text-decoration: none;">💬 تواصل معنا</a>
                </div>
            </div>
        `;
    }

    // 🔹 توليد أحدث المقالات
    function generateLatestPosts() {
        return `
            <div>
                <div style="border-bottom: 1px solid rgba(0,191,255,0.3); padding: 10px 0; margin-bottom: 10px;">
                    <h5 style="color: #00bfff; margin: 0;">مقدمة في الذكاء الاصطناعي</h5>
                    <p style="font-size: 12px; margin: 5px 0 0 0;">تعرف على أساسيات الذكاء الاصطناعي...</p>
                </div>
                <div style="border-bottom: 1px solid rgba(0,191,255,0.3); padding: 10px 0; margin-bottom: 10px;">
                    <h5 style="color: #00bfff; margin: 0;">تطوير المواقع الحديثة</h5>
                    <p style="font-size: 12px; margin: 5px 0 0 0;">أحدث تقنيات تطوير الويب...</p>
                </div>
                <div style="border-bottom: 1px solid rgba(0,191,255,0.3); padding: 10px 0; margin-bottom: 10px;">
                    <h5 style="color: #00bfff; margin: 0;">أمن المعلومات للمبتدئين</h5>
                    <p style="font-size: 12px; margin: 5px 0 0 0;">كيفية حماية بياناتك الشخصية...</p>
                </div>
            </div>
        `;
    }

    // 🔹 توليد الأقسام
    function generateCategories() {
        return `
            <div>
                <a href="/search/label/البرمجة" style="display: block; color: #00bfff; text-decoration: none; padding: 8px 0; border-bottom: 1px solid rgba(0,191,255,0.2);">💻 البرمجة</a>
                <a href="/search/label/التصميم" style="display: block; color: #00bfff; text-decoration: none; padding: 8px 0; border-bottom: 1px solid rgba(0,191,255,0.2);">🎨 التصميم</a>
                <a href="/search/label/التقنية" style="display: block; color: #00bfff; text-decoration: none; padding: 8px 0; border-bottom: 1px solid rgba(0,191,255,0.2);">⚙️ التقنية</a>
                <a href="/search/label/الأمان" style="display: block; color: #00bfff; text-decoration: none; padding: 8px 0; border-bottom: 1px solid rgba(0,191,255,0.2);">🔒 الأمان</a>
                <a href="/search/label/الدروس" style="display: block; color: #00bfff; text-decoration: none; padding: 8px 0; border-bottom: 1px solid rgba(0,191,255,0.2);">📚 الدروس</a>
            </div>
        `;
    }

    // 🔹 توليد الأرشيف
    function generateArchives() {
        const currentYear = new Date().getFullYear();
        return `
            <div>
                <a href="/${currentYear}" style="display: block; color: #00bfff; text-decoration: none; padding: 8px 0; border-bottom: 1px solid rgba(0,191,255,0.2);">📅 ${currentYear}</a>
                <a href="/${currentYear-1}" style="display: block; color: #00bfff; text-decoration: none; padding: 8px 0; border-bottom: 1px solid rgba(0,191,255,0.2);">📅 ${currentYear-1}</a>
                <a href="/${currentYear-2}" style="display: block; color: #00bfff; text-decoration: none; padding: 8px 0; border-bottom: 1px solid rgba(0,191,255,0.2);">📅 ${currentYear-2}</a>
            </div>
        `;
    }

    // 🔹 توليد الدروس
    function generateTutorials() {
        return `
            <div>
                <div style="margin-bottom: 15px; padding: 10px; background: rgba(0,191,255,0.1); border-radius: 8px;">
                    <h5 style="color: #00bfff; margin: 0 0 5px 0;">HTML للمبتدئين</h5>
                    <p style="font-size: 12px; margin: 0;">تعلم أساسيات HTML خطوة بخطوة</p>
                </div>
                <div style="margin-bottom: 15px; padding: 10px; background: rgba(0,191,255,0.1); border-radius: 8px;">
                    <h5 style="color: #00bfff; margin: 0 0 5px 0;">CSS المتقدم</h5>
                    <p style="font-size: 12px; margin: 0;">تقنيات متقدمة في التصميم</p>
                </div>
            </div>
        `;
    }

    // 🔹 توليد المشاريع
    function generateProjects() {
        return `
            <div>
                <div style="margin-bottom: 15px; padding: 10px; background: rgba(0,191,255,0.1); border-radius: 8px;">
                    <h5 style="color: #00bfff; margin: 0 0 5px 0;">🚀 مشروع الروبوت التفاعلي</h5>
                    <p style="font-size: 12px; margin: 0;">مدونة بتصميم روبوت ثلاثي الأبعاد</p>
                </div>
                <div style="margin-bottom: 15px; padding: 10px; background: rgba(0,191,255,0.1); border-radius: 8px;">
                    <h5 style="color: #00bfff; margin: 0 0 5px 0;">💬 نظام الدردشة الذكي</h5>
                    <p style="font-size: 12px; margin: 0;">تطبيق دردشة بالذكاء الاصطناعي</p>
                </div>
            </div>
        `;
    }

    // 🔹 توليد أخبار التقنية
    function generateTechNews() {
        return `
            <div>
                <div style="margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px solid rgba(0,191,255,0.2);">
                    <h5 style="color: #00bfff; margin: 0 0 5px 0;">📱 أحدث تطورات الهواتف الذكية</h5>
                    <p style="font-size: 11px; margin: 0;">تقنيات جديدة في عالم الهواتف المحمولة</p>
                </div>
                <div style="margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px solid rgba(0,191,255,0.2);">
                    <h5 style="color: #00bfff; margin: 0 0 5px 0;">🤖 تطورات الذكاء الاصطناعي</h5>
                    <p style="font-size: 11px; margin: 0;">آخر الإنجازات في مجال الذكاء الاصطناعي</p>
                </div>
            </div>
        `;
    }

    // 🔹 توليد المراجعات
    function generateReviews() {
        return `
            <div>
                <div style="margin-bottom: 15px; padding: 10px; background: rgba(0,191,255,0.1); border-radius: 8px;">
                    <h5 style="color: #00bfff; margin: 0 0 5px 0;">⭐ مراجعة أفضل محررات الأكواد</h5>
                    <p style="font-size: 12px; margin: 0;">مقارنة شاملة بین أشھر محررات البرمجة</p>
                </div>
                <div style="margin-bottom: 15px; padding: 10px; background: rgba(0,191,255,0.1); border-radius: 8px;">
                    <h5 style="color: #00bfff; margin: 0 0 5px 0;">💻 أفضل أجهزة الكمبيوتر للبرمجة</h5>
                    <p style="font-size: 12px; margin: 0;">دليل شراء أجهزة البرمجة والتطوير</p>
                </div>
            </div>
        `;
    }

    // 🔹 توليد الموارد
    function generateResources() {
        return `
            <div>
                <a href="https://github.com" target="_blank" style="display: block; color: #00bfff; text-decoration: none; padding: 8px 0; border-bottom: 1px solid rgba(0,191,255,0.2);">🔗 GitHub - مستودع الأكواد</a>
                <a href="https://stackoverflow.com" target="_blank" style="display: block; color: #00bfff; text-decoration: none; padding: 8px 0; border-bottom: 1px solid rgba(0,191,255,0.2);">❓ Stack Overflow - حلول البرمجة</a>
                <a href="https://developer.mozilla.org" target="_blank" style="display: block; color: #00bfff; text-decoration: none; padding: 8px 0; border-bottom: 1px solid rgba(0,191,255,0.2);">📖 MDN - مرجع الويب</a>
                <a href="https://www.w3schools.com" target="_blank" style="display: block; color: #00bfff; text-decoration: none; padding: 8px 0; border-bottom: 1px solid rgba(0,191,255,0.2);">🎓 W3Schools - دروس تعليمية</a>
            </div>
        `;
    }

    // 🔹 توليد معلومات الاتصال
    function generateContactInfo() {
        return `
            <div style="text-align: center;">
                <h4>تواصل معنا</h4>
                <p>نحن هنا لمساعدتك!</p>
                <div style="margin: 20px 0;">
                    <a href="${BLOG_CONFIG.messengerLink}" target="_blank" style="display: inline-block; background: linear-gradient(135deg, #00bfff, #0080ff); color: white; padding: 10px 20px; text-decoration: none; border-radius: 25px; margin: 5px;">💬 ماسنجر</a><br>
                    <a href="mailto:info@example.com" style="display: inline-block; background: linear-gradient(135deg, #ff6b6b, #ee5a24); color: white; padding: 10px 20px; text-decoration: none; border-radius: 25px; margin: 5px;">📧 البريد الإلكتروني</a><br>
                    <a href="tel:+1234567890" style="display: inline-block; background: linear-gradient(135deg, #4834d4, #686de0); color: white; padding: 10px 20px; text-decoration: none; border-radius: 25px; margin: 5px;">📞 الهاتف</a>
                </div>
            </div>
        `;
    }

    // 🔹 إنشاء زر تفعيل الروبوت
    function createActivationButton() {
        const button = document.createElement('div');
        button.id = 'robot-activation-btn';
        button.innerHTML = '🤖';
        button.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, ${BLOG_CONFIG.robotColor}, #0080ff);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            cursor: pointer;
            z-index: 999998;
            box-shadow: 0 4px 20px rgba(0,191,255,0.4);
            transition: all 0.3s ease;
            animation: pulse 2s infinite;
        `;
        
        button.addEventListener('click', showBloggerRobot);
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.boxShadow = '0 6px 30px rgba(0,191,255,0.6)';
        });
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 4px 20px rgba(0,191,255,0.4)';
        });

        // إضافة تأثير النبض
        const pulseStyle = document.createElement('style');
        pulseStyle.textContent = `
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
            }
        `;
        document.head.appendChild(pulseStyle);

        return button;
    }

    // 🔹 تهيئة السكريبت
    function initBloggerRobot() {
        // إنشاء زر التفعيل
        const activationButton = createActivationButton();
        document.body.appendChild(activationButton);

        // إظهار رسالة ترحيب
        setTimeout(() => {
            console.log('🤖 مرحباً! تم تحميل روبوت المدونة التفاعلي بنجاح!');
        }, 1000);
    }

    // 🔹 تشغيل السكريبت عند تحميل الصفحة
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initBloggerRobot);
    } else {
        initBloggerRobot();
    }

    // 🔹 إضافة واجهة برمجية عامة
    window.BloggerRobot = {
        show: showBloggerRobot,
        hide: window.closeBloggerRobot,
        config: BLOG_CONFIG
    };

})();
