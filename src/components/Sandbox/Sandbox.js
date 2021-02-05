import React from 'react'
import Icons from '../Icons/Icons'
import { skills } from '../../data'

function Sandbox() {
    const { lang, frame, tech, proto } = skills
    return (
            <div className=''>
                {lang.map(skill => {return <Icons name={skill} />} )}
            </div>
    )
}

export default Sandbox
