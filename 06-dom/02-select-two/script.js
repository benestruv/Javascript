/* becode/javascript
 *
 * /06-dom/02-select-two/script.js - 6.2: sélection par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var replace = document.getElementsByClassName("target"); // retourne les éléments dans un tableau
    replace[1].innerHTML = "owned";


    //document.querySelector('.target').innerHTML = "owned"; // querySelector retourne le premier élément correspondant au sélecteur // .target --> la classe target

})();
