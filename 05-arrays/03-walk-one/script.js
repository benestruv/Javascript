/* becode/javascript
 *
 * /05-arrays/03-walk-one/script.js - 5.3: parcours de tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//Au clic sur le bouton
//affiche les entrées du tableau l'une après l'autre dans un console.log

(function() {
    document.getElementById('run').addEventListener("click", function(){
        var fruits = [
            "pomme",
            "poire",
            "fraise",
            "tomate",
            "kiwi",
            "banane",
            "orange",
            "mandarine",
            "durian",
            "pêche",
            "raisin",
            "cerise",
        ];
    
    for (var i = 0; i < fruits.length; i++){

        console.log(fruits[i]);
    }

    });

})();
