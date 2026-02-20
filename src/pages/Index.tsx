import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const HERO_IMG = "https://cdn.poehali.dev/projects/eb64c14c-102e-4beb-838b-913c6b7ba42b/files/6277179b-e66b-45db-b64f-bfd5f75d1166.jpg";
const PROMO_IMG = "https://cdn.poehali.dev/projects/eb64c14c-102e-4beb-838b-913c6b7ba42b/files/d8b12757-11b3-4d38-859c-56ea9fa73fa6.jpg";
const CATALOG_IMG = "https://cdn.poehali.dev/projects/eb64c14c-102e-4beb-838b-913c6b7ba42b/files/fc2fe6c1-3f24-4f29-b173-2a280d1d3c46.jpg";

interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  oldPrice?: string;
  category: string;
  icon: string;
  popular?: boolean;
}

interface Promo {
  id: number;
  title: string;
  description: string;
  discount: string;
  validUntil: string;
  color: string;
}

const services: Service[] = [
  { id: 1, title: "SMM-продвижение", description: "Комплексное ведение аккаунта: контент-план, публикации, сторис, аналитика и рост подписчиков", price: "25 000 ₽/мес", category: "Продвижение", icon: "TrendingUp", popular: true },
  { id: 2, title: "Таргетированная реклама", description: "Настройка и ведение рекламных кампаний в Instagram и Facebook с полной аналитикой", price: "30 000 ₽/мес", oldPrice: "40 000 ₽/мес", category: "Реклама", icon: "Target" },
  { id: 3, title: "Дизайн контента", description: "Создание визуального контента: посты, сторис, Reels-обложки в едином стиле бренда", price: "15 000 ₽/мес", category: "Дизайн", icon: "Palette", popular: true },
  { id: 4, title: "Фотосессия для бренда", description: "Профессиональная съёмка товаров и lifestyle-фото для ленты Instagram", price: "12 000 ₽", category: "Контент", icon: "Camera" },
  { id: 5, title: "Стратегия бренда", description: "Разработка позиционирования, tone of voice, визуальной концепции и контент-стратегии", price: "45 000 ₽", category: "Стратегия", icon: "Lightbulb" },
  { id: 6, title: "Reels-продакшн", description: "Съёмка, монтаж и постпродакшн коротких видео для максимального охвата", price: "8 000 ₽/шт", category: "Контент", icon: "Video", popular: true },
];

const promos: Promo[] = [
  { id: 1, title: "Первый месяц −30%", description: "Скидка 30% на любой пакет услуг для новых клиентов. Начни продвижение прямо сейчас!", discount: "-30%", validUntil: "до 15 марта", color: "gradient-promo" },
  { id: 2, title: "Пакет «Всё включено»", description: "SMM + таргет + дизайн со скидкой 20%. Комплексный подход к продвижению вашего бренда", discount: "-20%", validUntil: "до 28 февраля", color: "gradient-hero" },
  { id: 3, title: "Reels × 5 по цене 3", description: "Закажи 5 роликов и получи 2 в подарок. Идеально для запуска серии контента!", discount: "2 в 🎁", validUntil: "до 10 марта", color: "gradient-promo" },
];

