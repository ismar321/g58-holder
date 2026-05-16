import { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { wilayas } from "@/data/algeria";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ZoomIn, Loader as Loader2 } from "lucide-react";
import { Shield, Sparkles, Check, Truck, Cpu, ArrowLeft, CreditCard, ShieldCheck, TriangleAlert as AlertTriangle, Ruler, Wrench, Usb } from "lucide-react";
import productAnime from "@/assets/product-anime.jpg";
import productStats from "@/assets/product-stats.jpg";
import productCpu from "@/assets/product-cpu.jpg";
import productDashboard from "@/assets/product-dashboard.jpg";
import productCase from "@/assets/product-case.png";
import productScreen from "@/assets/product-screen.png";
import productSide from "@/assets/product-side.png";
import productDimensions from "@/assets/product-dimensions.png";
import themesDashboards from "@/assets/themes-dashboards.png";
import themesAnime from "@/assets/themes-anime.png";
import themesPiky from "@/assets/themes-piky.png";
import themesEye from "@/assets/themes-eye.png";
import dimCnc from "@/assets/dim-cnc.jpg";
import dimSize from "@/assets/dim-size.jpg";
import dimAccessories from "@/assets/dim-accessories.jpg";
import productHeroMain from "@/assets/product-hero-main.png";

const scrollToOrder = () => {
  document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });
};

