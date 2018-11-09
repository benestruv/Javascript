/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// Change la couleur de fond en fonction du click bouton
// Switch case

(function() {
    
    document.getElementById('red').addEventListener("click", function() {
        document.documentElement.style.backgroundColor="red";
        //documentElement retourne à la source de l'élément du document
        // style c'est la balise qui est dans le head
    });

    document.getElementById('green').addEventListener("click", function() {
        document.documentElement.style.backgroundColor="green";
    });

    document.getElementById('yellow').addEventListener("click", function() {
        document.documentElement.style.backgroundColor="yellow";
    });

    document.getElementById('blue').addEventListener("click", function() {
        document.documentElement.style.backgroundColor="blue";
    });


})();