const categories = ["Все", "Продвижение", "Реклама", "Дизайн", "Контент", "Стратегия"];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const filtered = activeCategory === "Все"
    ? services
    : services.filter((s) => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-background font-body">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl gradient-hero flex items-center justify-center">
              <Icon name="Sparkles" size={18} className="text-white" />
            </div>
            <span className="font-sans font-bold text-lg">BrandStudio</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">Услуги</a>
            <a href="#promos" className="hover:text-foreground transition-colors">Акции</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Контакты</a>
          </nav>
          <Button size="sm" className="gradient-hero border-0 text-white font-semibold">
            <Icon name="MessageCircle" size={16} className="mr-1" />
            Написать
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-5" />
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="animate-fade-in">
              <Badge variant="secondary" className="mb-4 font-medium">
                <Icon name="Zap" size={14} className="mr-1" /> Контент, который продаёт
              </Badge>
              <h1 className="font-sans font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-5">
                Продвигаем бренд <br/>
                <span className="gradient-text">в Instagram</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-8 max-w-md leading-relaxed">
                Создаём контент, настраиваем рекламу и выстраиваем стратегию роста для вашего бизнеса
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="gradient-hero border-0 text-white font-semibold text-base px-8">
                  Смотреть каталог
                  <Icon name="ArrowDown" size={18} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="font-semibold text-base">
                  <Icon name="Play" size={18} className="mr-2" />
                  Наши кейсы
                </Button>
              </div>
              <div className="flex items-center gap-6 mt-10 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full gradient-card flex items-center justify-center">
                    <Icon name="Users" size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-bold font-sans">200+</p>
                    <p className="text-muted-foreground">клиентов</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full gradient-card flex items-center justify-center">
                    <Icon name="Star" size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-bold font-sans">4.9</p>
                    <p className="text-muted-foreground">рейтинг</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full gradient-card flex items-center justify-center">
                    <Icon name="Award" size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-bold font-sans">5 лет</p>
                    <p className="text-muted-foreground">опыта</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-slide-up relative">
              <div className="absolute -inset-4 gradient-hero rounded-3xl opacity-20 blur-3xl" />
              <img
                src={HERO_IMG}
                alt="Продвижение бренда"
                className="relative rounded-2xl w-full aspect-square object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Promos */}
      <section id="promos" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Flame" size={28} className="text-orange-500" />
            <h2 className="font-sans font-bold text-3xl">Акции и скидки</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {promos.map((promo, i) => (
              <div
                key={promo.id}
                className={`${promo.color} rounded-2xl p-6 text-white hover-lift cursor-pointer`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm text-base font-bold px-3 py-1">
                    {promo.discount}
                  </Badge>
                  <span className="text-white/70 text-sm">{promo.validUntil}</span>
                </div>
                <h3 className="font-sans font-bold text-xl mb-2">{promo.title}</h3>
                <p className="text-white/85 text-sm leading-relaxed">{promo.description}</p>
                <Button variant="secondary" size="sm" className="mt-5 bg-white/20 text-white border-0 backdrop-blur-sm hover:bg-white/30 font-semibold">
                  Подробнее
                  <Icon name="ArrowRight" size={16} className="ml-1" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Catalog */}
      <section id="services" className="py-16 md:py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Icon name="LayoutGrid" size={28} className="text-primary" />
                <h2 className="font-sans font-bold text-3xl">Каталог услуг</h2>
              </div>
              <p className="text-muted-foreground">Выберите то, что подходит вашему бизнесу</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? "gradient-hero text-white shadow-lg"
                      : "bg-background text-muted-foreground hover:text-foreground border"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((service, i) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="bg-card rounded-2xl p-6 border hover-lift cursor-pointer group relative overflow-hidden"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {service.popular && (
                  <Badge className="absolute top-4 right-4 gradient-hero border-0 text-white text-xs">
                    Популярное
                  </Badge>
                )}
                <div className="w-12 h-12 rounded-xl gradient-card flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={service.icon} size={24} className="text-primary" />
                </div>
                <Badge variant="outline" className="mb-3 text-xs">{service.category}</Badge>
                <h3 className="font-sans font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">{service.description}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t">
                  <div>
                    <p className="font-sans font-bold text-xl text-foreground">{service.price}</p>
                    {service.oldPrice && (
                      <p className="text-sm text-muted-foreground line-through">{service.oldPrice}</p>
                    )}
                  </div>
                  <div className="w-10 h-10 rounded-full gradient-card flex items-center justify-center group-hover:gradient-hero group-hover:text-white transition-all">
                    <Icon name="ArrowRight" size={18} className="text-primary group-hover:text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="gradient-hero rounded-3xl p-8 md:p-14 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <img src={CATALOG_IMG} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10">
              <h2 className="font-sans font-black text-3xl md:text-4xl mb-4">Готовы начать продвижение?</h2>
              <p className="text-white/85 text-lg mb-8 max-w-lg mx-auto">Оставьте заявку — мы свяжемся с вами в течение часа и подберём оптимальную стратегию</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-white text-foreground hover:bg-white/90 font-bold text-base px-8">
                  <Icon name="Send" size={18} className="mr-2" />
                  Оставить заявку
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold text-base">
                  <Icon name="Phone" size={18} className="mr-2" />
                  +7 (999) 123-45-67
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg gradient-hero flex items-center justify-center">
              <Icon name="Sparkles" size={14} className="text-white" />
            </div>
            <span className="font-sans font-bold text-foreground">BrandStudio</span>
            <span>© 2026</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground transition-colors flex items-center gap-1">
              <Icon name="Instagram" size={16} /> Instagram
            </a>
            <a href="#" className="hover:text-foreground transition-colors flex items-center gap-1">
              <Icon name="Send" size={16} /> Telegram
            </a>
            <a href="#" className="hover:text-foreground transition-colors flex items-center gap-1">
              <Icon name="Mail" size={16} /> Email
            </a>
          </div>
        </div>
      </footer>

      {/* Service Detail Dialog */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-sans flex items-center gap-3">
              {selectedService && (
                <>
                  <div className="w-10 h-10 rounded-xl gradient-card flex items-center justify-center">
                    <Icon name={selectedService.icon} size={20} className="text-primary" />
                  </div>
                  {selectedService.title}
                </>
              )}
            </DialogTitle>
          </DialogHeader>
          {selectedService && (
            <div className="space-y-4">
              <Badge variant="outline">{selectedService.category}</Badge>
              <p className="text-muted-foreground leading-relaxed">{selectedService.description}</p>
              <div className="bg-muted rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Стоимость</p>
                  <p className="font-sans font-bold text-2xl">{selectedService.price}</p>
                  {selectedService.oldPrice && (
                    <p className="text-sm text-muted-foreground line-through">{selectedService.oldPrice}</p>
                  )}
                </div>
                {selectedService.popular && (
                  <Badge className="gradient-hero border-0 text-white">Хит</Badge>
                )}
              </div>
              <Button className="w-full gradient-hero border-0 text-white font-semibold" size="lg">
                <Icon name="MessageCircle" size={18} className="mr-2" />
                Заказать услугу
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;