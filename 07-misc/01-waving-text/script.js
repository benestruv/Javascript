/*
Affiche le texte de ton choix dans la balise prévue
avec un "effet vague" d'au moins 5 tailles différentes.
*/

(function() {

    var phrase = document.getElementById("target").innerHTML = "La mer, qu'on voit danser le long des golfes clairs a des reflets d'argent. La mer, des reflets changeants sous la pluie.";

// Tableau des différentes tailles
    var sizes = [
        document.getElementById('target').style.fontSize = "15px",
        document.getElementById('target').style.fontSize = "25px",
        document.getElementById('target').style.fontSize = "35px",
        document.getElementById('target').style.fontSize = "45px",
        document.getElementById('target').style.fontSize = "55px",
    ] 

    var letters = phrase.split('');

    for (i = 0; i < phrase.length; i++){
        phrase[i] = changeSize;
    }

    

})();

/*

// Brise la chaine de caractère pour obtenir les lettres
    var letters = phrase.split('');

    for (i = 0; i < phrase.length; i++){
        phrase[i] = changeSize;
    }

})();
*/
/*
// Change la taille de façon aléatoire
var valpix = Math.floor(Math.random() * 35) + 15; 
var pixels = valpix + "px";
var changeSize = document.getElementById('target').style.fontSize = pixels;
console.log(changeSize);
*/