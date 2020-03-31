



var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

let deleteArray = function (array) {
            let newArray = array.pop();
            return newArray;
            }

let changeArray = function(array,n,text) {
    array[n] = text;
    return array;
}



console.log(secretMessage);
console.log(secretMessage.pop(),secretMessage);
console.log(secretMessage.push('to'),secretMessage.push('program'),secretMessage)
console.log(changeArray(secretMessage,6,'right'));
console.log(secretMessage.shift(),secretMessage);
console.log(secretMessage.unshift('Programming'),secretMessage);
console.log(secretMessage.splice(5,5,'know' ), secretMessage);
console.log(secretMessage.join(' '));





