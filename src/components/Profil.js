import React from 'react'

    const Profil = ({ info }) => {

    const requireImage = chemin => {
        try {
            return require(`../img/${chemin}`)
        } catch (err){
            return require(`../img/default.jpeg`)
        }
    }

    return (
        <div className='profil'>
            <div className="image">
                <img src={requireImage(info.image)} alt={info.nom}/>
            </div>
            <div className="nom">
                <h2>{info.nom}</h2>
            </div>
            <div className="description">
                <p>{info.description}</p>
            </div>
        </div>
    )
}

export default Profil