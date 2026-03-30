import { useState } from "react";
import { Search, ChevronDown, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";

export function QAPage() {
  const [question, setQuestion] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const categories = [
    { id: "booking", label: "Бронирование и оплата" },
    { id: "tours", label: "О турах" },
    { id: "documents", label: "Документы" },
    { id: "comfort", label: "Комфорт и размещение" },
    { id: "other", label: "Другое" }
  ];

  const faqs = [
    {
      category: "booking",
      question: "Как забронировать место в поездке?",
      answer: "Вы можете забронировать место через сайт, нажав кнопку 'Записаться на тур', или позвонив нам по телефону +7 (999) 999-99-99. Бронирование подтверждается после внесения предоплаты."
    },
    {
      category: "booking",
      question: "Какие способы оплаты вы принимаете?",
      answer: "Мы принимаем оплату наличными в офисе, банковским переводом на расчетный счет, а также онлайн-оплату банковскими картами через защищенный платежный шлюз."
    },
    {
      category: "booking",
      question: "Можно ли вернуть деньги при отмене поездки?",
      answer: "Да, возврат возможен. При отмене за 7 и более дней до выезда возвращается 100% стоимости. При отмене за 3-6 дней — 50%. За 2 дня и менее — возврат не производится."
    },
    {
      category: "tours",
      question: "Что включено в стоимость тура?",
      answer: "В стоимость включены: транспорт, проживание, завтраки, услуги священника-сопровождающего, экскурсионное обслуживание, входные билеты. Обеды и ужины обычно оплачиваются отдельно."
    },
    {
      category: "tours",
      question: "Какая физическая подготовка требуется?",
      answer: "Для большинства туров специальная подготовка не требуется. В описании тура указана сложность маршрута. Если у вас есть проблемы со здоровьем, сообщите нам заранее."
    },
    {
      category: "tours",
      question: "Можно ли взять детей?",
      answer: "Да, дети приветствуются! Для детей до 7 лет предусмотрены скидки. Просим учитывать длительность и особенности маршрута при планировании поездки с детьми."
    },
    {
      category: "documents",
      question: "Какие документы нужны для поездки?",
      answer: "Для поездок по России — паспорт РФ. Для заграничных туров — загранпаспорт (срок действия не менее 6 месяцев после возвращения) и при необходимости виза."
    },
    {
      category: "documents",
      question: "Нужна ли виза для поездки на Афон?",
      answer: "Для поездки на Афон требуется шенгенская виза в Грецию и специальное разрешение (диамонитирион), которое мы оформляем для группы."
    },
    {
      category: "comfort",
      question: "Где мы будем жить во время тура?",
      answer: "Размещение в гостиницах 2-3* или монастырских гостиницах. Номера на 2-3 человека с удобствами. Одноместное размещение доступно за доплату."
    },
    {
      category: "comfort",
      question: "Какое питание предоставляется?",
      answer: "В стоимость обычно включены завтраки. Обеды и ужины организуются в кафе/трапезных (общие трапезы по желанию). В дни постов предлагается постное меню."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Спасибо за ваш вопрос! Мы ответим в ближайшее время.");
    setQuestion("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">Вопросы и ответы</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ответы на часто задаваемые вопросы о паломнических поездках
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            {/* Search */}
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Поиск по вопросам..."
                  className="pl-10"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((cat) => (
                <Button key={cat.id} variant="outline" size="sm">
                  {cat.label}
                </Button>
              ))}
            </div>

            {/* FAQ Accordion */}
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-serif text-left">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Ask Question Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <h2 className="font-serif text-2xl">Задать вопрос</h2>
                <p className="text-sm text-muted-foreground">
                  Не нашли ответ? Напишите нам, и мы ответим в течение 24 часов
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm mb-2 block">Ваше имя</label>
                    <Input
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      placeholder="Иван Иванов"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm mb-2 block">Email</label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ivan@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm mb-2 block">Ваш вопрос</label>
                    <Textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Опишите ваш вопрос..."
                      rows={4}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Отправить вопрос
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Или позвоните нам: +7 (999) 999-99-99
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
