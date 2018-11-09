/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

var gateau = prompt("Voulez-vous du gâteau ?");

if (gateau === "oui") {
      alert("Félicitations !");
} else if (gateau === "non") {
      alert("du gâteau, ça ne se refuse pas !");
} else {
      alert("Répondez par oui ou par non (sans majuscules)");

}

})();