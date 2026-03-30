import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { X } from "lucide-react";

export function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "Все фото" },
    { id: "churches", label: "Храмы" },
    { id: "monasteries", label: "Монастыри" },
    { id: "pilgrims", label: "Паломники" },
    { id: "nature", label: "Природа" }
  ];

  const gallery = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1768383206344-dfeb4a00b18d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcnRob2RveCUyMGNodXJjaCUyMGdvbGRlbiUyMGRvbWV8ZW58MXx8fHwxNzc0ODU0ODA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Золотые купола",
      category: "churches"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1660804527531-729bc095b8b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25hc3RlcnklMjBtb3VudGFpbnMlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzc0ODU0ODA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Монастырь в горах",
      category: "monasteries"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1767627650284-a62e7e24a757?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxncmltYWdlJTIwbW9uYXN0ZXJ5JTIwZmFpdGh8ZW58MXx8fHwxNzc0ODU0ODA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Древняя обитель",
      category: "monasteries"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1559536454-5a69386e8075?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBpbnRlcmlvciUyMGNhbmRsZXN8ZW58MXx8fHwxNzc0ODU0ODA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Храмовая молитва",
      category: "churches"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1768038566053-d839aea8a38e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcnRob2RveCUyMGljb24lMjByZWxpZ2lvdXMlMjBhcnR8ZW58MXx8fHwxNzc0ODU0ODA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Святыня",
      category: "churches"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1763544701346-ef955ff9ad80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGlyaXR1YWwlMjBqb3VybmV5JTIwcGF0aHxlbnwxfHx8fDE3NzQ4NTQ4MDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Паломнический путь",
      category: "nature"
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1762625369500-70c8b481cb87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMHBlb3BsZSUyMHRyYXZlbHxlbnwxfHx8fDE3NzQ4NTUwOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Наша группа",
      category: "pilgrims"
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1650041319999-760232680c73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBjaHVyY2glMjBydXNzaWF8ZW58MXx8fHwxNzc0ODU1MDkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Старинный храм",
      category: "churches"
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1762013728442-c6cdde57371e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcnRob2RveCUyMHByYXllciUyMGhhbmRzfGVufDF8fHx8MTc3NDg1NTA5MXww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Молитва",
      category: "pilgrims"
    }
  ];

  const filteredGallery = filter === "all" 
    ? gallery 
    : gallery.filter(item => item.category === filter);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">Галерея</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Фотографии из наших паломнических поездок
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={filter === cat.id ? "default" : "outline"}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <Card 
              key={item.id} 
              className="overflow-hidden cursor-pointer group hover:shadow-lg transition-shadow"
              onClick={() => setSelectedImage(item.id)}
            >
              <div className="relative aspect-square overflow-hidden">
                <ImageWithFallback
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-serif text-white text-lg">{item.title}</h3>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <div className="max-w-5xl max-h-[90vh] relative">
              <ImageWithFallback
                src={gallery.find(item => item.id === selectedImage)?.url || ""}
                alt={gallery.find(item => item.id === selectedImage)?.title || ""}
                className="max-w-full max-h-[90vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <h3 className="font-serif text-white text-2xl">
                  {gallery.find(item => item.id === selectedImage)?.title}
                </h3>
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredGallery.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">В этой категории пока нет фотографий</p>
          </div>
        )}
      </div>
    </div>
  );
}
