<html xmlns="http://www.w3.org/1999/xhtml">
<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
		
		<title>IMC - UFG</title>
</head>
<body>
		<div class="container">

			<br>

			<div class="row">
				<div class="col-md-12 text-center">
					<h1>UFG</h1>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12 text-center">
					<h3>Programacao Web</h3>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12 text-center">
					<h4>Calculo do IMC</h4>
					<hr>
				</div>
			</div>

			<div class="row">
				<div class="col-md-3 col-md-offset-4" style="margin: auto;">
					<label>Idade</label>
					<input type="number" class="form-control" id="idade" placeholder="35">

					<br>

					<label>Altura (m)</label>
					<input type="number" class="form-control" id="altura" placeholder="1,60">

					<br>

					<label>Peso (Kg)</label>
					<input type="text" class="form-control" id="peso" placeholder="62,5">
					
					<br>

					<button type="button" class="btn btn-outline-primary" onclick="calcularImc()">Calcular IMC</button>

					<button class="btn btn-outline-success" onclick="print()">Imprimir </button>
					
					<br>
					<br>
					
					<p id="imcTotal"/>
					
					

				</div>  
			</div>
			
			<div class="card text-center">
				<address>
					<strong>Murilo Gontijo</strong>
					<br>
					<a href="mailto:#">murilo.gontijo@outlook.com</a>
				</address>
			</div>
		</div>

		<br>		



		<script src="resources/js/imc.js">  </script>
	</body>
</html>