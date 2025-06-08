import Hero from "@/components/restaurant/Hero";
import About from "@/components/restaurant/About";
import Menu from "@/components/restaurant/Menu";
import Reservations from "@/components/restaurant/Reservations";
import Gallery from "@/components/restaurant/Gallery";
import Contact from "@/components/restaurant/Contact";
import Footer from "@/components/restaurant/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Menu />
      <Reservations />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
