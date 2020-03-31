

var joueur1 = {
    inscrit: false,
    age: undefined,
    numero: undefined
}

var joueur2 = {
    inscrit: false,
    age: undefined,
    numero: undefined
}
var joueur3 = {
    inscrit: false,
    age: undefined,
    numero: undefined
}


// var joueur2 = joueur


let subscribe = function(joueur) {
    if (joueur.inscrit === false) {
        joueur.numero = Math.floor(Math.random()*1000) + 1000
        joueur.inscrit = true
    }
}

let timeDeparture = function(joueur){
      if(joueur.age >= 18 && joueur.inscrit===true){
           return 'you will race at 9:30am'+ joueur.numero
     }
     else if (joueur.age>=18 || joueur.inscrit===true ){
         if (joueur.numero===undefined){
             joueur.numero = Math.floor(Math.random()*1000) + 1000
         }
            return 'you will race at 11:00am'+ joueur.numero
     }
     else if(joueur.age<18 || joueur.inscrit===false){
         return 'you will race at 12:30pm '+ (Math.floor(Math.random()*1000)+1000)
    }

     else {
         return 'go fuck yourself'
      }
}

 let defAge=function(joueur,age){
    joueur.age=age;
 }



console.log(defAge(joueur1,14))
console.log(defAge(joueur2,28))
console.log(defAge(joueur3,44))

console.log(joueur1)

//


console.log(joueur1)

console.log(timeDeparture(joueur1));



console.log(subscribe(joueur2))

console.log(joueur2)



console.log(timeDeparture(joueur2));
console.log(timeDeparture(joueur3));
//
