
import React from 'react';
import { Github, Twitter, Globe, Heart, Shield, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 bg-background/50 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold gradient-text">Rojava</h3>
                <p className="text-xs text-muted-foreground">AI Email Creator</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              منصة لامركزية مفتوحة المصدر لإنشاء الإيميلات باستخدام الذكاء الاصطناعي.
              مصممة للمطورين وللجميع.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-green-400">100% مفتوح المصدر</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">روابط سريعة</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors">الميزات</a></li>
              <li><a href="#creator" className="text-muted-foreground hover:text-primary transition-colors">منشئ الإيميلات</a></li>
              <li><a href="#docs" className="text-muted-foreground hover:text-primary transition-colors">التوثيق</a></li>
              <li><a href="#api" className="text-muted-foreground hover:text-primary transition-colors">API</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">المجتمع</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Discord</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Telegram</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Reddit</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">البريد الإلكتروني</a></li>
            </ul>
          </div>

          {/* Development */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">للمطورين</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">GitHub Repository</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contributing Guide</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Bug Reports</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Feature Requests</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>© 2024 Rojava Email Creator</span>
              <span>•</span>
              <span>MIT License</span>
              <span>•</span>
              <div className="flex items-center space-x-1">
                <span>مصنوع بـ</span>
                <Heart className="w-4 h-4 text-red-400" />
                <span>للمجتمع</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
