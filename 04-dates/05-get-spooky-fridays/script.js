(function() {

	document.getElementById('run').addEventListener("click", function(){
		
		var annee = document.getElementById('year').value; // Récupère la valeur du champ html

		for (var mois = 0 ; mois < 12 ; mois++){
			var vendredi13 = new Date(annee, mois, 13);// le 13

		if (vendredi13.getDay() == 5){ // Si la date est un cinquième jour de la semaine
			var options = {mois : "long"}; // options permet de personnaliser le résultat, long définit qu'il s'agit d'une chaine de caractère, sinon ce serait numeric
			var d = (vendredi13.toLocaleDateString("fr-FR", options)); //toLocaleDateString permet de renvoyer une date exprimée de facon locale, la langue doit être spécifiée
			freakyFridays = 'Les dates des vendredis 13 de l\'année ' + annee + " sont les... " + d + ",";
			alert(freakyFridays);
		}
		
		}
	
	});
	
})();