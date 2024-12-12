import { styles } from '../styles';

import ipa from '../assets/Birras/ipa.jpg';
import scottish from '../assets/Birras/scottish.jpg';
import honey from '../assets/Birras/honey.jpg';

export default function Team() {
  return (
    <div className="bg-primary max-sm:px-6 py-24 sm:py-32" id="team">
      <div className="w-full sm:px-16 mx-auto flex flex-col max-lg:grid max-w-7xl gap-x-8 gap-y-20 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className={`${styles.sectionHeadText}`}>CALZONES</h2>
          <p className={`text-secondary text-[17px] max-w-3xl leading-[30px]`}>
            Descubre nuestros deliciosos calzones, la combinación perfecta entre
            masa crujiente y un relleno sabroso. Perfectos para cualquier
            ocasión, desde una cena rápida hasta una reunión con amigos. ¡Te
            aseguramos que cada bocado será una explosión de sabor!
          </p>
        </div>
        <div className="mt-20 flex flex-wrap gap-10 justify-center">
          <img
            src={ipa}
            alt="ipa"
            className="w-48 h-96 object-contain transition-transform transform hover:scale-110"
          />
          <img
            src={honey}
            alt="honey"
            className="w-48 h-96 object-contain transition-transform transform hover:scale-110"
          />
          <img
            src={scottish}
            alt="scottish"
            className="w-48 h-96 object-contain transition-transform transform hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
}
