import React from 'react'
import { Link } from 'react-router-dom'
import { footer } from '../../data'

function Footer() {
    const { title, links } = footer
    return (
        <div className='w-100 fixed pb2 tc bg-white' style={{bottom:'0'}}>
            <div className='f6 tc pv1 mv1 grow'>
                <Link src='/' className='link near-black hover-dark-blue'>{title}</Link>
            </div>
            { links.map((link) => { return (
                                        <a className='grow link hover-silver dib h2 w2 mr3' href={link.url}>
                                            <img src={link.icon} alt='social_logo' />
                                        </a> 
                                    )
                                })
                }
        </div>
    )
}

export default Footer
