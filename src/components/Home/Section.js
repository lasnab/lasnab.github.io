import React from 'react'
import Icons from '../Icons/Icons'
import { home, skills } from '../../data'

function Section({ id, title, text, url, link, iframe}) {
    const { lang, frame, tech, proto } = skills
    
    if (id==='design') {
        return (
            null
            // <div id={id} className='tc pa3 pa4-ns'>
            //     <div className='f3 f2-l fw7 lh-title mt0 mb2'>{title}</div>
            //     <iframe className='mw8-ns mw5' title={title} src={iframe} frameborder='0' width='640' height='389' allowfullscreen='true' mozallowfullscreen='true' webkitallowfullscreen='true'/>
            // </div>
        )
    } else if (id==='skills') {
        return (
            <div id={id} className='tc pa3 pa4-ns '>
                <div className='f3 f2-l fw7 lh-title mt0 mb2'>{title}</div>
                    <div className='dib w-50'>
                        {lang.map(skill => {return <Icons name={skill} />})}
                    </div>
            </div>
        )
    } else {
        return (
            <div className='tc pa3 pa4-ns'>
                <div id={id} className='f3 f2-l fw7 lh-title mt0 mb2'>{title}</div>
                    <div className='f5 mb2 mw8'>{text}</div>
                <div className='mb4'><a href={link} className='hover-black blue b f5 no-underline'>{id} 🔗</a></div>
            </div>
        )
    }
}

export default Section
