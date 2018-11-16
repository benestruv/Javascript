//Au clic sur le bouton
//vérifie que les deux mots de passe dans les inputs sont identiques
//Si ça n'est pas le cas > colore les bordures des inputs en rouge.

(function() {
    document.getElementById("run").addEventListener("click", function() {  

    var passOne = document.getElementById("pass-one");
    var passTwo = document.getElementById("pass-two");

    if (passOne != passTwo){
        passOne.style.borderColor = "red";
        passTwo.style.borderColor = "red";
    }
        
    });
})();
