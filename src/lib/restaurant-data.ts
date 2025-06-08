export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isSpicy?: boolean;
  isVegetarian?: boolean;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "food" | "interior" | "atmosphere";
}

export const menuCategories = [
  { id: "sushi", name: "Sushi", icon: "🍣" },
  { id: "sashimi", name: "Sashimi", icon: "🐟" },
  { id: "hot-dishes", name: "Pratos Quentes", icon: "🍲" },
  { id: "drinks", name: "Bebidas", icon: "🍵" },
  { id: "desserts", name: "Sobremesas", icon: "🍡" },
];

export const menuItems: MenuItem[] = [
  // Sushi
  {
    id: "sushi-1",
    name: "Nigiri de Salmão",
    description: "Fatia de salmão fresco sobre arroz temperado com wasabi",
    price: 18,
    image:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&h=300&fit=crop",
    category: "sushi",
  },
  {
    id: "sushi-2",
    name: "Uramaki Philadelphia",
    description:
      "Salmão, cream cheese e pepino, envolvido em alga e arroz, finalizado com gergelim",
    price: 32,
    image:
      "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop",
    category: "sushi",
  },
  {
    id: "sushi-3",
    name: "Hot Philadelphia",
    description:
      "Philadelphia empanado e frito, servido com molho especial da casa",
    price: 38,
    image:
      "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
    category: "sushi",
    isSpicy: true,
  },
  {
    id: "sushi-4",
    name: "Temaki de Atum",
    description: "Cone de alga recheado com atum, avocado e pepino japonês",
    price: 22,
    image:
      "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&h=300&fit=crop",
    category: "sushi",
  },

  // Sashimi
  {
    id: "sashimi-1",
    name: "Sashimi de Salmão",
    description:
      "Fatias generosas de salmão fresco, servidas com wasabi e gengibre",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400&h=300&fit=crop",
    category: "sashimi",
  },
  {
    id: "sashimi-2",
    name: "Sashimi de Atum",
    description: "Atum vermelho de primeira qualidade, cortado na hora",
    price: 52,
    image:
      "https://images.unsplash.com/photo-1615361200098-15a4c9e3e4d6?w=400&h=300&fit=crop",
    category: "sashimi",
  },
  {
    id: "sashimi-3",
    name: "Sashimi Misto",
    description: "Combinação de salmão, atum, peixe branco e polvo",
    price: 68,
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
    category: "sashimi",
  },

  // Hot Dishes
  {
    id: "hot-1",
    name: "Yakitori",
    description: "Espetinhos de frango grelhados com molho tare especial",
    price: 28,
    image:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop",
    category: "hot-dishes",
  },
  {
    id: "hot-2",
    name: "Tempurá de Camarão",
    description: "Camarões empanados em massa leve e crocante",
    price: 42,
    image:
      "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop",
    category: "hot-dishes",
  },
  {
    id: "hot-3",
    name: "Ramen Tonkotsu",
    description:
      "Caldo cremoso de osso de porco com macarrão, ovo marinado e vegetais",
    price: 48,
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
    category: "hot-dishes",
  },
  {
    id: "hot-4",
    name: "Gyoza",
    description:
      "Dumplings de porco e vegetais, grelhados e servidos com molho ponzu",
    price: 24,
    image:
      "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop",
    category: "hot-dishes",
  },

  // Drinks
  {
    id: "drink-1",
    name: "Sakê Junmai",
    description: "Sakê premium servido quente ou gelado",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=300&fit=crop",
    category: "drinks",
  },
  {
    id: "drink-2",
    name: "Chá Verde Sencha",
    description: "Chá verde tradicional japonês, servido em bule de cerâmica",
    price: 12,
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop",
    category: "drinks",
    isVegetarian: true,
  },
  {
    id: "drink-3",
    name: "Ramune",
    description: "Refrigerante japonês com sabor original",
    price: 8,
    image:
      "https://images.unsplash.com/photo-1541652635-1b52b0b5d788?w=400&h=300&fit=crop",
    category: "drinks",
    isVegetarian: true,
  },

  // Desserts
  {
    id: "dessert-1",
    name: "Mochi de Morango",
    description: "Doce de arroz glutinoso recheado com sorvete de morango",
    price: 16,
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop",
    category: "desserts",
    isVegetarian: true,
  },
  {
    id: "dessert-2",
    name: "Dorayaki",
    description: "Panqueca japonesa recheada com pasta de feijão doce",
    price: 14,
    image:
      "https://images.unsplash.com/photo-1582716401301-b2407dc7563d?w=400&h=300&fit=crop",
    category: "desserts",
    isVegetarian: true,
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "food-1",
    src: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&h=400&fit=crop",
    alt: "Variedade de sushi premium",
    category: "food",
  },
  {
    id: "food-2",
    src: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?w=600&h=400&fit=crop",
    alt: "Sashimi artístico",
    category: "food",
  },
  {
    id: "food-3",
    src: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&h=400&fit=crop",
    alt: "Ramen tradicional",
    category: "food",
  },
  {
    id: "interior-1",
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop",
    alt: "Interior moderno do restaurante japonês",
    category: "interior",
  },
  {
    id: "interior-2",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    alt: "Área do sushi bar com assentos elegantes",
    category: "interior",
  },
  {
    id: "atmosphere-1",
    src: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=600&h=400&fit=crop",
    alt: "Chef preparando sushi",
    category: "atmosphere",
  },
];

export const restaurantInfo = {
  name: "Hikari",
  slogan: "Onde a tradição encontra a modernidade",
  description:
    "No Hikari, celebramos a rica herança da culinária japonesa com um toque contemporâneo. Nossa filosofia é baseada no respeito pelos ingredientes frescos, técnicas tradicionais e na busca constante pela perfeição em cada prato.",
  phone: "+55 11 3456-7890",
  email: "contato@hikari.com.br",
  address: "Rua dos Japoneses, 123 - Liberdade, São Paulo - SP",
  hours: {
    "Segunda a Quinta": "18:00 - 23:00",
    "Sexta e Sábado": "18:00 - 00:00",
    Domingo: "12:00 - 22:00",
  },
  socialMedia: {
    instagram: "@hikarirestaurant",
    facebook: "Hikari Restaurant",
    whatsapp: "+5511987654321",
  },
};
