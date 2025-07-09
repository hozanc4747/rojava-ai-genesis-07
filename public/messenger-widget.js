
// 🔹 إنشاء ويدجت الماسنجر للبلوجر
(function() {
    // إنشاء HTML للويدجت
    const widgetHTML = `
        <!-- 🔹 زر فتح دردشة ماسنجر (تصميم مستطيل شفاف) -->
        <div id="messengerWidget" onclick="toggleMessenger()">
            <div id="messengerIcon">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Facebook_Messenger_4_Logo.svg" width="40px" />
            </div>
            <div id="messengerText">💬 تواصل معنا</div>
        </div>

        <!-- 🔹 نافذة دردشة ماسنجر -->
        <div id="messengerPopup">
            <button id="closeMessenger" onclick="toggleMessenger()">❌</button>
            <h3>💬 دردشة ماسنجر</h3>
            
            <!-- 🔹 أزرار الأسئلة الجاهزة -->
            <div id="quickQuestions">
                <button onclick="sendQuestion('ما هي خدمات المدونة؟')">❓ ما هي المدونة؟</button>
                <button onclick="sendQuestion('كيف يمكنني التواصل معكم؟')">📞 كيف أتواصل معكم؟</button>
                <button onclick="sendQuestion('هل هناك محتوى جديد قادم؟')">📆 هل هناك تحديثات؟</button>
            </div>

            <!-- 🔹 زر فتح الدردشة في ماسنجر -->
            <a href="https://www.messenger.com/t/hoz37" target="_blank" id="openMessenger">🔗 افتح الدردشة</a>
        </div>
    `;

    const widgetCSS = `
        <style>
        /* 🔹 زر ماسنجر الجانبي */
        #messengerWidget {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 200px;
            height: 50px;
            background: rgba(0, 150, 255, 0.2);
            border-radius: 10px;
            box-shadow: 0 0 15px cyan;
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;
            transition: 0.3s;
            padding: 5px 15px;
            z-index: 9999;
            backdrop-filter: blur(10px);
        }

        /* 🔹 تأثير عند تمرير الماوس */
        #messengerWidget:hover {
            background: rgba(0, 150, 255, 0.5);
        }

        /* 🔹 أيقونة ماسنجر */
        #messengerIcon img {
            width: 40px;
            filter: drop-shadow(0 0 5px white);
        }

        /* 🔹 نص الزر */
        #messengerText {
            color: white;
            font-size: 16px;
            font-weight: bold;
        }

        /* 🔹 نافذة الدردشة */
        #messengerPopup {
            display: none;
            position: fixed;
            bottom: 80px;
            right: 20px;
            width: 320px;
            background: rgba(0, 50, 100, 0.95);
            border-radius: 15px;
            box-shadow: 0 0 15px cyan;
            padding: 15px;
            text-align: center;
            z-index: 9999;
            font-family: Arial, sans-serif;
            backdrop-filter: blur(10px);
        }

        /* 🔹 زر إغلاق الدردشة */
        #closeMessenger {
            position: absolute;
            top: 5px;
            right: 10px;
            background: red;
            color: white;
            border: none;
            padding: 5px;
            cursor: pointer;
            font-size: 14px;
            border-radius: 5px;
        }

        /* 🔹 عنوان الدردشة */
        #messengerPopup h3 {
            color: cyan;
            text-shadow: 0 0 5px cyan;
        }

        /* 🔹 أزرار الأسئلة الجاهزة */
        #quickQuestions {
            display: flex;
            flex-direction: column;
            gap: 5px;
            margin-bottom: 10px;
        }

        #quickQuestions button {
            padding: 8px;
            border: none;
            border-radius: 5px;
            background: rgba(0, 255, 255, 0.5);
            color: white;
            cursor: pointer;
            font-size: 14px;
            box-shadow: 0 0 5px cyan;
            transition: 0.3s;
            width: 100%;
        }

        #quickQuestions button:hover {
            background: cyan;
            color: black;
        }

        /* 🔹 زر فتح الدردشة في ماسنجر */
        #openMessenger {
            display: block;
            width: 100%;
            text-align: center;
            padding: 10px;
            background: rgba(0, 150, 255, 0.8);
            color: white;
            text-decoration: none;
            border-radius: 5px;
            box-shadow: 0 0 10px cyan;
            font-size: 16px;
            transition: 0.3s;
        }

        #openMessenger:hover {
            background: cyan;
            color: black;
        }
        </style>
    `;

    // إضافة الـ CSS إلى الصفحة
    document.head.insertAdjacentHTML('beforeend', widgetCSS);
    
    // إضافة الـ HTML إلى الصفحة عند تحميلها
    document.addEventListener('DOMContentLoaded', function() {
        document.body.insertAdjacentHTML('beforeend', widgetHTML);
    });

    // الوظائف المطلوبة
    window.toggleMessenger = function() {
        let popup = document.getElementById("messengerPopup");
        popup.style.display = (popup.style.display === "block") ? "none" : "block";
    };

    window.sendQuestion = function(question) {
        let messengerLink = `https://www.messenger.com/t/hoz37?text=${encodeURIComponent(question)}`;
        window.open(messengerLink, "_blank");
    };
})();
