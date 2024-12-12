import { styles } from '../styles';
const Hero = () => {
  return (
    <section
      className="relative w-full h-screen mx-auto bg-bar-bg bg-no-repeat bg-cover bg-fixed"
      id="home"
    >
      <div
        className={`absolute inset-0 top-0 max-w-7xl mx-auto ${styles.paddingX} flex flex-col lg:flex-row items-center gap-5`}
      >
        <div className="mt-40 w-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:mt-0">
          <h1
            className={`${styles.heroHeadText} font-sazon text-white text-[42px] sm:text-[56px] lg:text-[72px] font-bold`}
          >
            La Sazón
          </h1>

          <p className="font-black mt-4 text-orange-500 text-[16px] sm:text-[18px] lg:text-[22px] uppercase px-4 sm:px-0">
            ¡BUENOS AMIGOS BUENOS MOMENTOS🍔!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
