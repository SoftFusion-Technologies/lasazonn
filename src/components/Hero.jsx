import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas, StarsCanvas } from './canvas';
// import Logo3d from '../assets/Logo3d.svg';
import Boro from '../assets/boro.mp4';
import LogoRosaBR from '../assets/LogoRosaBR.svg';
import Tilt from 'react-parallax-tilt';
import Typewriter from 'typewriter-effect';
import { StarsCanvas2 } from '../components/canvas/index';
const Hero = () => {
  return (
    <section
      className="relative w-5/6 h-screen mx-auto bg-stars-bg bg-no-repeat bg-cover bg-fixed"
      id="home"
    >
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col lg:flex-row items-center gap-5 `}
      >
        {/* <StarsCanvas2></StarsCanvas2> */}
        <div className="w-full">
          <h1
            className={`${styles.heroHeadText} text-yellow-500 text-center lg:text-left -mt-10`}
          >
            BORO BUDUR
          </h1>
          <p className="font-black mt-2 text-white-100 text-center lg:text-left lg:ml-28 text-[18px] uppercase">
            ¡Los reyes de la noche 👑!
          </p>
        </div>
        <div className="relative w-[200px] lg:w-[560px] flex justify-center items-center group">
          <video
            src={Boro}
            autoPlay
            loop
            muted
            className="w-full relative z-10 transition-transform duration-500 group-hover:scale-105 animate-float rounded-full"
          />
          <div className="absolute inset-0 rounded-full bg-yellow-500 opacity-50 blur-xl animate-pulseGlow transition-all duration-500 group-hover:blur-3xl group-hover:scale-110"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
