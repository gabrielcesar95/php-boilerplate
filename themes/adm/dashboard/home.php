<?php $v->layout("_admin"); ?>

<div class="container-fluid">
	<h1 class="mt-4">Dashboard</h1>
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
					<tr>
						<td>Gabriel Cesar</td>
						<td>95gabrielcesar@gmail.com</td>
						<td>18/02/2020</td>
					</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
