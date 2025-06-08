import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  MessageSquare,
} from "lucide-react";
import { restaurantInfo } from "@/lib/restaurant-data";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    toast.success("Mensagem enviada com sucesso! Retornaremos em breve.");

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contato" className="py-20 bg-hikari-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-hikari-black mb-4 tracking-wide">
            <span className="text-hikari-gold">Contato</span>
          </h2>
          <div className="w-20 h-1 bg-hikari-gold mx-auto mb-6"></div>
          <p className="text-hikari-gray-700 text-lg max-w-2xl mx-auto">
            Entre em contato conosco e tire suas dúvidas ou faça sugestões
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Address Card */}
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-hikari-black text-hikari-white">
                <CardTitle className="text-xl font-light flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-hikari-gold" />
                  Localização
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-hikari-gray-700 mb-4">
                  {restaurantInfo.address}
                </p>
                <div className="bg-hikari-gray-100 rounded-lg p-4 h-48 flex items-center justify-center">
                  <div className="text-center text-hikari-gray-600">
                    <MapPin className="w-8 h-8 mx-auto mb-2 text-hikari-gold" />
                    <p className="text-sm">
                      Mapa do Google
                      <br />
                      (Integração com Google Maps)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-hikari-red-dark text-white">
                <CardTitle className="text-xl font-light">
                  Informações de Contato
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-hikari-gold" />
                  <div>
                    <p className="font-medium text-hikari-black">Telefone</p>
                    <p className="text-hikari-gray-600">
                      {restaurantInfo.phone}
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-hikari-gold" />
                  <div>
                    <p className="font-medium text-hikari-black">WhatsApp</p>
                    <p className="text-hikari-gray-600">
                      {restaurantInfo.socialMedia.whatsapp}
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-hikari-gold" />
                  <div>
                    <p className="font-medium text-hikari-black">Email</p>
                    <p className="text-hikari-gray-600">
                      {restaurantInfo.email}
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="flex items-center gap-3">
                  <Instagram className="w-5 h-5 text-hikari-gold" />
                  <div>
                    <p className="font-medium text-hikari-black">Instagram</p>
                    <p className="text-hikari-gray-600">
                      {restaurantInfo.socialMedia.instagram}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-hikari-gold text-hikari-black">
                <CardTitle className="text-xl font-light flex items-center gap-3">
                  <Clock className="w-5 h-5" />
                  Horário de Funcionamento
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-3">
                {Object.entries(restaurantInfo.hours).map(([day, hours]) => (
                  <div key={day} className="flex justify-between items-center">
                    <span className="font-medium text-hikari-black">
                      {day}:
                    </span>
                    <span className="text-hikari-gray-600">{hours}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-hikari-black text-hikari-white">
                <CardTitle className="text-2xl font-light">
                  Envie sua Mensagem
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label
                        htmlFor="name"
                        className="text-hikari-black font-medium"
                      >
                        Nome Completo *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Seu nome completo"
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label
                        htmlFor="email"
                        className="text-hikari-black font-medium"
                      >
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu@email.com"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label
                        htmlFor="phone"
                        className="text-hikari-black font-medium"
                      >
                        Telefone (opcional)
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(11) 99999-9999"
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label
                        htmlFor="subject"
                        className="text-hikari-black font-medium"
                      >
                        Assunto
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Sobre o que você gostaria de falar?"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label
                      htmlFor="message"
                      className="text-hikari-black font-medium"
                    >
                      Mensagem *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Digite sua mensagem aqui..."
                      className="w-full resize-none"
                      rows={6}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-hikari-gold hover:bg-hikari-gold-dark text-hikari-black font-medium py-3 text-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Social Media Section */}
            <Card className="mt-6 shadow-lg border-0 bg-hikari-black text-hikari-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-light mb-4 text-hikari-gold">
                  Siga-nos nas Redes Sociais
                </h3>
                <div className="flex flex-wrap gap-4">
                  <Button
                    variant="outline"
                    className="border-hikari-gold text-hikari-gold hover:bg-hikari-gold hover:text-hikari-black transition-all duration-300"
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                  </Button>
                  <Button
                    variant="outline"
                    className="border-hikari-gold text-hikari-gold hover:bg-hikari-gold hover:text-hikari-black transition-all duration-300"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    className="border-hikari-gold text-hikari-gold hover:bg-hikari-gold hover:text-hikari-black transition-all duration-300"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Newsletter
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
