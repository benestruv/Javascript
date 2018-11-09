/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


// On récupère l'entrée
// Calcul de la factorielle
// Au clic sur le bouton
//Affichage de la factorielle

(function() {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        
        var input = document.getElementById("number").value; //on récupère l'entrée
        var resultat = 1; //Déclare la variable résultat à 1 parce que le premier nombre d'une factorielle est toujours 1

        for (x = 1; x <= input ; x++){ // Boucle for, si la valeur de x est inférieur ou égale à celle entrée, x prend 1
                                        // ATTENTION le x++ (l'ittération) est toujours exécutée après le contenu de la boucle

            resultat = resultat * x; // multiplie le résultat par x, une fois le résultat modifié, il prend la nouvelle valeur
        }

    
    alert(resultat);
    });

})();
