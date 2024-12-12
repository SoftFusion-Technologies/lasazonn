import React, { Suspense, lazy } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

import imgPizza from '../assets/Pizzas/imgPizza.jpg';
import imgPizza1 from '../assets/Pizzas/imgPizza1.jpg';
import imgPizza2 from '../assets/Pizzas/imgPizza2.jpg';
import imgPizza3 from '../assets/Pizzas/imgPizza4.jpg';

const PartyCard = ({ name, description, tags, image }) => {
  return (
    <motion.div variants={fadeIn('up', 'spring')}>
      <Tilt
        options={{
          max: 25,
          scale: 1,
          speed: 400
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
            loading="lazy"
          />
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Parties = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Pizzas en La Sazón</p>
        <h2 className={`${styles.sectionHeadText}`}>
          ¡DELICIOSAS PIZZAS PARA COMPARTIR!
        </h2>
      </motion.div>

      <div id="parties" className="w-full flex bg-no-repeat bg-cover bg-center">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Disfruta de las mejores pizzas artesanales en La Sazón. Sabores
          únicos, ingredientes frescos y una masa crujiente que te hará volver
          una y otra vez. <br></br>¡No te quedes sin probar nuestras pizzas y
          acompáñalas con nuestras bebidas y salsas especiales!
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        <div className="relative group">
          <img
            src={imgPizza}
            alt="Pizza 1"
            className="w-60 h-80 object-cover transition-transform transform hover:scale-110"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="text-center text-white">
              <h3 className="text-xl font-bold">Pizza 1</h3>
              <p className="text-sm">Descripción de la pizza 1</p>
            </div>
          </div>
        </div>

        <div className="relative group">
          <img
            src={imgPizza1}
            alt="Pizza 2"
            className="w-60 h-80 object-cover transition-transform transform hover:scale-110"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="text-center text-white">
              <h3 className="text-xl font-bold">Pizza 2</h3>
              <p className="text-sm">Descripción de la pizza 2</p>
            </div>
          </div>
        </div>

        <div className="relative group">
          <img
            src={imgPizza2}
            alt="Pizza 3"
            className="w-60 h-80 object-cover transition-transform transform hover:scale-110"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="text-center text-white">
              <h3 className="text-xl font-bold">Pizza 3</h3>
              <p className="text-sm">Descripción de la pizza 3</p>
            </div>
          </div>
        </div>

        <div className="relative group">
          <img
            src={imgPizza3}
            alt="Pizza 4"
            className="w-60 h-80 object-cover transition-transform transform hover:scale-110"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="text-center text-white">
              <h3 className="text-xl font-bold">Pizza 4</h3>
              <p className="text-sm">Descripción de la pizza 4</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Parties, 'parties');
