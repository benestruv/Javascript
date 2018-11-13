//Au clic sur le bouton
//affiche dans la console
// si, oui ou non,
// il y a une pomme dans le tableau fruits.

(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    document.getElementById('run').addEventListener("click", function(){
        console.log(fruits.includes('pomme'));
    });

})();
