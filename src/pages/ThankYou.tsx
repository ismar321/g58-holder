import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CircleCheck as CheckCircle2, ArrowLeft, PhoneCall } from "lucide-react";
import { trackPurchase } from "@/lib/meta-pixel";

const ThankYou = () => {
  useEffect(() => {
    // Fire Purchase pixel only when Thank You page becomes visible
    trackPurchase();
  }, []);

  return (
    <div dir="rtl" className="min-h-screen text-foreground flex items-center justify-center px-4 py-10">
      <Card className="max-w-xl w-full p-8 sm:p-12 text-center bg-card/95 backdrop-blur border border-primary/25 shadow-glow space-y-6">
        <div className="mx-auto w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center shadow-blue animate-pulse-glow">
          <CheckCircle2 className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-foreground">
          تم استلام طلبك <span className="text-gradient">بنجاح</span> 🎉
        </h1>
        <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
          شكراً على ثقتك! فريقنا راح يتصل بيك في أقرب وقت لتأكيد الطلبية وتفاصيل التوصيل.
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-foreground bg-primary/10 border border-primary/30 rounded-lg py-3 px-4">
          <PhoneCall className="w-4 h-4 text-primary" />
          <span>تأكد من أن هاتفك متاح للمكالمة</span>
        </div>
        <Link to="/">
          <Button size="lg" className="w-full bg-gradient-primary text-white hover:opacity-90 rounded-lg font-bold text-base sm:text-lg py-6 shadow-blue">
            العودة للصفحة الرئيسية
            <ArrowLeft className="w-5 h-5 mr-2" />
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default ThankYou;
