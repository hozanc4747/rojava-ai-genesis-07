
import React from 'react';
import { Bot, Zap, Shield, Palette, Globe, Analytics, Users, Lock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: 'ذكاء اصطناعي متطور',
      description: 'نموذج GPT متقدم لإنشاء محتوى إيميلات ذكي ومخصص',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
    },
    {
      icon: Zap,
      title: 'إنشاء فوري',
      description: 'توليد إيميلات احترافية في ثوانٍ معدودة دون انتظار',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
    },
    {
      icon: Shield,
      title: 'نظام لامركزي',
      description: 'أمان كامل للبيانات مع تقنية البلوك تشين والتشفير المتقدم',
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
    },
    {
      icon: Palette,
      title: 'قوالب مخصصة',
      description: 'مكتبة ضخمة من القوالب القابلة للتخصيص لجميع المجالات',
      color: 'text-pink-400',
      bgColor: 'bg-pink-400/10',
    },
    {
      icon: Globe,
      title: 'دعم متعدد اللغات',
      description: 'إنشاء إيميلات بأكثر من 50 لغة مع احترام السياق الثقافي',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
    },
    {
      icon: Analytics,
      title: 'تحليلات ذكية',
      description: 'إحصائيات مفصلة حول أداء الإيميلات ومعدلات النجاح',
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10',
    },
    {
      icon: Users,
      title: 'تعاون الفريق',
      description: 'إدارة فرق العمل ومشاركة القوالب والمشاريع بسهولة',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-400/10',
    },
    {
      icon: Lock,
      title: 'خصوصية كاملة',
      description: 'بياناتك محمية بأعلى معايير الأمان والخصوصية',
      color: 'text-red-400',
      bgColor: 'bg-red-400/10',
    },
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">ميزات فائقة التطور</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            اكتشف مجموعة شاملة من الأدوات المتطورة التي تجعل إنشاء الإيميلات تجربة استثنائية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group glass-effect rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:bg-white/10"
            >
              <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Section */}
        <div className="mt-20 text-center">
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 gradient-text">
              لماذا Rojava؟
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">مفتوح المصدر</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">0$</div>
                <div className="text-sm text-muted-foreground">رسوم إضافية</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">دعم مجتمعي</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
