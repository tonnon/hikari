import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { CalendarDays, Clock, Users, Phone } from "lucide-react";

const Reservations = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [guests, setGuests] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");

  const timeSlots = [
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
    "23:00",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedDate || !selectedTime || !guests || !name || !phone) {
      toast.error("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    toast.success(
      "Reserva solicitada com sucesso! Entraremos em contato para confirmação.",
    );

    // Reset form
    setSelectedDate(undefined);
    setSelectedTime("");
    setGuests("");
    setName("");
    setPhone("");
    setEmail("");
    setSpecialRequests("");
  };

  return (
    <section id="reservas" className="py-20 bg-hikari-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-hikari-black mb-4 tracking-wide">
            <span className="text-hikari-gold">Reservas</span>
          </h2>
          <div className="w-20 h-1 bg-hikari-gold mx-auto mb-6"></div>
          <p className="text-hikari-gray-700 text-lg max-w-2xl mx-auto">
            Reserve sua mesa e garanta uma experiência gastronômica inesquecível
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Reservation Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-hikari-black text-hikari-white">
                <CardTitle className="text-2xl font-light">
                  Faça sua Reserva
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Date Selection */}
                    <div className="space-y-3">
                      <Label className="text-hikari-black font-medium flex items-center gap-2">
                        <CalendarDays className="w-4 h-4 text-hikari-gold" />
                        Selecione a Data *
                      </Label>
                      <div className="border rounded-lg p-4 bg-white">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          disabled={(date) =>
                            date < new Date() || date.getDay() === 0
                          }
                          className="w-full"
                        />
                      </div>
                    </div>

                    {/* Time and Guests */}
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <Label className="text-hikari-black font-medium flex items-center gap-2">
                          <Clock className="w-4 h-4 text-hikari-gold" />
                          Horário *
                        </Label>
                        <Select
                          value={selectedTime}
                          onValueChange={setSelectedTime}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Selecione o horário" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-3">
                        <Label className="text-hikari-black font-medium flex items-center gap-2">
                          <Users className="w-4 h-4 text-hikari-gold" />
                          Número de Pessoas *
                        </Label>
                        <Select value={guests} onValueChange={setGuests}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Quantas pessoas?" />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num} {num === 1 ? "pessoa" : "pessoas"}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Seu nome completo"
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label
                        htmlFor="phone"
                        className="text-hikari-black font-medium flex items-center gap-2"
                      >
                        <Phone className="w-4 h-4 text-hikari-gold" />
                        Telefone *
                      </Label>
                      <Input
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(11) 99999-9999"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label
                      htmlFor="email"
                      className="text-hikari-black font-medium"
                    >
                      Email (opcional)
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seu@email.com"
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label
                      htmlFor="special-requests"
                      className="text-hikari-black font-medium"
                    >
                      Solicitações Especiais
                    </Label>
                    <Textarea
                      id="special-requests"
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      placeholder="Aniversário, restrições alimentares, preferências de mesa..."
                      className="w-full resize-none"
                      rows={3}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-hikari-gold hover:bg-hikari-gold-dark text-hikari-black font-medium py-3 text-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Solicitar Reserva
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Info Sidebar */}
          <div className="space-y-6">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-hikari-red-dark text-white">
                <CardTitle className="text-xl font-light">
                  Informações Importantes
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-hikari-black">
                    Horários de Funcionamento
                  </h4>
                  <div className="space-y-1 text-sm text-hikari-gray-600">
                    <p>
                      <strong>Segunda a Quinta:</strong> 18:00 - 23:00
                    </p>
                    <p>
                      <strong>Sexta e Sábado:</strong> 18:00 - 00:00
                    </p>
                    <p>
                      <strong>Domingo:</strong> 12:00 - 22:00
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-hikari-black">
                    Política de Reservas
                  </h4>
                  <ul className="space-y-1 text-sm text-hikari-gray-600">
                    <li>• Reservas com até 30 dias de antecedência</li>
                    <li>• Confirmação por telefone necessária</li>
                    <li>• Tolerância de 15 minutos para atraso</li>
                    <li>• Grupos acima de 8 pessoas: consulte-nos</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-hikari-black">
                    Contato Direto
                  </h4>
                  <div className="space-y-1 text-sm text-hikari-gray-600">
                    <p>
                      <strong>Telefone:</strong> (11) 3456-7890
                    </p>
                    <p>
                      <strong>WhatsApp:</strong> (11) 98765-4321
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-hikari-gold/5 border-hikari-gold">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-hikari-black mb-2">
                  Experiência Premium
                </h4>
                <p className="text-sm text-hikari-gray-700">
                  Reserve com antecedência e garante os melhores lugares com
                  vista para o sushi bar
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservations;
