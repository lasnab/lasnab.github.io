import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import { hardwares } from '../../data';

function Hardware() {
  return (
    <div className="fn w-100 h-auto center pt5-ns ph4 mt5 mb6">
      <div className="flex flex-wrap justify-center w-100">
        {hardwares.map(({ name, image, links, desc }) => {
          return (
            <ProjectCard
              name={name}
              image={image}
              links={links}
              description={desc}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Hardware;
