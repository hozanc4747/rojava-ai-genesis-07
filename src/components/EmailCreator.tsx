
import React, { useState } from 'react';
import { Send, Sparkles, Copy, Download, Eye, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';

const EmailCreator = () => {
  const [prompt, setPrompt] = useState('');
  const [emailType, setEmailType] = useState('marketing');
  const [tone, setTone] = useState('professional');
  const [generatedEmail, setGeneratedEmail] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateEmail = async () => {
    if (!prompt.trim()) {
      toast({
        title: "خطأ",
        description: "يرجى إدخال وصف للإيميل المطلوب",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    
    // محاكاة استدعاء API للذكاء الاصطناعي
    setTimeout(() => {
      const mockEmail = `الموضوع: ${prompt}

مرحباً،

${tone === 'casual' ? 'أتمنى أن تكون بخير!' : 'أتشرف بالتواصل معك،'}

${prompt.includes('تسويق') ? 
  'نحن متحمسون لتقديم عرضنا الخاص الجديد. اكتشف منتجاتنا المميزة التي ستغير تجربتك تماماً.' :
  'نود مشاركة هذه المعلومات المهمة معك. نحن نقدر وقتك وثقتك فينا.'
}

${emailType === 'marketing' ? 
  'لا تفوت هذه الفرصة الذهبية! عرض محدود لفترة قصيرة.' :
  'نحن هنا لمساعدتك في أي وقت تحتاج فيه إلى الدعم.'
}

مع أطيب التحيات،
فريق Rojava

---
تم إنشاء هذا الإيميل بواسطة Rojava AI Email Creator`;

      setGeneratedEmail(mockEmail);
      setIsGenerating(false);
      
      toast({
        title: "تم إنشاء الإيميل بنجاح!",
        description: "تم توليد إيميل احترافي مخصص لك",
      });
    }, 2000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedEmail);
    toast({
      title: "تم النسخ!",
      description: "تم نسخ الإيميل إلى الحافظة",
    });
  };

  return (
    <section id="creator" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">منشئ الإيميلات الذكي</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              استخدم قوة الذكاء الاصطناعي لإنشاء إيميلات احترافية ومؤثرة في ثوانٍ معدودة
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Panel */}
            <div className="glass-effect rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Sparkles className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">إعدادات الإنشاء</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">وصف الإيميل المطلوب</label>
                  <Textarea
                    placeholder="مثال: إيميل تسويقي لمنتج جديد، رسالة شكر للعملاء، إشعار مهم..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="min-h-[120px] bg-background/50 border-border/50"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">نوع الإيميل</label>
                    <Select value={emailType} onValueChange={setEmailType}>
                      <SelectTrigger className="bg-background/50 border-border/50">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="marketing">تسويقي</SelectItem>
                        <SelectItem value="notification">إشعار</SelectItem>
                        <SelectItem value="welcome">ترحيب</SelectItem>
                        <SelectItem value="follow-up">متابعة</SelectItem>
                        <SelectItem value="newsletter">نشرة إخبارية</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">نبرة الكتابة</label>
                    <Select value={tone} onValueChange={setTone}>
                      <SelectTrigger className="bg-background/50 border-border/50">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="professional">مهني</SelectItem>
                        <SelectItem value="casual">ودود</SelectItem>
                        <SelectItem value="formal">رسمي</SelectItem>
                        <SelectItem value="enthusiastic">متحمس</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button
                  onClick={generateEmail}
                  disabled={isGenerating}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-semibold rounded-xl transition-all hover:scale-105"
                >
                  {isGenerating ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>جاري الإنشاء...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Sparkles className="w-5 h-5" />
                      <span>إنشاء الإيميل</span>
                    </div>
                  )}
                </Button>
              </div>
            </div>

            {/* Output Panel */}
            <div className="glass-effect rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Send className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold">الإيميل المُنشأ</h3>
                </div>
                
                {generatedEmail && (
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" onClick={copyToClipboard}>
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                )}
              </div>

              <div className="min-h-[400px] bg-background/50 rounded-xl border border-border/50 p-6">
                {generatedEmail ? (
                  <div className="space-y-4">
                    <pre className="whitespace-pre-wrap text-sm leading-relaxed font-mono">
                      {generatedEmail}
                    </pre>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full text-center">
                    <div>
                      <Send className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                      <p className="text-muted-foreground mb-2">الإيميل المُنشأ سيظهر هنا</p>
                      <p className="text-sm text-muted-foreground/70">اكتب وصف للإيميل واضغط "إنشاء الإيميل"</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailCreator;
