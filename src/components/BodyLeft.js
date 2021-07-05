import React from 'react'

const BodyLeft = ({ content }) => {
    return (
        <div className='bodyLeft'>
            <h2>Les dernières recettes</h2>
            <div className='cards'>
                { content }
            </div>
        </div>
    )
}

export default BodyLeft