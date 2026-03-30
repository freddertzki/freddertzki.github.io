import { Outlet, Link, useLocation } from "react-router";
import { Church, Menu, X, Phone, Mail, Heart } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Главная", path: "/" },
    { label: "Расписание", path: "/schedule" },
    { label: "Туры", path: "/tours" },
    { label: "О нас", path: "/about" },
    { label: "Новости", path: "/news" },
    { label: "Галерея", path: "/gallery" },
    { label: "Отзывы", path: "/reviews" },
    { label: "Контакты", path: "/contacts" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Info Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center gap-2 text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+79999999999" className="flex items-center gap-2 hover:opacity-80 transition">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">+7 (999) 999-99-99</span>
            </a>
            <a href="mailto:info@pilgrimage.ru" className="flex items-center gap-2 hover:opacity-80 transition">
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">info@pilgrimage.ru</span>
            </a>
          </div>
          <Link to="/donations" className="flex items-center gap-2 hover:opacity-80 transition">
            <Heart className="h-4 w-4" />
            <span>Пожертвования</span>
          </Link>
        </div>
      </div>

      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg group-hover:scale-105 transition-transform">
                <Church className="h-8 w-8" />
              </div>
              <div>
                <div className="font-serif text-xl font-semibold text-foreground">Святые Места</div>
                <div className="text-xs text-muted-foreground">Православные паломничества</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    isActive(item.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <Link to="/auth" className="hidden md:block">
                <Button variant="outline">Войти</Button>
              </Link>
              <Link to="/qa" className="hidden md:block">
                <Button>Задать вопрос</Button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 hover:bg-muted rounded-md"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-4 py-3 rounded-md transition-colors ${
                      isActive(item.path)
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 mt-2 px-4">
                  <Link to="/auth" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="outline" className="w-full">Войти</Button>
                  </Link>
                  <Link to="/qa" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full">Задать вопрос</Button>
                  </Link>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-auto">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About */}
            <div>
              <h3 className="font-serif text-lg mb-4">О нас</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Организация паломнических поездок по святым местам России и зарубежья с 2005 года.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-serif text-lg mb-4">Быстрые ссылки</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/tours" className="text-muted-foreground hover:text-primary transition">Каталог туров</Link></li>
                <li><Link to="/schedule" className="text-muted-foreground hover:text-primary transition">Расписание</Link></li>
                <li><Link to="/qa" className="text-muted-foreground hover:text-primary transition">Вопросы и ответы</Link></li>
                <li><Link to="/reviews" className="text-muted-foreground hover:text-primary transition">Отзывы</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-serif text-lg mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground">+7 (999) 999-99-99</li>
                <li className="text-muted-foreground">info@pilgrimage.ru</li>
                <li className="text-muted-foreground">Москва, ул. Примерная, д. 1</li>
              </ul>
            </div>

            {/* Social & Info */}
            <div>
              <h3 className="font-serif text-lg mb-4">Поддержать</h3>
              <Link to="/donations">
                <Button className="w-full mb-4">
                  <Heart className="h-4 w-4 mr-2" />
                  Пожертвование
                </Button>
              </Link>
              <p className="text-xs text-muted-foreground">
                Ваши пожертвования помогают организовывать паломничества для тех, кто нуждается в духовной поддержке.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 Святые Места. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
