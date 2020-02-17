<?php $v->layout("_theme"); ?>

<article>
	<div class="container">
		<header>
			<p><?= $error->code; ?></p>
			<h1><?= $error->title; ?></h1>
			<p><?= $error->message; ?></p>

			<?php if ($error->link): ?>
				<a title="<?= $error->linkTitle; ?>" href="<?= $error->link; ?>"><?= $error->linkTitle; ?></a>
			<?php endif; ?>
		</header>
	</div>
</article>
