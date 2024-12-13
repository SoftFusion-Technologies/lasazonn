import { styles } from '../styles';
import { motion } from 'framer-motion';
import './span.css';
const Hero = () => {
  return (
    <section
      className="relative w-full h-screen sm:h-[100vh] mx-auto bg-bar-bg bg-no-repeat bg-cover bg-center sm:bg-fixed"
      id="home"
    >
      <div
        className={`-mt-36 absolute inset-0 max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-center justify-center text-center`}
      >
        <h1
          className={`${styles.heroHeadText} uppercase font-sazon text-black text-[42px] sm:text-[56px] lg:text-[72px] font-bold`}
        >
          <motion.h1
            className={`${styles.heroHeadText} uppercase font-sazon text-black text-[42px] sm:text-[56px] lg:text-[72px] font-bold`}
            initial={{ scale: 1 }}
            animate={{
              scale: [1, 1.1, 0.8] // Efecto de aplastamiento
            }}
            transition={{
              duration: 0.5, // Duración del aplastamiento
              delay: 1 // Espera a que el smasher baje
            }}
          >
            La Sazón
          </motion.h1>

          {/* Smasher */}
          <motion.div
            className="absolute top-0 w-[100px] h-[100px] bg-gray-800 rounded-full flex items-center justify-center"
            initial={{ y: -200, opacity: 0 }} // Comienza fuera de la pantalla
            animate={{ y: [0, 20], opacity: 1 }} // Baja y aplasta
            transition={{
              duration: 1,
              ease: 'easeOut'
            }}
          >
            <span className="text-white font-bold text-[18px]">Smasher</span>
          </motion.div>

          {/* Humo */}
          <motion.div
            className="absolute top-[50%] w-[150px] h-[80px] bg-gray-300 rounded-lg opacity-50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 0 }} // Se expande y desaparece
            transition={{
              duration: 1.5,
              delay: 1.2, // Espera al aplastamiento
              ease: 'easeOut'
            }}
          />
        </h1>
        <p className="font-black mt-4 text-orange-500 text-[28px] sm:text-[18px] lg:text-[22px] uppercase px-4 sm:px-0">
          <span className="line1">
            ¡<span className="letter">B</span>
            <span className="letter">U</span>
            <span className="letter">E</span>
            <span className="letter">N</span>
            <span className="letter">O</span>
            <span className="letter">S</span>
            <span className="letter"> </span>{' '}
            {/* Espacio entre "BUENOS" y "AMIGOS" */}
            <span className="letter">A</span>
            <span className="letter">M</span>
            <span className="letter">I</span>
            <span className="letter">G</span>
            <span className="letter">O</span>
            <span className="letter">S</span>
          </span>
          <span className="line2">
            <span className="letter black-text">B</span>
            <span className="letter black-text">U</span>
            <span className="letter black-text">E</span>
            <span className="letter black-text">N</span>
            <span className="letter black-text">O</span>
            <span className="letter black-text">S</span>
            <span className="letter black-text"> </span>{' '}
            {/* Espacio entre "BUENOS" y "MOMENTOS" */}
            <span className="letter black-text">M</span>
            <span className="letter black-text">O</span>
            <span className="letter black-text">M</span>
            <span className="letter black-text">E</span>
            <span className="letter black-text">N</span>
            <span className="letter black-text">T</span>
            <span className="letter black-text">O</span>
            <span className="letter black-text">S!</span>
          </span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
