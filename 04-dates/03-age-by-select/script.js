/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

/*
 Au clic sur le bouton 
 récupère la date de naissance du visiteur
 affiche son âge exact.
*/

(function() {

    document.getElementById('run').addEventListener("click", function() {


        var jour = document.getElementById("dob-day").value; // Récupère la donnée entrée dans le champ jour
        var mois = document.getElementById("dob-month").value; // Récupère la donnée entrée dans le chap mois
        var annee = document.getElementById("dob-year").value; // Récupère la donnée du champ année
        
        var date = new Date(); //Date d'aujourd'hui sous forme de texte lisible

        var age = date.getFullYear() - annee; //date.getFullYear() --> Donnée l'année 2018 - 1987

        if (mois < 0) { // si le mois est inférieur à zéro, il n'est pas encore passé
            age = age - 1; // On enléve 1 ans a l'age
        } else {
            if (mois == 0) { // s'il égal 0 on est sur le même mois
                var date = today.getDay() - day;
                //dans ce cas on teste le jour
            if (date < 0) {
                age = age - 1; //On vérifie ensuite avec le jour
                    }
                }
            }

        alert(age);
        
    });
})();
