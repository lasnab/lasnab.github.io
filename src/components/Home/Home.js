import React from 'react'
import { header } from '../../data'

function Home() {
    const {candid, name, title, text } = header
    return (
        <div className='flex flex-wrap justify-center ma4 mv5-m'>
            <div className='tc pa3 pa5-ns'>
                <img src={candid} className="db ba b--black-20 mw5 center" alt="candid" />
                <p className='f6 fw1 black-65'>QCreative Picnic :: Oct. 6/2019</p>
            </div>
            <div className="pa3 pa4-ns bg-white black-70 f3">
                <div className="bb b--black-70 pt4 pb2">
                    <h3 className="f2 fw7 lh-title mt0 mb2">{name}</h3>
                    <h4 className="f3-ns f4 fw4 i lh-title mv1">{title}</h4>
                </div>
                <div className="f3-ns f4 pv2 mw8">{text}</div>
            </div>
        </div>
    )
}

export default Home
