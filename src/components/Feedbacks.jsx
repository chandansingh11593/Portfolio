import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { client } from '../../client';
const FeedbackCard = ({ index, feedback, name, position, company, image }) => {
  return (
    <>
      <motion.div
        variants={fadeIn('', 'spring', index * 0.5, 0.75)}
        className="bg-black-200 p-10 rounded-3xl sm:w-[320px] w-full"
      >
        <p className="text-white font-black text-[48px]"></p>
        <div className="mt-1">
          <p className="text-white text-[18px]">{feedback}</p>
          <div className="mt-7 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">@</span> {name}
              </p>
              <p className="mt-1 text-secondary text-[12px]">
                {position} of {company}
              </p>
            </div>
            <img
              src={image}
              alt={`feedback by ${name}`}
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

const Feedbacks = () => {
  const [testimonials, setTestimonials] = useState(null);
  useEffect(() => {
    async function fetchProjects() {
      const query = `*[_type == 'testimonial']{ ...,'image': image.asset->url }`;
      const res = await client.fetch(query);

      setTestimonials(res);
    }

    if (!testimonials) fetchProjects();
  });
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`bg-tertiary rounded-2xl min-h-[300px] ${styles.padding}`}
      >
        <motion.div variants={textVariant()}>
          <p className={` ${styles.sectionSubText}`}>What others say</p>
          <h2 className={`${styles.sectionHeadText}`}>Testinomials</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials?.map((testimonial, index) => (
          <FeedbackCard
            key={`testimonial-${index}-${testimonial.name}`}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks);
