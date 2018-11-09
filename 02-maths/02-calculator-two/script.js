/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*
Marche à suivre
- déclarer les variables dont je vais avoir besoin
- Récupérer les données du label
- Définir mes variables
- 1 case = une opération

*/

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    var result; 
    var opOne = parseInt(document.getElementById("op-one").value); // On cible l'id du label op-one du document html
    var opTwo = parseInt(document.getElementById("op-two").value);

    var performOperation = function(operation) { // variable de la calculatrice, elle exécute les opérations suivantes


        switch (operation) { //fonction déclarée ci-dessus
        
            case 'addition' : // Le nom est l'id du bouton du html
            result = opOne + opTwo;
            alert(result);
            break;

            case 'substraction' :
            result = opOne - opTwo;
            alert(result);
            break;
        
        
            case 'multiplication':
            result = opOne * opTwo;
            alert(result);
            break;
        
        
            case 'division':
            result = opOne / opTwo;
            alert(result);
            break;
        
        
            default:
                alert("Veuillez entrer des chiffres");

        }
    }
    

    //Array.from permet de créer une nouvelle instance Array
    //document.querySelectorAll -- Correspond à une liste d'élément spécifié
    //("button.operator")). --> cible le bouton, c'est une chaine de caractère
    //.forEach Pour chaque (function($btn) pour chaque fonction bouton,
    // $btn.addEventListener ("click", function() { performOperation($btn.id);});
    // On exécute la fonction performOperation, selon l'id du bouton
    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
