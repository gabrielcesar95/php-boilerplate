<?php $v->layout("_admin"); ?>

<div class="container">
	<header>
		<h1 class="mt-4"><?= isset($user) && $user ? "Edição de usuário: $user->name" : 'Novo Usuário'; ?></h1>
	</header>

	<section>
		<form action="<?= url("/admin/usuarios/" . (isset($user) && $user ? $user->id : 'novo')); ?>" enctype="multipart/form-data" method="post">
			<?php if (isset($user) && $user) : ?>
				<input type="hidden" name="user_id" value="<?= $user->id; ?>">
				<input type="hidden" name="_method" value="PUT">
			<?php endif; ?>
			<div class="form-row">
				<div class="form-group col-md-6">
					<label for="name">Nome Completo:</label>
					<input type="text" name="name" id="name" value="<?= isset($user->name) ? $user->name : ''; ?>" class="form-control" required />
				</div>
				<div class="form-group col-md-6">
					<label for="email">Email:</label>
					<input type="email" name="email" id="email" value="<?= isset($user->email) ? $user->email : ''; ?>" class="form-control" required />
				</div>
			</div>
			<div class="form-row">
				<div class="form-group col-md-4">
					<label for="password">Senha:</label>
					<input type="password" name="password" id="password" class="form-control" <?= !isset($user) || !$user ?: 'placeholder="Preencha para alterar"'; ?> />
				</div>
				<div class="form-group col-md-4">
					<label for="birth_date">Data de Nascimento:</label>
					<input type="text" name="birth_date" id="birth_date" value="<?= isset($user->birth_date) ? date_fmt($user->birth_date, 'd/m/Y') : ''; ?>" class="form-control mask-date" />
				</div>
				<div class="form-group col-md-4">
					<label for="photo">Foto:</label>
					<input type="file" name="photo" id="photo" class="form-control" accept="image/*" />
					<?php if ($user->photo()) : ?>
						<?php
						$userPhoto = ($user->photo() ? image($user->photo, 300, 300) : theme("/assets/images/avatar.jpg", CONF_VIEW_ADMIN));
						?>
						<div>
							<span>Foto atual:</span>
							<img src="<?= $userPhoto; ?>" class="card-img-top img-fluid" alt="<?= $user->name; ?>">
						</div>
					<?php endif; ?>
				</div>
			</div>

			<div class="btn-toolbar">
				<button type="submit" class="btn btn-primary ml-auto">Salvar</button>
			</div>
		</form>

	</section>
</div>

<script>

</script>
