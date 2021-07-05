import React, { Component } from 'react'
import Header from './components/Header'
import Profil from './components/Profil'
import Card from './components/Card'
import BodyLeft from './components/BodyLeft'
import BodyRight from './components/BodyRight'

//Firebase
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import base, { firebaseApp } from './base'


class Accueil extends Component {

    state = {
        users: {},
    }

    static cpt = 0



     /*getUsers = async () => {
        const users = await base.fetch(`users`, {context: this});

        return await users
      }

      componentDidMount () {
        let users = this.getUsers()

        this.setState({ users: users })

        const recettes = Object.keys(this.state.users)
                            .map(key => this.state.users[key]['recettes'])

        this.setState({ recettes: recettes })
      }*/

        
      componentDidMount () {
        this.ref = base.syncState(`/users`, {
            context: this,
            state: 'users'
        })
      }
      
      componentWillUnmount () {
        base.removeBinding(this.ref)
      }
      
      compteur(key, recettes, recette){
        Accueil.cpt++
        if(Accueil.cpt <= 6){
            return <Card key={recette} details={recettes[key][recette]}/>
        }
      }

    render () {
        //console.log(this.state.users);

        const recettes = Object.keys(this.state.users)
                            .map(key => this.state.users[key]['recettes'])

        const profils = Object.keys(this.state.users)
                            .map(key => this.state.users[key]['profils'])

        let cards = Object.keys(recettes)
                        .map(key => Object.entries(recettes[key]).map(
                                        ([clé, valeur]) => <Card key={clé} details={recettes[key][clé]}/>))
            
        cards = Object.keys(cards).map(key => Object.keys(cards[key])
                                        .map(clef => cards[key][clef]['key'])
                                        .sort((a, b) => a.itemM > b.itemM ? 1 : -1)
                                        .map(recette => this.compteur(key, recettes, recette)))
                                        
        console.log(Accueil.cpt)   
        return (
            <div className='box'>
                <Header/>
                <div id="body">
                    <BodyLeft content={cards}/>
                    <BodyRight/>
                </div>
            </div>
        )
    }
}

export default Accueil