import React, { Component } from 'react'

class AjouterRecette extends Component {

    state = {
        chef: '',
        id: '',
        username: '',
        nom: '',
        image: '',
        video: '',
        ingredients: '',
        instructions: ''
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = event => {
        event.preventDefault()
        let recette
        const id = Date.now()
        this.setState({ chef: this.props.chef, 
                        id: id, 
                        username: this.props.username
                    }, function () {
                        recette = {  ...this.state}
                        this.props.ajouterRecette(recette, id)
                        // Reset
                        Object.keys(recette).forEach(item => {
                            recette[item] = ''
                        })
                        this.setState({ ...recette })
                    })  
    }

    render () {
        return (
            <div className="card">
                <form className="admin-form ajouter-recette" onSubmit = {this.handleSubmit}>
                    <input value={this.state.nom} onChange={this.handleChange} name='nom' type="text"  placeholder='Nom de la recette'/>
                    <label htmlFor="file">Votre image:{" "}
                        <input value={this.state.image} onChange={this.handleChange} type="file" accept="image/*" />
                    </label>
                    <input value={this.state.video} onChange={this.handleChange} name='video' type="text"  placeholder={'Lien youtube de la vidéo'}/>    
                    <textarea value={this.state.ingredients} onChange={this.handleChange} name="ingredients" rows="4" placeholder='Liste des ingredients séparés par une virgule'></textarea>
                    <textarea value={this.state.instructions} onChange={this.handleChange} name="instructions" rows="15" placeholder='Liste des instructions (une instruction par ligne)'></textarea>
                    <button type='submit'>+ Ajouter une recette</button>
                </form>
            </div>
        )
    }
}

export default AjouterRecette