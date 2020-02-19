<?php $v->layout("_admin"); ?>

<div class="container">
	<h1 class="mt-4">Usuários</h1>

	<form action="<?= url('/admin/usuarios'); ?>" method="post">
		<div class="form-row">

		<div class="form-group col-8 col-md-10">
			<input type="s" name="s" id="s" value="<?= $search; ?>" class="form-control" placeholder="Buscar Usuários" />
		</div>
		<div class="form-group col-4 col-md-2">
			<button type="submit" class="btn btn-primary w-100">Buscar</button>
		</div>
		</div>
	</form>

	<?php if ($users): ?>
		<div class="row row-cols-1 row-cols-md-3">
			<?php foreach ($users as $user):
				$userPhoto = ($user->photo() ? image($user->photo, 300, 300) : theme("/assets/images/avatar.jpg", CONF_VIEW_ADMIN));
				?>
				<div class="col mb-4">
					<div class="card h-100">
						<img src="<?= $userPhoto; ?>" class="card-img-top img-fluid" alt="<?= $user->name; ?>">
						<div class="card-body">
							<h5 class="card-title"><?= $user->name; ?></h5>
							<ul class="list-group list-group-flush">
								<li class="list-group-item px-0">
									<span class="font-weight-bold">Nome:</span>
									<span><?= $user->name; ?></span>
								</li>
								<li class="list-group-item px-0">
									<span class="font-weight-bold">E-mail:</span>
									<span><?= $user->email; ?></span>
								</li>
							</ul>
						</div>

						<div class="card-footer">
							<div class="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
								<a href="<?= url("admin/usuarios/deletar/{$user->id}"); ?>" title="Excluir" class="btn btn-danger">Excluir</a>
								<a href="<?= url("admin/usuarios/editar/{$user->id}"); ?>" title="Editar" class="btn btn-primary">Editar</a>
							</div>
						</div>
					</div>
				</div>
			<?php endforeach; ?>
		</div>

		<div class="text-center">
			<?= $paginator; ?>
		</div>
	<?php else: ?>
		<div class="alert alert-warning" role="alert">
			Nenhum usuário encontrado
		</div>
	<?php endif; ?>
</div>

<script>

	$('.btn-danger').on('click', function (e) {
		if (!confirm('Tem certeza que quer excluir o usuário?')) {
			e.preventDefault();
		}
	});
</script>
