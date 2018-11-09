/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// POur chaque nombre entre 1 et 100 (boucle for)
// Fizz si multiple de 3
// Buzz si multiple de 5
// FizzBuzz si multiple de 3 && 5
// Affiche le nombre s'il n'est multiple d'aucun
// Boucle if else

(function() {

    for (i = 1; i <= 100; i++) {

        //Vérifie si divisible par 3 et 5 --> On affiche celle-ci en premier pour qu'elle prenne le pas sur les simple fizz et buzz
        if (i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        }
        //Vérifie si divisible par 3
        else if (i % 3 === 0 ) {
            console.log("Fizz");
            }
        //Vérifie si divisible par 5
        else if (i % 5 === 0 ){
            console.log("Buzz");
        }
    
        //Si divisible ni par 3 ni par 5
        else {
            console.log(i)
        }
    }
    
})();
