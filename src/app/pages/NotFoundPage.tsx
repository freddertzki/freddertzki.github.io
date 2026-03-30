import { Link } from "react-router";
import { Home } from "lucide-react";
import { Button } from "../components/ui/button";

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="font-serif text-9xl text-primary mb-4">404</div>
        <h1 className="font-serif text-3xl md:text-4xl mb-4">Страница не найдена</h1>
        <p className="text-muted-foreground mb-8">
          Кажется, вы заблудились в паломничестве по нашему сайту. 
          Давайте вернёмся к началу пути.
        </p>
        <Link to="/">
          <Button size="lg">
            <Home className="h-5 w-5 mr-2" />
            Вернуться на главную
          </Button>
        </Link>
      </div>
    </div>
  );
}
