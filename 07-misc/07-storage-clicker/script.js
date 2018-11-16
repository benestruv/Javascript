// Au clic sur le bouton
// le compteur augmente de 1
// Utilise le localStorage pour sauvegarder et restaurer la valeur du compteur entre chaque chargement de page.

// récupérer la valeur introduite dans le compteur
// Créer une fonction qui incrémente de 1
(function() {

    var compteur = localStorage.getItem("compteur"); // retourne la valeur associée à une clé , la met au début, au refresh de la page c'est la première info checkée

    document.getElementById("increment").addEventListener("click", function() { // au clic sur le bouton

        compteur++; // le compteur prend 1

        document.getElementById("target").innerHTML = compteur; // L'input target prend le résultat de la variable compteur
        
        localStorage.setItem("compteur", compteur); // stocke une paire clé/valeur, on la met après le calcul

    })

})();

// L'interface localStorage mémorise les données sans limite de durée de vie. 
// setItem(clé,valeur) : stocke une paire clé/valeur
// getItem(clé) : retourne la valeur associée à une clé