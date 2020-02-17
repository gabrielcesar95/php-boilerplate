<?php $v->layout("_theme"); ?>

<article>
	<header class="">
		<h1>Cadastre-se</h1>
		<p>Já tem uma conta?
			<a title="Fazer login!" href="<?= url("/admin/entrar"); ?>">Fazer login</a>
		</p>
	</header>

	<form action="<?= url("/cadastrar"); ?>" method="post" enctype="multipart/form-data" class="d-flex flex-column justify-content-center align-items-center">
		<div class="ajax_response"><?= flash(); ?></div>
		<?= csrf_input(); ?>

		<div class="form-row col-12">
			<div class="form-group col-12 text-left">
				<label for="name">Nome Completo:</label>
				<input type="name" name="name" id="name" class="form-control" placeholder="Informe seu nome:" required />
			</div>
		</div>

		<div class="form-row col-12">
			<div class="form-group col-6 text-left">
				<label for="email">Email:</label>
				<input type="email" name="email" id="email" class="form-control" placeholder="Informe seu e-mail:" required />
			</div>

			<div class="form-group col-6 text-left">
				<label for="password">Senha:</label>
				<input type="password" name="password" id="password" class="form-control" placeholder="Informe sua senha:" required />
			</div>
		</div>

		<div class="form-row col-12">
			<div class="form-group col-12 text-right">
				<button class="btn btn-outline-light" type="submit">Criar Conta</button>
			</div>
		</div>
	</form>
</article>
