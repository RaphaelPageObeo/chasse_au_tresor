# Chasse au Trésor

Le site est accessible à l'adresse suivante : https://chasseautresormargauxlorena.netlify.app/

## Concept 

Pour son mariage, une amie m'a demandé de lui organiser une chasse au trésor à laquelle les invités pourraient prendre part. Ne connaissant pas le nombre exact de participants ou même les lieux, passer par une plate-forme accessible par smartphone me paraissait une bonne solution. Cette plate-forme doit permettre de :

- Afficher une énigme.
- Une fois résolue, un indice permettant de trouver un code caché dans le lieu du mariage doit être affiché.
- L'utilisateur doit pouvoir saisir ce code dans l'application. Si celui-ci correspond à une énigme et que l'utilisateur a résolu les énigmes précédentes, une nouvelle énigme doit alors s'afficher.
- Un classement de la rapidité des participants à résoudre les dix énigmes doit pouvoir être fait. Un timer doit donc être lancé au début de la chasse et arrêté à la fin.

## Rendu
La page est divisée en deux zones, détaillées ci-dessous :

![Capture d’écran 2022-07-02 125834](https://user-images.githubusercontent.com/61457677/176997974-439cfb20-0af5-43a2-8596-397949494653.png)

### 1) Le "Header"
Cette partie a principalement un intêret esthétique, mais deux boutons ouvrant chacun une pop-up différente y sont également placés.

![image](https://user-images.githubusercontent.com/61457677/176998133-4a9d2721-b70a-438c-a976-ed5f8d633cb8.png)
1) Le bouton numéro un ouvre une pop-up d'informations, qui contient divers moyens de me contacter pendant le mariage en cas de problème ainsi qu'un rappel du fonctionnement de la chasse au trésor :

![image](https://user-images.githubusercontent.com/61457677/176998241-1752dc5f-b37c-4f2b-98d5-3d2ecdcf80a9.png)

2) Le bouton numéro deux ouvre une pop-up de statistiques sur la partie en cours : 

![image](https://user-images.githubusercontent.com/61457677/176998261-a2a03335-57cb-416d-b350-7ac059eb2f83.png)

### 2) Le "Body"

Cette partie de la page a deux missions différentes.

- Permettre de créer l'équipe du participant :

![image](https://user-images.githubusercontent.com/61457677/176998543-03c5b813-4b49-4467-ad91-227e3383af37.png)

- Résoudre les énigmes. Une fois un nom d'équipe saisi, la première énigme est affichée :

![image](https://user-images.githubusercontent.com/61457677/176998591-6918cb37-1fa4-4cd1-a543-3c64192142ac.png)

Si l'utilisateur saisi une mauvaise réponse, une pénalité est ajoutée. Elle est visible dans la pop-up de statistiques détaillée ci-dessus. 
Si l'utilisateur saisi la bonne réponse, alors une explication de la solution est affichée, ainsi qu'un indice indiquant où trouver le prochain code et un champ permettant de saisir ce code : 

![image](https://user-images.githubusercontent.com/61457677/176998967-563a915d-2eb5-4ca1-82d7-887ef88adb9d.png)

Si le code saisi est le bon, la prochaine énigme s'affiche alors. 

### Code des énigmes dans l'ordre
1) kly4t
2) 43k4c
3) er7r5
4) gh6jz
5) ftbx9
6) 7gamf
7) bseha
8) jjk6s
9) g0zt2

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

