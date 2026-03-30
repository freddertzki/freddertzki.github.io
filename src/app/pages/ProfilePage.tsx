import { Link } from "react-router";
import { User, Mail, Phone, MapPin, Calendar, Settings, LogOut } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export function ProfilePage() {
  const userBookings = [
    {
      id: 1,
      tour: "Золотое кольцо России",
      date: "15 апреля 2026",
      status: "Подтверждено",
      price: "25 000 ₽"
    },
    {
      id: 2,
      tour: "Святыни Подмосковья",
      date: "5 апреля 2026",
      status: "Ожидает оплаты",
      price: "3 500 ₽"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-4xl mb-8">Личный кабинет</h1>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <User className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl">Иван Иванов</h3>
                  <p className="text-sm text-muted-foreground">ivan@example.com</p>
                </div>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    <User className="h-4 w-4 mr-2" />
                    Профиль
                  </Button>
                  <Link to="/my-tours" className="block">
                    <Button variant="ghost" className="w-full justify-start">
                      <Calendar className="h-4 w-4 mr-2" />
                      Мои туры
                    </Button>
                  </Link>
                  <Button variant="ghost" className="w-full justify-start">
                    <Settings className="h-4 w-4 mr-2" />
                    Настройки
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-destructive hover:text-destructive">
                    <LogOut className="h-4 w-4 mr-2" />
                    Выйти
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger value="profile">Профиль</TabsTrigger>
                <TabsTrigger value="bookings">История заказов</TabsTrigger>
                <TabsTrigger value="settings">Настройки</TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="mt-6">
                <Card>
                  <CardHeader>
                    <h2 className="font-serif text-2xl">Личные данные</h2>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm mb-2 block">Имя</label>
                          <Input defaultValue="Иван" />
                        </div>
                        <div>
                          <label className="text-sm mb-2 block">Фамилия</label>
                          <Input defaultValue="Иванов" />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm mb-2 block">Email</label>
                        <Input type="email" defaultValue="ivan@example.com" />
                      </div>
                      <div>
                        <label className="text-sm mb-2 block">Телефон</label>
                        <Input type="tel" defaultValue="+7 (999) 999-99-99" />
                      </div>
                      <div>
                        <label className="text-sm mb-2 block">Дата рождения</label>
                        <Input type="date" defaultValue="1985-01-15" />
                      </div>
                      <div>
                        <label className="text-sm mb-2 block">Адрес</label>
                        <Input defaultValue="г. Москва, ул. Примерная, д. 1" />
                      </div>
                      <Button>Сохранить изменения</Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="bookings" className="mt-6 space-y-4">
                {userBookings.map((booking) => (
                  <Card key={booking.id}>
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <h3 className="font-serif text-xl mb-2">{booking.tour}</h3>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              {booking.date}
                            </div>
                            <div className={`px-3 py-1 rounded-full text-xs ${
                              booking.status === "Подтверждено" 
                                ? "bg-accent text-accent-foreground" 
                                : "bg-muted text-muted-foreground"
                            }`}>
                              {booking.status}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="font-serif text-2xl text-primary">{booking.price}</div>
                          <Link to={`/tours/${booking.id}`}>
                            <Button variant="outline">Подробнее</Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="settings" className="mt-6">
                <Card>
                  <CardHeader>
                    <h2 className="font-serif text-2xl">Настройки аккаунта</h2>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-serif text-lg mb-4">Изменить пароль</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm mb-2 block">Текущий пароль</label>
                          <Input type="password" />
                        </div>
                        <div>
                          <label className="text-sm mb-2 block">Новый пароль</label>
                          <Input type="password" />
                        </div>
                        <div>
                          <label className="text-sm mb-2 block">Подтвердите пароль</label>
                          <Input type="password" />
                        </div>
                        <Button>Изменить пароль</Button>
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t">
                      <h3 className="font-serif text-lg mb-4">Уведомления</h3>
                      <div className="space-y-3">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" defaultChecked className="rounded" />
                          <span className="text-sm">Email-уведомления о новых турах</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" defaultChecked className="rounded" />
                          <span className="text-sm">SMS-напоминания перед поездкой</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">Новости и акции</span>
                        </label>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
