<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1">

	<?= $head; ?>

	<link rel="stylesheet" href="<?= url("/shared/styles/styles.css"); ?>" />
	<link rel="stylesheet" href="<?= theme("/assets/css/style.css", CONF_VIEW_ADMIN); ?>" />

	<link rel="icon" type="image/png" href="<?= theme("/assets/images/favicon.ico", CONF_VIEW_ADMIN); ?>" />

	<script src="<?= url("/shared/scripts/jquery.min.js"); ?>"></script>

</head>

<body class="sb-nav-fixed">

<nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
	<a class="navbar-brand" href="<?= url(); ?>"><?= CONF_SITE_NAME; ?></a>
	<button class="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#">
		<i class="fas fa-bars"></i>
	</button>
	<!-- Navbar-->
	<ul class="navbar-nav ml-auto">
		<li class="nav-item dropdown">
			<a class="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				<i class="fas fa-user fa-fw"></i>
			</a>
			<div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
				<a class="dropdown-item" href="<?= url('admin/logoff'); ?>">Sair</a>
			</div>
		</li>
	</ul>
</nav>


<div id="layoutSidenav">
	<?php $v->insert('layouts/sidebar.php'); ?>

	<div id="layoutSidenav_content">
		<main>
			<?= flash(); ?>

			<?= $v->section("content"); ?>
		</main>
		<footer class="py-4 bg-light mt-auto">
			<div class="container-fluid">
				<div class="d-flex align-items-center justify-content-between small">
					<div class="text-muted">Copyright &copy; <?= CONF_SITE_NAME; ?>, 2020. Todos os direitos reservados</div>
				</div>
			</div>
		</footer>
	</div>
</div>
<script src="<?= url("/shared/scripts/bootstrap.bundle.js"); ?>"></script>
<script src="<?= url("/shared/scripts/jquery.form.js"); ?>"></script>
<script src="<?= url("/shared/scripts/jquery-ui.js"); ?>"></script>
<script src="<?= url("/shared/scripts/jquery.mask.js"); ?>"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/js/all.min.js" crossorigin="anonymous"></script>
<script src="<?= theme("/assets/js/scripts.js", CONF_VIEW_ADMIN); ?>"></script>
<?= $v->section("scripts"); ?>
</body>
</html>
