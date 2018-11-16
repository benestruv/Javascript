//Génère, dans la balise dont l'id est "target"
// un tableau HTML
// qui affichera les dix premières tables de multiplication de 1 à 10.

(function() {

    var table = document.createElement('table');

    // Création du tableau

    // Table de multiplication
        
        //Déclaration de mes variables
        var tr, td, result, i, j;

        // Boucle de la table de multiplication
        for (i = 1; i <= 10; i++){ // Remplit la première ligne avec des chiffres de 1 à 10
            tr = document.createElement('tr'); // Crée la ligne
            for (j = 1; j <= 10; j++) { // Remplit la colonne avec les chiffres de 1 à 10
                result = i*j; // Multiplie chaque élément de la colonne par le premier élément, puis le duxieme etc
                td = document.createElement("td"); //créer 10 colonne (grâce à la boucle)
                td.innerHTML = (i + " x " + j + " = " + result); // affiche le résultat de i*j
                tr.appendChild(td);// créer le td dans la tr
            }
            table.appendChild(tr);// crée le tr comme premier enfant de table
        }
        document.getElementById("target").appendChild(table); // remplace le target par mon tableau
})();











/*
    (function() {
        var table = document.createElement("table");
        var tr, td, val;
        for(var i = 1; i <= 10; i++) {
            tr = document.createElement("tr");
            for(var j = 1; j <= 10; j++) {
                val = i * j;
                td = document.createElement("td");
                td.innerHTML = val;
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        document.getElementById("target").appendChild(table);
})();
*/