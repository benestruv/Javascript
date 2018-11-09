/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

/*
Change le contenu de la balise indiquée
if entre 6h et 17h30 affiche  Bonjour
sinon Bonsoir.
*/

(function() {

    var date = new Date(); //trouve la date
    var heure = date.getHours(); //trouve l'heure
    var minutes = date.getMinutes(); // trouve les minutes

    if (heure > 6 && heure < 17 && minutes >= 30) { // Si l'heure est supérieure à 6h et inférieure à 17h30
        document.getElementById("target").innerHTML = 'Bonjour';
    } else {
        document.getElementById("target").innerHTML = 'Bonsoir'; // sinon affiche bonsoir
    }


})();
