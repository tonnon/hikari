import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { menuCategories, menuItems } from "@/lib/restaurant-data";
import { Flame, Leaf } from "lucide-react";

// Helper functions for detailed information
const getMainIngredients = (category: string, name: string): string[] => {
  const ingredientMap: Record<string, string[]> = {
    sushi: ["Arroz japonês", "Alga nori", "Peixe fresco", "Wasabi", "Gengibre"],
    sashimi: [
      "Peixe selecionado",
      "Wasabi fresco",
      "Gengibre marinado",
      "Rabanete",
    ],
    "hot-dishes": [
      "Ingredientes sazonais",
      "Molhos especiais",
      "Vegetais frescos",
    ],
    drinks: ["Ingredientes premium", "Água filtrada", "Folhas selecionadas"],
    desserts: ["Farinha de arroz", "Açúcar refinado", "Ingredientes naturais"],
  };
  return (
    ingredientMap[category] || ["Ingredientes frescos", "Preparação artesanal"]
  );
};

const getPreparationTime = (category: string): string => {
  const timeMap: Record<string, string> = {
    sushi: "15-20 min",
    sashimi: "10-15 min",
    "hot-dishes": "20-30 min",
    drinks: "5-10 min",
    desserts: "10-15 min",
  };
  return timeMap[category] || "15-20 min";
};

const getPortionSize = (category: string): string => {
  const portionMap: Record<string, string> = {
    sushi: "8-10 peças",
    sashimi: "5-8 fatias",
    "hot-dishes": "1 porção",
    drinks: "250-300ml",
    desserts: "1 unidade",
  };
  return portionMap[category] || "1 porção";
};

const getCalories = (category: string): string => {
  const calorieMap: Record<string, string> = {
    sushi: "180-220",
    sashimi: "120-180",
    "hot-dishes": "250-400",
    drinks: "5-150",
    desserts: "120-200",
  };
  return calorieMap[category] || "200-300";
};

const getSuggestedPairing = (category: string, name: string): string => {
  if (category === "sushi")
    return "Combine com sakê gelado ou chá verde sencha para realçar os sabores delicados.";
  if (category === "sashimi")
    return "Ideal com sakê premium ou vinho branco seco japonês.";
  if (category === "hot-dishes")
    return "Harmoniza perfeitamente com cerveja japonesa ou sakê quente.";
  if (category === "drinks")
    return "Aprecie puro ou acompanhe com nossa seleção de petiscos japoneses.";
  if (category === "desserts")
    return "Perfeito com chá verde matcha ou café japonês gelado.";
  return "Consulte nosso sommelier para sugestões personalizadas.";
};

