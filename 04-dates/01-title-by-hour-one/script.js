/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

/*
Change le contenu de la balise indiquée
if entre 6h et 18h affiche  Bonjour
sinon Bonsoir.
*/

(function() {

        var date = new Date(); //trouve la date
        var heure = date.getHours(); //trouve l'heure
        
        if (heure > 6 && heure < 18) { // Si l'heure est comprise entre 6 et 18h 
            document.getElementById("target").innerHTML = 'Bonjour'; // alors affiche bonjour
        } else {
            document.getElementById("target").innerHTML = 'Bonsoir'; // sinon affiche bonsoir
        }
    
})();
