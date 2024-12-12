import React, { Suspense, lazy } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

import imgHamburguesa1 from '../assets/Hamburguesas/imgHambur1.jpg';
import imgHamburguesa2 from '../assets/Hamburguesas/imgHambur2.jpg';
const hamburguesas = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Hamburguesas en La Sazón</p>
        <h2 className={`${styles.sectionHeadText}`}>
          ¡DELICIOSAS HAMBURGUESAS PARA COMPARTIR!
        </h2>
      </motion.div>

      <div
        id="hamburguesas"
        className="w-full flex bg-no-repeat bg-cover bg-center"
      >
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Disfruta de las mejores hamburguesas artesanales en La Sazón. Sabores
          únicos, ingredientes frescos y una carne jugosa que te hará volver una
          y otra vez. <br></br>¡No te quedes sin probar nuestras hamburguesas y
          acompáñalas con nuestras papas fritas y salsas especiales!
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        <div className="relative group">
          <img
            src={imgHamburguesa2}
            alt="Hamburguesa 1"
            className="w-60 h-80 object-cover transition-transform transform hover:scale-110"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="text-center text-white">
              <h3 className="text-xl font-bold">Hamburguesa Clásica</h3>
              <p className="text-sm">
                Carne jugosa, queso derretido y vegetales frescos.
              </p>
            </div>
          </div>
        </div>

        <div className="relative group">
          <img
            src={imgHamburguesa1}
            alt="Hamburguesa 2"
            className="w-60 h-80 object-cover transition-transform transform hover:scale-110"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="text-center text-white">
              <h3 className="text-xl font-bold">Hamburguesa BBQ</h3>
              <p className="text-sm">
                Con salsa BBQ, bacon crujiente y cebolla caramelizada.
              </p>
            </div>
          </div>
        </div>

        <div className="relative group">
          <img
            src={imgHamburguesa2}
            alt="Hamburguesa 3"
            className="w-60 h-80 object-cover transition-transform transform hover:scale-110"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="text-center text-white">
              <h3 className="text-xl font-bold">Hamburguesa Veggie</h3>
              <p className="text-sm">
                Deliciosa hamburguesa vegetariana con vegetales frescos.
              </p>
            </div>
          </div>
        </div>

        <div className="relative group">
          <img
            src={imgHamburguesa1}
            alt="Hamburguesa 4"
            className="w-60 h-80 object-cover transition-transform transform hover:scale-110"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="text-center text-white">
              <h3 className="text-xl font-bold">Hamburguesa Especial</h3>
              <p className="text-sm">
                Una combinación única de ingredientes frescos y salsa especial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(hamburguesas, 'hamburguesas');