const getChefNote = (category: string, name: string): string => {
  const notes = [
    "Preparado com técnicas tradicionais japonesas passadas de geração em geração.",
    "Utilizamos apenas ingredientes da mais alta qualidade, importados diretamente do Japão.",
    "Este prato representa a harmonia perfeita entre tradição e inovação culinária.",
    "Cada elemento é cuidadosamente balanceado para proporcionar uma experiência única.",
    "Recomendo saborear lentamente para apreciar todas as nuances de sabor.",
    "Uma interpretação contemporânea de um clássico da culinária japonesa.",
  ];
  return notes[Math.abs(name.length) % notes.length];
};

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("sushi");
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const filteredItems = menuItems.filter(
    (item) => item.category === selectedCategory,
  );

  return (
    <section id="menu" className="py-20 bg-hikari-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-hikari-white mb-4 tracking-wide">
            Nosso <span className="text-hikari-gold">Menu</span>
          </h2>
          <div className="w-20 h-1 bg-hikari-gold mx-auto mb-6"></div>
          <p className="text-hikari-gray-300 text-lg max-w-2xl mx-auto">
            Explore nossa seleção cuidadosamente elaborada de pratos autênticos
            e contemporâneos
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-hikari-gray-800 rounded-lg p-1 grid grid-cols-5 gap-1">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`
                  w-24 h-10 flex flex-col items-center justify-center
                  rounded text-xs font-medium transition-colors duration-200
                  ${
                    selectedCategory === category.id
                      ? "bg-hikari-gold text-hikari-black"
                      : "text-hikari-gray-300 hover:text-hikari-gold"
                  }
                `}
              >
                <span className="text-sm leading-none">{category.icon}</span>
                <span className="hidden sm:block text-xs leading-none mt-0.5 truncate">
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className={`bg-hikari-gray-900 border-hikari-gray-700 overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-hikari-gold/20 ${
                expandedItem === item.id ? "ring-2 ring-hikari-gold" : ""
              }`}
              onClick={() =>
                setExpandedItem(expandedItem === item.id ? null : item.id)
              }
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  {item.isSpicy && (
                    <Badge variant="destructive" className="bg-hikari-red-dark">
                      <Flame className="w-3 h-3 mr-1" />
                      Picante
                    </Badge>
                  )}
                  {item.isVegetarian && (
                    <Badge
                      variant="secondary"
                      className="bg-green-600 text-white"
                    >
                      <Leaf className="w-3 h-3 mr-1" />
                      Vegetariano
                    </Badge>
                  )}
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-hikari-white font-semibold text-lg">
                    {item.name}
                  </h3>
                  <span className="text-hikari-gold font-bold text-lg">
                    R$ {item.price}
                  </span>
                </div>

                <p
                  className={`text-hikari-gray-300 text-sm transition-all duration-300 ${
                    expandedItem === item.id ? "opacity-100" : "line-clamp-2"
                  }`}
                >
                  {item.description}
                </p>

                {expandedItem === item.id && (
                  <div className="mt-4 pt-4 border-t border-hikari-gray-700 space-y-4 animate-in slide-in-from-top-2 duration-300">
                    {/* Ingredientes Principais */}
                    <div>
                      <h4 className="text-hikari-gold text-sm font-semibold mb-2">
                        Ingredientes Principais
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {getMainIngredients(item.category, item.name).map(
                          (ingredient) => (
                            <span
                              key={ingredient}
                              className="px-2 py-1 bg-hikari-gray-800 text-hikari-gray-300 text-xs rounded-full"
                            >
                              {ingredient}
                            </span>
                          ),
                        )}
                      </div>
                    </div>

                    {/* Informações Nutricionais */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-hikari-gold text-sm font-semibold mb-2">
                          Informações
                        </h4>
                        <div className="space-y-1 text-xs text-hikari-gray-300">
                          <div className="flex justify-between">
                            <span>Preparo:</span>
                            <span className="text-hikari-gray-400">
                              {getPreparationTime(item.category)}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Porção:</span>
                            <span className="text-hikari-gray-400">
                              {getPortionSize(item.category)}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Calorias:</span>
                            <span className="text-hikari-gray-400">
                              {getCalories(item.category)} kcal
                            </span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-hikari-gold text-sm font-semibold mb-2">
                          Características
                        </h4>
                        <div className="space-y-1 text-xs">
                          {item.isSpicy && (
                            <div className="flex items-center gap-1 text-hikari-red-dark">
                              <Flame className="w-3 h-3" />
                              <span>Picante</span>
                            </div>
                          )}
                          {item.isVegetarian && (
                            <div className="flex items-center gap-1 text-green-400">
                              <Leaf className="w-3 h-3" />
                              <span>Vegetariano</span>
                            </div>
                          )}
                          <div className="flex items-center gap-1 text-hikari-gold">
                            <span>⭐</span>
                            <span>Recomendado pelo Chef</span>
                          </div>
                          <div className="flex items-center gap-1 text-blue-400">
                            <span>🥢</span>
                            <span>Tradição Japonesa</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Harmonização */}
                    <div>
                      <h4 className="text-hikari-gold text-sm font-semibold mb-2">
                        Harmonização Sugerida
                      </h4>
                      <p className="text-xs text-hikari-gray-300">
                        {getSuggestedPairing(item.category, item.name)}
                      </p>
                    </div>

                    {/* Chef's Note */}
                    <div className="bg-hikari-gray-800/50 rounded-lg p-3">
                      <h4 className="text-hikari-gold text-sm font-semibold mb-1 flex items-center gap-2">
                        <span>👨‍🍳</span>
                        Nota do Chef
                      </h4>
                      <p className="text-xs text-hikari-gray-300 italic">
                        {getChefNote(item.category, item.name)}
                      </p>
                    </div>

                    {/* Close instruction */}
                    <div className="flex items-center justify-center pt-2">
                      <span className="text-xs text-hikari-gray-500">
                        👆 Clique novamente para fechar
                      </span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-hikari-gray-300 mb-4">
            Todos os preços são sugestivos e podem variar. Consulte nosso
            atendimento.
          </p>
          <Card className="bg-hikari-gold/10 border-hikari-gold inline-block">
            <CardContent className="p-6">
              <p className="text-hikari-gold font-medium">
                💡 Dica: Clique nos pratos para ver mais detalhes
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Menu;
