# Variables:

``var example;`` ancienne version

``let example;`` variable modifiable

``const example;`` constante

``let tab=['1','25']`` tableau

# Variable objet:

```
var eleve ={

nom: 'jean'

moyenne: '15'

note: [5, 15, 18]

}
```

_recupération_:
```
eleve.nom

eleve.note[0]
```

si on veut recup une variable hors tableau on peut l'appeler de cette façon:

_pour_

``var indice="nom"``

_on ecrit_

``eleve[indice]``

# Conditions:
```
if(){

}

else if(){

}

else{}
```
# Boucles:

- ``while(){}``

- ``for( var i=0; i>3; i++){}``

- ``for...in``: recherche des elemnets ds l'objet (variable et valeur)

synthaxe:

``for (variable in objet) {
  instruction
}``

exemple:
```
function afficherProps(obj, nomObj) {
  var result = "";
  for (var i in obj) {
    result += nomObj + "." + i + " = " + obj[i] + "\n";
  }
  result += "\n";
  return result; 
}
```
- ``for...of`` , recherche les elements ds une tableau 

``for (variable of objet) {
  instruction
}``

exemple:
```
let arr = [3, 5, 7];
arr.toto = "coucou";

for (let i in arr) {
  console.log(i); // affiche 0, 1, 2, "toto" dans la console
}

for (let i of arr) {
  console.log(i); // affiche 3, 5, 7 dans la console
}
```
# Les fonctions:
synthaxes:

``let test = function(){}``

ou 

``function test(){}``

ou

``let test = () =>{}``


# Ecrire une variable ac du texte (concatainer=:

``console.log(`${name} est sympa`)``


# Les (tableaux) objects:

exemples:

```let spaceship = {
  'Fuel Type': 'Turbo Fuel',
  'Active Duty': true,
  homePlanet: 'Earth',
  numCrew: 5
};
spaceship.homeplanet //return earth
```
autre synthaxe d'utilisation de l'objet:

```
spaceship['Active Duty'];   // Returns true
spaceship['Fuel Type'];   // Returns  'Turbo Fuel'
spaceship['numCrew'];   // Returns 5
spaceship['!!!!!!!!!!!!!!!'];   // Returns undefined

let returnAnyProp = (objectName, propName) => objectName[propName];

returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth

const spaceship = {type: 'shuttle'};
spaceship = {type: 'alien'}; // TypeError: Assignment to constant variable.
spaceship.type = 'alien'; // Changes the value of the type property
spaceship.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'
```

#Les fonctions ds un objet:
````
const alienShip = {
  invade: function () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};
````
ou 
````
const alienShip = {
  invade () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};
````
# Synchrone/asynchrone:

rendre une fonction asynchrone permet de rendre d'indépendencier son excution du reste du scripte.
On peut le faire grace à une fonction callback comme setTimeout()

exemple:

````let b1 = document.getElementById('b1');

b1.addEventListener('click', message);
function message(){
    setTimeout(setTimeout(()=>{}, 2000, 'Message d\'alerte après 2 secondes')), 2000, 'Message d\'alerte après 2 secondes'); 
}

````
