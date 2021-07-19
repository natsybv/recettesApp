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
        recettes: {}
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
        this.ref = base.syncState(`/recettes`, {
            context: this,
            state: 'recettes'
        })

        this.ref2 = base.syncState(`/users`, {
          context: this,
          state: 'users'
      })

      }
      
      componentWillUnmount () {
        base.removeBinding(this.ref)
        base.removeBinding(this.ref2)
      }
      
      compteur(key, recettes, recette){
        Accueil.cpt++
        if(Accueil.cpt <= 6){
            return <Card key={recette} details={recettes[key][recette]}/>
        }
      }

    render () {
        
        const profils = Object.keys(this.state.users)
                          .map(key => this.state.users[key])

        const recettes = Object.keys(this.state.recettes)
                            .map(key => this.state.recettes[key])

        let cards = Object.keys(recettes)
                        .map(key => <Card key={key} details={recettes[key]} accueil={true} />)
                        .sort((a, b) => a.itemM > b.itemM ? 1 : -1)

        let profil = Object.keys(profils)
                        .map(key => <Profil key={key} info={profils[key]}/>)
                        .sort((a, b) => a.itemM > b.itemM ? 1 : -1)

            
        /*cards = Object.keys(cards).map(key => Object.keys(cards[key])
                                        .map(clef => cards[key][clef]['key'])
                                        .sort((a, b) => a.itemM > b.itemM ? 1 : -1)
                                        .map(recette => this.compteur(key, recettes, recette)))*/
                                        
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