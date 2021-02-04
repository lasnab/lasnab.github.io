import React from 'react'

function Section({ id, title, text, url, link, iframe}) {
    return iframe? 
    (
        <div id={id} className='tc pa3 pa4-ns'>
            <div className='f3 f2-l fw7 lh-title mt0 mb2'>{title}</div>
            <iframe className='mw8-ns mw5' title={title} src={iframe} frameborder='0' width='640' height='389' allowfullscreen='true' mozallowfullscreen='true' webkitallowfullscreen='true'/>
        </div>
    )
    :
    (
        <div className='tc pa3 pa4-ns'>
            <div id={id} className='f3 f2-l fw7 lh-title mt0 mb2'>{title}</div>
            <div className='f5 mb2 mw8'>{text}</div>
            <div className='mb4'><a href={link} className='hover-black blue b f5 no-underline'>{id} 🔗</a></div>
        </div>
    )

}

export default Section
