//Au clic sur le bouton
//vérifie que les deux mots de passe dans les inputs sont identiques//
//Si ça n'est pas le cas, ajoute la classe "error" aux inputs.

(function() {

    document.getElementById("run").addEventListener("click", function() {  

        var passOne = document.getElementById("pass-one");
        var passTwo = document.getElementById("pass-two");
    
        if (passOne != passTwo){
            passOne.setAttribute("class", "error");
            passTwo.setAttribute("class", "error");
        }
            
        });

})();
