import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const About = () => {
  return (
    <>
      <div className="sm:mt-20 bg-no-repeat bg-cover bg-bottom">
        <motion.div variants={textVariant()}>
          {/* <p className={styles.sectionSubText}>Introducción</p> */}
          <h2 className={styles.sectionHeadText}>NOSOTROS</h2>
        </motion.div>

        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          initial={{ opacity: 0, y: 20 }} // Inicialmente está oculto y desplazado hacia abajo
          animate={{ opacity: 1, y: 0 }} // Se mueve a su posición original y aparece
          transition={{ duration: 2 }} // Duración aumentada a 2 segundos
        >
          En La Sazón, nos especializamos en ofrecerte las mejores hamburguesas
          y pizzas con un toque único. Sabemos lo importante que es disfrutar de
          una comida deliciosa sin complicaciones, por eso te traemos un
          servicio de comida a domicilio pensado especialmente para vos. Ya sea
          que estés disfrutando de una noche de película o celebrando con
          amigos, nuestro compromiso es brindarte una experiencia culinaria que
          te haga sentir como en casa. ¡Y no te olvides de nuestro horario
          especial! Estamos disponibles para vos de viernes a domingos, desde las
          21:00 hasta las 00:00. ¡Hacé tu pedido y dejá que La Sazón transforme
          tu finde! 🍔🍕
        </motion.p>
      </div>
    </>
  );
};

export default SectionWrapper(About, 'nosotros');
