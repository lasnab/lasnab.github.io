import React from 'react'
import icons from 'simple-icons'


function Icons({ name }) {
  const icon = icons[name]
  if (!icon) return null;

  const svg = <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>{icon.title}</title><path style={{ fill: `#${icon.hex}` }} d={icon.path}/></svg> 
  return ( <img src={icon.svg} alt={icon.title} /> );
}

export default Icons