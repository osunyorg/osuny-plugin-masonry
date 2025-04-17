# osuny-masonry

## Installation

Dans `config/_default/config.yaml` :
```yaml
theme: 
  - osuny
  - osuny-masonry
```

Dans `assets/js/main.js` : 

```js
import './theme/';
import './osuny-masonry';
```

Dans `assets/sass/main.sass` : 

```sass
@import "_theme/hugo-osuny"
@import "osuny-masonry"
```

## Style "Masonry" pour les blocs en grille

Pour appliquer une mise en forme style "masonry" : 
 - Créer un bloc de liste avec une mise en forme "grille"
 - Dans les paramètrages avancés du bloc : ajouter la classe spéciale "masonry" au bloc


