import { Separator } from "@/components/ui/separator";
import { restaurantInfo } from "@/lib/restaurant-data";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  MessageSquare,
  Heart,
} from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-hikari-black text-hikari-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-light text-hikari-gold mb-2 tracking-wider">
                {restaurantInfo.name}
              </h3>
              <p className="text-hikari-gray-400 italic">
                {restaurantInfo.slogan}
              </p>
            </div>
            <p className="text-hikari-gray-400 leading-relaxed">
              Celebramos a rica herança da culinária japonesa com um toque
              contemporâneo, oferecendo uma experiência gastronômica única e
              inesquecível.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-hikari-gray-400 hover:text-hikari-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-hikari-gray-400 hover:text-hikari-gold transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-hikari-gray-400 hover:text-hikari-gold transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-hikari-white font-semibold text-lg">
              Navegação
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Início", id: "hero" },
                { name: "Sobre Nós", id: "sobre" },
                { name: "Menu", id: "menu" },
                { name: "Reservas", id: "reservas" },
                { name: "Galeria", id: "galeria" },
                { name: "Contato", id: "contato" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-hikari-gray-400 hover:text-hikari-gold transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-hikari-white font-semibold text-lg">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-hikari-gold mt-0.5 flex-shrink-0" />
                <p className="text-hikari-gray-400">{restaurantInfo.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-hikari-gold flex-shrink-0" />
                <p className="text-hikari-gray-400">{restaurantInfo.phone}</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-hikari-gold flex-shrink-0" />
                <p className="text-hikari-gray-400">{restaurantInfo.email}</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <h4 className="text-hikari-white font-semibold text-lg">
              Horários
            </h4>
            <div className="space-y-3">
              {Object.entries(restaurantInfo.hours).map(([day, hours]) => (
                <div key={day} className="flex flex-col">
                  <span className="text-hikari-gray-400 text-sm font-medium">
                    {day}
                  </span>
                  <span className="text-hikari-gold text-sm">{hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-hikari-gray-800" />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-hikari-gray-500 text-sm">
            <p>© 2024 {restaurantInfo.name}. Todos os direitos reservados.</p>
          </div>

          <div className="flex items-center gap-4 text-hikari-gray-500 text-sm">
            <a
              href="#"
              className="hover:text-hikari-gold transition-colors duration-300"
            >
              Política de Privacidade
            </a>
            <span>•</span>
            <a
              href="#"
              className="hover:text-hikari-gold transition-colors duration-300"
            >
              Termos de Uso
            </a>
          </div>

          <div className="flex items-center gap-2 text-hikari-gray-500 text-sm">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-hikari-red-dark fill-current" />
            <span>para a culinária japonesa</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
