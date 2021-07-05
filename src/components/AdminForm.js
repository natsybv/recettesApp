import React from 'react'

const AdminForm = ({
    id: key,
    majRecette,
    recettes,
    supprimerRecette

}) => {
    const recette = recettes[key]

    const handleChange = (event, key) => {
        const { name, value } = event.target
        const recette = recettes[key]
        recette[name] = value
        majRecette(key, recette)
    }

    return (
        <div className="card">
            <form className="admin-form">

                <input value={recette.nom} onChange={e => handleChange(e, key)} 
                name='nom' type="text"  placeholder='Nom de la recette'/>
                <input value={recette.image} onChange={e => handleChange(e, key)} 
                name='image' type="text"  placeholder={'Nom de l\'image'}/>
                <input value={recette.video} onChange={e => handleChange(e, key)} 
                name='video' type="text"  placeholder={'Lien youtube de la vidéo'}/>
                <textarea value={recette.ingredients} onChange={e => handleChange(e, key)} name="ingredients" 
                rows="4" placeholder='Liste des ingredients' />
                <textarea value={recette.instructions} onChange={e => handleChange(e, key)} name="instructions" 
                rows="15" placeholder='Liste des instructions' />

            </form>
            <button onClick={() => supprimerRecette(key)} >Supprimer</button>
        </div>
    )
}

export default AdminForm