<?php $v->layout("_admin"); ?>

<div class="container">
	<header>
		<h1 class="mt-4"><?= isset($user) && $user ? "Edição de usuário: $user->name" : 'Novo Usuário'; ?></h1>
	</header>

	<section>
		<?php if (!isset($user) || !$user): ?>
			<form action="<?= url("/admin/usuarios/novo"); ?>" enctype="multipart/form-data" method="post">
				<div class="form-row">
					<div class="form-group col-md-6">
						<label for="name">Nome Completo:</label>
						<input type="text" name="name" id="name" class="form-control" required />
					</div>
					<div class="form-group col-md-6">
						<label for="email">Email:</label>
						<input type="email" name="email" id="email" class="form-control" required />
					</div>
				</div>
				<div class="form-row">
					<div class="form-group col-md-4">
						<label for="password">Senha:</label>
						<input type="password" name="password" id="password" class="form-control" placeholder="Preencha para alterar" />
					</div>
					<div class="form-group col-md-4">
						<label for="birth_date">Data de Nascimento:</label>
						<input type="text" name="birth_date" id="birth_date" class="form-control mask-date" />
					</div>
					<div class="form-group col-md-4">
						<label for="photo">Foto:</label>
						<input type="file" name="photo" id="photo" class="form-control" accept="image/*" />
					</div>
				</div>

				<div class="btn-toolbar">
					<button type="submit" class="btn btn-primary ml-auto">Salvar</button>
				</div>
			</form>
		<?php else: ?>
			<header class="dash_content_app_header">
				<h2 class="icon-user"><?= $user->name; ?></h2>
			</header>

			<div class="dash_content_app_box">
				<form class="app_form" action="<?= url("/admin/users/user/{$user->id}"); ?>" method="post">
					<!--ACTION SPOOFING-->
					<input type="hidden" name="action" value="update" />

					<div class="label_g2">
						<label class="label">
							<span class="legend">*Nome:</span>
							<input type="text" name="first_name" value="<?= $user->first_name; ?>"
									placeholder="Primeiro nome" required />
						</label>

						<label class="label">
							<span class="legend">*Sobrenome:</span>
							<input type="text" name="last_name" value="<?= $user->last_name; ?>" placeholder="Último nome"
									required />
						</label>
					</div>

					<label class="label">
						<span class="legend">Genero:</span>
						<select name="genre">
							<?php
							$genre = $user->genre;
							$select = function ($value) use ($genre) {
								return ($genre == $value ? "selected" : "");
							};
							?>
							<option <?= $select("male"); ?> value="male">Masculino</option>
							<option <?= $select("female"); ?> value="female">Feminino</option>
							<option <?= $select("other"); ?> value="other">Outros</option>
						</select>
					</label>

					<label class="label">
						<span class="legend">Foto: (600x600px)</span>
						<input type="file" name="photo" />
					</label>

					<div class="label_g2">
						<label class="label">
							<span class="legend">Nascimento:</span>
							<input type="text" class="mask-date" value="<?= date_fmt($user->datebirth, "d/m/Y"); ?>"
									name="datebirth" placeholder="dd/mm/yyyy" />
						</label>

						<label class="label">
							<span class="legend">Documento:</span>
							<input class="mask-doc" type="text" value="<?= $user->document; ?>" name="document"
									placeholder="CPF do usuário" />
						</label>
					</div>

					<div class="label_g2">
						<label class="label">
							<span class="legend">*E-mail:</span>
							<input type="email" name="email" value="<?= $user->email; ?>" placeholder="Melhor e-mail"
									required />
						</label>

						<label class="label">
							<span class="legend">Alterar Senha:</span>
							<input type="password" name="password" placeholder="Senha de acesso" />
						</label>
					</div>

					<div class="label_g2">
						<label class="label">
							<span class="legend">*Status:</span>
							<select name="status" required>
								<?php
								$status = $user->status;
								$select = function ($value) use ($status) {
									return ($status == $value ? "selected" : "");
								};
								?>
								<option <?= $select("registered"); ?> value="registered">Registrado</option>
								<option <?= $select("confirmed"); ?> value="confirmed">Confirmado</option>
							</select>
						</label>
					</div>

					<div class="app_form_footer">
						<button class="btn btn-blue icon-check-square-o">Atualizar</button>
						<a href="#" class="remove_link icon-warning"
								data-post="<?= url("/admin/users/user/{$user->id}"); ?>"
								data-action="delete"
								data-confirm="ATENÇÃO: Tem certeza que deseja excluir o usuário e todos os dados relacionados a ele? Essa ação não pode ser feita!"
								data-user_id="<?= $user->id; ?>">Excluir Usuário
						</a>
					</div>
				</form>
			</div>
		<?php endif; ?>
	</section>
</div>

<script>

</script>
