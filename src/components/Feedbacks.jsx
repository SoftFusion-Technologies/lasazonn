import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const shortText = `${testimonial.substring(0, 185)}...`;
  const displayText = isExpanded ? testimonial : shortText;

  return (
    <motion.div
      variants={fadeIn('', 'spring', index * 0.5, 0.75)}
      className="bg-yellow-600 p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <p className="text-white font-black text-[30px]">"</p>

      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">{displayText}</p>
        {!isExpanded && testimonial.length > 185 && (
          <button onClick={toggleExpand} className="text-black mt-2">
            Ver más
          </button>
        )}
        {isExpanded && (
          <button onClick={toggleExpand} className="text-black mt-2">
            Ver menos
          </button>
        )}

        {/* <div className="mt-10 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} de {company}
            </p>
          </div>

          <img
            src={image}
            alt={`feedback_by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div> */}
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div id="contact" className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-black rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          {/* <p className={styles.sectionSubText}>Lo que otros dijeron</p> */}
          <h2 className={styles.sectionHeadText}>Testimonios.</h2>
        </motion.div>
      </div>
      <div
        className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, '');
