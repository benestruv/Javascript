/*Au clic sur le bouton
affiche dans les balises prévues n-1, n-2,...n-10
document.getElementById("target").innerHTML = 
les dix éléments d'un tableau de 10 nombres (entre 1 et 100) random ?

var random = Math.floor(Math.random() * 101);

//ainsi que les statistiques suivantes : le plus petit nombre, le plus grand, la somme des nombres et la moyenne de ceux-ci.

console.log(Math.min(...array1));
console.log(Math.max(...array1));
somme
moyenne
*/

(function() {

    document.getElementById('run').addEventListener("click", function(){
        var randomNombres = [
        document.getElementById("n-1").innerHTML = Math.floor(Math.random() * 101),
        document.getElementById("n-2").innerHTML = Math.floor(Math.random() * 101),
        document.getElementById("n-3").innerHTML = Math.floor(Math.random() * 101),
        document.getElementById("n-4").innerHTML = Math.floor(Math.random() * 101),
        document.getElementById("n-5").innerHTML = Math.floor(Math.random() * 101),
        document.getElementById("n-6").innerHTML = Math.floor(Math.random() * 101),
        document.getElementById("n-7").innerHTML = Math.floor(Math.random() * 101),
        document.getElementById("n-8").innerHTML = Math.floor(Math.random() * 101),
        document.getElementById("n-9").innerHTML = Math.floor(Math.random() * 101),
        document.getElementById("n-10").innerHTML = Math.floor(Math.random() * 101),
        ];

    // Statistiques
    // + petit nombre
    document.getElementById("min").innerHTML = (Math.min(...randomNombres));
    // + grand nombre
    document.getElementById("max").innerHTML = (Math.max(...randomNombres));
    // Somme des nombres
    var sum = randomNombres.reduce(add, 0);
    function add(a, b) {
        return a + b;
    }
    document.getElementById("sum").innerHTML = (sum)
    // Moyenne des nombres
    var moyenne = sum/randomNombres.length;
    document.getElementById("average").innerHTML = (moyenne)
    });

})();
