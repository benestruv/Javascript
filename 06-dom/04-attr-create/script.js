//Récupère la valeur de l'attribut "data-image" de la balise dont l'id est "source". -> http://www.randomkittengenerator.com/cats/rotator.php
//Crée ensuite une balise image dans la balise d'id "target" qui affichera cette valeur.
//Enfin, supprime la balise source.

(function() {


    // On récupère les cibles
    var image = document.querySelector("#source").getAttribute("data-image");// cible l'attribut "data-image" de l'id #source
    var target = document.querySelector("#target");

    // On crée une image et l'attribue
    var createImg = document.createElement("img"); // créer une image --> balise "img"
    createImg.setAttribute("src", image); // Il faut une source à cette image pour qu'elle fonctionne, image = la source

    // On met cette image dans la variable
    target.appendChild(createImg); // Dans la variable target, créer une image
    

})();
