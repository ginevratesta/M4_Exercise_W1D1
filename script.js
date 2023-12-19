//Exercise 1.
function checkNum(a, b) {
if(a === 50 || b === 50 || a + b === 50){
    return true
}
else{
    return false
}
}

console.log(checkNum(25,25));


//Exercise 2.
function newString(word, cutter){
return word.slice(0, cutter) + word.slice(cutter +1)
}

console.log(newString("butterfly", 3 ));


//Exercise 3.
function checkRange(c, d) {
    if ((c > 40 && c < 60 && d > 40 && d < 60) || (c > 70 && c < 100 && d > 70 && d < 100)) {
        return true;
    } else {
        return false;
    }
}

console.log(checkRange(5, 82));



//Exercise 4.
function checkCityName(city){
if(city.startsWith("Los") || city.startsWith("New")){
    return city;
}
else{
    return false;
}
}

console.log(checkCityName("Los Angeles"));


//Exercise 5.
const numbers = [25,36,82,105,1,2,3];

function sumNumbers(number){
let sum = 0;
for(let i = 0; i < number.length; i ++){
    sum += number[i]
}
return sum;
}

console.log(sumNumbers(numbers))


//Exercise 6.
function checkNumber(number){
    for(let i = 0; i < number.length; i ++){
        if(number[i]=== 1 || number[i] === 3){
            return false;
        }
    }
    return true;

}

console.log(checkNumber(numbers));


//Exercise 7.
function checkAngleWidth(angle){
if(angle < 90){
    return "acute angle"
}
if(angle === 90){
    return "right angle"
}
if(angle > 90 && angle < 180){
    return "obtuse angle"
}
if(angle = 180){
    return "straight angle"
}
}

console.log(checkAngleWidth(179));


//Exercise 8.
let sentence = "Fabbrica Italiana Automobili Torino"

function setAcronym(string){
    const words = string.split(" ");
    let initials = " ";

    for (let i = 0; i < words.length; i++) {
        initials += words[i].charAt(0); 
    }

    return initials;
}

console.log(setAcronym(sentence));


/* ESERCIZI EXTRA:
   NOTA: tutti gli esercizi devono essere svolti usando le funzioni.*/

// 1. Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa.
function checkMostUsed(word) {
    const charCount = {};
    let mostUsedChar = '';
    let maxCount = 0;

    for (const char of word) {
        if (char !== ' ') {
            charCount[char] = (charCount[char] || 0) + 1;
            if (charCount[char] > maxCount) {
                mostUsedChar = char;
                maxCount = charCount[char];
            }
        }
    }

    return mostUsedChar;
}

let newSentence = "under the weather";
console.log(checkMostUsed(newSentence)); 



/* 2. Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra. 
      Ignora punteggiatura e spazi e ricordate di rendere la stringa tutta in minuscolo. 
      Se le due parole sono anagrammi, ritorna `true`, altrimenti ritorna `false`. */
      function checkSimilarity(first, second){
        const cleanFirst = first.replace(/[',\s']/g, '').toLowerCase();
        const cleanSecond = second.replace(/[',\s']/g, '').toLowerCase();
        const sortedFirst = cleanFirst.split('').sort().join('');
        const sortedSecond = cleanSecond.split('').sort().join('');
      
        return sortedFirst === sortedSecond
      }
      
      console.log(checkSimilarity("ELECTION RESULTS","LIES, LET'S RECOUNT"));
      


/* 3. Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri), 
      ritorna un nuovo array contenente tutti gli anagrammi corretti della parola data.
      Per esempio, partendo da “cartine” e [”carenti”, “incerta”, “espatrio”], il valore ritornato deve essere [”carenti”, “incerta”]. */
      const words = ["silent", "elbow" ,"rainbow"];
      
      function setNewArray(word, research){
        let anagrams = [];
        
        for(let i = 0; i < research.length; i++){
          const sortedWord = word.split('').sort().join('').toLowerCase();
          const sortedResearch = research[i].split('').sort().join('').toLowerCase();
          if(sortedWord === sortedResearch){
            anagrams.push(research[i]) + anagrams.push(word)
          }
        }
        return anagrams
      }

      console.log(setNewArray("below", words))



// 4. Partendo da una stringa passata come parametro, ritorna `true` se la stringa è palindroma o `false` se non lo è.
      function checkReverse(word){
        const reversedWord = word.split('').reverse().join('').toLowerCase();

       return reversedWord === word
      }

      console.log(checkReverse("radar"));



// 5. Partendo da un numero intero (dai parametri) ritorna un numero che contenga le stesse cifre, ma in ordine contrario. Es. 189 ⇒ 981
      function changeOrder(x){
        const newOrder = parseInt(x.toString().split("").reverse().join(""));

        return newOrder
      }

      console.log(changeOrder(268));



/* 6. Scrivi una funzione che accetti un numero positivo X come parametro. 
      La funzione dovrebbe stampare a console una “scala” creata con il carattere “#” e avente X scalini. */
      function setStairs(x) {
        let result = '';
        for (let i = 1; i <= x; i++) {
            let stairs = "#".repeat(i) + '\n';
            result += stairs;
        }
        return result;
    }
    
    console.log(setStairs(15));
    


// 7. Crea una funzione che, data una stringa come parametro, ritorni la stessa stringa, ma al contrario. Es. “Ciao” ****⇒ “oaiC”
      function setInvertedString(animal){
        const reversedName = animal.split('').reverse().join('');
        return reversedName
      }

      console.log(setInvertedString("hippopotamus"));



/* 8. Crea una funzione che accetti un array e un numero Y come parametro. Dividi l’array in sotto-array aventi lunghezza Y.
array: [1, 2, 3, 4, 5], y: 4 ⇒ [[ 1, 2, 3, 4], [5]] */
      function divideArray(array, y) {
           const result = [];
           for (let i = 0; i < array.length; i += y) {
           const chunk = array.slice(i, i + y);
            result.push(chunk);
      }
      return result;
     }

const array = [1, 2, 3, 4, 5];

console.log(divideArray(array,3));



/* 9. Scrivi una funzione che accetti un numero positivo X come parametro. 
      La funzione dovrebbe stampare a console una “piramide” create con il carattere “#” e avente X strati. */
      function setPyramid(x) {
        let pyramid = '';
    
        for (let i = 1; i <= x; i++) {
            const hollowSpaces = ' '.repeat(x - i);
            const blocks = '#'.repeat(2 * i - 1);
            pyramid += hollowSpaces + blocks + hollowSpaces + '\n';
        }
    
        return pyramid;
    }
    
    console.log(setPyramid(10));
      


// 10. Scrivi una funzione che accetti un intero N e ritorni una matrice a spirale NxN:
