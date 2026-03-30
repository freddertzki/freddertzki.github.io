import { Church, Users, Award, Heart } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function AboutPage() {
  const values = [
    {
      icon: Church,
      title: "Духовность",
      description: "Каждое путешествие сопровождается священником и наполнено молитвой"
    },
    {
      icon: Users,
      title: "Единение",
      description: "Мы создаём атмосферу братства и взаимной поддержки между паломниками"
    },
    {
      icon: Award,
      title: "Опыт",
      description: "18 лет организации паломничеств, более 10 000 довольных паломников"
    },
    {
      icon: Heart,
      title: "Забота",
      description: "Индивидуальный подход к каждому паломнику, комфорт и безопасность"
    }
  ];

  const team = [
    { name: "Протоиерей Александр Иванов", role: "Духовный наставник", experience: "20 лет служения" },
    { name: "Мария Петрова", role: "Руководитель паломнической службы", experience: "15 лет опыта" },
    { name: "Сергей Сидоров", role: "Главный организатор поездок", experience: "12 лет в туризме" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1768038566053-d839aea8a38e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcnRob2RveCUyMGljb24lMjByZWxpZ2lvdXMlMjBhcnR8ZW58MXx8fHwxNzc0ODU0ODA2fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="О нас"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-background"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">О нас</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Служим людям на пути к святыням с 2005 года
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Наша миссия</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Помогать православным христианам прикоснуться к святыням, укрепить веру 
              и обрести духовное умиротворение через организацию паломнических поездок.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Мы верим, что паломничество — это не просто путешествие, а духовный подвиг, 
              который меняет сердца и жизни людей.
            </p>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="pt-8 pb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="font-serif text-xl mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-8 text-center">Наша история</h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="leading-relaxed">
                <strong className="text-foreground">2005 год</strong> — Начало деятельности. 
                Первая паломническая поездка в Троице-Сергиеву Лавру собрала 15 человек.
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">2008 год</strong> — Расширение маршрутов. 
                Начало регулярных поездок по Золотому кольцу России.
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">2012 год</strong> — Международные паломничества. 
                Организация первой поездки на Святую гору Афон.
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">2015 год</strong> — Развитие направлений. 
                Открыты маршруты в Святую Землю, Грецию, Италию.
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">2020 год</strong> — Юбилей. 
                15 лет служения, более 10 000 паломников посетили святыни.
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">2025 год</strong> — Сегодня мы продолжаем 
                организовывать паломничества с той же любовью и ответственностью, что и в первый день.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl mb-12 text-center">Наша команда</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-8 pb-6">
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-2">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl mb-4">Присоединяйтесь к нам</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Станьте частью нашей паломнической семьи и откройте для себя духовные сокровища
          </p>
        </div>
      </section>
    </div>
  );
}
