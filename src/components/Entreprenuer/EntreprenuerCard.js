import React from 'react'

function EntreprenuerCard({ venture }) {
    const { name, logo, description, website, status } = venture
    return (
        <div className="tc pa3 pa5-ns">
            <div className="hide-child relative ba b--black-20 mw5 center">
                <img src={logo} className="db" alt="venture" />
                <div className="pa2 bt b--black-20">
                    <a className="f4 b db link dark-blue hover-blue" href={website}>{name}</a>
                    <p className="f6 gray mv1">{description}</p>
                    <p className="f6 gray mv1 b">STATUS: {status}</p>
                    <a className="link tc ph3 pv1 db bg-animate bg-dark-green hover-bg-blue white f6 br1" href={website}>Website</a>
                </div>
            </div>
        </div>
    )
}

export default EntreprenuerCard