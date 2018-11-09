/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/* 
- evenement clic bouton
- affiche les carrés des nombres pairs entre 1 et 21
- il faut donc faire une boucle qui opère ce calcul tant qu'on atteind pas 21 (x < 21)
- if (nombre%2 == 0)
        pair
    else
        impair
- calcul du carré
    console.log(Math.pow(nombre, 2));
- Afficher le résultat
*/

(function() {
    var number;
    var carre;
    

    // Définit l'action au clic sur le bouton
    document.getElementById("run").addEventListener("click", function() {


    for (number = 1; number < 21; number ++) {
        if (number%2 == 0) {
            carre = carre + 'Le carré du chiffre '+ number + " est = " + Math.pow(number, 2) + "\n";
            }
        }
        alert(carre);
    });

})();
