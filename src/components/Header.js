import React from 'react'

const Header = ({ pseudo }) => {
    const formatPseudo = pseudo => /[iuoaeéèêy]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`

    return (
        <header>
            {
                typeof pseudo === 'undefined' ? <h3>Le tour du monde des recettes</h3> :
                <h1>Les recettes {formatPseudo(pseudo)}</h1>
            }
        </header>
    )
}

export default Header