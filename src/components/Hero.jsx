import { styles } from '../styles';
const Hero = () => {
  return (
    <section
      className="relative w-full h-screen mx-auto bg-bar-bg bg-no-repeat bg-cover bg-fixed"
      id="home"
    >
      <div
        className={`-mt-36 absolute inset-0 max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-center justify-center text-center`}
      >
        <h1
          className={`${styles.heroHeadText} uppercase font-sazon text-black text-[42px] sm:text-[56px] lg:text-[72px] font-bold`}
        >
          La Sazón
        </h1>
        <p className="font-black mt-4 text-orange-500 text-[26px] sm:text-[18px] lg:text-[22px] uppercase px-4 sm:px-0">
          ¡BUENOS AMIGOS <span className="text-black">BUENOS MOMENTOS!</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
