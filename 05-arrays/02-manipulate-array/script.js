/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


// Au clic sur le bouton
// enlève le premier et le dernier élement
// ajoute un élément "banane" au début du tableau
//ajoute un élément "kiwi" à la fin du tableau.

(function() {
    document.getElementById('run').addEventListener("click", function(){
        var fruits = [
            "pomme",
            "poire",
            "fraise",
            "tomate",
            "orange",
            "mandarine",
            "durian",
            "pêche",
            "raisin",
            "cerise",
        ];
    fruits.splice(0,1); // Efface pomme et cerise
    fruits.splice(8,1); // Efface pomme et cerise

    // Préférable à delete lorsqu'on modifie l'index par la suite (sinon les éléments supprimés reviennent)

    fruits.unshift("banane");
    fruits.push("kiwi");

    //affiche le tableau fruits
    alert(fruits);
    });

})();
