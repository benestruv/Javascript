/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*
- Récupérer les données entrées dans les labels
- Définir l'opération effectuée par les boutons
- Appliquer le calcul des données
- Afficher le résultat dans une alert
*/

(function() {
    //Déclare les variales (elles sont définies ensuite)
    var result;
    var opOne;
    var opTwo;
    
    // Recupère le bouton addition du HTML et donne son exécution lors du click
    document.getElementById("addition").addEventListener("click", function() {
        //Récupérer les données entrées dans les labels:
        opOne = parseInt(document.getElementById('op-one').value);
        opTwo = parseInt(document.getElementById('op-two').value);
        // Décrit la variable résultat
        result = opOne + opTwo;
        //Affiche le résultat
        alert(result);
        
    });    

    document.getElementById("substraction").addEventListener("click", function() {
        opOne = parseInt(document.getElementById("op-one").value);
        opTwo = parseInt(document.getElementById("op-two").value);
        result = opOne - opTwo;
        alert(result);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        opOne = parseInt(document.getElementById("op-one").value);
        opTwo = parseInt(document.getElementById("op-two").value);
        result = opOne * opTwo;
        alert(result);
    });

    document.getElementById("division").addEventListener("click", function() {
        opOne = parseInt(document.getElementById("op-one").value);
        opTwo = parseInt(document.getElementById("op-two").value);
        result = opOne / opTwo;
        alert(result);
    });

})();
