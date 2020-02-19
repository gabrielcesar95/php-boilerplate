<?php

namespace Source\App\Admin;

use Source\Core\Connect;
use Source\Models\Auth;
use Source\Models\User;

/**
 * Class Dash
 * @package Source\App\Admin
 */
class Dash extends Admin
{
	/**
	 * Dash constructor.
	 */
	public function __construct()
	{
		parent::__construct();
	}

	/**
	 * @param array|null $data
	 * @throws \Exception
	 */
	public function home(?array $data): void
	{
		$new_users = $this->new_users();

		$head = $this->seo->render(
			CONF_SITE_NAME . " | Dashboard",
			CONF_SITE_DESC,
			url("/admin"),
			theme("/assets/images/image.jpg", CONF_VIEW_ADMIN),
			false
		);

		echo $this->view->render("dashboard/home", [
			"app" => "dash",
			"head" => $head,
			"new_users" => $new_users
		]);
	}

	public function new_users(): array
	{
		$run = Connect::getInstance();

		$query = "SELECT name, email, DATE_FORMAT(created_at, '%d/%m/%Y ás %H:%i:%s') AS created_at FROM users ORDER BY created_at DESC LIMIT 5;";

		$stmt = $run->prepare($query);
		$stmt->execute();

		if ($stmt->rowCount()) {
			return $stmt->fetchAll();
		}
		return [];
	}

	/**
	 *
	 */
	public function logoff(): void
	{
		$this->message->success("Você saiu com sucesso, {$this->user->firstName()}. Até a próxima!")->flash();

		Auth::logout();
		redirect("");
	}
}
