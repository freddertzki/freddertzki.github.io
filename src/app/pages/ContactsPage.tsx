import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

export function ContactsPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">Контакты</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Свяжитесь с нами удобным способом. Мы всегда рады помочь!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg mb-1">Адрес офиса</h3>
                    <p className="text-muted-foreground">
                      г. Москва, ул. Примерная, д. 1, офис 100<br />
                      м. Комсомольская, 5 минут пешком
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg mb-1">Телефоны</h3>
                    <p className="text-muted-foreground">
                      +7 (999) 999-99-99 (общие вопросы)<br />
                      +7 (999) 888-88-88 (бронирование)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      info@pilgrimage.ru (общие вопросы)<br />
                      booking@pilgrimage.ru (бронирование)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg mb-1">Режим работы</h3>
                    <p className="text-muted-foreground">
                      Понедельник - Пятница: 09:00 - 18:00<br />
                      Суббота: 10:00 - 16:00<br />
                      Воскресенье: выходной
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <h2 className="font-serif text-2xl">Напишите нам</h2>
              <p className="text-sm text-muted-foreground">
                Заполните форму, и мы ответим в течение 24 часов
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm mb-2 block">Ваше имя *</label>
                  <Input required placeholder="Иван Иванов" />
                </div>

                <div>
                  <label className="text-sm mb-2 block">Email *</label>
                  <Input type="email" required placeholder="ivan@example.com" />
                </div>

                <div>
                  <label className="text-sm mb-2 block">Телефон</label>
                  <Input type="tel" placeholder="+7 (999) 999-99-99" />
                </div>

                <div>
                  <label className="text-sm mb-2 block">Тема обращения *</label>
                  <Input required placeholder="Вопрос о туре" />
                </div>

                <div>
                  <label className="text-sm mb-2 block">Сообщение *</label>
                  <Textarea
                    required
                    placeholder="Опишите ваш вопрос..."
                    rows={6}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Map */}
        <Card>
          <CardContent className="p-0">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Интерактивная карта с местоположением офиса
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <Card className="mt-8 bg-secondary/30">
          <CardContent className="p-6">
            <h3 className="font-serif text-xl mb-4">Как до нас добраться</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
              <div>
                <h4 className="font-medium text-foreground mb-2">На метро:</h4>
                <p>Станция метро «Комсомольская» (красная или кольцевая линия), выход к Ленинградскому вокзалу. От метро 5 минут пешком.</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">На автомобиле:</h4>
                <p>Рядом с офисом есть платная парковка. Стоимость: 100 руб/час. Въезд с ул. Примерная.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
