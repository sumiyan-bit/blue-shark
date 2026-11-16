import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Menu } from "./components/Menu";
import { Delivery } from "./components/Delivery";
import { About } from "./components/About";
import { Chef } from "./components/Chef";
import { Reviews } from "./components/Reviews";
import { InstagramSection } from "./components/InstagramSection";
import { Location } from "./components/Location";
import { Footer } from "./components/Footer";
import { MobileCTA } from "./components/MobileCTA";
import { Edge } from "./components/ui/Edge";

function App() {
  return (
    <div className="overflow-x-hidden bg-ink">
      <Header />
      <main>
        <Hero />
        <Edge dark="above" />
        <Menu />
        <Edge dark="below" color="sumi" />
        <Delivery />
        <About />
        <Edge dark="above" />
        <Chef />
        <Edge dark="below" />
        <Reviews />
        <InstagramSection />
        <Edge dark="above" color="sumi" />
        <Location />
        <Edge dark="below" />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}

export default App;
