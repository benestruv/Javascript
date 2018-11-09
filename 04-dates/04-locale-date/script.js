/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

/*
Change le contenu de la balise indiquée par la date du jour, en français (ex : dimanche 28 octobre 2018, 23h32).
*/

(function() {

    // Récupération de chaque données de façon individuelle
    var today = new Date();
    var todayYear = today.getFullYear();
    var todayMonth = today.getMonth(); 
    var todayName = today.getDay();
    var todayDate = today.getDate(); 
    var todayHour = today.getHours(); 
    var todayMinutes = today.getMinutes();

    // Traduction des jours

    switch (todayName){
        case 1 :
        var name = 'Lundi';
        break;
    
        case 2 :
        var name = 'Mardi';
        break;
    
        case 3 :
        var name = 'Mercredi';
        break;
    
        case 4 :
        var name = 'Jeudi';
        break;
    
        case 5 :
        var name = 'Vendredi';
        break;
    
        case 6 :
        var name = 'Samedi';
        break;
    
        default :
        var name = 'Dimanche';
        break;
    }

    switch (todayMonth){
        case 1 :
        var mois = 'janvier';
        break;
    
        case 2 :
        var mois = 'février';
        break;
    
        case 3 :
        var mois = 'mars';
        break;
    
        case 4 :
        var mois = 'avril';
        break;
    
        case 5 :
        var mois = 'mai';
        break;
    
        case 6 :
        var mois = 'juin';
        break;

        case 7 :
        var mois = 'juillet';
        break;

        case 8 :
        var mois = 'aout';
        break;

        case 9 :
        var mois = 'septembre';
        break;

        case 10 :
        var mois = 'octobre';
        break;

        case 11 :
        var mois = 'novembre';
        break;
    
        default :
        var mois = 'décembre';
        break;
    }

    if (todayHour.length < 2 )
    {
        return "0" + todayHour;
    }


    document.getElementById("target").innerHTML = name + " " + todayDate + " " + mois + " " + todayYear + ", " + todayHour + "h" + todayMinutes

})();



