import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Highlights } from "./components/Highlights";
import { Menu } from "./components/Menu";
import { Delivery } from "./components/Delivery";
import { About } from "./components/About";
import { Chef } from "./components/Chef";
import { Reviews } from "./components/Reviews";
import { InstagramSection } from "./components/InstagramSection";
import { Location } from "./components/Location";
import { Footer } from "./components/Footer";
import { MobileCTA } from "./components/MobileCTA";

function App() {
  return (
    <div className="overflow-x-hidden bg-ink">
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Menu />
        <Delivery />
        <About />
        <Chef />
        <Reviews />
        <InstagramSection />
        <Location />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}

export default App;
