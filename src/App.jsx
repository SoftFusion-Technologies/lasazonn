import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Carta,
  Contact,
  Hero,
  Navbar,
  Calzones,
  Pizzas,
  Hamburguesas,
  ContactButton,
  MapComponent
} from './components';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Pizzas />
        <Calzones />
        <Hamburguesas />
        {/* <Feedbacks /> */}
        <ContactButton />
        <Carta />
        <div className="relative z-0">
          <Contact />
          <MapComponent></MapComponent>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
