import React, { useEffect, useState } from 'react';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { client } from './../../client';

const Tech = () => {
  const [technologies, setTecnologies] = useState(null);

  useEffect(() => {
    async function fetchTechnologies() {
      const query = `*[_type == 'technology'] {name,_id, 'icon': image.asset->url}`;
      const sTechnologies = await client.fetch(query);

      setTecnologies(sTechnologies);
    }

    if (!technologies) fetchTechnologies();
  });

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies && technologies.length
        ? (technologies || []).map((tech, index) => (
            <div className="w-28 h-28 text-center" key={tech._id}>
              <BallCanvas icon={tech.icon} />
              {tech.name}
            </div>
          ))
        : 'Loading ....'}
    </div>
  );
};

export default SectionWrapper(Tech);
