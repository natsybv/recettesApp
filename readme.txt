Le projet est de créer une plateforme qui rassemble les différentes recettes de cuisine de la famille. OK

Il s'agit d'un site web sur lequel on peut se connecter via facebook et plus tard via adresse mail.

Après la connexion, nous avons la possibilité de rajouter des nouvelles recettes. OK

Une page d'accueil avec les meilleurs recettes devra être crée.

Une recette est constituée d'une image, une video facultative, une liste d'ingrédients et une liste d'instructions. OK

Les images devront être enregistrées sur le serveur. 

Les vidéos seront des vidéos youtube privées. OK

Une liste des membres devra être disponible sur la page d'accueil.




"Salade d'avocats healthy"
"Faire Bouillir les œufs\nEplucher les avocats et les couper en deux\nAjouter le thon émietté\nAjouter les oeufs\nVerser 2 cuillères à soupe d'huile d'olive\nDégustez"
"2 avocats, une boîte de thon, 3 oeufs, huile d'olive"


"400gr de riz thaï cuit, 3 œufs, 100gr de porc caramelisé, 1 oignon ciselé, 1 carotte en dés, 2 cuillères à soupe de sauce nuoc-mam, 1 botte de coriandre, 100gr de petits pois congelés, 50gr de beurre doux, 1 cuillère à soupe de bouillon de volaille en poudre, 1 citron vert"
"Battre les œufs en omelette et faire cuire sur une poêle.\nEmincer l’omelette en fine tranches. Dans une autre poêle faire fondre le beurre\najouter l’oignon, les carottes, la poudre de bouillon et les petits pois.\nUne fois les oignon bien sué et les carottes moelleuses, ajouter le riz thaï, puis la sauce nuoc-mam,\nensuite faire sauter. \nAjouter le porc et l’omelette. Refaite sauter une dernière fois.\nDéposer le riz sur le plat ajouter le jus de citron vert et la coriandre."
"Riz cantonais"
"https://youtu.be/JRcqQN3Q8Ro"

"4 tasses (1 L) de bouillon de poulet, 2 c. à soupe de miso, 1 c. à soupe de sauce soya, 1 c. à soupe de vinaigre de vin de riz, 1 gousse d’ail, émincée, 1 c. à soupe de gingembre émincé, 1 carotte râpée, 200g de champignons shiitake, 2 paquets de nouilles ramen instantanées, 4 œufs mollets coupés en deux, 2 oignons verts tranchés finemement, 1 feuille de nori"
"Dans une casserole, porter le bouillon à ébullition; réduire le feu à moyen-doux. \nAjouter le miso, la sauce soya, le vinaigre de vin de riz, l’ail et le gingembre\nlaisser mijoter environ 10 minutes\nPorter de nouveau à ébullition; faire cuire les carottes et les champignons environ 2 à 3 minutes.\nDans une autre casserole d’eau bouillante, faire cuire les nouilles ramen environ 2 minutes.\nÉgoutter et transférer dans 4 grands bols à soupe\nverser le bouillon sur les nouilles. \nSéparer les carottes et les champignons dans les bols. Déposer un œuf mollet sur chaque portion\ngarnir d’oignons verts et de nori"
"Ramen maison au poulet"
"https://www.youtube.com/watch?v=_zaaZ_GQFwk"

J'ai cependant une question, dans le projet de recettes de cuisine j'ai essayé de modifier le code afin de créer une page d'accueil
dans laquelle je récupère les 4 dernieres recettes postée et les profils des createurs de recettes. J'ai compris qu'il fallait que 
je modifie l'architecture de la base de données en créant un noeud "Profils" qui contients tous les utilisateurs et leurs recettes.

Le problème est qu'en modifiant le code dans les components app comme ceci "this.ref = base.syncState(`/profils/${this.state.pseudo}/recettes`"
et dans le component Admin comme ceci : "const box = await base.fetch(`/profils/${this.props.pseudo}`, { context: this})"
et "if (!box.chef){await base.post(`/profils/${this.props.pseudo}/chef`,[...]"

2 erreurs apparaissent, (1) la connexion avec Facebook ne fonctionne plus, (2) la fonction charger exemple ne fonctionne plus.

 ###regles firebase
{
  "rules": {
    ".read": "true",  // 2021-6-25
    ".write": "!data.exists()",  // 2021-6-25
    "$box" : {
      ".write": "auth != null && (!data.exists() || data.child('chef').val() === auth.uid)",
      ".read": true
    }
  }
}

<Card key={clé} details={recettes[key][clé]}/>