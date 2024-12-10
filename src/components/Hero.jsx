import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas, StarsCanvas } from './canvas';
// import Logo3d from '../assets/Logo3d.svg';
import Boro from '../assets/boro.mp4';
import LogoRosaBR from '../assets/LogoRosaBR.svg';
import Tilt from 'react-parallax-tilt';
import Typewriter from 'typewriter-effect';
import { StarsCanvas2 } from '../components/canvas/index';
import ImgPasarTragos from '../assets/tech/posibleImg.webp';
const Hero = () => {
  return (
    <section
      className="relative w-full h-screen mx-auto bg-bar-bg bg-no-repeat bg-cover bg-fixed"
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
            NÁPOLES DRUGSTORE BAR
          </h1>
          <p className="font-black mt-2 text-black text-center lg:text-left lg:ml-16 text-[22px] uppercase">
            ¡BUENOS AMIGOS BUENOS MOMENTOS🍻!
          </p>
        </div>
        <div className="relative w-[200px] lg:w-[560px] flex justify-center items-center group">
          <img
            src={ImgPasarTragos}
            className="rounded-full"
            alt="Personas pasando una jarra de cerveza"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
