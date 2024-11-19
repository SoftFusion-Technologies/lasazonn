import React, { Suspense, lazy } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

import gin from '../assets/Tragos/gin.jpg';
import bandera from '../assets/Tragos/bandera.jpg';
import sex from '../assets/Tragos/sex.jpg';
import daikiri from '../assets/Tragos/daikiri.jpg';

const PartyCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link
}) => {
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
        <p className={`${styles.sectionSubText}`}>Fiestas en Boro Budur</p>
        <h2 className={`${styles.sectionHeadText}`}>
          ¡EVENTOS Y TRAGOS!
        </h2>
      </motion.div>

      <div
        id="parties"
        className="w-full flex bg-stars-bg bg-no-repeat bg-cover bg-center"
      >
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Unite a las mejores fiestas de la temporada en Boro Budur. Aquí
          encontrarás eventos increíbles, música, baile y diversión sin parar.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        <img
          src={gin}
          alt="Gin Tonic"
          className="w-48 h-96 object-contain transition-transform transform hover:scale-110"
        />
        <img
          src={bandera}
          alt="Bandera Francesa"
          className="w-48 h-96 object-contain transition-transform transform hover:scale-110"
        />
        <img
          src={sex}
          alt="Sex on the Beach"
          className="w-48 h-96 object-contain transition-transform transform hover:scale-110"
        />
        <img
          src={daikiri}
          alt="Daikiri"
          className="w-48 h-96 object-contain transition-transform transform hover:scale-110"
        />
      </div>
    </>
  );
};

export default SectionWrapper(Parties, 'parties');
