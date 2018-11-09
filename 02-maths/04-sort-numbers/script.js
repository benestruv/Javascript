/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*
Au clic,
récupérer l'input
trier l'input
l'afficher dans un alert
*/

(function() {

    var recupNumbers;

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

    //Récupération des données et affichage
    var recupNumbers = document.getElementById("numbers").value.split(" ");// split(" ") permet d'afficher les valeurs les unes à la suite des autres
    
    for (data = 0; data < recupNumbers.length; data++) { // Fait tourner la chaine récupérée pour analyser chaque nombre
        recupNumbers[data] = parseFloat(recupNumbers[data]);//parseFloat analyse l'argument fourni et renvoie un nombre flottant correspondant, on récupère donc la donnée et on lui permet de changer de place en la rendant flottante
    }

    //Classement des données par ordre croissant
    recupNumbers.sort(function order (a, b){
    return a - b;
    });

    // Affichage du résultat
    alert(recupNumbers);

    });

})();
