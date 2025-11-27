<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
</head>
<body>
		<main>
		</section>

		<section id="descarga">
			<h2>Descarga</h2>
			<p>Próximamente disponible en App Store y Google Play.</p>
		</section>

		<section id="info">
			<h2>Información</h2>
			<p>Mental Fit te ofrece planes personalizados de ejercicios físicos, meditación y hábitos saludables adaptados a tu ritmo.</p>
		</section>

		<section id="servicios">
			<h2>Servicios</h2>
			<ul>
				<li>Rutinas de ejercicio en casa</li>
				<li>Sesiones de meditación guiada</li>
				<li>Consejos de nutrición y descanso</li>
				<li>Seguimiento de progreso</li>
			</ul>
		</section>
	</main>

	

	<script>
		const toggle = document.getElementById('menu-toggle');
		const nav = document.querySelector('.nav-links');
		toggle.addEventListener('click', () => {
			nav.classList.toggle('active');
		});
	</script>
</body>
</html>