
# تعليمات الرفع والنشر - مشروع Rojava

## 1. رفع المشروع على GitHub

### من خلال Lovable:
1. انقر على زر **GitHub** في أعلى يمين المحرر
2. اختر **Connect to GitHub**
3. قم بتفويض تطبيق Lovable على GitHub
4. اختر الحساب/المنظمة التي تريد إنشاء المستودع فيها
5. انقر على **Create Repository**

### رابط المستودع المطلوب:
https://github.com/hozanc4747/rojava-secure-chat-chain

## 2. نشر التطبيق

### الطريقة الأولى - Lovable Direct:
- انقر على زر **Publish** في أعلى يمين المحرر
- سيتم نشر التطبيق على: yoursite.lovable.app

### الطريقة الثانية - Vercel:
1. اذهب إلى [vercel.com](https://vercel.com)
2. قم بربط حساب GitHub
3. اختر المستودع واضغط Deploy

### الطريقة الثالثة - Netlify:
1. اذهب إلى [netlify.com](https://netlify.com)
2. اسحب مجلد المشروع المبني أو اربط GitHub

## 3. إضافة ويدجت الماسنجر للبلوجر

### الطريقة الأولى - استخدام الملف المحضر:
```html
<script src="/messenger-widget.js"></script>
```

### الطريقة الثانية - الكود المباشر:
انسخ الكود التالي وألصقه في قالب البلوجر أو في أي مقال:

```html
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

<!-- 🔹 JavaScript للتحكم بالدردشة -->
<script>
function toggleMessenger() {
    let popup = document.getElementById("messengerPopup");
    popup.style.display = (popup.style.display === "block") ? "none" : "block";
}

function sendQuestion(question) {
    let messengerLink = `https://www.messenger.com/t/hoz37?text=${encodeURIComponent(question)}`;
    window.open(messengerLink, "_blank");
}
</script>

<!-- 🔹 CSS لتنسيق الدردشة -->
<style>
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

#messengerWidget:hover {
    background: rgba(0, 150, 255, 0.5);
}

#messengerIcon img {
    width: 40px;
    filter: drop-shadow(0 0 5px white);
}

#messengerText {
    color: white;
    font-size: 16px;
    font-weight: bold;
}

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

#messengerPopup h3 {
    color: cyan;
    text-shadow: 0 0 5px cyan;
}

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
```

## 4. خطوات إضافة الكود للبلوجر:

1. اذهب إلى لوحة تحكم البلوجر
2. اختر **المظهر** → **تحرير HTML**
3. ابحث عن `</body>`
4. ألصق الكود قبل `</body>` مباشرة
5. احفظ القالب

## 5. التحقق من عمل الموقع:

✅ ويدجت الماسنجر يظهر في الزاوية اليمنى السفلى
✅ النقر يفتح نافذة الدردشة
✅ الأسئلة الجاهزة تعمل
✅ رابط الماسنجر يفتح المحادثة

---

**ملاحظة:** تأكد من تغيير `hoz37` إلى معرف الماسنجر الخاص بك في الروابط.
