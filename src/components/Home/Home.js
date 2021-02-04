import React from 'react'
import Section from './Section.js'
import Carousel from './Carousel'
import { home } from '../../data'

function Home() {
    const { images, header, sections, hireme } = home
    const {candid, name, title, text } = header

    return (
        <div className='flex flex-wrap justify-center items-start ma4 mt5-ns mb5-ns'>
            <Carousel images={images} />
            <div className='tc pa3 pa5-ns mb0'>
                <img src={candid} className="db ba b--black-20 mw5 mw4-m center" alt="candid" />
                <p className='f6 f7-m fw1 black-65'>QCreative Picnic :: Oct. 6/2019</p>
            </div>
            <div className="pa3 pa2-m pa4-ns pt4-m bg-white black-70 w-50-m w-60-l">
                <div className="bb b--black-70 pt4 pb2">
                    <h3 className="f2 f3-m fw7 lh-title mt0 mb2">{name}</h3>
                    <h4 className="f3-ns f4 fw4 i lh-title mv1">{title}</h4>
                </div>
                <div className="f4 pv2 mw8 mb4">{text}</div>
                { sections.map((section) => {return section.url? <div className='f4 mv1 pv1 mw8'><a href={section.url} className='dim bg-near-black white no-underline'>{section.title}</a></div> : null} )}
                <div className="f4 mt3 pv2 mw8">{hireme.text}<a href={hireme.resume} className='mv2 hover-black blue b f5 no-underline'>Resume 🔗</a></div>
            </div>
            { sections.map((s) => {return s.url? <Section id={s.id} title={s.title} text={s.text} url={s.url} link={s.link} iframe={s.iframe} /> : null} )}
        </div>
    )
}

export default Home
