//Observe les changements de l'input
//affiche le nombre de caractères utilisés .length
//Si ce nombre est plus grand que 10
//empêche la saisie de nouveau caractère.

// The onkeyup event occurs when the user releases a key (on the keyboard).


// Version ou on modifie le html

(function() {

    // Récupère la valeur de l'input
    var passOne = document.getElementById("pass-one");
    passOne.setAttribute("maxlength", 10);


    // Affiche le nombre de caractères utilisés
    passOne.onkeyup = function(){
        var countLetter = passOne.value.length;
        document.getElementById("counter").innerHTML = (countLetter + "/10");
       };

})();





/*
Ma version avec une condition if

(function() {

    // Récupère la valeur de l'input
    var passOne = document.getElementById("pass-one");

    //setAttribute
    // Affiche le nombre de caractères utilisés
    passOne.onkeyup = function(){
        var countLetter = passOne.value.length;
        document.getElementById("counter").innerHTML = (countLetter + "/10");
        if (countLetter > 10){
            alert("Max 10 caractères");
        }
       };

})();
*/







/*
Version ou le champ est désactivé

(function() {

    // Récupère la valeur de l'input
    var passOne = document.getElementById("pass-one");

    //setAttribute
    // Affiche le nombre de caractères utilisés
    passOne.onkeyup = function(){
        var countLetter = passOne.value.length;
        //document.getElementById("counter").innerHTML = (countLetter + "/10");
        if (countLetter <= 10){
            document.getElementById("counter").innerHTML = (countLetter + "/10");
        } else {
                document.getElementById("pass-one").disabled = true;    
            }
       };

})();
*/