const CTAButton = ({
  children = "اطلب الآن",
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) => (
  <Button
    onClick={scrollToOrder}
    size="lg"
    style={{ minWidth: 260, padding: "18px 40px", fontSize: 20, fontWeight: 800 }}
    className={`cta-pulse bg-gradient-primary text-primary-foreground hover:opacity-95 hover:scale-105 transition-all duration-300 rounded-xl w-full sm:w-auto shadow-blue ${className}`}
  >
    {children}
    <ArrowLeft className="w-5 h-5 mr-2" />
  </Button>
);

const Index = () => {
  const galleryImages = [
    { src: productHeroMain, alt: "حامل GPU متوفر بلونين أبيض و أسود مع شاشة IPS" },
    { src: productCase, alt: "حامل GPU داخل كيس PC" },
    { src: productScreen, alt: "شاشة IPS مدمجة في الحامل" },
    { src: productAnime, alt: "شاشة الحامل تعرض ثيم أنمي" },
  ];
  const [zoomIndex, setZoomIndex] = useState<number | null>(null);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoplay = useRef(Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true }));
  const navigate = useNavigate();
  const [wilayaCode, setWilayaCode] = useState<string>("");
  const [commune, setCommune] = useState<string>("");
  const [color, setColor] = useState<"أبيض" | "أسود">("أسود");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const communes = useMemo(
    () => wilayas.find((w) => w.code === wilayaCode)?.communes ?? [],
    [wilayaCode],
  );

  useEffect(() => {
    if (!carouselApi) return;
    const onSelect = () => setCurrentSlide(carouselApi.selectedScrollSnap());
    onSelect();
    carouselApi.on("select", onSelect);
    carouselApi.on("reInit", onSelect);
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  return (
    <div dir="rtl" className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container flex items-center justify-between py-3 sm:py-4 px-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-primary flex items-center justify-center shadow-blue">
              <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
            </div>
            <span className="font-black text-base sm:text-lg text-foreground">GPU Stand Pro</span>
          </div>
          <Button onClick={scrollToOrder} size="sm" className="bg-gradient-primary text-primary-foreground rounded-lg font-bold text-xs sm:text-sm hover:opacity-90 transition-all">
            اطلب الآن
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero py-8 sm:py-12 md:py-16">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-0 -left-32 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 -right-32 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />

        <div className="container relative px-4">
          {/* Headline ABOVE images */}
          <div className="max-w-3xl mx-auto space-y-6 text-center fade-in mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/10 backdrop-blur border border-primary/30 shadow-card mx-auto">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-foreground">جديد · إصدار محدود</span>
            </div>

            <h1
              className="leading-tight font-black text-foreground text-glow"
              style={{ fontSize: "clamp(28px, 6vw, 56px)" }}
            >
              خلي Setup تاعك <span className="text-gradient">Level آخر</span> 🔥
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-foreground/90 font-semibold leading-relaxed">
              حامل GPU ذكي مع شاشة <span className="text-gradient font-bold">IPS 4.58"</span> تعرض معلومات جهازك مباشرة داخل الكيس
            </p>
          </div>

          {/* Gallery Images Below */}
          <div className="mb-12 sm:mb-16">
            <div className="relative mx-auto max-w-3xl">
              <Carousel
                setApi={setCarouselApi}
                opts={{ align: "center", loop: true, direction: "rtl" }}
                plugins={[autoplay.current]}
                className="relative w-full"
              >
                <CarouselContent className="-ml-2 sm:-ml-4">
                  {galleryImages.map((img, i) => (
                    <CarouselItem key={img.src} className="pl-2 sm:pl-4 basis-full">
                      <button
                        type="button"
                        onClick={() => setZoomIndex(i)}
                        className="group relative block w-full overflow-hidden rounded-2xl focus:outline-none"
                        aria-label="تكبير الصورة"
                      >
                        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                        <img
                          src={img.src}
                          alt={img.alt}
                          loading={i === 0 ? "eager" : "lazy"}
                          decoding="async"
                          fetchPriority={i === 0 ? "high" : "low"}
                          sizes="(max-width: 640px) 95vw, (max-width: 1024px) 85vw, 50vw"
                          className="rounded-2xl w-full aspect-[4/3] object-cover transition-transform duration-700 ease-out group-hover:scale-105 bg-muted shadow-card"
                        />
                        <span className="absolute bottom-3 right-3 flex items-center gap-1 px-3 py-1.5 rounded-full bg-card/90 backdrop-blur-sm border border-primary/20 text-xs font-bold text-card-foreground">
                          <ZoomIn className="w-3.5 h-3.5 text-primary" /> تكبير
                        </span>
                        <span dir="ltr" className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-primary/80 text-white text-xs font-black tabular-nums">
                          {i + 1} / {galleryImages.length}
                        </span>
                      </button>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex -right-4 left-auto border-primary/30 hover:bg-primary/10" />
                <CarouselNext className="hidden sm:flex -left-4 right-auto border-primary/30 hover:bg-primary/10" />
              </Carousel>

              <div className="flex items-center justify-center gap-2 mt-6">
                {galleryImages.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`اذهب إلى الصورة ${i + 1}`}
                    onClick={() => carouselApi?.scrollTo(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentSlide === i
                        ? "w-8 bg-gradient-primary shadow-blue"
                        : "w-2 bg-border/40 hover:bg-primary/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Features + Price + CTA */}
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <ul className="space-y-2.5 max-w-2xl mx-auto">
              {[
                "يحمي كرت الشاشة من الانحناء وكسر اللوحة الأم",
                'شاشة 4.58" للحرارة، الأداء، ثيمات، GIF، فيديوهات',
                "تصميم Gaming احترافي يزيد جمالية Setup",
                "متوفر بلونين: أبيض و أسود",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 justify-center">
                  <span className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center shrink-0 shadow-blue">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </span>
                  <span className="text-base md:text-lg font-semibold text-foreground/95">{t}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center">
              <div
                className="inline-flex flex-col items-center"
                style={{
                  background: "linear-gradient(135deg, #1e3a5f, #0f2744)",
                  border: "1px solid rgba(0,200,255,0.3)",
                  borderRadius: 16,
                  padding: "16px 32px",
                }}
              >
                <span style={{ fontSize: 12, color: "#94a3b8", fontWeight: 600, letterSpacing: 1 }}>السعر</span>
                <div className="flex items-baseline gap-2">
                  <span style={{ fontSize: 36, fontWeight: 800, color: "#00c8ff", lineHeight: 1 }}>9800</span>
                  <span style={{ fontSize: 16, fontWeight: 700, color: "#cbd5e1" }}>دج</span>
                </div>
              </div>
              <CTAButton>اطلب الآن</CTAButton>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 justify-center text-xs sm:text-sm text-foreground/70 pt-2">
              <span className="flex items-center gap-1"><Truck className="w-4 h-4 text-primary" /> توصيل لكامل الولايات</span>
              <span className="flex items-center gap-1"><Shield className="w-4 h-4 text-primary" /> دفع عند الاستلام</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM + SOLUTION */}
      <section className="py-14 sm:py-20 relative overflow-hidden bg-transparent">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="container relative max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 items-start mb-10 sm:mb-12">
            {/* Solution column */}
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 text-primary font-bold text-sm border border-primary/20">
                <Sparkles className="w-4 h-4" /> الحل
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl leading-tight font-black">
                <span className="text-gradient">Upgrade كامل</span> للـ Setup
              </h2>
              <div className="space-y-3">
                {[
                  "يحمي كرت الشاشة من الانحناء والكسر",
                  "يثبت اللوحة الأم ويوزع الوزن مزيان",
                  "تصميم RGB يعطي Setup احترافي ومميز",
                ].map((t) => (
                  <Card
                    key={t}
                    className="p-4 sm:p-5 bg-white/5 backdrop-blur border border-white/10 shadow-card flex items-center gap-3 hover:shadow-glow hover:border-primary/40 transition-all duration-500"
                  >
                    <span className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0 shadow-blue">
                      <Check className="w-5 h-5 text-white" />
                    </span>
                    <p className="text-sm sm:text-base font-semibold leading-relaxed text-foreground">{t}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Problem column */}
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/8 text-destructive font-bold text-sm border border-destructive/20">
                <AlertTriangle className="w-4 h-4" /> المشكلة
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl leading-tight font-black">
                كرت الشاشة <span className="text-destructive">ثقيل؟</span>
              </h2>
              <div className="space-y-3">
                {[
                  "تخاف يتكسر كرت الشاشة بسبب وزنه؟",
                  "تخاف يكسر لوحة الأم؟",
                  "Setup تاعك ناقصو لمسة احترافية؟",
                ].map((t) => (
                  <Card
                    key={t}
                    className="p-4 sm:p-5 bg-white/5 backdrop-blur border border-destructive/20 shadow-card flex items-center gap-3 hover:shadow-glow hover:border-destructive/40 transition-all duration-500"
                  >
                    <span className="w-10 h-10 rounded-lg bg-destructive/20 flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-5 h-5 text-destructive" />
                    </span>
                    <p className="text-sm sm:text-base font-semibold leading-relaxed text-foreground">{t}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Video */}
          <div className="mx-auto w-full max-w-4xl">
            <div className="rounded-2xl overflow-hidden video-glow bg-black/40 border border-white/10 shadow-card">
              <video
                src="https://res.cloudinary.com/dtnljybtv/video/upload/v1778748551/LSA_hpktlj.mp4"
                autoPlay
                muted
                loop
                playsInline
                poster={productDashboard}
                className="w-full h-full object-cover block bg-muted"
              >
                المتصفح لا يدعم تشغيل الفيديو.
              </video>
            </div>
          </div>

          <div className="text-center pt-10 sm:pt-12">
            <CTAButton>اطلب الآن</CTAButton>
          </div>
        </div>
      </section>

      {/* VMAX SOFTWARE */}
      <section className="py-16 sm:py-24 relative overflow-hidden bg-transparent">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-10 left-1/4 w-80 h-80 rounded-full bg-accent/4 blur-3xl" />
        <div className="container relative max-w-6xl px-4">
          <div className="text-center mb-12 sm:mb-14 space-y-5">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur text-foreground border border-white/15 shadow-card">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-black tracking-wide text-foreground">برنامج VMAX</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-black leading-tight">
              تحكم كامل في <span className="text-gradient">الثيمات</span>
              <br className="hidden sm:block" /> ببرنامج <span className="text-gradient">VMAX</span>
            </h2>
            <p className="text-foreground/70 text-base sm:text-lg max-w-3xl mx-auto leading-loose">
              برنامج <span className="px-2 py-0.5 mx-1 rounded-md bg-white/10 border border-white/15 font-semibold text-foreground">VMAX</span>
              خفيف وغير متطلب على الجهاز، يخليك تبدّل
              <span className="px-2 py-0.5 mx-1 rounded-md bg-primary/8 border border-primary/30 font-semibold text-primary">الثيمات</span>
              ، تحط
              <span className="px-2 py-0.5 mx-1 rounded-md bg-white/10 border border-white/15 font-semibold text-foreground">صور</span>
              ،
              <span className="px-2 py-0.5 mx-1 rounded-md bg-white/10 border border-white/15 font-semibold text-foreground">GIF</span>
              ،
              <span className="px-2 py-0.5 mx-1 rounded-md bg-primary/8 border border-primary/30 font-semibold text-primary">أنمي</span>
              ، أو
              <span className="px-2 py-0.5 mx-1 rounded-md bg-white/10 border border-white/15 font-semibold text-foreground">إحصائيات الجهاز</span>
              بكل سهولة — اصنع
              <span className="px-2 py-0.5 mx-1 rounded-md bg-primary/8 border border-primary/30 font-semibold text-primary">ثيم</span>
              على حساب
              <span className="px-2 py-0.5 mx-1 rounded-md bg-primary/8 border border-primary/30 font-semibold text-primary">مزاجك</span>
              🔥
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
            {[
              { src: themesDashboards, alt: "ثيمات Dashboard لإحصائيات الجهاز" },
              { src: themesAnime, alt: "ثيمات أنمي متنوعة" },
              { src: themesPiky, alt: "ثيم بيكاتشو وشخصيات أنمي" },
              { src: themesEye, alt: "ثيم عين أنمي حمراء" },
            ].map((img) => (
              <div key={img.src} className="group overflow-hidden rounded-2xl shadow-card border border-primary/10 hover:shadow-glow transition-all duration-500">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-110 bg-muted"
                />
              </div>
            ))}
          </div>

          <div className="text-center pt-10 sm:pt-12">
            <CTAButton>اطلب الآن</CTAButton>
          </div>
        </div>
      </section>

      {/* DIMENSIONS & INSTALLATION */}
      <section className="py-14 sm:py-20 bg-transparent">
        <div className="container max-w-6xl px-4">
          <div className="text-center mb-10 sm:mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black">
              الأبعاد و <span className="text-gradient">طريقة التركيب</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              تصميم مدروس باش يدخل في أغلب الكيسات بسهولة
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-card border border-primary/10">
              <img
                src={productDimensions}
                alt="أبعاد الحامل وطريقة التركيب — ارتفاع 13.2 سم"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 1024px) 90vw, 32rem"
                className="rounded-2xl w-full bg-muted"
              />
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: Ruler,
                  title: "ارتفاع 13 سم فقط",
                  desc: "حجم مدروس يدخل في أغلب الكيسات بدون أي مشكل",
                },
                {
                  icon: Wrench,
                  title: "تركيب فوق مراوح الكيس",
                  desc: "تقدر تركبو فوق مراوح الكيس عادي وتزيرو، فيه قاعدة عريضة تثبتو مزيان",
                },
                {
                  icon: Usb,
                  title: "USB 2.0 9-pin Header",
                  desc: "يتركب مباشرة في لوحة الأم عبر منفذ USB 2.0 9-pin header",
                },
                {
                  icon: Cpu,
                  title: "كابل امتداد USB",
                  desc: "يجي معاه كابل امتداد USB Port في حالة ما عندكش منفذ متاح",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <Card
                  key={title}
                  className="p-4 sm:p-5 bg-white/5 backdrop-blur border border-white/10 shadow-card flex items-start gap-4 hover:shadow-glow hover:border-primary/40 transition-all duration-500"
                >
                  <span className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0 shadow-blue">
                    <Icon className="w-6 h-6 text-white" />
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">{title}</h3>
                    <p className="text-foreground/70 text-sm sm:text-base leading-relaxed">{desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Illustrative gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-14">
            {[
              { src: dimCnc, alt: "هيكل ألمنيوم CNC مقاوم للخدوش" },
              { src: dimSize, alt: "أبعاد المنتج بالتفصيل — 130mm × 128mm" },
              { src: dimAccessories, alt: "محتويات العلبة والإكسسوارات" },
            ].map((img) => (
              <div key={img.src} className="group overflow-hidden rounded-2xl shadow-card border border-primary/10 hover:shadow-glow transition-all duration-500">
                <div className="aspect-[4/5] w-full bg-white rounded-2xl overflow-hidden flex items-center justify-center">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Zoom Dialog */}
          <Dialog open={zoomIndex !== null} onOpenChange={(o) => !o && setZoomIndex(null)}>
            <DialogContent className="max-w-3xl p-0 bg-white border-primary/10 overflow-hidden">
              {zoomIndex !== null && (
                <div className="relative">
                  <img
                    src={galleryImages[zoomIndex].src}
                    alt={galleryImages[zoomIndex].alt}
                    className="w-full h-auto max-h-[85vh] object-contain bg-muted"
                  />
                </div>
              )}
            </DialogContent>
          </Dialog>

          <div className="text-center mt-10 sm:mt-12">
            <CTAButton>اطلب الآن وحوّل Setup تاعك</CTAButton>
          </div>
        </div>
      </section>

      {/* ORDER FORM */}
      <section id="order" className="py-14 sm:py-20 relative overflow-hidden bg-transparent">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-80 bg-primary/6 blur-3xl rounded-full" />
        <div className="container relative max-w-2xl px-4">
          <Card className="p-6 sm:p-8 md:p-10 bg-white border-primary/15 shadow-card text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-primary text-white font-bold text-sm mb-5 sm:mb-6 shadow-blue">
              <Sparkles className="w-4 h-4" /> عرض خاص
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 font-black text-foreground">احصل عليه الآن</h2>
            <div className="flex items-baseline justify-center gap-2 mb-6 sm:mb-8">
              <span className="text-5xl sm:text-6xl md:text-6xl font-black text-gradient">9800</span>
              <span className="text-xl sm:text-2xl font-bold text-foreground">دج</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 sm:mb-8">
              {[
                { icon: CreditCard, t: "دفع عند الاستلام" },
                { icon: Truck, t: "توصيل لكل الجزائر" },
                { icon: ShieldCheck, t: "ضمان الجودة" },
              ].map(({ icon: Icon, t }) => (
                <div
                  key={t}
                  className="flex items-center justify-center gap-2 p-3 rounded-lg bg-primary/5 border border-primary/15 hover:bg-primary/10 transition-all"
                >
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-foreground">{t}</span>
                </div>
              ))}
            </div>

            <form
              className="space-y-3 sm:space-y-4 text-right"
              onSubmit={async (e) => {
                e.preventDefault();
                if (!wilayaCode || !commune || !fullName || !phone || submitting) return;

                setSubmitting(true);
                const wilayaName = wilayas.find((w) => w.code === wilayaCode)?.name ?? "";
                const orderData = {
                  name: fullName,
                  phone: phone,
                  state: `${wilayaCode} - ${wilayaName}`,
                  city: `${commune} - ${address}`,
                  color: color,
                };

                try {
                  // Fire-and-forget to Google Sheets (no-cors → opaque response is OK)
                  fetch(
                    "https://script.google.com/macros/s/AKfycbwyqf4c2m5gqRFDMdrUl8U5A41nSVuV5DXbdV4uvtshWVhXGNhdU6r2o1Ka4Xn34Kdc/exec",
                    {
                      method: "POST",
                      mode: "no-cors",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(orderData),
                    },
                  ).catch(() => {});
                } finally {
                  // SPA navigation — renders ThankYou in-app, no 404, Purchase pixel fires there
                  navigate("/thank-you");
                }
              }}
            >
              {/* Required Fields Indicator */}
              <div className="text-xs text-muted-foreground text-right mb-3">
                <span className="text-destructive font-bold">*</span> الحقول المطلوبة
              </div>

              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <input
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="الاسم الكامل"
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg border border-primary/20 bg-white text-card-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 text-right font-medium"
                />
                <input
                  required
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="رقم الهاتف"
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg border border-primary/20 bg-white text-card-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 text-right font-medium"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <Select
                  value={wilayaCode}
                  onValueChange={(v) => {
                    setWilayaCode(v);
                    setCommune("");
                  }}
                  required
                >
                  <SelectTrigger className="h-auto px-4 sm:px-5 py-3 sm:py-4 rounded-lg border-primary/20 bg-white text-card-foreground text-right font-medium">
                    <SelectValue placeholder="اختر الولاية" />
                  </SelectTrigger>
                  <SelectContent className="max-h-72">
                    {wilayas.map((w) => (
                      <SelectItem key={w.code} value={w.code} className="text-right">
                        {w.code} - {w.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select
                  value={commune}
                  onValueChange={setCommune}
                  disabled={!wilayaCode}
                  required
                >
                  <SelectTrigger className="h-auto px-4 sm:px-5 py-3 sm:py-4 rounded-lg border-primary/20 bg-white text-card-foreground text-right font-medium disabled:opacity-50">
                    <SelectValue placeholder={wilayaCode ? "اختر البلدية" : "اختر الولاية أولاً"} />
                  </SelectTrigger>
                  <SelectContent className="max-h-72">
                    {communes.map((c) => (
                      <SelectItem key={c} value={c} className="text-right">
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="العنوان بالتفصيل (اختياري)"
                className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg border border-primary/20 bg-white text-card-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 text-right font-medium"
              />

              {/* Color selector */}
              <div className="space-y-2 pt-1">
                <label className="block text-sm font-bold text-foreground">اختر اللون</label>
                <div className="grid grid-cols-2 gap-3">
                  {([
                    { value: "أبيض", swatch: "bg-white border-primary/30", text: "text-foreground" },
                    { value: "أسود", swatch: "bg-gray-900 border-primary/30", text: "text-white" },
                  ] as const).map((opt) => {
                    const active = color === opt.value;
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setColor(opt.value)}
                        className={`flex items-center justify-center gap-3 px-4 py-3 rounded-lg border-2 transition-all font-semibold text-card-foreground ${
                          active
                            ? "border-primary bg-primary/5 shadow-blue"
                            : "border-primary/20 hover:border-primary/50 bg-white"
                        }`}
                      >
                        <span className={`w-6 h-6 rounded-full border-2 ${opt.swatch}`} />
                        <span>{opt.value}</span>
                        {active && <Check className="w-4 h-4 text-primary" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={submitting}
                className="w-full bg-gradient-primary text-white hover:opacity-90 shadow-blue text-base sm:text-lg font-black py-5 sm:py-6 rounded-lg transition-all disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    جاري الإرسال...
                  </>
                ) : (
                  <>تأكيد الطلب 🚀</>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-primary/10 bg-card/5 backdrop-blur">
        <div className="container text-center space-y-3">
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center shadow-blue">
              <Cpu className="w-4 h-4 text-white" />
            </div>
            <span className="font-black text-foreground">GPU Stand Pro</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 جميع الحقوق محفوظة · صُمم لعشاق Gaming</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
