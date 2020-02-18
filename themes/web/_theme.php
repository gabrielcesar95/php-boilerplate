<?php

use Source\Models\Auth;

?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<meta name="mit" content="2020-02-17T13:42:48-03:00+48882">
	<meta name="viewport" content="width=device-width,initial-scale=1">

	<?= $head; ?>

	<link rel="icon" type="image/png" href="<?= theme("/assets/images/favicon.ico"); ?>" />
	<link rel="stylesheet" href="<?= theme("/assets/style.css"); ?>" />

	<style>
		.bd-placeholder-img{
			font-size: 1.125rem;
			text-anchor: middle;
			-webkit-user-select: none;
			-moz-user-select: none;
			-ms-user-select: none;
			user-select: none;
		}

		@media (min-width: 768px){
			.bd-placeholder-img-lg{
				font-size: 3.5rem;
			}
		}
	</style>
</head>
<body class="text-center">

<div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
	<header class="masthead mb-auto">
		<div class="inner">
			<h3 class="masthead-brand"><?= CONF_SITE_NAME; ?></h3>
			<nav class="nav nav-masthead justify-content-center">
				<a class="nav-link <?= is_active(url('/')) ? 'active' : ''; ?>" href="<?= url(''); ?>">Home</a>
				<?php if (!Auth::user()): ?>
					<a class="nav-link <?= is_active(url('admin/entrar')) ? 'active' : ''; ?>" title="Entrar" href="<?= url("/admin/entrar"); ?>">Entrar</a>
				<?php else: ?>
					<a class="nav-link" title="Administrar" href="<?= url("/admin"); ?>">Administrar</a>
					<a class="nav-link" title="Sair" href="<?= url("/admin/logoff"); ?>">Sair</a>
				<?php endif; ?>
			</nav>
		</div>
	</header>

	<main role="main" class="inner cover">
		<?= flash(); ?>

		<?= $v->section("content"); ?>
	</main>

	<footer class="mastfoot mt-auto">
		<div class="inner">
			<p>Cover template for
				<a href="https://getbootstrap.com/">Bootstrap</a>
				, by
				<a href="https://twitter.com/mdo">@mdo</a>
				.
			</p>
		</div>
	</footer>

	<script src="<?= theme("/assets/scripts.js"); ?>"></script>
	<?= $v->section("scripts"); ?>

</div>
</body>
</html>
