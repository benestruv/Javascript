/* becode/javascript
 *
 * /05-arrays/04-walk-two/script.js - 5.4: parcours de tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// Au clic sur le bouton
// affiche (dans la console)
// l'une après l'autre
//chaque valeur du tableau fruits.
// Utilise la méthode map.


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

        var tabFruits = fruits.map(function(i){
            console.log(i);
        });
    });
})();
