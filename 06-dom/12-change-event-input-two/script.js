// Observe les changements de l'input
// affiche "ok" si le contenu fait 8 caractères au minimum, et contient au moins 2 chiffres.
// <= 8 carac, <= 2 chiffres

(function() {


    var password = document.getElementById("pass-one");
    password.onkeyup = function() {
        var entree = password.value;
        if  (entree.length >= 8 && entree.match(/\d/g).length >= 2){
            document.getElementById("validity").innerHTML = "ok";
            } else {
                document.getElementById("validity").innerHTML = "Pas ok";
        }
    }
})();

/*

(function() {


    var passOne = document.getElementById("pass-one");
    passOne.onkeyup = function() {
        var countLetter = passOne.value;
        var num = /\d{1,}/g;//\d — cherche s'il y a un caractère digital /g chercher dans une valeur générale
        var nuMatch = countLetter.match(num);

        if  (countLetter.length >= 8 && nuMatch >= 2){
            document.getElementById("validity").innerHTML = "ok";
            } else {
                document.getElementById("validity").innerHTML = "Pas ok";
        }
    }
})();

*/