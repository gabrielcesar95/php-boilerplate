<?php $v->layout("_admin"); ?>

<div class="container-fluid">
	<h1 class="mt-4">Dashboard</h1>

	<?php if ($new_users): ?>
		<div class="card mb-4">
			<div class="card-header">
				<i class="fas fa-users mr-1"></i>Últimos usuários cadastrados
			</div>
			<div class="card-body">
				<div class="table-responsive">
					<table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
						<thead>
						<tr>
							<th>Nome</th>
							<th>E-mail</th>
							<th>Data de Cadastro</th>
						</tr>
						</thead>
						<tbody>
						<?php foreach ($new_users as $user): ?>
							<tr>
								<td><?= $user->name; ?></td>
								<td><?= $user->email; ?></td>
								<td><?= $user->created_at; ?></td>
							</tr>
						<?php endforeach; ?>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	<?php endif; ?>
</div>
