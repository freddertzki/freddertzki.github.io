import { Link } from "react-router";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function NewsPage() {
  const news = [
    {
      id: 1,
      title: "Открыт новый маршрут на Валаам",
      excerpt: "С мая 2026 года начинаем регулярные паломничества на остров Валаам. Северная жемчужина православия теперь доступна для наших паломников.",
      date: "28 марта 2026",
      category: "Новые маршруты",
      image: "https://images.unsplash.com/photo-1650041319999-760232680c73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBjaHVyY2glMjBydXNzaWF8ZW58MXx8fHwxNzc0ODU1MDkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 2,
      title: "Пасхальные паломничества 2026",
      excerpt: "Специальная программа паломничеств на Пасху. Встретим Светлое Христово Воскресение в святых местах.",
      date: "25 марта 2026",
      category: "Праздники",
      image: "https://images.unsplash.com/photo-1768383206344-dfeb4a00b18d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcnRob2RveCUyMGNodXJjaCUyMGdvbGRlbiUyMGRvbWV8ZW58MXx8fHwxNzc0ODU0ODA1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 3,
      title: "Благодарим за поддержку!",
      excerpt: "Благодаря вашим пожертвованиям мы смогли организовать бесплатные паломничества для 50 нуждающихся семей.",
      date: "20 марта 2026",
      category: "Благотворительность",
      image: "https://images.unsplash.com/photo-1762013728442-c6cdde57371e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcnRob2RveCUyMHByYXllciUyMGhhbmRzfGVufDF8fHx8MTc3NDg1NTA5MXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 4,
      title: "Новое расписание на апрель",
      excerpt: "Опубликовано расписание паломнических поездок на апрель 2026 года. Доступно бронирование.",
      date: "15 марта 2026",
      category: "Объявления",
      image: "https://images.unsplash.com/photo-1767627650284-a62e7e24a757?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxncmltYWdlJTIwbW9uYXN0ZXJ5JTIwZmFpdGh8ZW58MXx8fHwxNzc0ODU0ODA2fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 5,
      title: "Отзывы паломников о Святой Земле",
      excerpt: "Делимся впечатлениями участников февральской поездки в Иерусалим. Читайте трогательные истории.",
      date: "10 марта 2026",
      category: "Отчеты",
      image: "https://images.unsplash.com/photo-1763544701346-ef955ff9ad80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGlyaXR1YWwlMjBqb3VybmV5JTIwcGF0aHxlbnwxfHx8fDE3NzQ4NTQ4MDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 6,
      title: "Обновление комфорта автобусов",
      excerpt: "Мы обновили парк автобусов для дальних поездок. Современные комфортабельные автобусы с кондиционером.",
      date: "5 марта 2026",
      category: "Обновления",
      image: "https://images.unsplash.com/photo-1762625369500-70c8b481cb87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMHBlb3BsZSUyMHRyYXZlbHxlbnwxfHx8fDE3NzQ4NTUwOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">Новости</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Актуальные события, новые маршруты и важные объявления
          </p>
        </div>

        {/* Featured News */}
        {news.length > 0 && (
          <Card className="mb-12 overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <ImageWithFallback
                  src={news[0].image}
                  alt={news[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-primary">{news[0].category}</Badge>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{news[0].date}</span>
                </div>
                <h2 className="font-serif text-3xl mb-4">{news[0].title}</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">{news[0].excerpt}</p>
                <Button className="w-fit">
                  Читать далее
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.slice(1).map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-primary/90 backdrop-blur">
                  {item.category}
                </Badge>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{item.date}</span>
                </div>
                <h3 className="font-serif text-xl">{item.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{item.excerpt}</p>
                <Button variant="outline" className="w-full">
                  Подробнее
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-12">
          <Button variant="outline" size="sm">Предыдущая</Button>
          <Button size="sm">1</Button>
          <Button variant="outline" size="sm">2</Button>
          <Button variant="outline" size="sm">3</Button>
          <Button variant="outline" size="sm">Следующая</Button>
        </div>
      </div>
    </div>
  );
}
