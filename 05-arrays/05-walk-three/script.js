/* becode/javascript
 *
 * /05-arrays/05-walk-three/script.js - 5.5: parcours de tableau (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// Au clic sur le bouton
// affiche (dans la console)
// l'un après l'autre
// le nom de chaque personne du tableau people.
// Utilise la méthode map

(function() {
    
        var people = [
            {
                firstname: "Garald",
                lastname: "Freschi",
                email: "gfreschi0@discuz.net",
            },
            {
                firstname: "Bendicty",
                lastname: "Foster-Smith",
                email: "bfostersmith1@mysql.com",
            },
            {
                firstname: "Michelle",
                lastname: "Draude",
                email: "mdraude2@csmonitor.com",
            },
            {
                firstname: "Cathee",
                lastname: "Meineck",
                email: "cmeineck3@t-online.de",
            },
            {
                firstname: "Marianna",
                lastname: "Coal",
                email: "mcoal4@creativecommons.org",
            },
        ];

        // CODE
        document.getElementById('run').addEventListener("click", function(){
        var affFirstNamePeople = people.map(function(personne){ //le nom donné entre parenthèse correspond à celui de l'objet
            console.log(personne.firstname); //accès à la propriété firstname .firstname
        })

     });

})();
