import { Card, CardContent } from "@/components/ui/card";
import { restaurantInfo } from "@/lib/restaurant-data";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-hikari-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-light text-hikari-black tracking-wide">
                Nossa <span className="text-hikari-gold">História</span>
              </h2>
              <div className="w-20 h-1 bg-hikari-gold"></div>
            </div>

            <p className="text-lg text-hikari-gray-700 leading-relaxed">
              {restaurantInfo.description}
            </p>

            <p className="text-lg text-hikari-gray-700 leading-relaxed">
              Cada ingrediente é cuidadosamente selecionado, cada técnica é
              honrada com precisão, e cada prato é uma obra de arte que conta a
              história milenar do Japão através dos sabores.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              <Card className="border-l-4 border-l-hikari-gold bg-white shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-hikari-black mb-2">
                    Tradição
                  </h3>
                  <p className="text-hikari-gray-600 text-sm">
                    Técnicas ancestrais preservadas com respeito e dedicação
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-hikari-red-dark bg-white shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-hikari-black mb-2">
                    Inovação
                  </h3>
                  <p className="text-hikari-gray-600 text-sm">
                    Toques contemporâneos que elevam os sabores clássicos
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=600&h=700&fit=crop"
                alt="Chef preparando sushi"
                className="w-full h-[600px] object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hikari-black/30 to-transparent"></div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-8 -left-8 bg-hikari-white p-6 rounded-lg shadow-lg border-t-4 border-t-hikari-gold">
              <div className="text-center">
                <div className="text-3xl font-bold text-hikari-gold">15+</div>
                <div className="text-hikari-gray-600 text-sm">
                  Anos de experiência
                </div>
              </div>
            </div>

            <div className="absolute -top-8 -right-8 bg-hikari-white p-6 rounded-lg shadow-lg border-t-4 border-t-hikari-red-dark">
              <div className="text-center">
                <div className="text-3xl font-bold text-hikari-red-dark">
                  100%
                </div>
                <div className="text-hikari-gray-600 text-sm">
                  Ingredientes frescos
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
