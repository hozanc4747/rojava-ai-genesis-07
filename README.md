
# Rojava - AI Email Creator

<div align="center">
  <h1>🚀 Rojava Email Creator</h1>
  <p><strong>منصة لامركزية متطورة لإنشاء الإيميلات باستخدام الذكاء الاصطناعي</strong></p>
  
  ![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
  ![License](https://img.shields.io/badge/license-MIT-green.svg)
  ![React](https://img.shields.io/badge/React-18.3.1-61DAFB.svg)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6.svg)
  ![AI](https://img.shields.io/badge/AI-Powered-ff6b6b.svg)
</div>

## ✨ المميزات الرئيسية

- 🤖 **ذكاء اصطناعي متقدم**: نموذج GPT متطور لإنشاء محتوى ذكي ومخصص
- ⚡ **سرعة فائقة**: توليد إيميلات احترافية في ثوانٍ معدودة
- 🔒 **نظام لامركزي**: أمان وخصوصية كاملة للبيانات
- 🎨 **تصميم عصري**: واجهة مستخدم متطورة مع تأثيرات بصرية مذهلة
- 🌍 **دعم متعدد اللغات**: إنشاء إيميلات بأكثر من 50 لغة
- 📊 **تحليلات ذكية**: إحصائيات مفصلة حول أداء الإيميلات
- 👥 **تعاون الفريق**: إدارة فرق العمل ومشاركة المشاريع
- 🛡️ **مفتوح المصدر**: رمز مفتوح 100% تحت رخصة MIT

## 🚀 البدء السريع

### المتطلبات الأساسية

- Node.js (الإصدار 18 أو أحدث)
- npm أو yarn
- Git

### التثبيت

```bash
# استنساخ المستودع
git clone https://github.com/rojava-email-creator/rojava.git

# الانتقال للمجلد
cd rojava

# تثبيت الحزم المطلوبة
npm install

# تشغيل الخادم المحلي
npm run dev
```

### التشغيل باستخدام Docker

```bash
# بناء الحاوية
docker build -t rojava-email-creator .

# تشغيل الحاوية
docker run -p 3000:3000 rojava-email-creator
```

## 🛠️ التقنيات المستخدمة

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **UI Components**: Shadcn/ui, Radix UI
- **State Management**: React Query (TanStack Query)
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **AI Integration**: OpenAI GPT API
- **Blockchain**: Web3.js (للميزات اللامركزية)

## 📁 هيكل المشروع

```
rojava/
├── src/
│   ├── components/          # المكونات القابلة لإعادة الاستخدام
│   │   ├── ui/             # مكونات واجهة المستخدم الأساسية
│   │   ├── Header.tsx      # رأس الصفحة
│   │   ├── Hero.tsx        # القسم الرئيسي
│   │   ├── EmailCreator.tsx # منشئ الإيميلات
│   │   ├── Features.tsx    # قسم الميزات
│   │   └── Footer.tsx      # تذييل الصفحة
│   ├── pages/              # الصفحات الرئيسية
│   ├── hooks/              # React Hooks المخصصة
│   ├── lib/                # المكتبات والأدوات المساعدة
│   └── types/              # تعريفات TypeScript
├── public/                 # الملفات العامة
└── docs/                   # التوثيق
```

## 🔧 التخصيص والتطوير

### إضافة ميزات جديدة

1. إنشاء فرع جديد من `main`
2. تطوير الميزة في `src/components/` أو `src/pages/`
3. إضافة الاختبارات اللازمة
4. تحديث التوثيق
5. إرسال Pull Request

### تخصيص التصميم

```typescript
// تخصيص الألوان في src/index.css
:root {
  --primary: 271 81% 56%;           // اللون الأساسي
  --secondary: 215 25% 12%;         // اللون الثانوي
  --background: 220 15% 4%;         // لون الخلفية
  --foreground: 210 40% 98%;        // لون النص
}
```

### إعداد API الذكاء الاصطناعي

```typescript
// في .env.local
VITE_OPENAI_API_KEY=your_api_key_here
VITE_API_BASE_URL=https://api.openai.com/v1
```

## 🌐 النشر

### GitHub Pages

```bash
# بناء المشروع للإنتاج
npm run build

# نشر على GitHub Pages
npm run deploy
```

### Vercel

```bash
# تثبيت Vercel CLI
npm i -g vercel

# النشر
vercel --prod
```

### Netlify

```bash
# بناء المشروع
npm run build

# رفع مجلد dist إلى Netlify
```

## 🤝 المساهمة

نرحب بالمساهمات من الجميع! إليك كيفية المساهمة:

1. **Fork** المستودع
2. إنشاء فرع للميزة (`git checkout -b feature/AmazingFeature`)
3. Commit التغييرات (`git commit -m 'Add some AmazingFeature'`)
4. Push للفرع (`git push origin feature/AmazingFeature`)
5. فتح Pull Request

### إرشادات المساهمة

- اتباع معايير الكود الموجودة
- كتابة اختبارات للميزات الجديدة
- تحديث التوثيق عند الحاجة
- استخدام Conventional Commits

## 📜 الرخصة

هذا المشروع مرخص تحت رخصة MIT - راجع ملف [LICENSE](LICENSE) للتفاصيل.

## 👥 الفريق

- **Lead Developer**: [@your-username](https://github.com/your-username)
- **UI/UX Designer**: [@designer-username](https://github.com/designer-username)
- **Community Manager**: [@community-username](https://github.com/community-username)

## 🆘 الدعم

- 📧 **البريد الإلكتروني**: support@rojava-email.com
- 💬 **Discord**: [روابط المجتمع](https://discord.gg/rojava)
- 📱 **Telegram**: [@rojava_support](https://t.me/rojava_support)
- 🐛 **تقارير الأخطاء**: [GitHub Issues](https://github.com/rojava-email-creator/rojava/issues)

## 🗺️ خريطة الطريق

### الإصدار 1.1.0
- [ ] إضافة المزيد من القوالب
- [ ] تحسين خوارزميات الذكاء الاصطناعي
- [ ] دعم الصور في الإيميلات

### الإصدار 1.2.0
- [ ] تطبيق محمول (React Native)
- [ ] تكامل مع منصات CRM
- [ ] ميزات التعاون المتقدمة

### الإصدار 2.0.0
- [ ] نظام البلوك تشين الكامل
- [ ] التشفير من النهاية للنهاية
- [ ] NFT Templates

## 📊 الإحصائيات

![GitHub stars](https://img.shields.io/github/stars/rojava-email-creator/rojava?style=social)
![GitHub forks](https://img.shields.io/github/forks/rojava-email-creator/rojava?style=social)
![GitHub issues](https://img.shields.io/github/issues/rojava-email-creator/rojava)
![GitHub pull requests](https://img.shields.io/github/issues-pr/rojava-email-creator/rojava)

---

<div align="center">
  <p>صُنع بـ ❤️ للمجتمع العربي والعالمي</p>
  <p><strong>Rojava Email Creator - حيث يلتقي الذكاء الاصطناعي بالإبداع</strong></p>
</div>
