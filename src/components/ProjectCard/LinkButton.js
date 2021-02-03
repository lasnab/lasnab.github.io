import React from 'react'

function LinkButton({ link={'name':'', 'url':''} }) {
    const { name, url } = link
    return (
        <a className='no-underline black ba b-blue br3 ph2 pv0 mh2 hover-blue' href={url}>{name}</a>
    )
}

export default LinkButton
