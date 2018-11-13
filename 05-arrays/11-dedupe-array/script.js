// Au clic sur le bouton
// affiche dans la console
//le tableau fruits
//après l'avoir dédoublonné : chaque valeur ne doit apparaître qu'une seule fois

(function() {

    var fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    document.getElementById('run').addEventListener("click", function(){
        //Suppression des doublons

        fruits = fruits.filter (function (NomFruit, index, array) { // Passe le tableau dans le filtre / nomFruit = valeur de l'élément / index de l'élément / array : tableau typé courant
        return array.indexOf (NomFruit) == index;
    });

    // La méthode indexOf() renvoie le premier indice pour lequel on trouve un élément donné dans un tableau.
    // Si l'élément cherché n'est pas présent dans le tableau, la méthode renverra -1

        console.log(fruits);
    });

})();
