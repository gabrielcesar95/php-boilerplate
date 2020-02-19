<?php $v->layout("_admin"); ?>

<div class="container">
	<header>
		<h1 class="mt-4"><?= isset($user) && $user ? "Edição de usuário: $user->name" : 'Novo Usuário'; ?></h1>
	</header>

	<section>
		<form action="<?= url("/admin/usuarios/" . (isset($user) && $user ? "editar/{$user->id}" : 'novo')); ?>" enctype="multipart/form-data" method="post">
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
					<?php if (isset($user) && $user->photo()) : ?>
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

			<div class="form-row">
				<div class="col-12">
					<h3>Endereço</h3>
				</div>

				<div class="form-group col-md-2">
					<label for="zip_code">CEP:</label>
					<input type="text" name="address[zip_code]" id="zip_code" value="<?= isset($user) && isset($user->address()->zip_code) ? $user->address()->zip_code : ''; ?>" class="form-control mask-zipcode" />
				</div>

				<div class="form-group col-md-6">
					<label for="address">Endereço:</label>
					<input type="text" name="address[address]" id="address" value="<?= isset($user) && isset($user->address()->address) ? $user->address()->address : ''; ?>" class="form-control" />
				</div>

				<div class="form-group col-md-4">
					<label for="area">Bairro:</label>
					<input type="text" name="address[area]" id="area" value="<?= isset($user) && isset($user->address()->area) ? $user->address()->area : ''; ?>" class="form-control" />
				</div>

				<div class="form-group col-md-3">
					<label for="state">Estado:</label>
					<select name="address[state]" id="state" class="form-control">
						<option value="AC" <?= isset($user) && isset($user->address()->state) && $user->address()->state == 'AC' ? 'selected' : ''; ?>>Acre</option>
						<option value="AL" <?= isset($user) && isset($user->address()->state) && $user->address()->state == 'AL' ? 'selected' : ''; ?>>Alagoas</option>
						<option value="AP" <?= isset($user) && isset($user->address()->state) && $user->address()->state == 'AP' ? 'selected' : ''; ?>>Amapá</option>
						<option value="AM" <?= isset($user) && isset($user->address()->state) && $user->address()->state == 'AM' ? 'selected' : ''; ?>>Amazonas</option>
						<option value="BA" <?= isset($user) && isset($user->address()->state) && $user->address()->state == 'BA' ? 'selected' : ''; ?>>Bahia</option>
						<option value="CE" <?= isset($user) && isset($user->address()->state) && $user->address()->state == 'CE' ? 'selected' : ''; ?>>Ceará</option>
						<option value="DF" <?= isset($user) && isset($user->address()->state) && $user->address()->state == 'DF' ? 'selected' : ''; ?>>Distrito Federal</option>
						<option value="ES" <?= isset($user) && isset($user->address()->state) && $user->address()->state == 'ES' ? 'selected' : ''; ?>>Espírito Santo</option>
						<option value="GO" <?= isset($user) && isset($user->address()->state) && $user->address()->state == 'GO' ? 'selected' : ''; ?>>Goiás</option>
						<option value="MA" <?= isset($user) && isset($user->address()->state) && $user->address()->state == 'MA' ? 'selected' : ''; ?>>Maranhão</option>
						<option value="MT" <?= isset($user) && isset($user->address()->state) && $user->address()->state == 'MT' ? 'selected' : ''; ?>>Mato Grosso</option>
						<option value="MS" <?= isset($user) && isset($user->address()->state) && $user->address()->state == 'MS' ? 'selected' : ''; ?>>Mato Grosso do Sul</option>
						<option value="MG" <?= isset($user) && isset($user->address()->state) && $user->address()->state == 'MG' ? 'selected' : ''; ?>>Minas Gerais</option>
						<option value="PA" <?= isset($user) && isset($user->address()->state) && $user->address()->state == 'PA' ? 'selected' : ''; ?>>Pará</option>
						<option value="PB" <?= isset($user) && isset($user->address()->state) && $user->address()->state == 'PB' ? 'selected' : ''; ?>>Paraíba</option>
						<option value="PR" <?= isset($user) && isset($user->address()->state) && $user->address()->state == 'PR' ? 'selected' : ''; ?>>Paraná</option>
						<option value="PE" <?= isset($user) && isset($user->address()->state) && $user->address()->state == 'PE' ? 'selected' : ''; ?>>Pernambuco</option>
						<option value="PI" <?= isset($user) && isset($user->address()->state) && $user->address()->state == 'PI' ? 'selected' : ''; ?>>Piauí</option>
						<option value="RJ" <?= isset($user) && isset($user->address()->state) && $user->address()->state == 'RJ' ? 'selected' : ''; ?>>Rio de Janeiro</option>
						<option value="RN" <?= isset($user) && isset($user->address()->state) && $user->address()->state == 'RN' ? 'selected' : ''; ?>>Rio Grande do Norte</option>
						<option value="RS" <?= isset($user) && isset($user->address()->state) && $user->address()->state == 'RS' ? 'selected' : ''; ?>>Rio Grande do Sul</option>
						<option value="RO" <?= isset($user) && isset($user->address()->state) && $user->address()->state == 'RO' ? 'selected' : ''; ?>>Rondônia</option>
						<option value="RR" <?= isset($user) && isset($user->address()->state) && $user->address()->state == 'RR' ? 'selected' : ''; ?>>Roraima</option>
						<option value="SC" <?= isset($user) && isset($user->address()->state) && $user->address()->state == 'SC' ? 'selected' : ''; ?>>Santa Catarina</option>
						<option value="SP" <?= isset($user) && isset($user->address()->state) && $user->address()->state == 'SP' ? 'selected' : ''; ?>>São Paulo</option>
						<option value="SE" <?= isset($user) && isset($user->address()->state) && $user->address()->state == 'SE' ? 'selected' : ''; ?>>Sergipe</option>
						<option value="TO" <?= isset($user) && isset($user->address()->state) && $user->address()->state == 'TO' ? 'selected' : ''; ?>>Tocantins</option>
					</select>
				</div>

				<div class="form-group col-md-3">
					<label for="city">Cidade:</label>
					<input type="text" name="address[city]" id="city" value="<?= isset($user) && isset($user->address()->city) ? $user->address()->city : ''; ?>" class="form-control" />
				</div>

				<div class="form-group col-md-2">
					<label for="number">Número:</label>
					<input type="text" name="address[number]" id="number" value="<?= isset($user) && isset($user->address()->number) ? $user->address()->number : ''; ?>" class="form-control" />
				</div>

				<div class="form-group col-md-4">
					<label for="details">Complemento:</label>
					<input type="text" name="address[details]" id="details" value="<?= isset($user) && isset($user->address()->details) ? $user->address()->details : ''; ?>" class="form-control" />
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
