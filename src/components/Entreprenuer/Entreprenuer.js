import React from 'react';
import EntreprenuerCard from './EntreprenuerCard';
import { business } from '../../data';

function Entreprenuer() {
  const { title, description, ventures } = business;
  return (
    <div className="flex flex-column justify-center ma4">
      <div className="tc">
        <p className="f2 f1-ns mt6-m mb0 lh-title">{title}</p>
        <p className="f3 near-green">{description}</p>
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {ventures.map((venture) => {
          return venture.name ? <EntreprenuerCard venture={venture} /> : null;
        })}
      </div>
    </div>
  );
}

export default Entreprenuer;
