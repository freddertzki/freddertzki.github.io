import { useParams, Link } from "react-router";
import { Calendar, MapPin, Users, Clock, CheckCircle, Info, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function TourDetailPage() {
  const { id } = useParams();

  const tour = {
    id: 1,
    title: "Золотое кольцо России",
    description: "Паломничество по древним городам с посещением святынь Владимира, Суздаля, Ростова Великого",
    fullDescription: "Уникальное паломническое путешествие по святым местам Золотого кольца России. В программе посещение древнейших храмов и монастырей, поклонение чудотворным иконам, участие в богослужениях.",
    duration: "5 дней / 4 ночи",
    price: "25 000 ₽",
    image: "https://images.unsplash.com/photo-1768383206344-dfeb4a00b18d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcnRob2RveCUyMGNodXJjaCUyMGdvbGRlbiUyMGRvbWV8ZW58MXx8fHwxNzc0ODU0ODA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    available: 12,
    startDate: "15 апреля 2026",
    endDate: "19 апреля 2026",
    difficulty: "Легкий",
    groupSize: "25-30 человек",
    
    program: [
      {
        day: 1,
        title: "Владимир - Боголюбово",
        activities: [
          "Отправление из Москвы в 07:00",
          "Успенский собор, поклонение Владимирской иконе",
          "Дмитриевский собор",
          "Свято-Боголюбский монастырь",
          "Храм Покрова на Нерли",
          "Размещение в гостинице"
        ]
      },
      {
        day: 2,
        title: "Суздаль",
        activities: [
          "Божественная литургия в Ризоположенском монастыре",
          "Кремль, Рождественский собор",
          "Спасо-Евфимиев монастырь",
          "Покровский монастырь",
          "Музей деревянного зодчества"
        ]
      },
      {
        day: 3,
        title: "Ростов Великий - Ярославль",
        activities: [
          "Ростовский кремль",
          "Спасо-Яковлевский монастырь",
          "Переезд в Ярославль",
          "Толгский монастырь, поклонение чудотворной иконе",
          "Спасо-Преображенский монастырь"
        ]
      },
      {
        day: 4,
        title: "Кострома - Ипатьевский монастырь",
        activities: [
          "Ипатьевский монастырь - колыбель дома Романовых",
          "Богоявленско-Анастасиин монастырь",
          "Поклонение Феодоровской иконе Божией Матери",
          "Свободное время"
        ]
      },
      {
        day: 5,
        title: "Возвращение в Москву",
        activities: [
          "Участие в ранней литургии",
          "Выезд в Москву",
          "Прибытие в Москву около 20:00"
        ]
      }
    ],
    
    included: [
      "Транспорт на комфортабельном автобусе",
      "Проживание в гостиницах (номера на 2-3 человека)",
      "Питание: завтраки",
      "Услуги священника-сопровождающего",
      "Экскурсионное обслуживание",
      "Входные билеты в музеи"
    ],
    
    notIncluded: [
      "Обеды и ужины (общие трапезы по желанию)",
      "Личные расходы",
      "Дополнительные экскурсии"
    ],
    
    recommendations: [
      "Удобная обувь для длительных прогулок",
      "Головные уборы для посещения храмов (женщинам - платки)",
      "Одежда по сезону, не стесняющая движений",
      "Документ, удостоверяющий личность",
      "Личные лекарства при необходимости"
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Hero Image */}
      <div className="relative h-[400px] md:h-[500px]">
        <ImageWithFallback
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-4 pb-8">
            <Link to="/tours" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-4">
              <ArrowLeft className="h-4 w-4" />
              Назад к каталогу
            </Link>
            <Badge className="bg-primary mb-4">5 дней / 4 ночи</Badge>
            <h1 className="font-serif text-3xl md:text-5xl text-white mb-2">{tour.title}</h1>
            <p className="text-lg text-white/90">{tour.description}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Info */}
            <Card>
              <CardContent className="pt-6">
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center text-center p-4">
                    <Calendar className="h-6 w-6 text-primary mb-2" />
                    <div className="text-sm text-muted-foreground mb-1">Даты</div>
                    <div className="font-medium text-sm">{tour.startDate}</div>
                  </div>
                  <div className="flex flex-col items-center text-center p-4">
                    <Clock className="h-6 w-6 text-primary mb-2" />
                    <div className="text-sm text-muted-foreground mb-1">Длительность</div>
                    <div className="font-medium text-sm">{tour.duration}</div>
                  </div>
                  <div className="flex flex-col items-center text-center p-4">
                    <Users className="h-6 w-6 text-primary mb-2" />
                    <div className="text-sm text-muted-foreground mb-1">Группа</div>
                    <div className="font-medium text-sm">{tour.groupSize}</div>
                  </div>
                  <div className="flex flex-col items-center text-center p-4">
                    <MapPin className="h-6 w-6 text-primary mb-2" />
                    <div className="text-sm text-muted-foreground mb-1">Сложность</div>
                    <div className="font-medium text-sm">{tour.difficulty}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tabs */}
            <Tabs defaultValue="program">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="program">Программа</TabsTrigger>
                <TabsTrigger value="included">Что включено</TabsTrigger>
                <TabsTrigger value="info">Полезная информация</TabsTrigger>
              </TabsList>

              <TabsContent value="program" className="mt-6 space-y-4">
                {tour.program.map((day) => (
                  <Card key={day.day}>
                    <CardHeader>
                      <h3 className="font-serif text-xl">День {day.day}: {day.title}</h3>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {day.activities.map((activity, index) => (
                          <li key={index} className="flex gap-3 text-muted-foreground">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="included" className="mt-6 space-y-6">
                <Card>
                  <CardHeader>
                    <h3 className="font-serif text-xl">Включено в стоимость</h3>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tour.included.map((item, index) => (
                        <li key={index} className="flex gap-3 text-muted-foreground">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <h3 className="font-serif text-xl">Дополнительно оплачивается</h3>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tour.notIncluded.map((item, index) => (
                        <li key={index} className="flex gap-3 text-muted-foreground">
                          <Info className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="info" className="mt-6">
                <Card>
                  <CardHeader>
                    <h3 className="font-serif text-xl">Что взять с собой</h3>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tour.recommendations.map((item, index) => (
                        <li key={index} className="flex gap-3 text-muted-foreground">
                          <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="pt-6 space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Стоимость тура</div>
                  <div className="font-serif text-4xl text-primary mb-4">{tour.price}</div>
                  <div className="text-sm text-muted-foreground">на человека</div>
                </div>

                <div className="py-4 border-y border-border space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Осталось мест:</span>
                    <span className="font-medium">{tour.available}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Дата отправления:</span>
                    <span className="font-medium">{tour.startDate}</span>
                  </div>
                </div>

                <Button className="w-full" size="lg">Записаться на тур</Button>
                <Link to="/qa" className="block">
                  <Button variant="outline" className="w-full">Задать вопрос</Button>
                </Link>

                <div className="text-xs text-muted-foreground text-center pt-4">
                  Регистрация заканчивается за 3 дня до отправления
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
