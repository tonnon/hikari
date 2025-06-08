import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { restaurantInfo } from "@/lib/restaurant-data";

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);

      // Check which section is currently in view
      const sections = ["sobre", "menu", "reservas", "galeria", "contato"];
      const offset = 100; // offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom >= offset) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }

      // If we're at the very top, no section is active
      if (scrollPosition < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    console.log("Scrolling to:", sectionId);
    setIsMobileMenuOpen(false);

    const element = document.getElementById(sectionId);
    if (element) {
      console.log("Element found, scrolling...");
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.error("Element not found:", sectionId);
    }
  };

  const handleNavClick = (section: string) => {
    console.log("Nav clicked:", section);
    scrollToSection(section);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=1920&h=1080&fit=crop"
          alt="Hikari Restaurant Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-hikari-black/80 via-hikari-black/70 to-hikari-black/80"></div>
      </div>

      {/* Sticky Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 w-full transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-hikari-black/95 backdrop-blur-md shadow-2xl py-4"
            : "bg-transparent py-6"
        }`}
        style={{
          zIndex: 99999,
          position: "fixed",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          <div className="flex items-center gap-3">
            {/* Simplified Hikari Logo */}
            <div
              className={`relative flex items-center justify-center rounded-full transition-all duration-300 ${
                isScrolled ? "w-8 h-8" : "w-10 h-10"
              }`}
              style={{
                background: "linear-gradient(135deg, #E84F2A 0%, #FF5722 100%)",
                boxShadow: "0 2px 8px rgba(232, 79, 42, 0.4)",
              }}
            >
              {/* White center circle with character */}
              <div
                className="bg-white rounded-full flex items-center justify-center"
                style={{
                  width: "60%",
                  height: "60%",
                }}
              >
                <span
                  className="text-black font-bold"
                  style={{
                    fontSize: isScrolled ? "6px" : "8px",
                    lineHeight: 1,
                  }}
                >
                  光
                </span>
              </div>

              {/* Small decorative dots around */}
              <div className="absolute inset-0">
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                  <div
                    key={i}
                    className="absolute w-0.5 h-0.5 bg-white rounded-full"
                    style={{
                      top: "15%",
                      left: "50%",
                      transformOrigin: "1px 150%",
                      transform: `translate(-50%, 0) rotate(${angle}deg)`,
                    }}
                  />
                ))}
              </div>
            </div>

            <span
              className={`font-bold tracking-wider transition-all duration-300 ${
                isScrolled
                  ? "text-hikari-gold text-lg"
                  : "text-hikari-gold text-2xl"
              }`}
            >
              {restaurantInfo.name}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <button
              type="button"
              onClick={() => handleNavClick("sobre")}
              className={`transition-colors duration-300 capitalize tracking-wide font-medium relative group ${
                activeSection === "sobre"
                  ? "text-hikari-gold"
                  : "text-hikari-white hover:text-hikari-gold"
              }`}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "12px 20px",
                fontSize: "16px",
                outline: "none",
                userSelect: "none",
                minHeight: "44px",
                minWidth: "80px",
                position: "relative",
                borderRadius: "6px",
              }}
            >
              <span style={{ pointerEvents: "none" }}>sobre</span>
              <span
                className={`absolute bottom-2 left-4 right-4 h-0.5 bg-hikari-gold transition-all duration-300 ${
                  activeSection === "sobre"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
                style={{
                  pointerEvents: "none",
                  transformOrigin: "left",
                }}
              />
            </button>

            <button
              type="button"
              onClick={() => handleNavClick("menu")}
              className={`transition-colors duration-300 capitalize tracking-wide font-medium relative group ${
                activeSection === "menu"
                  ? "text-hikari-gold"
                  : "text-hikari-white hover:text-hikari-gold"
              }`}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "12px 20px",
                fontSize: "16px",
                outline: "none",
                userSelect: "none",
                minHeight: "44px",
                minWidth: "80px",
                position: "relative",
                borderRadius: "6px",
              }}
            >
              <span style={{ pointerEvents: "none" }}>menu</span>
              <span
                className={`absolute bottom-2 left-4 right-4 h-0.5 bg-hikari-gold transition-all duration-300 ${
                  activeSection === "menu"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
                style={{
                  pointerEvents: "none",
                  transformOrigin: "left",
                }}
              />
            </button>

            <button
              type="button"
              onClick={() => handleNavClick("reservas")}
              className={`transition-colors duration-300 capitalize tracking-wide font-medium relative group ${
                activeSection === "reservas"
                  ? "text-hikari-gold"
                  : "text-hikari-white hover:text-hikari-gold"
              }`}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "12px 20px",
                fontSize: "16px",
                outline: "none",
                userSelect: "none",
                minHeight: "44px",
                minWidth: "100px",
                position: "relative",
                borderRadius: "6px",
              }}
            >
              <span style={{ pointerEvents: "none" }}>reservas</span>
              <span
                className={`absolute bottom-2 left-4 right-4 h-0.5 bg-hikari-gold transition-all duration-300 ${
                  activeSection === "reservas"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
                style={{
                  pointerEvents: "none",
                  transformOrigin: "left",
                }}
              />
            </button>

            <button
              type="button"
              onClick={() => handleNavClick("galeria")}
              className={`transition-colors duration-300 capitalize tracking-wide font-medium relative group ${
                activeSection === "galeria"
                  ? "text-hikari-gold"
                  : "text-hikari-white hover:text-hikari-gold"
              }`}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "12px 20px",
                fontSize: "16px",
                outline: "none",
                userSelect: "none",
                minHeight: "44px",
                minWidth: "90px",
                position: "relative",
                borderRadius: "6px",
              }}
            >
              <span style={{ pointerEvents: "none" }}>galeria</span>
              <span
                className={`absolute bottom-2 left-4 right-4 h-0.5 bg-hikari-gold transition-all duration-300 ${
                  activeSection === "galeria"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
                style={{
                  pointerEvents: "none",
                  transformOrigin: "left",
                }}
              />
            </button>

            <button
              type="button"
              onClick={() => handleNavClick("contato")}
              className={`transition-colors duration-300 capitalize tracking-wide font-medium relative group ${
                activeSection === "contato"
                  ? "text-hikari-gold"
                  : "text-hikari-white hover:text-hikari-gold"
              }`}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "12px 20px",
                fontSize: "16px",
                outline: "none",
                userSelect: "none",
                minHeight: "44px",
                minWidth: "90px",
                position: "relative",
                borderRadius: "6px",
              }}
            >
              <span style={{ pointerEvents: "none" }}>contato</span>
              <span
                className={`absolute bottom-2 left-4 right-4 h-0.5 bg-hikari-gold transition-all duration-300 ${
                  activeSection === "contato"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
                style={{
                  pointerEvents: "none",
                  transformOrigin: "left",
                }}
              />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden flex flex-col space-y-1 transition-all duration-300 p-2 ${
              isScrolled ? "text-hikari-gold" : "text-hikari-white"
            }`}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <span
              className={`w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-hikari-black/95 backdrop-blur-md border-t border-hikari-gray-700">
            <div className="max-w-7xl mx-auto px-6 py-4">
              <div className="flex flex-col space-y-2">
                {[
                  { id: "sobre", label: "Sobre" },
                  { id: "menu", label: "Menu" },
                  { id: "reservas", label: "Reservas" },
                  { id: "galeria", label: "Galeria" },
                  { id: "contato", label: "Contato" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className="text-left py-4 px-6 text-hikari-white hover:text-hikari-gold hover:bg-hikari-gray-800 rounded-lg transition-all duration-300 capitalize tracking-wide"
                    style={{
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      width: "100%",
                      minHeight: "52px",
                    }}
                  >
                    {item.label.toLowerCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-hikari-white mb-6 tracking-wider">
          <span className="text-hikari-gold">{restaurantInfo.name}</span>
        </h1>
        <p
          className="text-xl md:text-2xl text-hikari-white mb-8 font-light tracking-wide max-w-2xl mx-auto"
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          }}
        >
          {restaurantInfo.slogan}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => handleNavClick("reservas")}
            className="bg-hikari-gold hover:bg-hikari-gold-dark text-hikari-black font-medium px-8 py-3 transition-all duration-300 transform hover:scale-105"
          >
            Fazer Reserva
          </Button>
          <Button
            onClick={() => handleNavClick("menu")}
            variant="outline"
            className="border-hikari-gold text-hikari-gold hover:bg-hikari-gold hover:text-hikari-black transition-all duration-300 transform hover:scale-105 px-8 py-3"
          >
            Ver Menu
          </Button>
        </div>
      </div>  
    </section>
  );
};

export default Hero;
