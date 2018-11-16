//Au survol de l'image
// change sa source
//par celle qui se trouve dans son attribut "data-hover".

(function() {
    
    //<img src="../../_shared/img/kiss.svg" alt="Kiss?" data-hover="../../_shared/img/kiss-wink-heart.svg" />

    // on sélectionne les cibles qui vont être échangées
    var image = document.querySelector("img").src; // on cible la source de la balise img
    var imageHover = document.querySelector("img").getAttribute("data-hover"); // on récupère l'attribut "data-hover" de la balise img

    // SOURIS
    document.querySelector("img").addEventListener('mouseenter', function(){ 
        document.querySelector("img").src = imageHover; // Quand la souris survole l'image, c'est la variable imageHover qui apparait
    })
    document.querySelector("img").addEventListener('mouseout', function(){ // Quand la souris est hors de l'image, c'est l'image de base
        document.querySelector("img").src = image;

    })

})();
