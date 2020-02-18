<?php $v->layout("_theme"); ?>

<article>
	<header class="">
		<h1>Fazer Login</h1>
		<p>Ainda não tem conta?
			<a title="Cadastre-se!" href="<?= url("/cadastrar"); ?>">Cadastre-se</a>
		</p>
	</header>

	<div class="ajax_response"></div>
	<form action="<?= url("admin/entrar"); ?>" method="post" enctype="multipart/form-data" class="d-flex flex-column justify-content-center align-items-center">

		<?= csrf_input(); ?>

		<div class="form-group col-6 text-left">
			<label for="email">Email:</label>
			<input type="email" name="email" id="email" class="form-control" placeholder="Informe seu e-mail:" required />
		</div>

		<div class="form-group col-6 text-left">
			<label for="password">Senha:</label>
			<input type="password" name="password" id="password" class="form-control" placeholder="Informe sua senha:" required />
		</div>

		<div class="form-group col-6 text-right">
			<button class="btn btn-outline-light">Entrar</button>
		</div>
	</form>
</article>
