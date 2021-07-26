import React from 'react';
import LinkButton from './LinkButton';

function ProjectCard({ name, image, links, description }) {
  return (
    <div className="grow ba b--gray br4 w-auto w5-ns w-40-m w-20-l mv3 mh3">
      <img className="br--top br4 w-100" src={image} alt="project" />
      <div className="pl3 pr2 pv2">
        <div className="no-underline f3 tracked-tight mt4 gray hover-black">
          {name}
        </div>
        <div className="flex justify-center items-center pv2 f4">
          {links.map((link) => {
            return link.url ? <LinkButton link={link} /> : null;
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
