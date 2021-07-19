import React, { Component } from 'react'
import AjouterRecette from './AjouterRecette'
import Login from './Login'
import AdminForm from './AdminForm'


import firebase from 'firebase/app'
import 'firebase/auth'
import base, { firebaseApp } from '../base'

class Admin extends Component {
    state = {
        uid: null,
        chef: null
    }

    componentDidMount () {
        firebase.auth().onAuthStateChanged(user => {
            if (user){
                this.handleAuth({ user })
            }
        })
    }
    

    handleAuth = async authData => {
        const box = await base.fetch(`users/${this.props.pseudo}`, { context: this})

        if (!box.username){
            await base.post(`/users/${this.props.pseudo}/username`, {
                data: this.props.pseudo
                })
        }

        if (!box.chef){
            await base.post(`/users/${this.props.pseudo}/chef`, {
            data: authData.user.uid
            })
        }

        this.setState({
            uid: authData.user.uid,
            chef: box.chef || authData.user.uid
        })
    }

    authenticate = () => {
        const authProvider = new firebase.auth.FacebookAuthProvider()
        firebaseApp
            .auth()
            .signInWithPopup(authProvider)
            .then(this.handleAuth)
    }

    logout = async () => {
        console.log('Déconnexion')
        await firebase.auth().signOut()
        this.setState({ uid: null })
    }

    filtrerRecettes(key){
        const { recettes, majRecette, supprimerRecette } = this.props
        if (recettes[key]['username'] === this.props.pseudo){
          return <AdminForm 
                    key={key}
                    id={key}
                    majRecette = {majRecette}
                    supprimerRecette = {supprimerRecette}
                    recettes = {recettes} />
        }
    }

    render () {
        const { recettes, ajouterRecette, majRecette, chargerExemple,
        supprimerRecette } = this.props

        const logout = <button onClick={this.logout}>Déconnexion</button>

        // si l'utilisateur n'est pas connecté
        if (!this.state.uid){
            return <Login authenticate={this.authenticate} />
        }

        if (this.state.uid !== this.state.chef){
            return (
                <div>
                    <p>Tu n'es pas propriétaire de ces recettes</p>
                    {logout}
                </div>
            )
        }

        return (
            <div className="cards">
                <AjouterRecette ajouterRecette={ajouterRecette} chef={this.state.chef} username={this.props.pseudo}/>
                {
                    Object.keys(recettes)
                        .map(key => this.filtrerRecettes(key))
                }
                <footer>
                    {logout}
                    <button onClick={chargerExemple}>Remplir</button>
                </footer>
            </div>
        )
    }
}

export default Admin