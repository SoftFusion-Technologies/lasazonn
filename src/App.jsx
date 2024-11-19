import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, ImageAbout, Feedbacks, Hero, Navbar, Tech, Team, Works, StarsCanvas, ContactButton } from "./components";
import Footer from "./components/Footer";
import Valores from "./components/Valores";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
          {/* <StarsCanvas /> */}
        </div>
        <About />
        <Valores />
        {/* <ImageAbout /> */}
        <Tech />
        <Works />
        <Team />
        <Feedbacks />
        <ContactButton />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
