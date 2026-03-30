import { Link } from "react-router";
import { Calendar, MapPin, Users, Clock, CheckCircle, XCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export function MyToursPage() {
  const upcomingTours = [
    {
      id: 1,
      title: "Золотое кольцо России",
      date: "15 апреля 2026",
      duration: "5 дней",
      status: "confirmed",
      statusLabel: "Подтверждено",
      price: "25 000 ₽",
      paid: true,
      meetingPoint: "м. ВДНХ, главный вход",
      meetingTime: "06:00"
    },
    {
      id: 2,
      title: "Святыни Подмосковья",
      date: "5 апреля 2026",
      duration: "1 день",
      status: "pending",
      statusLabel: "Ожидает оплаты",
      price: "3 500 ₽",
      paid: false,
      meetingPoint: "м. Комсомольская",
      meetingTime: "08:00"
    }
  ];

  const pastTours = [
    {
      id: 3,
      title: "Оптина Пустынь",
      date: "10 марта 2026",
      duration: "1 день",
      status: "completed",
      statusLabel: "Завершено"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-serif text-4xl">Мои туры</h1>
          <Link to="/tours">
            <Button>Выбрать новый тур</Button>
          </Link>
        </div>

        <Tabs defaultValue="upcoming">
          <TabsList>
            <TabsTrigger value="upcoming">Предстоящие ({upcomingTours.length})</TabsTrigger>
            <TabsTrigger value="past">Прошедшие ({pastTours.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="mt-6 space-y-6">
            {upcomingTours.map((tour) => (
              <Card key={tour.id}>
                <CardContent className="pt-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h2 className="font-serif text-2xl mb-2">{tour.title}</h2>
                          <Badge 
                            className={
                              tour.status === "confirmed" 
                                ? "bg-accent" 
                                : "bg-muted"
                            }
                          >
                            {tour.statusLabel}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <div className="font-serif text-2xl text-primary mb-1">{tour.price}</div>
                          {tour.paid ? (
                            <div className="flex items-center gap-1 text-sm text-accent">
                              <CheckCircle className="h-4 w-4" />
                              Оплачено
                            </div>
                          ) : (
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <XCircle className="h-4 w-4" />
                              Не оплачено
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{tour.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>{tour.duration}</span>
                          </div>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>{tour.meetingPoint}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>Сбор в {tour.meetingTime}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <Link to={`/tours/${tour.id}`}>
                          <Button variant="outline">Подробнее о туре</Button>
                        </Link>
                        {!tour.paid && (
                          <Button>Оплатить</Button>
                        )}
                        {tour.paid && (
                          <Button variant="outline">Скачать путевку</Button>
                        )}
                        <Link to={`/edit-tour/${tour.id}`}>
                          <Button variant="ghost">Изменить</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="past" className="mt-6 space-y-4">
            {pastTours.map((tour) => (
              <Card key={tour.id}>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-xl mb-2">{tour.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {tour.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {tour.duration}
                        </div>
                        <Badge variant="outline">{tour.statusLabel}</Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link to={`/tours/${tour.id}`}>
                        <Button variant="outline">Смотреть тур</Button>
                      </Link>
                      <Link to="/reviews">
                        <Button>Оставить отзыв</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
