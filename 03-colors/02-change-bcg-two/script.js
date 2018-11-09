/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

/*
Au clic sur le bouton
récupère la valeur de l'input
utilise-la comme couleur de fond de la page
*/

(function() {

    document.getElementById("run").addEventListener("click", function() { //au clic sur le bouton
    var color = document.getElementById("color").value // récupère la valeur de l'input et la stocke dans la variable color
    document.documentElement.style.backgroundColor=color; //l'utilise comme couleur de fond de la page

    });

})();
