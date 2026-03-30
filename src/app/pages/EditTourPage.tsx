import { useParams, useNavigate } from "react-router";
import { ArrowLeft, Save } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

export function EditTourPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Изменения сохранены!");
    navigate("/my-tours");
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Назад
        </Button>

        <h1 className="font-serif text-4xl mb-8">Редактирование бронирования</h1>

        <form onSubmit={handleSave}>
          <Card>
            <CardHeader>
              <h2 className="font-serif text-2xl">Информация о паломнике</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm mb-2 block">Имя *</label>
                  <Input defaultValue="Иван" required />
                </div>
                <div>
                  <label className="text-sm mb-2 block">Фамилия *</label>
                  <Input defaultValue="Иванов" required />
                </div>
              </div>

              <div>
                <label className="text-sm mb-2 block">Email *</label>
                <Input type="email" defaultValue="ivan@example.com" required />
              </div>

              <div>
                <label className="text-sm mb-2 block">Телефон *</label>
                <Input type="tel" defaultValue="+7 (999) 999-99-99" required />
              </div>

              <div>
                <label className="text-sm mb-2 block">Дата рождения</label>
                <Input type="date" defaultValue="1985-01-15" />
              </div>

              <div>
                <label className="text-sm mb-2 block">Номер паспорта</label>
                <Input placeholder="0000 000000" />
              </div>

              <div>
                <label className="text-sm mb-2 block">Особые пожелания</label>
                <Textarea 
                  placeholder="Укажите особые пожелания, диетические ограничения, медицинскую информацию..."
                  rows={4}
                />
              </div>

              <div className="pt-4 border-t">
                <h3 className="font-serif text-lg mb-4">Дополнительные услуги</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Одноместное размещение (+5 000 ₽)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="text-sm">Питание (обеды и ужины) (+3 000 ₽)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Трансфер из аэропорта (+2 000 ₽)</span>
                  </label>
                </div>
              </div>

              <div className="flex gap-3 pt-6">
                <Button type="submit" className="flex-1">
                  <Save className="h-4 w-4 mr-2" />
                  Сохранить изменения
                </Button>
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => navigate(-1)}
                >
                  Отмена
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  );
}
