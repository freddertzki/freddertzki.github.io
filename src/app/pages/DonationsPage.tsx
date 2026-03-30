import { Heart, CreditCard, HandHeart, Users } from "lucide-react";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";

export function DonationsPage() {
  const purposes = [
    {
      icon: Users,
      title: "Помощь нуждающимся",
      description: "Оплата паломничеств для малоимущих семей и пенсионеров"
    },
    {
      icon: Heart,
      title: "Детские поездки",
      description: "Организация паломничеств для детей из многодетных семей"
    },
    {
      icon: HandHeart,
      title: "Восстановление святынь",
      description: "Помощь в восстановлении храмов и монастырей"
    }
  ];

  const amounts = [500, 1000, 2000, 5000];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо за ваше пожертвование! Да воздаст вам Господь!");
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h1 className="font-serif text-4xl md:text-5xl mb-4">Пожертвования</h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Ваша помощь делает возможным паломничество для тех, кто нуждается в духовной поддержке
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Purposes */}
        <div className="mb-12">
          <h2 className="font-serif text-3xl text-center mb-8">На что идут пожертвования</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {purposes.map((purpose, index) => {
              const Icon = purpose.icon;
              return (
                <Card key={index}>
                  <CardContent className="pt-8 pb-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="font-serif text-xl mb-2">{purpose.title}</h3>
                    <p className="text-sm text-muted-foreground">{purpose.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-secondary/30">
            <CardContent className="pt-6 text-center">
              <div className="font-serif text-4xl text-primary mb-2">250</div>
              <div className="text-sm text-muted-foreground">Семей получили помощь</div>
            </CardContent>
          </Card>
          <Card className="bg-secondary/30">
            <CardContent className="pt-6 text-center">
              <div className="font-serif text-4xl text-primary mb-2">3.5 млн ₽</div>
              <div className="text-sm text-muted-foreground">Собрано в 2025 году</div>
            </CardContent>
          </Card>
          <Card className="bg-secondary/30">
            <CardContent className="pt-6 text-center">
              <div className="font-serif text-4xl text-primary mb-2">15</div>
              <div className="text-sm text-muted-foreground">Храмов получили помощь</div>
            </CardContent>
          </Card>
          <Card className="bg-secondary/30">
            <CardContent className="pt-6 text-center">
              <div className="font-serif text-4xl text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Благотворителей</div>
            </CardContent>
          </Card>
        </div>

        {/* Donation Form */}
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <h2 className="font-serif text-3xl text-center">Сделать пожертвование</h2>
              <p className="text-center text-muted-foreground">
                Выберите сумму или введите свою
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Amount Selection */}
                <div>
                  <label className="text-sm mb-3 block">Сумма пожертвования</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                    {amounts.map((amount) => (
                      <Button
                        key={amount}
                        type="button"
                        variant="outline"
                        className="h-16 text-lg font-serif"
                      >
                        {amount.toLocaleString()} ₽
                      </Button>
                    ))}
                  </div>
                  <Input
                    type="number"
                    placeholder="Или введите свою сумму"
                    className="text-lg"
                  />
                </div>

                {/* Purpose */}
                <div>
                  <label className="text-sm mb-3 block">Цель пожертвования</label>
                  <RadioGroup defaultValue="general">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="general" id="general" />
                        <label htmlFor="general" className="cursor-pointer flex-1">
                          На общие нужды
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="families" id="families" />
                        <label htmlFor="families" className="cursor-pointer flex-1">
                          Помощь нуждающимся семьям
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="children" id="children" />
                        <label htmlFor="children" className="cursor-pointer flex-1">
                          Детские паломничества
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="temples" id="temples" />
                        <label htmlFor="temples" className="cursor-pointer flex-1">
                          Восстановление храмов
                        </label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                {/* Donor Info */}
                <div className="space-y-4 pt-4 border-t">
                  <h3 className="font-serif text-lg">Ваши данные (необязательно)</h3>
                  <div>
                    <label className="text-sm mb-2 block">Имя для молитвы</label>
                    <Input placeholder="Иоанн, Мария..." />
                    <p className="text-xs text-muted-foreground mt-1">
                      Мы будем молиться за вас на богослужениях
                    </p>
                  </div>
                  <div>
                    <label className="text-sm mb-2 block">Email для квитанции</label>
                    <Input type="email" placeholder="ivan@example.com" />
                  </div>
                  <div>
                    <label className="text-sm mb-2 block">Комментарий</label>
                    <Textarea
                      placeholder="Особые пожелания или молитвенные нужды..."
                      rows={3}
                    />
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="pt-4 border-t">
                  <label className="text-sm mb-3 block">Способ оплаты</label>
                  <div className="grid md:grid-cols-2 gap-3">
                    <Button type="button" variant="outline" className="h-16">
                      <CreditCard className="h-5 w-5 mr-2" />
                      Банковская карта
                    </Button>
                    <Button type="button" variant="outline" className="h-16">
                      <Heart className="h-5 w-5 mr-2" />
                      Система переводов
                    </Button>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Heart className="h-5 w-5 mr-2" />
                  Пожертвовать
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Все пожертвования используются строго по назначению.<br />
                  Отчётность публикуется ежеквартально.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Gratitude */}
        <Card className="mt-12 bg-secondary/30">
          <CardContent className="p-8 text-center">
            <h3 className="font-serif text-2xl mb-4">Благодарим за вашу щедрость!</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Каждое пожертвование, большое или малое, помогает нам исполнять нашу миссию — 
              приводить людей к святыням и укреплять их веру. Да благословит вас Господь!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
