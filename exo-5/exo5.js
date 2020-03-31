
let input = 'crevette et crabe';
let vowels = ['a','e','i','o','u'];
let resultArray = [];



let printVowels = function(){
    for (let n=0; n<input.length; n++){
        console.log(input.charAt(n))
    }
}


let testIndex = function(){
    for (let n=0; n<input.length; n++){
        if(vowels.indexOf(input.charAt(n))>=0){
            console.log(input.charAt(n));
        }
    }
}

let searchVowels = function(txt){
    for (let n=0; n<txt.length; n++){
        for (let m=0; m<vowels.length; m++) {
            if(txt.charAt(n)  === vowels[m]){
                resultArray.push(txt.charAt(n)) ;
            }

        }
    }
    return console.log(resultArray)
}

testIndex();
printVowels();
searchVowels('aazedghhazekdka');
console.log(resultArray.join('').toUpperCase());