/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

do { 
    var age = prompt('Quel est votre âge ?');
    var sexe = prompt('Quel est votre genre ?');
    var ville = prompt('D\'où venez-vous ?');

    var result = confirm ('Vous avez ' + parseInt(age) + ' ans, êtes un(e) ' + sexe + ' et vous venez de ' + ville + '.');
  }

while (!result);

})();