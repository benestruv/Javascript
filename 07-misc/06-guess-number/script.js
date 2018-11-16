/*
Au chargement de la page
le script choisi un nombre entre 1 et 100
puis demande à l'utilisateur de soumettre un chiffre
Le script répond "plus grand" ou "plus petit" en fonction
ou le félicite si le nombre est correct
tout en affichant son nombre d'essais.
*/

(function() {
    window.onload = function() {
        var aleatoire = Math.random() * (100 - 1);
        var round = (Math.round(aleatoire));
        console.log(Math.round(aleatoire));
    
        var msg = "Choisissez un nombre entre 1 et 100";

while (valeurEntree != round) {
        var valeurEntree = prompt(msg);
        if (valeurEntree > round)
            msg = "C'est moins";
        else if
            (valeurEntree < round)
            msg = "C'est plus";
            else {
                alert("Bravo ! tu as gagné");
                break;
                }
        }
    }
})();