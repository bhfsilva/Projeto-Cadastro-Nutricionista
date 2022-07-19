window.onload = function(){
	
	var campos  = [
	  document.querySelector('#nome'),
	  document.querySelector('#data'),
	  document.querySelector('#peso'),
	  document.querySelector('#altura')
	];
  
	var tbody = document.querySelector('table tbody');

	document.querySelector('form').addEventListener('submit', function(evento){
		evento.preventDefault();
		var tr = document.createElement('tr');
		campos.forEach(function(campo){
			var td = document.createElement('td');
			td.textContent = campo.value;
			tr.appendChild(td);
		});

		var td = document.createElement('td');
		td.textContent = (
			campos[2].value / 
			(campos[3].value * campos[3].value)
		).toFixed(2);
		tr.appendChild(td);

		tbody.appendChild(tr);

		document.querySelector('form').reset();
 		campos[0].focus();
	});
}