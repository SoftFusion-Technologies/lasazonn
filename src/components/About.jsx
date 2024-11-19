import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';



const About = () => {
  return (
    <>
      <div className="sm:mt-20 bg-stars-bg bg-no-repeat bg-cover bg-bottom">
        <motion.div variants={textVariant()}>
          {/* <p className={styles.sectionSubText}>Introducción</p> */}
          <h2 className={styles.sectionHeadText}>TRAYECTORIA</h2>
        </motion.div>

        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Boro Budur ha sido un referente en Simoca durante 50 años, desde 1973
          hasta 2023. Celebramos medio siglo de fiesta, alegría y unión con la
          comunidad. Nuestro local en la Av. Alem 449 ha sido testigo de
          innumerables eventos, desde grandes celebraciones hasta noches llenas
          de risas y música. Cada uno de estos momentos ha sido una oportunidad
          para crear recuerdos inolvidables y fortalecer los lazos entre
          nuestros amigos y vecinos. Nos enorgullece ser un espacio de encuentro
          y diversión en Simoca, y continuamos festejando la vida con cada
          sonrisa compartida en nuestras puertas. ¡Nos vemos en la próxima
          fiesta en Boro Budur!{' '}
        </motion.p>

    
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
