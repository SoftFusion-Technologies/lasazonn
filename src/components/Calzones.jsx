import { styles } from '../styles';

import imgCalzon1 from '../assets/Calzones/imgCalzon1.jpg';
import imgCalzon2 from '../assets/Calzones/imgCalzon2.jpg';
import imgCalzon3 from '../assets/Calzones/imgCalzon3.jpg';

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
          <div className="relative group w-[300px] h-[400px]">
            <img
              src={imgCalzon1}
              alt="Calzon 1"
              className="w-full h-full object-cover rounded-lg transition-transform transform group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
              <h3 className="text-white text-xl font-bold">Calzone Especial</h3>
              <p className="text-white text-sm mt-2">
                Relleno con los mejores ingredientes para un sabor único.
              </p>
            </div>
          </div>

          <div className="relative group w-[300px] h-[400px]">
            <img
              src={imgCalzon2}
              alt="Calzon 2"
              className="w-full h-full object-cover rounded-lg transition-transform transform group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
              <h3 className="text-white text-xl font-bold">
                Calzone Mediterráneo
              </h3>
              <p className="text-white text-sm mt-2">
                Lleno de sabores frescos y auténticos de la región mediterránea.
              </p>
            </div>
          </div>

          <div className="relative group w-[300px] h-[400px]">
            <img
              src={imgCalzon3}
              alt="Calzon 3"
              className="w-full h-full object-cover rounded-lg transition-transform transform group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
              <h3 className="text-white text-xl font-bold">
                Calzone Vegetariano
              </h3>
              <p className="text-white text-sm mt-2">
                Perfecto para los amantes de las verduras, con ingredientes
                frescos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
