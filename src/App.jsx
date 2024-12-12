import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Feedbacks,
  Hero,
  Navbar,
  Calzones,
  Parties,
  ContactButton
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
        <Parties />
        <Calzones />
        {/* <Feedbacks /> */}
        <ContactButton />
        <div className="relative z-0">
          {/* <Contact /> */}
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
