
import React from 'react';
import { Bot, Sparkles, Zap, Shield, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="blob-1 top-20 left-20"></div>
        <div className="blob-2 bottom-32 right-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background"></div>
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20 mb-8 animate-float">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">مدعوم بالذكاء الاصطناعي المتقدم</span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            <span className="gradient-text">Rojava</span>
            <br />
            <span className="text-foreground/90">Email Creator</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            منصة لامركزية متطورة لإنشاء إيميلات احترافية باستخدام الذكاء الاصطناعي. 
            صمم، أنشئ، وأرسل إيميلات مذهلة في ثوانٍ معدودة.
          </p>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glass-effect rounded-2xl p-6 hover:scale-105 transition-all duration-300">
              <Bot className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">ذكاء اصطناعي متقدم</h3>
              <p className="text-sm text-muted-foreground">توليد محتوى إيميلات ذكي ومخصص</p>
            </div>
            
            <div className="glass-effect rounded-2xl p-6 hover:scale-105 transition-all duration-300">
              <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">سرعة فائقة</h3>
              <p className="text-sm text-muted-foreground">إنشاء إيميلات في ثوانٍ معدودة</p>
            </div>
            
            <div className="glass-effect rounded-2xl p-6 hover:scale-105 transition-all duration-300">
              <Shield className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">نظام لامركزي</h3>
              <p className="text-sm text-muted-foreground">أمان وخصوصية كاملة لبياناتك</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="group relative px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 glow-effect">
              <span className="flex items-center space-x-2">
                <span>ابدأ الإنشاء الآن</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button className="px-8 py-4 glass-effect hover:bg-white/10 text-foreground rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
              شاهد العرض التوضيحي
            </button>
          </div>
          
          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-12 mt-20 pt-12 border-t border-border/50">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">10K+</div>
              <div className="text-sm text-muted-foreground">إيميل مُنشأ</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">وقت التشغيل</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">5K+</div>
              <div className="text-sm text-muted-foreground">مستخدم نشط</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
