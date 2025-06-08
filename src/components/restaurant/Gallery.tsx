import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { galleryImages } from "@/lib/restaurant-data";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: "all", name: "Todos", count: galleryImages.length },
    {
      id: "food",
      name: "Pratos",
      count: galleryImages.filter((img) => img.category === "food").length,
    },
    {
      id: "interior",
      name: "Ambiente",
      count: galleryImages.filter((img) => img.category === "interior").length,
    },
    {
      id: "atmosphere",
      name: "Atmosfera",
      count: galleryImages.filter((img) => img.category === "atmosphere")
        .length,
    },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <section id="galeria" className="py-20 bg-hikari-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-hikari-white mb-4 tracking-wide">
            <span className="text-hikari-gold">Galeria</span>
          </h2>
          <div className="w-20 h-1 bg-hikari-gold mx-auto mb-6"></div>
          <p className="text-hikari-gray-300 text-lg max-w-2xl mx-auto">
            Mergulhe na atmosfera única do Hikari através de nossas imagens
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`${
                selectedCategory === category.id
                  ? "bg-hikari-gold text-hikari-black hover:bg-hikari-gold-dark"
                  : "border-hikari-gray-600 text-hikari-gray-300 hover:border-hikari-gold hover:text-hikari-gold"
              } transition-all duration-300`}
            >
              {category.name}
              <Badge
                variant="secondary"
                className="ml-2 bg-hikari-gray-700 text-hikari-gray-300"
              >
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <Dialog key={image.id}>
              <DialogTrigger asChild>
                <div
                  className="group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-hikari-gold/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-hikari-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-hikari-white text-sm font-medium">
                        {image.alt}
                      </p>
                      <Badge
                        variant="secondary"
                        className="mt-2 bg-hikari-gold/20 text-hikari-gold border-hikari-gold"
                      >
                        {image.category === "food"
                          ? "Prato"
                          : image.category === "interior"
                            ? "Ambiente"
                            : "Atmosfera"}
                      </Badge>
                    </div>
                  </div>

                  {/* View Icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-hikari-gold/90 text-hikari-black p-2 rounded-full">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-0">
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-hikari-black/80 to-transparent p-6 rounded-b-lg">
                    <h3 className="text-hikari-white text-xl font-medium mb-2">
                      {image.alt}
                    </h3>
                    <Badge
                      variant="secondary"
                      className="bg-hikari-gold/20 text-hikari-gold border-hikari-gold"
                    >
                      {image.category === "food"
                        ? "Prato"
                        : image.category === "interior"
                          ? "Ambiente"
                          : "Atmosfera"}
                    </Badge>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-hikari-gray-900 rounded-lg p-8 max-w-2xl mx-auto border border-hikari-gray-700">
            <h3 className="text-hikari-white text-xl font-medium mb-4">
              Visite-nos e viva essa experiência
            </h3>
            <p className="text-hikari-gray-300 mb-6">
              Cada foto conta uma história. Venha criar a sua própria história
              no Hikari.
            </p>
            <Button
              onClick={() =>
                document
                  .getElementById("reservas")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-hikari-gold hover:bg-hikari-gold-dark text-hikari-black font-medium px-8 py-3 transition-all duration-300 transform hover:scale-105"
            >
              Faça sua Reserva
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
