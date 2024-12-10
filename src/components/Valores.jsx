import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
// import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, description, icon }) => (
  <div className="w-[250px]">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className=" w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="relative bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        id="cards"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>

        <p className="text-center text-[15px pt-10]">{description}</p>
      </div>
    </motion.div>
  </div>
);

const About = () => {
  return (
    <>
      <div className="sm:mt-20 bg-no-repeat bg-cover bg-bottom">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>NUESTRO</p>
          <h2 className={styles.sectionHeadText}>OBJETIVO</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          En Soft queremos construir una empresa impulsada por el compromiso y
          la excelencia del equipo humano que hay detrás. Nuestro principal
          objetivo es el de favorecer la unión entre software y personas, para
          contribuir hacia un mundo donde la tecnología no suponga barreras sino
          facilidades en el día a día.
        </motion.p>
        <br></br>
        <motion.div variants={textVariant()} className="mt-5 flex lg:space-x-10 max-lg:flex-col max-lg:gap-5">
          <section id="card1" className="card lg:w-1/2 lg:h-[250px] h-[300px] sm:w-5/6 mx-auto w-11/12">
            <h2 className={styles.sectionHeadText}>MISIÓN</h2>
            <div className="card__content">
              <p className="card__title">Misión</p>
              <p className="card__description text-[18px] max-md:text-[16px]">
                Simplificar la vida de las personas con soluciones tecnológicas
                innovadoras y personalizadas, ofreciendo experiencias de usuario
                excepcionales que generen valor e impacto positivo en la
                sociedad.
              </p>
            </div>
          </section>
          <section id="card1" className="card lg:w-1/2 lg:h-[250px] h-[300px] sm:w-5/6 mx-auto w-11/12">
            <h2 className={styles.sectionHeadText}>VISIÓN</h2>
            <div className="card__content">
              <p className="card__title">Visión</p>
              <p className="card__description text-[18px] max-md:text-[16px]">
                Ser un referente en desarrollo de software, destacándonos por
                nuestros productos y servicios diferenciales. Queremos ser la
                opción preferida como proveedor tecnológico y como lugar de
                trabajo.
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
