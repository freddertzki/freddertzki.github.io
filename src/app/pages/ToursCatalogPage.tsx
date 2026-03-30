import { Link } from "react-router";
import { Calendar, MapPin, Users, Clock, Search, SlidersHorizontal } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function ToursCatalogPage() {
  const tours = [
    {
      id: 1,
      title: "Золотое кольцо России",
      description: "Паломничество по древним городам с посещением святынь Владимира, Суздаля, Ростова Великого",
      duration: "5 дней",
      price: "25 000 ₽",
      image: "https://images.unsplash.com/photo-1768383206344-dfeb4a00b18d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcnRob2RveCUyMGNodXJjaCUyMGdvbGRlbiUyMGRvbWV8ZW58MXx8fHwxNzc0ODU0ODA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      available: 12,
      category: "Россия",
      difficulty: "Легкий"
    },
    {
      id: 2,
      title: "Святая гора Афон",
      description: "Духовное путешествие к монашеской республике, посещение древних монастырей",
      duration: "7 дней",
      price: "55 000 ₽",
      image: "https://images.unsplash.com/photo-1660804527531-729bc095b8b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25hc3RlcnklMjBtb3VudGFpbnMlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzc0ODU0ODA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      available: 8,
      category: "Греция",
      difficulty: "Средний"
    },
    {
      id: 3,
      title: "Святыни Подмосковья",
      description: "Однодневные поездки к чудотворным иконам и мощам, Троице-Сергиева Лавра",
      duration: "1 день",
      price: "3 500 ₽",
      image: "https://images.unsplash.com/photo-1767627650284-a62e7e24a757?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxncmltYWdlJTIwbW9uYXN0ZXJ5JTIwZmFpdGh8ZW58MXx8fHwxNzc0ODU0ODA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      available: 25,
      category: "Подмосковье",
      difficulty: "Легкий"
    },
    {
      id: 4,
      title: "Дивеево и Муром",
      description: "К святыням Серафима Саровского и Петра и Февронии Муромских",
      duration: "3 дня",
      price: "12 500 ₽",
      image: "https://images.unsplash.com/photo-1768383206344-dfeb4a00b18d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcnRob2RveCUyMGNodXJjaCUyMGdvbGRlbiUyMGRvbWV8ZW58MXx8fHwxNzc0ODU0ODA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      available: 15,
      category: "Россия",
      difficulty: "Легкий"
    },
    {
      id: 5,
      title: "Святая Земля",
      description: "Паломничество в Иерусалим, Вифлеем, Назарет и другие библейские места",
      duration: "10 дней",
      price: "85 000 ₽",
      image: "https://images.unsplash.com/photo-1763544701346-ef955ff9ad80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGlyaXR1YWwlMjBqb3VybmV5JTIwcGF0aHxlbnwxfHx8fDE3NzQ4NTQ4MDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      available: 10,
      category: "Израиль",
      difficulty: "Средний"
    },
    {
      id: 6,
      title: "Оптина Пустынь",
      description: "Духовное путешествие в обитель старцев, место особой благодати",
      duration: "1 день",
      price: "4 200 ₽",
      image: "https://images.unsplash.com/photo-1660804527531-729bc095b8b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25hc3RlcnklMjBtb3VudGFpbnMlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzc0ODU0ODA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      available: 20,
      category: "Россия",
      difficulty: "Легкий"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">Каталог туров</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Выберите паломническую поездку по душе. Все маршруты тщательно продуманы и благословлены.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Поиск по названию или направлению..."
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Фильтры
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Категория" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все категории</SelectItem>
                <SelectItem value="russia">Россия</SelectItem>
                <SelectItem value="abroad">За рубеж</SelectItem>
                <SelectItem value="nearby">Подмосковье</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Длительность" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Любая</SelectItem>
                <SelectItem value="1">1 день</SelectItem>
                <SelectItem value="2-3">2-3 дня</SelectItem>
                <SelectItem value="4-7">4-7 дней</SelectItem>
                <SelectItem value="7plus">7+ дней</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Сложность" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Любая</SelectItem>
                <SelectItem value="easy">Легкий</SelectItem>
                <SelectItem value="medium">Средний</SelectItem>
                <SelectItem value="hard">Сложный</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Сортировка" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">По популярности</SelectItem>
                <SelectItem value="price-asc">Цена: по возрастанию</SelectItem>
                <SelectItem value="price-desc">Цена: по убыванию</SelectItem>
                <SelectItem value="duration">По длительности</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Tours Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tours.map((tour) => (
            <Card key={tour.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 right-4 flex justify-between">
                  <Badge className="bg-primary">{tour.category}</Badge>
                  <Badge variant="outline" className="bg-white/90 backdrop-blur">{tour.duration}</Badge>
                </div>
              </div>
              <CardHeader>
                <h3 className="font-serif text-xl mb-2">{tour.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{tour.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Длительность: {tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>Осталось {tour.available} мест</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Сложность: {tour.difficulty}</span>
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

        {/* Pagination */}
        <div className="flex justify-center gap-2">
          <Button variant="outline" size="sm">Предыдущая</Button>
          <Button variant="outline" size="sm">1</Button>
          <Button size="sm">2</Button>
          <Button variant="outline" size="sm">3</Button>
          <Button variant="outline" size="sm">Следующая</Button>
        </div>
      </div>
    </div>
  );
}
