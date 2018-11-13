//Au clic sur le bouton
//affiche (dans la console)
//le total des âges des personnes dans le tableau people
//Utilise la méthode reduce.

(function() {

    var people = [
        {
            firstname: "Grenville",
            lastname: "Stive",
            age: 64,
        },
        {
            firstname: "Luis",
            lastname: "Jedrzejewsky",
            age: 73,
        },
        {
            firstname: "Teodor",
            lastname: "Warrington",
            age: 56,
        },
        {
            firstname: "Danya",
            lastname: "Bigby",
            age: 17,
        },
        {
            firstname: "Jemmy",
            lastname: "Goodbur",
            age: 87,
        },
        {
            firstname: "Vilhelmina",
            lastname: "Fost",
            age: 43,
        },
        {
            firstname: "Igor",
            lastname: "Putson",
            age: 45,
        },
        {
            firstname: "Klement",
            lastname: "Braybrook",
            age: 88,
        },
        {
            firstname: "Trefor",
            lastname: "Le Jean",
            age: 69,
        },
        {
            firstname: "Tarrah",
            lastname: "de Clerc",
            age: 77,
        },
        {
            firstname: "Brad",
            lastname: "Hookes",
            age: 82,
        },
        {
            firstname: "Kippar",
            lastname: "Fancet",
            age: 25,
        },
        {
            firstname: "Jecho",
            lastname: "Hawket",
            age: 87,
        },
        {
            firstname: "Lief",
            lastname: "Blazy",
            age: 80,
        },
        {
            firstname: "Jo-ann",
            lastname: "Sacase",
            age: 81,
        },
    ];

    // La méthode reduce() applique une fonction qui est un « accumulateur »
    // et qui traite chaque valeur d'une liste (de la gauche vers la droite)
    // afin de la réduire à une seule valeur.

    document.getElementById('run').addEventListener("click", function(){

        var total = people.reduce(function (accumulateur, personne) {
            return accumulateur + personne.age;}, 0); // 1 = accumulateur, j'aurais pu l'appeler n'importe comment / b = valeur courante, je l'ai appellée perseonne mais j'aurais pu l'appeler b / 0 = la valeur initiale
        
        console.log(total);
});

})();
