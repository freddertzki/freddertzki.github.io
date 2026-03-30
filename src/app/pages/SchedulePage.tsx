import { Calendar, MapPin, Users, Clock, Filter } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function SchedulePage() {
  const schedule = [
    {
      date: "5 апреля 2026",
      tours: [
        {
          id: 1,
          title: "Святыни Подмосковья",
          time: "08:00",
          duration: "1 день",
          available: 15,
          price: "3 500 ₽",
          image: "https://images.unsplash.com/photo-1767627650284-a62e7e24a757?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxncmltYWdlJTIwbW9uYXN0ZXJ5JTIwZmFpdGh8ZW58MXx8fHwxNzc0ODU0ODA2fDA&ixlib=rb-4.1.0&q=80&w=1080"
        }
      ]
    },
    {
      date: "12 апреля 2026",
      tours: [
        {
          id: 2,
          title: "Оптина Пустынь",
          time: "07:00",
          duration: "1 день",
          available: 20,
          price: "4 200 ₽",
          image: "https://images.unsplash.com/photo-1660804527531-729bc095b8b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25hc3RlcnklMjBtb3VudGFpbnMlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzc0ODU0ODA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
          id: 3,
          title: "Святыни Подмосковья",
          time: "08:00",
          duration: "1 день",
          available: 18,
          price: "3 500 ₽",
          image: "https://images.unsplash.com/photo-1767627650284-a62e7e24a757?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxncmltYWdlJTIwbW9uYXN0ZXJ5JTIwZmFpdGh8ZW58MXx8fHwxNzc0ODU0ODA2fDA&ixlib=rb-4.1.0&q=80&w=1080"
        }
      ]
    },
    {
      date: "15 апреля 2026",
      tours: [
        {
          id: 4,
          title: "Золотое кольцо России",
          time: "06:00",
          duration: "5 дней",
          available: 12,
          price: "25 000 ₽",
          image: "https://images.unsplash.com/photo-1768383206344-dfeb4a00b18d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcnRob2RveCUyMGNodXJjaCUyMGdvbGRlbiUyMGRvbWV8ZW58MXx8fHwxNzc0ODU0ODA1fDA&ixlib=rb-4.1.0&q=80&w=1080"
        }
      ]
    },
    {
      date: "20 мая 2026",
      tours: [
        {
          id: 5,
          title: "Святая гора Афон",
          time: "05:00",
          duration: "7 дней",
          available: 8,
          price: "55 000 ₽",
          image: "https://images.unsplash.com/photo-1660804527531-729bc095b8b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25hc3RlcnklMjBtb3VudGFpbnMlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzc0ODU0ODA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">Расписание поездок</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Планируйте свое паломничество заранее. Все даты и время отправления указаны точно.
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[200px]">
                <label className="text-sm mb-2 block">Месяц</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Все месяцы" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все месяцы</SelectItem>
                    <SelectItem value="april">Апрель 2026</SelectItem>
                    <SelectItem value="may">Май 2026</SelectItem>
                    <SelectItem value="june">Июнь 2026</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-1 min-w-[200px]">
                <label className="text-sm mb-2 block">Направление</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Все направления" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все направления</SelectItem>
                    <SelectItem value="moscow">Подмосковье</SelectItem>
                    <SelectItem value="golden">Золотое кольцо</SelectItem>
                    <SelectItem value="abroad">За рубеж</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-1 min-w-[200px]">
                <label className="text-sm mb-2 block">Длительность</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Любая" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Любая</SelectItem>
                    <SelectItem value="1">1 день</SelectItem>
                    <SelectItem value="2-3">2-3 дня</SelectItem>
                    <SelectItem value="4plus">4+ дней</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button>
                  <Filter className="h-4 w-4 mr-2" />
                  Применить
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Schedule List */}
        <div className="space-y-8">
          {schedule.map((day, dayIndex) => (
            <div key={dayIndex}>
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="h-5 w-5 text-primary" />
                <h2 className="font-serif text-2xl">{day.date}</h2>
              </div>

              <div className="grid gap-4">
                {day.tours.map((tour) => (
                  <Card key={tour.id} className="hover:shadow-md transition-shadow">
                    <div className="grid md:grid-cols-[200px_1fr_auto] gap-4 p-4">
                      {/* Image */}
                      <div className="relative h-32 md:h-auto rounded-lg overflow-hidden">
                        <ImageWithFallback
                          src={tour.image}
                          alt={tour.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex flex-col justify-center">
                        <h3 className="font-serif text-xl mb-2">{tour.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>Отправление в {tour.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{tour.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            <span>Свободно {tour.available} мест</span>
                          </div>
                        </div>
                      </div>

                      {/* Action */}
                      <div className="flex flex-col justify-center items-end gap-2">
                        <div className="font-serif text-2xl text-primary">{tour.price}</div>
                        <Button>Записаться</Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <Card className="mt-12 bg-secondary/30">
          <CardContent className="p-6">
            <h3 className="font-serif text-xl mb-3">Важная информация</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Регистрация на поездку заканчивается за 3 дня до отправления</li>
              <li>• Точное место и время сбора сообщается при бронировании</li>
              <li>• При себе иметь паспорт (для заграничных поездок - загранпаспорт)</li>
              <li>• Просим соблюдать дресс-код при посещении святых мест</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
