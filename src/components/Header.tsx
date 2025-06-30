
import React from 'react';
import { Sparkles, Github, Shield } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative z-10 border-b border-border/50 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 rounded-xl gradient-primary blur-lg opacity-30 animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">Rojava</h1>
              <p className="text-xs text-muted-foreground">AI Email Creator</p>
            </div>
          </div>
          
          <nav className="flex items-center space-x-6">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              الميزات
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              الأسعار
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              حول المشروع
            </a>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-xs text-green-400 font-medium">لامركزي</span>
            </div>
            <button className="flex items-center space-x-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg transition-all hover:scale-105">
              <Github className="w-4 h-4" />
              <span className="text-sm font-medium">GitHub</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
