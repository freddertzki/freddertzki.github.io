import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { Input } from "../components/ui/input";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function ReviewsPage() {
  const reviews = [
    {
      id: 1,
      author: "Мария Петрова",
      date: "15 марта 2026",
      tour: "Золотое кольцо России",
      rating: 5,
      text: "Благодарю за прекрасно организованное паломничество! Духовно обогатились всей семьёй. Священник-сопровождающий очень внимательный и знающий. Автобус комфортный, гостиницы чистые. Рекомендую!",
      image: "https://images.unsplash.com/photo-1768383206344-dfeb4a00b18d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcnRob2RveCUyMGNodXJjaCUyMGdvbGRlbiUyMGRvbWV8ZW58MXx8fHwxNzc0ODU0ODA1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 2,
      author: "Александр Иванов",
      date: "10 марта 2026",
      tour: "Святая гора Афон",
      rating: 5,
      text: "Поездка на Афон стала важнейшим событием моей жизни. Организация на высшем уровне, несмотря на сложность маршрута. Спасибо за возможность прикоснуться к святыням!",
      image: "https://images.unsplash.com/photo-1660804527531-729bc095b8b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25hc3RlcnklMjBtb3VudGFpbnMlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzc0ODU0ODA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 3,
      author: "Елена Сидорова",
      date: "5 марта 2026",
      tour: "Святыни Подмосковья",
      rating: 5,
      text: "Очень понравилась однодневная поездка! Успели посетить три монастыря, приложиться к святыням. Отличный вариант для тех, у кого мало времени.",
      image: "https://images.unsplash.com/photo-1767627650284-a62e7e24a757?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxncmltYWdlJTIwbW9uYXN0ZXJ5JTIwZmFpdGh8ZW58MXx8fHwxNzc0ODU0ODA2fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 4,
      author: "Ольга Николаева",
      date: "28 февраля 2026",
      tour: "Дивеево и Муром",
      rating: 5,
      text: "Незабываемые три дня! Особенно тронуло посещение источников в Дивеево. Группа подобралась замечательная, все друг другу помогали. Поездка укрепила веру.",
      image: "https://images.unsplash.com/photo-1768383206344-dfeb4a00b18d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcnRob2RveCUyMGNodXJjaCUyMGdvbGRlbiUyMGRvbWV8ZW58MXx8fHwxNzc0ODU0ODA1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 5,
      author: "Сергей Васильев",
      date: "20 февраля 2026",
      tour: "Святая Земля",
      rating: 5,
      text: "Иерусалим... нет слов передать эти чувства. Благодарю организаторов за профессионализм. Всё продумано до мелочей. Обязательно поеду ещё раз!",
      image: "https://images.unsplash.com/photo-1763544701346-ef955ff9ad80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGlyaXR1YWwlMjBqb3VybmV5JTIwcGF0aHxlbnwxfHx8fDE3NzQ4NTQ4MDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 6,
      author: "Анна Михайлова",
      date: "15 февраля 2026",
      tour: "Оптина Пустынь",
      rating: 5,
      text: "Прекрасная поездка! Особое место благодати. Гид очень интересно рассказывал об истории монастыря и старцах. Всем советую побывать.",
      image: "https://images.unsplash.com/photo-1660804527531-729bc095b8b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25hc3RlcnklMjBtb3VudGFpbnMlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzc0ODU0ODA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо за ваш отзыв! Он будет опубликован после модерации.");
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">Отзывы паломников</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Мнения тех, кто уже совершил паломничество вместе с нами
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="font-serif text-4xl text-primary mb-2">10 000+</div>
              <div className="text-sm text-muted-foreground">Довольных паломников</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">Средняя оценка</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="font-serif text-4xl text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Рекомендуют</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="font-serif text-4xl text-primary mb-2">18</div>
              <div className="text-sm text-muted-foreground">Лет опыта</div>
            </CardContent>
          </Card>
        </div>

        {/* Reviews Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Reviews List */}
          <div className="lg:col-span-2 space-y-6">
            {reviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="pt-6">
                  <div className="flex gap-4 mb-4">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <ImageWithFallback
                        src={review.image}
                        alt={review.tour}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-lg">{review.author}</h3>
                      <p className="text-sm text-muted-foreground">{review.tour}</p>
                      <p className="text-xs text-muted-foreground">{review.date}</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-muted/20" />
                    <p className="text-muted-foreground leading-relaxed pl-6">{review.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Leave Review Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="pt-6">
                <h2 className="font-serif text-2xl mb-4">Оставить отзыв</h2>
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
                    <label className="text-sm mb-2 block">Какой тур вы посетили? *</label>
                    <Input required placeholder="Название тура" />
                  </div>

                  <div>
                    <label className="text-sm mb-2 block">Оценка *</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <button
                          key={rating}
                          type="button"
                          className="hover:scale-110 transition-transform"
                        >
                          <Star className="h-6 w-6 text-muted-foreground hover:text-primary hover:fill-primary" />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm mb-2 block">Ваш отзыв *</label>
                    <Textarea
                      required
                      placeholder="Поделитесь впечатлениями от поездки..."
                      rows={6}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Отправить отзыв
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Отзыв будет опубликован после проверки модератором
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
