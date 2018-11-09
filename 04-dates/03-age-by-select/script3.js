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
        /*
        var jour = document.getElementById('dob-day').value;
        var mois = document.getElementById('dob-month').value;
        var annee = document.getElementById('dob-year').value;
        */
        //aujourd'hui
        var today = new Date(); //date d'aujourd'hui a un format lisible
        var todayYear = today.getFullYear(); //quel année sommes-nous ?
        var todayMonth = today.getMonth(); // Quel mois sommes-nous ?
        var todayDate = today.getDate();// quel jour sommes-nous ?
        
        //date de naissance
        var dob = new Date();//date de naissance au format date  
        var dobYear = document.getElementById('dob-year').value; // année de naissance
        var dobMonth = document.getElementById('dob-month').value;// mois de naissance
        var dobDate = document.getElementById('dob-day').value;// jour de naissance
        
        // Différence entre l'année actuelle et celle de naissance :
        var yearsDiff = todayYear - dobYear;
        var age;
        
        // Si le mois actuel est inférieur au mois de naissance
        if ( todayMonth < dobMonth ) { 
            age = yearsDiff - 1; // On retire 1
        }

        //Si le jour actuel est supérieur au jour de naissance
        else if ( todayMonth > dobMonth ) {
            age = yearsDiff ; // Si c'est égal on conserve la diff années
        }
        
        else {//si le jour actuel et inférieur  ou = au jour de naissance
            if ( todayDate < dobDate ) {
            age = yearsDiff - 1; // Si c'est inférieur, alors on retire 1
            } else {
            age = yearsDiff; // Si c'est égal on conserve la diff années
            }
        }

        alert(age);
    });

})();
