import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import { softwares } from '../../data';

function Software() {
  return (
    <div className="fn w-100 h-auto center pt5-ns ph4 mt5 mb6">
      <div className="flex flex-wrap justify-center w-100">
        {softwares.map((software) => {
          return (
            <ProjectCard
              name={software.name}
              image={software.image}
              links={software.links}
              description={software.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Software;
