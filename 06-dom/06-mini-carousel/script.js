// Au clic sur le bouton
// change la source de l'image par celle de l'image suivante dans le tableau gallery
// Fais-en une boucle.

(function() {

    var gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

        //<img src="../../_shared/img/bell.svg" alt="Carousel" />


        var x = 0; // on crée la variable x à zéro

        document.getElementById("next").addEventListener("click", function(){ // au clic sur le bouton

            x++; // x prend 1, a chaque clic, ce qui permet de parcourir la galerie

            if (x >= gallery.length) { // Si x est supérieur ou égal à la longueur du tableau
                x = 0; // on le remet à zéro
            }
            
            document.querySelector("img").src = gallery[x]; // cible l'image et lui donne la valeur de l'élément x de la gallery

        });

})();