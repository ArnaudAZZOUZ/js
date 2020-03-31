// Partie 8 code academy
console.log("exo-6");

// commenter cette ligne de code.
var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};

// afficher le nombre de voitures de Joe
console.log(joeInfo.cars.length)
// changer le nombre de salle de bains de Joe : il n'en possède au'une.
joeInfo.bathrooms = joeInfo.bathrooms+1
// console.log(joeInfo)

// Joe vient d'acquérir un garage changer la structure pour le refléter.
joeInfo.garage=true
// console.log(joeInfo)

let team ={
    players:[{
        firstname: "Pablo",
        lastname: "escobar",
        age: 68},
    ],
    games:[{
        opponent: "sons of anarchy",
        teampoints: 42,
        opponentPoints: 27
    }]
}

let addPlayer = (prenom,nom,annees) =>{
    team.players[team.players.length]={firstname: prenom, lastname: nom, age: annees };
};

let addGame = (opponent,teamPoints,opponentPoints)=>{
    team.games[team.games.length]={opponent: opponent, teampoints: teamPoints, opponentPoints:opponentPoints};
};

let countPoints = team =>{
    let total=null;
    // for(let teampoints in team.games){
    //     total=total+team.games[teampoints]
    // }
    for(let n=0; n<team.games.length; n++ ) {
        total = total + team.games[n].teampoints;
    }
    return total;
}

let middlePoints = team =>{
    let middle=null;
    let total =null;
    for(let n=0; n<team.games.length; n++ ) {
        total = total + team.games[n].opponentPoints;
    }
    middle=total/team.games.length;
    return middle;
};

let findOlder = team =>{
    let oldest=team.players[0].age;
    for(let n=0; n<team.players.length; n++ ){

        if ( team.players[n].age > oldest ){
                    oldest=team.players[n].lastname;
                }
    }
    return oldest;
}



addPlayer('momo', 'lopez', 37);
addPlayer('jo', 'montana',124);;
addPlayer('tony', 'esperanza',14)
addGame('kuduroManiac',86,18);
addGame('vampireDiarhea',156,2);
addGame('vatican',24,96);

console.log(team.players);
console.log(team.games);
console.log(countPoints(team));
console.log(middlePoints(team));
console.log(findOlder(team));
console.log(team.players[0].age);