# Osuny Masonry

## Installation

### Ajouter le submodule

```
cd themes
git submodule add git@github.com:osunyorg/osuny-masonry.git
```

### Appeler le plugin

Dans `config/_default/config.yaml` :
```yaml
theme: 
  - osuny
  - osuny-masonry
```

### Appeler les fichiers


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

### Utiliser le style "Masonry" pour les blocs en grille

Pour appliquer une mise en forme style "masonry" : 
 - Créer un bloc de liste avec une mise en forme "grille"
 - Dans les paramètrages avancés du bloc : ajouter la classe spéciale "masonry" au bloc


### Exemple

https://www.diapason-agence.fr/references/
