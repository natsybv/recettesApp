import React from 'react'

const Card = ({ details, accueil }) => {
    const ingredients = details.ingredients
        .split(',')
        .map(item => <li key={item}>{item}</li>)

    const instructions = details.instructions
        .split('\n')
        .map(item => <li key={item}>{item}</li>)

    const requireImage = chemin => {
        try {
            return require(`../img/${chemin}`)
        } catch (err){
            return require(`../img/default.jpeg`)
        }
    }

    const requireVideo = chemin => {
        if (chemin.indexOf('be/') !== -1){

            let index = chemin.indexOf('be/')
            index += 3
            let newChemin = chemin.slice(index)
            let debut = "https://www.youtube.com/embed/"
            newChemin = debut+newChemin
            return newChemin
        } else if(chemin.indexOf('v=') !== -1) {
            let index = chemin.indexOf('v=')
            index += 2
            let newChemin = chemin.slice(index)
            let debut = "https://www.youtube.com/embed/"
            newChemin = debut+newChemin
            return newChemin
        } else {
            return "Mauvais lien";
        }
    }

    return (
        <div className='card'>
            <div className='image'>
                <img src={requireImage(details.image)} alt={details.nom}/>
            </div>
            <div className='video'> 
            {
                typeof details.video === 'undefined' ? <img src={require(`../img/default_gif.gif`)} alt='default'/> :
                requireVideo(details.video) === "Mauvais lien" ? <img src={require(`../img/default_gif.gif`)} alt='default'/> :
                <iframe width="560" height="315"
                    src={requireVideo(details.video)} title="YouTube video player" frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
                
            }
            </div>
            <div className='recette'>
                <h2>{details.nom}</h2>
                {
                    accueil ? <p><a href={`http://localhost:3000/pseudo/${details.username}`}>crée par : {details.username}</a></p> : <span/>
                }
                <ul className="liste-ingredients">
                    {ingredients}
                </ul>
                <ol className="liste-instructions">
                    {instructions}
                </ol>
            </div>
        </div>
    )
}

export default Card