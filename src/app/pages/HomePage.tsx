import { Link } from "react-router";
import { Calendar, MapPin, Users, ArrowRight, Heart, Church, Clock } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function HomePage() {
  const featuredTours = [
    {
      id: 1,
      title: "Золотое кольцо России",
      description: "Паломничество по древним городам с посещением святынь",
      duration: "5 дней",
      price: "25 000 ₽",
      image: "https://images.unsplash.com/photo-1768383206344-dfeb4a00b18d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcnRob2RveCUyMGNodXJjaCUyMGdvbGRlbiUyMGRvbWV8ZW58MXx8fHwxNzc0ODU0ODA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      available: 12,
      date: "15 апреля 2026"
    },
    {
      id: 2,
      title: "Святая гора Афон",
      description: "Духовное путешествие к монашеской республике",
      duration: "7 дней",
      price: "55 000 ₽",
      image: "https://images.unsplash.com/photo-1660804527531-729bc095b8b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25hc3RlcnklMjBtb3VudGFpbnMlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzc0ODU0ODA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      available: 8,
      date: "20 мая 2026"
    },
    {
      id: 3,
      title: "Святыни Подмосковья",
      description: "Однодневные поездки к чудотворным иконам и мощам",
      duration: "1 день",
      price: "3 500 ₽",
      image: "https://images.unsplash.com/photo-1767627650284-a62e7e24a757?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxncmltYWdlJTIwbW9uYXN0ZXJ5JTIwZmFpdGh8ZW58MXx8fHwxNzc0ODU0ODA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      available: 25,
      date: "Каждую субботу"
    }
  ];

  const stats = [
    { icon: Users, value: "10 000+", label: "Паломников" },
    { icon: MapPin, value: "150+", label: "Направлений" },
    { icon: Calendar, value: "18", label: "Лет опыта" },
    { icon: Church, value: "500+", label: "Святынь" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1559536454-5a69386e8075?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBpbnRlcmlvciUyMGNhbmRsZXN8ZW58MXx8fHwxNzc0ODU0ODA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background/90"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Паломничество к святым местам
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Духовные путешествия по православным святыням России и мира
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/tours">
              <Button size="lg" className="text-lg px-8">
                Выбрать тур
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/schedule">
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 backdrop-blur text-white border-white/30 hover:bg-white/20">
                Расписание
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full mb-3">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="font-serif text-3xl font-semibold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Избранные туры</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Тщательно подобранные маршруты к наиболее почитаемым святыням
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredTours.map((tour) => (
              <Card key={tour.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary">{tour.duration}</Badge>
                </div>
                <CardHeader>
                  <h3 className="font-serif text-xl mb-2">{tour.title}</h3>
                  <p className="text-sm text-muted-foreground">{tour.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{tour.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>Осталось {tour.available} мест</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <div className="font-serif text-2xl text-primary">{tour.price}</div>
                  <Link to={`/tours/${tour.id}`}>
                    <Button>Подробнее</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/tours">
              <Button variant="outline" size="lg">
                Все туры
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">О нас</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                С 2005 года мы организуем паломнические поездки для православных христиан. 
                Наша миссия — помочь верующим прикоснуться к святыням, укрепить веру и 
                обрести духовное умиротворение.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Каждое путешествие сопровождается опытными гидами и священнослужителями. 
                Мы заботимся о комфорте паломников и создаём атмосферу духовного единения.
              </p>
              <Link to="/about">
                <Button variant="outline">
                  Узнать больше
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1768038566053-d839aea8a38e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcnRob2RveCUyMGljb24lMjByZWxpZ2lvdXMlMjBhcnR8ZW58MXx8fHwxNzc0ODU0ODA2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="О нас"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-12 w-12 mx-auto mb-6 opacity-90" />
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Поддержите наше служение</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Ваши пожертвования помогают организовывать паломничества для тех, 
            кто не может позволить себе поездку к святым местам
          </p>
          <Link to="/donations">
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
              Сделать пожертвование
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
