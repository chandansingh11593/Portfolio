import React, { useState, useEffect } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from './../style';
import { SectionWrapper } from './../hoc';
import { textVariant } from '../utils/motion';
import { client } from './../../client';
import PortableText from '@sanity/block-content-to-react';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex items-center justify-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company}
          className="w-[80%] h-[80%] object-contain rounded-full bg-white"
        />
      </div>
    }
  >
    <div>
      <h3>{experience.designation}</h3>
      <p className="text-secondary text-[16px] font-semibold !mb-3 !mt-0">
        {experience.company}
      </p>
    </div>
    <PortableText
      className="mt-5 list-disc! ml-5 space-y-2"
      blocks={experience.responsibilities || []}
    />
  </VerticalTimelineElement>
);

const Experience = () => {
  const [experiences, setExperiences] = useState(null);
  useEffect(() => {
    async function fetchProjects() {
      const query = `*[_type == 'experience']| order(startDate desc){ ..., 'icon': companyIcon.asset->url }`;
      const res = await client.fetch(query);

      setExperiences(res);
    }

    if (!experiences) fetchProjects();
  });

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Journey so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      <div className="my-15 flex flex-col">
        {experiences && experiences.length ? (
          <VerticalTimeline>
            {experiences.map((experience) => (
              <ExperienceCard
                key={`experience-card-${experience._id}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        ) : (
          'Loading Experiences'
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'experience');
