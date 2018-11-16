// Génère
// dans la balise dont l'id est "target"
// un tableau HTML d'un colonne et dix rangées.

(function() {

    // Cible target
    var target = document.querySelector('#target');
    // Crée un élément tableau
    var createTable = document.createElement("table");
    //createTable.setAttribute("id", 'NouveauTableau');
    
    // Place le tableau dans la cible
    target.appendChild(createTable);


    // Création de la variable d'ajout d'une ligne
    var ajoutLigne;

    // Tant qu'il n'y a pas dix lignes, se répète
    for (x = 0; x <= 10; x++){

        // ajout ligne, crée un élément tr
        ajoutLigne = document.createElement("tr");
        // Crée une cellule, sinon le tableau serait nul
        ajoutLigne.appendChild(document.createElement ("td"));
        // place l'élément ajoutLigne (tr) dans le tableau
        createTable.appendChild(ajoutLigne);
    }

    document.getElementById("target").appendChild(createTable);

    
/*
    // Création du tableau
    function ajoutLigne(tableID) {
        
        var refTable = document.getElementById(tableID);// Récupération d'une référence à la table
        var nouvelleLigne = refTable.insertRow(0);// Insère une ligne dans la table à l'indice de ligne 0 /  RANGEE x 10
        var nouvelleCellule = nouvelleLigne.insertCell(0);// Insère une cellule dans la ligne à l'indice 0 / COLONNE X 1

        // Ajoute un nœud texte à la cellule
        var nouveauTexte = document.createTextNode('Une ligne')
        nouvelleCellule.appendChild(nouveauTexte);
    }
    
    // Appelle ajouteLigne() avec l'ID d'une table
    var ajoutLigne;
    for (x = 0; x <= 10; x++){
        ajoutLigne('NouveauTableau');
    }

*/
    

})();
