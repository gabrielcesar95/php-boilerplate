<?php

namespace Source\App\Admin;

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
		//real time access
		if (!empty($data["refresh"])) {
			$list = null;
			$items = (new Online())->findByActive();
			if ($items) {
				foreach ($items as $item) {
					$list[] = [
						"dates" => date_fmt($item->created_at, "H\hi") . " - " . date_fmt($item->updated_at, "H\hi"),
						"user" => ($item->user ? $item->user()->fullName() : "Guest User"),
						"pages" => $item->pages,
						"url" => $item->url
					];
				}
			}

			echo json_encode([
				"count" => (new Online())->findByActive(true),
				"list" => $list
			]);
			return;
		}

		$head = $this->seo->render(
			CONF_SITE_NAME . " | Dashboard",
			CONF_SITE_DESC,
			url("/admin"),
			theme("/assets/images/image.jpg", CONF_VIEW_ADMIN),
			false
		);

		echo $this->view->render("dashboard/home", [
			"app" => "dash",
			"head" => $head
		]);
	}

	/**
	 *
	 */
	public function logoff(): void
	{
		$this->message->success("Você saiu com sucesso ,{$this->user->firstName()}. Até a próxima!")->flash();

		Auth::logout();
		redirect("");
	}
}
