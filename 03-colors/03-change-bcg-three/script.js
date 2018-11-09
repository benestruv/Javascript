/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*
Au clic sur le bouton
génère une couleur aléatoire
l'utilise comme couleur de fond de la page
*/

(function() {

    document.getElementById("run").addEventListener("click", function coloRandom() { //au clic sur le bouton
    
    // Génère une couleur aléatoire
    var r = Math.floor(255*Math.random());
    var g = Math.floor(255*Math.random());
    var b = Math.floor(255*Math.random());
    document.documentElement.style.backgroundColor = "rgba(" + r + "," + g + "," + b + ",1)";
    
    });
})();
